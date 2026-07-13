import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MENU } from "@/lib/site-data";
import { Wheat, Leaf, Clock } from "lucide-react";
import { toast } from "sonner";

const HERO = "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=2400&q=85";
const INTERIOR = "https://images.unsplash.com/photo-1579926545913-448d525562db?auto=format&fit=crop&w=1800&q=85";
const DISH = "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?auto=format&fit=crop&w=1600&q=85";

export const Route = createFileRoute("/ristorante")({
  component: RistorantePage,
  head: () => ({
    meta: [
      { title: "La cucina di famiglia · Azienda Agricola La Corte" },
      { name: "description", content: "La cucina lombarda dell'Azienda Agricola La Corte a Muggiano, Milano: risotto giallo, cassoeula, ossobuco e piatti di stagione dell'orto di famiglia." },
    ],
  }),
});

function RistorantePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "20:00", guests: 2, notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date) { toast.error("Compila i campi obbligatori"); return; }
    toast.success(`Grazie ${form.name}! Riceverai su ${form.email} la conferma del tavolo per il ${form.date}.`);
    setForm({ name: "", email: "", phone: "", date: "", time: "20:00", guests: 2, notes: "" });
  };

  return (
    <>
      <section className="relative h-[70vh] overflow-hidden pt-20">
        <img src={HERO} className="w-full h-full object-cover" alt="La cucina della corte a Muggiano" />
        <div className="absolute inset-0 bg-wood-dark/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream container">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">La cucina</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-6 max-w-4xl">Cucina di <em className="font-light">famiglia</em></h1>
          <p className="mt-6 max-w-xl text-cream/85">Ricette lombarde tramandate in famiglia, con i prodotti della nostra corte e dell'orto. Aperto su prenotazione.</p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="ornament-divider text-xs uppercase tracking-[0.3em] mb-6"><span>La nostra filosofia</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-wood-dark leading-tight">Dall&apos;orto della corte alla tavola</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Miriam Alberti e la famiglia cucinano ogni giorno con i prodotti della nostra terra: verdure dell'orto, uova delle nostre galline, riso e farine del Parco Sud. Nessun menu rigido: solo la stagione e la tradizione lombarda.
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-3"><Leaf className="w-5 h-5 text-olive shrink-0" /> Ortaggi e conserve dal nostro orto di famiglia</li>
              <li className="flex gap-3"><Wheat className="w-5 h-5 text-olive shrink-0" /> Riso Carnaroli e farine dei campi vicini</li>
              <li className="flex gap-3"><Clock className="w-5 h-5 text-olive shrink-0" /> Pranzo 12:30–14:30 · Cena 19:30–22:00 · Su prenotazione</li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm luxury-shadow">
            <img src={INTERIOR} alt="La sala del ristorante nella corte lombarda" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand/30">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Il menu</p>
            <h2 className="font-serif text-4xl md:text-5xl text-wood-dark mt-4">Carta della tradizione</h2>
          </div>
          <Tabs defaultValue={MENU[0].category} className="max-w-3xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
              {MENU.map((m) => (
                <TabsTrigger key={m.category} value={m.category} className="data-[state=active]:bg-olive data-[state=active]:text-cream uppercase tracking-wider text-xs px-5 py-2 border border-sand rounded-sm">{m.category}</TabsTrigger>
              ))}
            </TabsList>
            {MENU.map((m) => (
              <TabsContent key={m.category} value={m.category}>
                <div className="space-y-6">
                  {m.dishes.map((d) => (
                    <div key={d.name} className="flex justify-between gap-6 pb-6 border-b border-sand">
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl text-wood-dark">{d.name}</h3>
                        <p className="text-muted-foreground mt-1">{d.desc}</p>
                      </div>
                      <span className="font-serif text-xl text-olive whitespace-nowrap">€ {d.price}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <img src={DISH} className="absolute inset-0 w-full h-full object-cover" alt="Piatto della tradizione lombarda" />
        <div className="absolute inset-0 bg-wood-dark/75" />
        <div className="relative container max-w-2xl text-cream">
          <p className="text-xs uppercase tracking-[0.3em] text-gold text-center">Prenota un tavolo</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mt-4">Riserva la tua serata</h2>
          <form onSubmit={submit} className="mt-10 grid sm:grid-cols-2 gap-3">
            <input className="px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm placeholder-cream/60" placeholder="Nome e cognome*" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
            <input className="px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm placeholder-cream/60" placeholder="Email*" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
            <input className="px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm placeholder-cream/60" placeholder="Telefono" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
            <input type="date" className="px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm placeholder-cream/60 [color-scheme:dark]" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} />
            <select className="px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})}>
              {["12:30","13:00","13:30","19:30","20:00","20:30","21:00"].map(t => <option key={t} value={t} className="text-wood-dark">{t}</option>)}
            </select>
            <select className="px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm" value={form.guests} onChange={(e) => setForm({...form, guests: parseInt(e.target.value)})}>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="text-wood-dark">{n} {n === 1 ? "ospite" : "ospiti"}</option>)}
            </select>
            <textarea className="sm:col-span-2 px-4 py-3 bg-cream/10 border border-cream/30 rounded-sm text-sm placeholder-cream/60" rows={3} placeholder="Note (allergie, preferenze, occasioni speciali)" value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} />
            <Button type="submit" className="sm:col-span-2 bg-gold hover:bg-gold-dark text-wood-dark uppercase tracking-[0.2em] text-xs h-12">Conferma prenotazione</Button>
          </form>
        </div>
      </section>
    </>
  );
}
