import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/pol-r-logo.jpeg";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#cotizador", label: "Cotizador" },
  { href: "#galeria", label: "Galería" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="pol-r Sistemas de Aislamiento Térmico"
            width={56}
            height={56}
            className="h-14 w-14 rounded-lg object-contain"
          />
          <span className="hidden text-sm leading-tight text-muted-foreground sm:block">
            Sistemas de Aislamiento
            <br />
            Térmico e Impermeabilización
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-lg uppercase tracking-wide text-primary transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+526562151654"
            className="hidden items-center gap-2 text-sm font-semibold text-primary md:flex"
          >
            <Phone className="h-4 w-4 text-cyan" />
            656 215 1654
          </a>
          <WhatsAppLink className="hidden items-center gap-2 rounded-full bg-cyan px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary sm:flex">
            Cotizar
          </WhatsAppLink>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="rounded-md p-2 text-primary lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-display text-lg uppercase text-primary last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
