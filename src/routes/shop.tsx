import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/site-data";
import { ShoppingBag, Truck, ShieldCheck, Leaf } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "La Bottega · Agriturismo La Corte di Muggiano" },
      { name: "description", content: "Le cassette di prodotti dell'Agriturismo La Corte di Muggiano: carne bovina, prodotti dell'azienda agricola e cassette di stagione, con ritiro in agriturismo." },
    ],
  }),
});

function ShopPage() {
  const [cat, setCat] = useState("Tutti");
  const [sort, setSort] = useState("default");

  let list = PRODUCTS.filter((p) => cat === "Tutti" || p.category === cat);
  if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

  return (
    <>
      <section className="relative h-[55vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2400&q=85" className="w-full h-full object-cover" alt="Le cassette di prodotti dell'agriturismo" />
        <div className="absolute inset-0 bg-wood-dark/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">La bottega</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-3xl">Le nostre <em className="font-light">cassette</em></h1>
          <p className="mt-4 text-cream/80">Carne bovina e prodotti dell'azienda · Ritiro in agriturismo</p>
        </div>
      </section>

      <section className="py-6 bg-sand/30 border-y border-sand">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 text-xs uppercase tracking-wider text-wood-dark">
          <div className="flex items-center gap-2"><Leaf className="w-4 h-4 text-olive" /> Produzione dell'azienda</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-olive" /> Filiera controllata</div>
          <div className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-olive" /> Ritiro in agriturismo</div>
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
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-4 py-2 text-sm border border-sand bg-white rounded-sm">
              <option value="default">Ordinamento</option>
              <option value="price-asc">Prezzo crescente</option>
              <option value="price-desc">Prezzo decrescente</option>
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((p) => (
              <div key={p.id} className="group bg-white border border-sand/60 rounded-sm overflow-hidden flex flex-col">
                <div className="aspect-square overflow-hidden relative bg-sand/20">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <Badge className="absolute top-3 left-3 bg-terracotta text-cream">Prodotto dell'azienda</Badge>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{p.category}</p>
                  <h3 className="font-serif text-xl text-wood-dark mt-1 leading-tight">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 flex-1">{p.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-serif text-2xl text-olive">€ {p.price.toFixed(2)}</span>
                    <Button size="sm" onClick={() => toast.success(`${p.name} aggiunto al carrello`)} className="bg-wood-dark hover:bg-wood text-cream"><ShoppingBag className="w-4 h-4 mr-1" /> Aggiungi al carrello</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
