import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Star, Leaf, Sparkles, MapPin, Wheat, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROOMS, PRODUCTS, TESTIMONIALS } from "@/lib/site-data";

import heroAsset from "@/assets/hero-lacorte.jpg.asset.json";
import fieldAsset from "@/assets/farm/lacorte-03.jpg.asset.json";
import cattleAsset from "@/assets/farm/lacorte-04.jpg.asset.json";
import canalAsset from "@/assets/farm/lacorte-05.jpg.asset.json";
import shopfrontAsset from "@/assets/farm/lacorte-07.jpg.asset.json";
import poppiesAsset from "@/assets/farm/lacorte-08.jpg.asset.json";
import landscapeAsset from "@/assets/farm/lacorte-10.jpg.asset.json";
import facadeAsset from "@/assets/farm/lacorte-09.jpg.asset.json";
import sunsetCanalAsset from "@/assets/farm/lacorte-tramonto-canal.jpg.asset.json";
const HERO_IMG = heroAsset.url;
const ABOUT_IMG = facadeAsset.url;
const ABOUT_SUNSET_IMG = sunsetCanalAsset.url;
const LANDSCAPE_IMG = landscapeAsset.url;
const COURT_IMG = canalAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Agriturismo La Corte di Muggiano · Milano" },
      { name: "description", content: "Agriturismo La Corte di Muggiano: soggiorno tranquillo nel quartiere Baggio di Milano, a pochi km da San Siro, CityLife e Fiera Milano City. Camere climatizzate, Wi-Fi gratuito, giardino e parcheggio privato." },
      { property: "og:title", content: "Agriturismo La Corte di Muggiano · Milano" },
      { property: "og:description", content: "Ospitalità in campagna a Muggiano, Milano: camere, giardino e prodotti della nostra azienda agricola." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 animate-kenburns"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/40 via-wood-dark/20 to-wood-dark/70" />
        <div className="relative h-full container flex flex-col justify-end pb-24 md:pb-32 text-cream">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>Quartiere Baggio · Milano</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 max-w-4xl leading-[1.05] text-balance animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Agriturismo<br/><span className="italic font-light">La Corte di Muggiano</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl text-cream/85 leading-relaxed animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0 }}>
            Un soggiorno immerso nella tranquillità della campagna, a pochi minuti da San Siro, CityLife e Fiera Milano.
          </p>
          <div className="flex flex-wrap gap-3 mt-10 animate-fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
            <Link to="/camere"><Button size="lg" className="bg-olive hover:bg-olive-dark text-cream uppercase tracking-[0.2em] text-xs px-8 h-12">Ospitalità in cascina</Button></Link>
            <Link to="/shop"><Button size="lg" variant="outline" className="bg-transparent border-cream text-cream hover:bg-cream hover:text-wood-dark uppercase tracking-[0.2em] text-xs px-8 h-12">La bottega</Button></Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs uppercase tracking-[0.3em] animate-bounce">scorri</div>
      </section>

      {/* CHI SIAMO */}
      <section id="chi-siamo" className="py-24 md:py-36 bg-cream">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="ornament-divider text-xs uppercase tracking-[0.3em] mb-8"><span>Chi siamo</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-wood-dark leading-tight">Un agriturismo <em className="text-olive">a due passi da Milano</em></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Agriturismo La Corte di Muggiano offre un soggiorno immerso nella tranquillità del quartiere Baggio di Milano, tra campi coltivati e ospitalità familiare. Una base ideale per chi visita la città e desidera un ritmo più lento al termine della giornata.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ci trovi a circa 8 km dallo Stadio San Siro, 8,7 km da CityLife, 8,9 km da Fiera Milano City e 9,1 km dal MUDEC. L'aeroporto più vicino è Milano Linate, a circa 19 km.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              La struttura mette a disposizione Wi-Fi gratuito in tutta la proprietà, parcheggio privato, giardino, colazione a buffet o all'italiana, camere climatizzate con TV a schermo piatto, frigorifero e bagno privato con bidet.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[{n:"8 km", l:"da San Siro"},{n:"8,9 km", l:"da Fiera Milano"},{n:"19 km", l:"da Linate"}].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl text-olive">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm luxury-shadow">
            <img src={ABOUT_SUNSET_IMG} alt="Il canale con i pioppi al tramonto vicino alla cascina — Agriturismo La Corte di Muggiano" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
            <div className="absolute -bottom-px -right-px bg-cream py-4 px-6 font-serif italic text-wood-dark border-l border-t border-sand">&laquo; La corte di famiglia. Casa vostra. &raquo;</div>
          </div>
        </div>
      </section>

      {/* ARCHITETTURA */}
      <section className="py-24 md:py-32 bg-sand/30">
        <div className="container grid md:grid-cols-3 gap-10">
          {[
            { icon: Home, title: "Camere confortevoli", text: "Camere climatizzate con ingresso indipendente, bagno privato, TV a schermo piatto e balcone: tutti i comfort per un soggiorno rilassante." },
            { icon: Wheat, title: "Colazione genuina", text: "Colazione a buffet o all'italiana con prodotti della nostra azienda agricola: miele, marmellate, uova fresche e pane appena sfornato." },
            { icon: Leaf, title: "Giardino e parcheggio", text: "Wi-Fi gratuito in tutta la struttura, ampio giardino e parcheggio privato per chi arriva in auto. Comodo per visitare Milano." },
          ].map((f) => (
            <div key={f.title} className="bg-cream p-8 border border-sand rounded-sm">
              <f.icon className="w-6 h-6 text-olive" />
              <h3 className="font-serif text-2xl text-wood-dark mt-4">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAMERE */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">L'ospitalità</p>
            <h2 className="font-serif text-4xl md:text-5xl text-wood-dark mt-4">Le nostre camere</h2>
            <p className="text-muted-foreground mt-4">Camere climatizzate con bagno privato, ingresso indipendente e vista su una tranquilla strada. Wi-Fi, colazione e parcheggio inclusi.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ROOMS.map((r, i) => (
              <a key={r.id} href={`/camere#${r.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={r.image} alt={`${r.name} — Azienda Agricola La Corte`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-cream/90 px-3 py-1 text-xs uppercase tracking-wider text-wood-dark">N. 0{i+1}</div>
                  <div className="absolute bottom-6 left-6 right-6 text-cream">
                    <p className="text-xs uppercase tracking-[0.25em] text-gold">{r.tagline}</p>
                    <h3 className="font-serif text-3xl mt-1">{r.name}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="flex items-center gap-1 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition">Scopri <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12"><Link to="/camere"><Button variant="outline" className="border-olive text-olive hover:bg-olive hover:text-cream tracking-wider">Tutte le camere &amp; prenotazione</Button></Link></div>
        </div>
      </section>

      {/* QUOTE PARALLAX */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${LANDSCAPE_IMG})`, backgroundSize: "cover", backgroundPosition: "center", transform: `translateY(${(scrollY - 1800) * 0.15}px)` }} />
        <div className="absolute inset-0 bg-wood-dark/50" />
        <div className="relative text-center text-cream px-6 max-w-3xl">
          <Sparkles className="w-6 h-6 mx-auto text-gold" />
          <p className="font-serif text-3xl md:text-5xl italic mt-6 leading-snug">&laquo; Un angolo di campagna nel cuore di Milano. &raquo;</p>
          <p className="mt-6 uppercase tracking-[0.3em] text-xs text-gold">— Agriturismo La Corte di Muggiano</p>
        </div>
      </section>

      {/* BOTTEGA */}
      <section className="py-24 md:py-32 bg-wood-dark text-cream">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">La bottega</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-4">Le cassette della nostra azienda</h2>
            </div>
            <Link to="/shop" className="text-gold uppercase tracking-[0.25em] text-xs hover:text-cream inline-flex items-center gap-2">Visita la bottega <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((p) => (
              <Link key={p.id} to="/shop" className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-cream/5 flex items-center justify-center">
                  <div className="w-[76%] aspect-square rounded-full border border-gold/50 p-2">
                     <img src={p.image} alt={`Immagine illustrativa di ${p.name}`} loading="lazy" width={1024} height={1024} className="w-full h-full rounded-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-gold">{p.category}</p>
                <p className="font-serif text-lg leading-tight">{p.name}</p>
                <p className="text-sm text-cream/70">Disponibile in bottega</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Ospiti a Muggiano</p>
            <h2 className="font-serif text-4xl md:text-5xl text-wood-dark mt-4">Quello che dicono di noi</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-sand/30 p-8 rounded-sm border border-sand/60">
                <div className="flex gap-1 text-gold">{Array.from({length: t.rating}).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
                <p className="font-serif text-xl text-wood-dark mt-4 italic leading-relaxed">&laquo; {t.text} &raquo;</p>
                <div className="mt-6 pt-4 border-t border-sand">
                  <p className="font-medium text-wood-dark">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERIA */}
      <section className="py-20 bg-sand/40">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">@agriturismolacortemuggiano</p>
            <h2 className="font-serif text-3xl md:text-4xl text-wood-dark mt-3">La vita in agriturismo</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
            {[ABOUT_IMG, shopfrontAsset.url, cattleAsset.url, fieldAsset.url, poppiesAsset.url, LANDSCAPE_IMG].map((src, i) => (
              <a key={i} href="#" className="aspect-square overflow-hidden group">
                <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Momenti di vita nella corte" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATTI CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${COURT_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-wood-dark/70" />
        <div className="relative container text-center text-cream max-w-3xl">
          <MapPin className="w-6 h-6 mx-auto text-gold" />
          <h2 className="font-serif text-4xl md:text-6xl mt-6">Vieni a trovarci</h2>
          <p className="mt-6 text-cream/80 text-lg">Muggiano, quartiere Baggio di Milano — a pochi minuti da San Siro, CityLife e Fiera Milano.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/camere"><Button size="lg" className="bg-gold hover:bg-gold-dark text-wood-dark tracking-wider">Prenota il tuo soggiorno</Button></Link>
            <a href="mailto:info@agriturismolacortemuggiano.it"><Button size="lg" variant="outline" className="bg-transparent border-cream text-cream hover:bg-cream hover:text-wood-dark tracking-wider">Scrivici</Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
