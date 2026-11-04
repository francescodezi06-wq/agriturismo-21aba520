import nodemailer from "nodemailer";

// Invio via SMTP Gmail (nessuna API di terze parti).
// Variabili d'ambiente richieste (lato server):
//   GMAIL_USER          -> indirizzo Gmail mittente (es. Francesco.dezi06@gmail.com)
//   GMAIL_APP_PASSWORD  -> "Password per le app" Google (richiede verifica in 2 passaggi)
// Opzionale:
//   ADMIN_EMAIL         -> destinatario notifiche (default: Francesco.dezi06@gmail.com)

export const DEFAULT_ADMIN_EMAIL = "Francesco.dezi06@gmail.com";

type BookingData = {
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
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function summaryRows(d: BookingData) {
  const rows: [string, string][] = [
    ["Camera", d.roomName],
    ["Check-in", d.checkIn],
    ["Check-out", d.checkOut],
    ["Ospiti", String(d.guests)],
  ];
  return rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#777">${k}</td><td style="padding:6px 12px"><strong>${esc(v)}</strong></td></tr>`,
    )
    .join("");
}

function clientTemplate(d: BookingData) {
  const subject = "Abbiamo ricevuto la tua richiesta di prenotazione";
  const html = `<div style="font-family:Georgia,serif;max-width:560px;margin:auto;color:#3b2f25">
  <h2>Grazie ${esc(d.firstName)}!</h2>
  <p>Abbiamo ricevuto la tua richiesta di prenotazione presso l'Agriturismo La Corte di Muggiano. Ti risponderemo entro 24 ore per confermare la disponibilità.</p>
  <table style="border-collapse:collapse;background:#faf6ef;border:1px solid #e5dccb">${summaryRows(d)}</table>
  <p style="font-size:12px;color:#888">La richiesta non è ancora una prenotazione confermata. Riferimento: ${esc(d.bookingId.slice(0, 8))}</p>
</div>`;
  const text = `Grazie ${d.firstName}! Abbiamo ricevuto la tua richiesta di prenotazione.\n\nCamera: ${d.roomName}\nCheck-in: ${d.checkIn}\nCheck-out: ${d.checkOut}\nOspiti: ${d.guests}\n\nTi risponderemo entro 24 ore per confermare la disponibilità.`;
  return { subject, html, text };
}

function adminTemplate(d: BookingData) {
  const subject = `Nuova richiesta di prenotazione · ${d.roomName} · ${d.firstName} ${d.lastName}`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px;color:#222">
  <h2>Nuova richiesta di prenotazione</h2>
  <table style="border-collapse:collapse;background:#f6f6f6">${summaryRows(d)}
    <tr><td style="padding:6px 12px;color:#777">Nome</td><td style="padding:6px 12px"><strong>${esc(d.firstName)} ${esc(d.lastName)}</strong></td></tr>
    <tr><td style="padding:6px 12px;color:#777">Email</td><td style="padding:6px 12px"><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></td></tr>
    <tr><td style="padding:6px 12px;color:#777">Telefono</td><td style="padding:6px 12px">${esc(d.phone)}</td></tr>
    <tr><td style="padding:6px 12px;color:#777">Note</td><td style="padding:6px 12px">${d.notes ? esc(d.notes) : "—"}</td></tr>
  </table>
  <p style="font-size:12px;color:#888">ID: ${esc(d.bookingId)}</p>
</div>`;
  const text = `Nuova richiesta di prenotazione\n\nCamera: ${d.roomName}\nCheck-in: ${d.checkIn}\nCheck-out: ${d.checkOut}\nOspiti: ${d.guests}\nNome: ${d.firstName} ${d.lastName}\nEmail: ${d.email}\nTelefono: ${d.phone}\nNote: ${d.notes || "—"}\nID: ${d.bookingId}`;
  return { subject, html, text };
}

export async function sendBookingEmails(d: BookingData) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.warn("[email] GMAIL_USER / GMAIL_APP_PASSWORD non configurate — email non inviate");
    return;
  }
  const admin = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  const from = `"Agriturismo La Corte di Muggiano" <${user}>`;

  const c = clientTemplate(d);
  const a = adminTemplate(d);

  // Prima il proprietario (più importante), poi il cliente: errori isolati.
  const results = await Promise.allSettled([
    transporter.sendMail({ from, to: admin, replyTo: d.email, ...a }),
    transporter.sendMail({ from, to: d.email, replyTo: admin, ...c }),
  ]);
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[email] ${i === 0 ? "admin" : "cliente"} fallita`, r.reason);
  });
}
