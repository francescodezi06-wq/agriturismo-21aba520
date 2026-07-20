import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Public booking creation endpoint (no auth required).
// Uses service role to bypass RLS — table is locked down and only reachable through this fn.

const bookingSchema = z.object({
  firstName: z.string().trim().min(1, "Nome obbligatorio").max(100),
  lastName: z.string().trim().min(1, "Cognome obbligatorio").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  phone: z.string().trim().min(4, "Telefono obbligatorio").max(40),
  roomId: z.string().trim().min(1).max(80),
  roomName: z.string().trim().min(1).max(200),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data check-in non valida"),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data check-out non valida"),
  guests: z.number().int().min(1).max(20),
  notes: z.string().trim().max(2000).optional().nullable(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export type BookingResult =
  | { ok: true; bookingId: string }
  | { ok: false; code: "validation" | "unavailable" | "server_error"; message: string };

function formatDateIT(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

async function trySendEmails(payload: {
  bookingId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  notes?: string | null;
}) {
  try {
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

    const adminEmail = process.env.ADMIN_EMAIL || process.env.NOTIFICATION_EMAIL;

    await sendTemplateEmail("booking-confirmation", payload.email, {
      templateData: payload,
      idempotencyKey: `booking-confirm-${payload.bookingId}`,
    }).catch((err) => console.error("[booking] client email failed", err));

    if (adminEmail) {
      await sendTemplateEmail("booking-admin-notification", adminEmail, {
        templateData: payload,
        idempotencyKey: `booking-admin-${payload.bookingId}`,
      }).catch((err) => console.error("[booking] admin email failed", err));
    } else {
      console.warn("[booking] ADMIN_EMAIL not configured — admin notification skipped");
    }
  } catch (err) {
    // Email templates not scaffolded yet — booking still saved.
    console.warn("[booking] email helper unavailable", err);
  }
}

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => bookingSchema.parse(raw))
  .handler(async ({ data }): Promise<BookingResult> => {
    try {
      // Server-side date sanity check
      const checkIn = new Date(data.checkIn + "T00:00:00Z");
      const checkOut = new Date(data.checkOut + "T00:00:00Z");
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);

      if (Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())) {
        return { ok: false, code: "validation", message: "Date non valide." };
      }
      if (checkOut <= checkIn) {
        return { ok: false, code: "validation", message: "Il check-out deve essere successivo al check-in." };
      }
      if (checkIn < today) {
        return { ok: false, code: "validation", message: "La data di check-in non può essere nel passato." };
      }

      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      // Overlap check: existing (pending/confirmed) bookings on same room where ranges intersect.
      // Overlap iff existing.check_in < new.check_out AND existing.check_out > new.check_in
      const { data: overlaps, error: overlapErr } = await supabaseAdmin
        .from("bookings")
        .select("id")
        .eq("room_id", data.roomId)
        .in("status", ["pending", "confirmed"])
        .lt("check_in", data.checkOut)
        .gt("check_out", data.checkIn)
        .limit(1);

      if (overlapErr) {
        console.error("[booking] overlap query failed", overlapErr);
        return { ok: false, code: "server_error", message: "Errore del server, riprova più tardi." };
      }

      if (overlaps && overlaps.length > 0) {
        return {
          ok: false,
          code: "unavailable",
          message: "La camera selezionata non è disponibile nelle date indicate. Ti invitiamo a scegliere un altro periodo.",
        };
      }

      const { data: inserted, error: insertErr } = await supabaseAdmin
        .from("bookings")
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          room_id: data.roomId,
          room_name: data.roomName,
          check_in: data.checkIn,
          check_out: data.checkOut,
          guests: data.guests,
          notes: data.notes ?? null,
          status: "pending",
        })
        .select("id")
        .single();

      if (insertErr || !inserted) {
        console.error("[booking] insert failed", insertErr);
        return { ok: false, code: "server_error", message: "Impossibile salvare la prenotazione." };
      }

      // Fire-and-await emails (non-fatal on failure)
      await trySendEmails({
        bookingId: inserted.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        roomName: data.roomName,
        checkIn: formatDateIT(data.checkIn),
        checkOut: formatDateIT(data.checkOut),
        guests: data.guests,
        notes: data.notes,
      });

      return { ok: true, bookingId: inserted.id };
    } catch (err) {
      console.error("[booking] unexpected error", err);
      return { ok: false, code: "server_error", message: "Errore imprevisto, riprova più tardi." };
    }
  });
