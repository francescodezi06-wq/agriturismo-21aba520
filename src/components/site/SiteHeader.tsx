import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/camere", label: "Ospitalità" },
  { href: "/ristorante", label: "Cucina" },
  { href: "/shop", label: "Bottega" },
  { href: "/#contatti", label: "Contatti" },
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass luxury-shadow border-b border-sand/60" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={cn("w-10 h-10 rounded-full border flex items-center justify-center", scrolled ? "border-wood-dark text-wood-dark" : "border-cream text-cream")}>
            <span className="font-serif text-xl">C</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn("font-serif text-xl tracking-wide", scrolled ? "text-wood-dark" : "text-cream")}>La Corte</span>
            <span className={cn("text-[10px] uppercase tracking-[0.25em]", scrolled ? "text-olive" : "text-cream/80")}>Azienda Agricola · Muggiano</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "text-sm uppercase tracking-[0.2em] transition-colors hover:text-accent",
                scrolled ? "text-wood-dark" : "text-cream",
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/camere" className="hidden md:inline-flex">
            <Button className="bg-olive hover:bg-olive-dark text-cream tracking-wide">Prenota</Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("lg:hidden", scrolled ? "text-wood-dark" : "text-cream hover:bg-white/10 hover:text-cream")}>
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream border-sand">
              <div className="flex flex-col gap-6 mt-8">
                {NAV.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-serif text-2xl text-wood-dark hover:text-olive">
                    {n.label}
                  </a>
                ))}
                <Link to="/camere" onClick={() => setOpen(false)}>
                  <Button className="bg-olive hover:bg-olive-dark text-cream w-full mt-4">Prenota una camera</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
