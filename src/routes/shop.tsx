import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/site-data";
import { ShoppingBag, ShieldCheck, Leaf, MapPin } from "lucide-react";
import heroAsset from "@/assets/hero-lacorte.jpg.asset.json";
import meatCounter from "@/assets/farm/lacorte-01.jpg.asset.json";
import meatCuts from "@/assets/farm/lacorte-02.jpg.asset.json";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "La Bottega · Agriturismo La Corte di Muggiano" },
      { name: "description", content: "Prodotti a km 0 dell'Agriturismo La Corte di Muggiano: carne bovina e cassette dell'azienda agricola, in vendita e ritiro solo in bottega. Vieni a visitare il negozio a Muggiano." },
        { property: "og:title", content: "La Bottega · Agriturismo La Corte di Muggiano" },
        { property: "og:description", content: "Carne bovina e cassette a km 0 dell'azienda agricola, in vendita solo in bottega a Muggiano." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ShopPage() {
  const [cat, setCat] = useState("Tutti");

  let list = PRODUCTS.filter((p) => cat === "Tutti" || p.category === cat);

  return (
    <>
      <section className="relative h-[55vh] overflow-hidden">
        <img src={heroAsset.url} className="w-full h-full object-cover" alt="Le cassette di prodotti dell'agriturismo" />
        <div className="absolute inset-0 bg-wood-dark/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">La bottega</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-3xl text-white">Le nostre <em className="font-light">cassette</em></h1>
          <p className="mt-4 text-white/90">Prodotti a km 0 della nostra azienda · In vendita solo in bottega</p>
        </div>
      </section>

      <section className="py-6 bg-sand/30 border-y border-sand">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 text-xs uppercase tracking-wider text-wood-dark">
          <div className="flex items-center gap-2"><Leaf className="w-4 h-4 text-olive" /> Km 0 · Produzione dell'azienda</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-olive" /> Filiera controllata</div>
          <div className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-olive" /> In vendita solo in bottega</div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Dalla nostra azienda</p>
            <h2 className="font-serif text-3xl md:text-4xl text-wood-dark mt-3">La nostra carne bovina</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">Carne del nostro allevamento, a vera filiera km 0: nasce e cresce qui, per essere acquistata direttamente nella nostra bottega.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <img src={meatCounter.url} alt="Tagli di carne bovina al banco" className="w-full h-56 md:h-96 object-cover rounded-sm" />
            <img src={meatCuts.url} alt="Selezione di tagli di carne bovina" className="w-full h-56 md:h-96 object-cover rounded-sm" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 text-xs uppercase tracking-wider border rounded-sm transition ${cat === c ? "bg-olive text-cream border-olive" : "bg-white border-sand text-wood-dark hover:border-olive"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((p) => (
              <div key={p.id} className="group bg-white border border-sand/60 rounded-sm overflow-hidden flex flex-col">
                <div className="aspect-square relative bg-sand/20 flex items-center justify-center overflow-hidden">
                  <div className="w-[68%] aspect-square rounded-full border border-olive/40 p-2 md:p-3 shadow-sm">
                     <img src={p.image} alt="Cassetta di prodotti a km 0 dell'azienda agricola" loading="lazy" width={1024} height={1024} className="w-full h-full rounded-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-terracotta text-cream">Km 0</Badge>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{p.category}</p>
                  <div className="mt-4 pt-4 border-t border-sand/60 flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-olive flex items-center gap-1"><ShoppingBag className="w-3.5 h-3.5" /> Disponibile in bottega</p>
                    <p className="text-xs text-muted-foreground mt-1">Vieni a visitare il negozio in agriturismo: qui trovi i nostri prodotti a km 0.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-wood-dark text-cream">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Vieni a trovarci</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">Il km 0 si compra qui</h2>
            <p className="mt-4 text-cream/80 leading-relaxed">Tutti i nostri prodotti sono a km 0: allevati e coltivati nella nostra azienda, venduti solo in bottega. Passa a trovarci: scoprirai la corte, la carne del nostro allevamento e i prodotti di stagione.</p>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Agriturismo+La+Corte+di+Muggiano+Via+Antonio+Mosca+195+Milano" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-wood-dark tracking-wider"><MapPin className="w-4 h-4 mr-2" /> Come raggiungerci</Button>
          </a>
        </div>
      </section>
    </>
  );
}
