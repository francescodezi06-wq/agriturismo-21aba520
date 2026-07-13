import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer id="contatti" className="bg-wood-dark text-cream/90">
      <div className="container py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border border-cream/50 flex items-center justify-center"><span className="font-serif text-xl">C</span></div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl">La Corte</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Azienda Agricola</span>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Antica corte lombarda del 1800, nel cuore del Parco Agricolo Sud di Milano. Ospitalità, cucina di casa e prodotti della nostra terra.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">La Corte</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/camere" className="hover:text-gold">Ospitalità</Link></li>
            <li><Link to="/ristorante" className="hover:text-gold">Cucina</Link></li>
            <li><Link to="/shop" className="hover:text-gold">Bottega</Link></li>
            <li><a href="/#chi-siamo" className="hover:text-gold">La nostra storia</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Contatti</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> Muggiano, 20152 Milano — Parco Agricolo Sud</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> +39 02 000 0000</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> info@aziendaagricolalacorte.it</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Dove siamo</h4>
          <div className="aspect-square rounded-sm overflow-hidden border border-cream/10">
            <iframe
              title="Mappa Azienda Agricola La Corte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.05%2C45.44%2C9.13%2C45.48&layer=mapnik"
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Azienda Agricola La Corte — Muggiano, Milano</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Termini</a>
            <a href="#" className="hover:text-gold">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
