import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ROOMS, BOOKING_URL } from "@/lib/site-data";
import { BedDouble, Users, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import heroAsset from "@/assets/hero-lacorte.jpg.asset.json";
import { createBooking } from "@/lib/bookings.functions";

type Room = (typeof ROOMS)[number];

export const Route = createFileRoute("/camere")({
  component: CamerePage,
  head: () => ({
    meta: [
      { title: "Camere · Agriturismo La Corte di Muggiano" },
      { name: "description", content: "Scopri le camere Aurora, Luna, Stella e Tramonto dell'Agriturismo La Corte di Muggiano: quattro ambienti accoglienti con bagno privato, Wi-Fi e parcheggio." },
      { property: "og:title", content: "Camere · Agriturismo La Corte di Muggiano" },
      { property: "og:description", content: "Scopri le camere Aurora, Luna, Stella e Tramonto, quattro ambienti accoglienti alle porte di Milano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CamerePage() {
  const [active, setActive] = useState<Room | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submitBooking = useServerFn(createBooking);

  const resetForm = () => {
    setActive(null);
    setCheckIn(""); setCheckOut(""); setGuests(2);
    setName(""); setEmail(""); setPhone(""); setNotes("");
  };

  const submit = async () => {
    if (submitting) return;
    if (!active) return;
    if (!checkIn || !checkOut) { toast.error("Seleziona check-in e check-out"); return; }
    if (new Date(checkOut) <= new Date(checkIn)) { toast.error("Il check-out deve essere successivo al check-in"); return; }
    if (!name.trim()) { toast.error("Inserisci nome e cognome"); return; }
    if (!email.trim()) { toast.error("Inserisci un'email valida"); return; }
    if (!phone.trim()) { toast.error("Inserisci un numero di telefono"); return; }
    if (guests < 1 || guests > active.capacity) { toast.error(`Numero ospiti non valido (max ${active.capacity})`); return; }

    const parts = name.trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || parts[0];

    setSubmitting(true);
    try {
      const result = await submitBooking({
        data: {
          firstName, lastName,
          email: email.trim(), phone: phone.trim(),
          roomId: active.id, roomName: active.name,
          checkIn, checkOut, guests,
          notes: notes.trim() || null,
        },
      });
      if (result.ok) {
        toast.success(`Grazie ${firstName}! Abbiamo ricevuto la tua richiesta di prenotazione. Ti contatteremo a breve su ${email.trim()} per la conferma.`);
        resetForm();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src={heroAsset.url} className="w-full h-full object-cover" alt="Camere dell'Agriturismo La Corte di Muggiano" />
        <div className="absolute inset-0 bg-wood-dark/60" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">L'ospitalità</p>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 text-white">Le nostre <em className="font-light">camere</em></h1>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-white text-wood-dark border-y border-sand">
        <div className="container py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-olive">Prenotazione online</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">Prenota il tuo soggiorno su Booking.com</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Verifica disponibilità e tariffe in tempo reale direttamente sull'annuncio ufficiale dell'Agriturismo La Corte di Muggiano.</p>
          </div>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-wood-dark tracking-wider">
              Vai all'annuncio su Booking.com <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container space-y-24">
          {ROOMS.map((r, i) => (
            <article key={r.id} id={r.id} className="grid lg:grid-cols-12 gap-10 items-center scroll-mt-24">
              <div className={`lg:col-span-7 relative grid grid-cols-3 grid-rows-2 gap-1 aspect-[4/3] overflow-hidden rounded-sm luxury-shadow ${i % 2 ? "lg:order-2" : ""}`}>
                {r.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${r.name}${imageIndex === 0 ? "" : imageIndex === r.images.length - 1 ? " · bagno privato" : " · dettaglio"}`}
                    className={`h-full w-full object-cover ${imageIndex === 0 ? "col-span-2 row-span-2" : r.images.length === 2 ? "row-span-2" : ""}`}
                  />
                ))}
                <div className="absolute top-4 left-4 bg-cream px-3 py-1 text-xs uppercase tracking-wider text-wood-dark">N. 0{i+1}</div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">{r.tagline}</p>
                <h2 className="font-serif text-4xl md:text-5xl text-wood-dark mt-3">{r.name}</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">{r.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                  <div><BedDouble className="w-4 h-4 text-olive mb-1" /><div className="whitespace-pre-line">{r.bed}</div></div>
                  <div><Users className="w-4 h-4 text-olive mb-1" /><div>Fino a {r.capacity} ospiti</div></div>
                </div>
                <ul className="flex flex-wrap gap-2 mt-6">
                  {r.amenities.map((a) => <li key={a} className="text-xs px-3 py-1 border border-sand rounded-full text-wood-dark/80">{a}</li>)}
                </ul>
                <p className="text-xs uppercase tracking-[0.25em] text-accent mt-6 mb-2">Bagno privato</p>
                <ul className="flex flex-wrap gap-2">
                  {r.bathroom.map((a) => <li key={a} className="text-xs px-3 py-1 border border-sand rounded-full text-wood-dark/80 bg-sand/20">{a}</li>)}
                </ul>
                <div className="mt-8 pt-6 border-t border-sand flex justify-end">
                  <Button onClick={() => setActive(r)} className="bg-olive hover:bg-olive-dark text-cream tracking-wider">Prenota <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(v) => !v && setActive(null)}>
        <DialogContent className="max-w-lg bg-cream border-sand max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl text-wood-dark">Prenota · {active.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 mt-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Check-in</p>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full px-3 py-2 border border-sand bg-white rounded-sm text-sm" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Check-out</p>
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full px-3 py-2 border border-sand bg-white rounded-sm text-sm" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Ospiti</p>
                  <div className="flex items-center border border-sand rounded-sm bg-white w-fit">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))} className="px-3 py-2">−</button>
                    <span className="px-4">{guests}</span>
                    <button onClick={() => setGuests(Math.min(active.capacity, guests + 1))} className="px-3 py-2">+</button>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">Max {active.capacity} ospiti</p>
                </div>
                <input className="w-full px-3 py-2 border border-sand bg-white rounded-sm text-sm" placeholder="Nome e cognome" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="w-full px-3 py-2 border border-sand bg-white rounded-sm text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="w-full px-3 py-2 border border-sand bg-white rounded-sm text-sm" placeholder="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Button onClick={submit} disabled={submitting} className="w-full bg-olive hover:bg-olive-dark text-cream disabled:opacity-70">{submitting ? "Invio in corso…" : "Invia richiesta"}</Button>
                <p className="text-[11px] text-muted-foreground text-center">Ti risponderemo entro 24 ore per confermare la disponibilità.</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
