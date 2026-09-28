import logo from "@/assets/pol-r-logo.jpeg";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="pol-r Sistemas de Aislamiento Térmico"
            loading="lazy"
            width={80}
            height={80}
            className="h-20 w-20 rounded-xl bg-white object-contain p-1"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Aislamiento térmico e impermeabilización de techos en Ciudad Juárez y toda la
            región fronteriza.
          </p>
        </div>

        <nav className="text-sm">
          <h3 className="font-display text-xl uppercase text-cyan-soft">Servicios</h3>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#servicios" className="hover:text-cyan-soft">Poliuretano espreado</a></li>
            <li><a href="#servicios" className="hover:text-cyan-soft">Impermeabilización residencial</a></li>
            <li><a href="#servicios" className="hover:text-cyan-soft">Impermeabilización industrial</a></li>
            <li><a href="#servicios" className="hover:text-cyan-soft">Mantenimiento preventivo</a></li>
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-display text-xl uppercase text-cyan-soft">Contacto</h3>
          <ul className="mt-3 space-y-2 text-white/70">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-cyan-soft" />
              <a href="tel:+526562151654" className="hover:text-cyan-soft">+52 656 215 1654</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-cyan-soft" />
              <a href="mailto:contacto@pol-r.mx" className="hover:text-cyan-soft">contacto@pol-r.mx</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-cyan-soft" />
              Ciudad Juárez, Chihuahua
            </li>
          </ul>
          <WhatsAppLink className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-2.5 font-bold text-white hover:bg-cyan/90">
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-4 pt-6 text-center text-sm text-white/80">
        Copyright Pol-R 2026
      </div>
    </footer>
  );
}
