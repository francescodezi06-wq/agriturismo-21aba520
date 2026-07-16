import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ROOMS, BOOKING_URL } from "@/lib/site-data";
import { BedDouble, Users, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { toast } from "sonner";

type Room = (typeof ROOMS)[number];

export const Route = createFileRoute("/camere")({
  component: CamerePage,
  head: () => ({
    meta: [
      { title: "Camere · Agriturismo La Corte di Muggiano" },
      { name: "description", content: "Camere climatizzate all'Agriturismo La Corte di Muggiano, quartiere Baggio di Milano. Matrimoniale con balcone, tripla e quadrupla con bagno privato, Wi-Fi e parcheggio." },
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

  const submit = () => {
    if (!checkIn || !checkOut) { toast.error("Seleziona check-in e check-out"); return; }
    if (!name || !email) { toast.error("Inserisci nome ed email"); return; }
    toast.success(`Grazie ${name}! Ti contatteremo su ${email} per confermare la prenotazione.`);
    setActive(null); setCheckIn(""); setCheckOut(""); setName(""); setEmail(""); setPhone("");
  };

  return (
    <>
      <section className="relative h-[60vh] overflow-hidden pt-20">
        <img src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=2400&q=85" className="w-full h-full object-cover" alt="Camere dell'Agriturismo La Corte di Muggiano" />
        <div className="absolute inset-0 bg-wood-dark/50" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container text-cream">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">L'ospitalità</p>
            <h1 className="font-serif text-5xl md:text-7xl mt-4">Le nostre <em className="font-light">camere</em></h1>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-olive text-cream">
        <div className="container py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Prenotazione online</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">Prenota il tuo soggiorno su Booking.com</h2>
            <p className="mt-3 text-cream/80 max-w-xl">Verifica disponibilità e tariffe in tempo reale direttamente sull'annuncio ufficiale dell'Agriturismo La Corte di Muggiano.</p>
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
              <div className={`lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-sm luxury-shadow ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-cream px-3 py-1 text-xs uppercase tracking-wider text-wood-dark">N. 0{i+1}</div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">{r.tagline}</p>
                <h2 className="font-serif text-4xl md:text-5xl text-wood-dark mt-3">{r.name}</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">{r.description}</p>
                <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                  <div><BedDouble className="w-4 h-4 text-olive mb-1" /><div>{r.bed}</div></div>
                  <div><Users className="w-4 h-4 text-olive mb-1" /><div>Fino a {r.capacity} ospiti</div></div>
                  <div><Sparkles className="w-4 h-4 text-olive mb-1" /><div>{r.size} m²</div></div>
                </div>
                <ul className="flex flex-wrap gap-2 mt-6">
                  {r.amenities.map((a) => <li key={a} className="text-xs px-3 py-1 border border-sand rounded-full text-wood-dark/80">{a}</li>)}
                </ul>
                <div className="flex items-end justify-between mt-8 pt-6 border-t border-sand">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">A partire da</p>
                    <p className="font-serif text-3xl text-wood-dark">€ {r.pricePerNight}<span className="text-sm text-muted-foreground font-sans"> /notte</span></p>
                  </div>
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
                <Button onClick={submit} className="w-full bg-olive hover:bg-olive-dark text-cream">Invia richiesta</Button>
                <p className="text-[11px] text-muted-foreground text-center">Ti risponderemo entro 24 ore per confermare la disponibilità.</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
