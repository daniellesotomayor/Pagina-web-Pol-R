import { ShieldCheck, Snowflake, Droplets } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Aplicación de poliuretano espreado en azotea industrial"
        width={1600}
        height={1008}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/50 bg-cyan/15 px-4 py-1.5 text-sm font-semibold text-cyan-soft">
            Ciudad Juárez · Chihuahua
          </span>
          <h1 className="mt-6 text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl">
            Techos que resisten
            <span className="block text-cyan-soft">frío, calor y goteras</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            Aislamiento térmico con poliuretano espreado e impermeabilización profesional
            para casas, naves industriales y comercios. Sella filtraciones, baja tu recibo
            de energía y protege tu inversión por años.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105">
              Cotizar mi techo
            </WhatsAppLink>
            <a
              href="#servicios"
              className="inline-flex items-center rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Snowflake, t: "Hasta 40%", d: "menos consumo de clima y calefacción" },
              { icon: Droplets, t: "0 goteras", d: "sellado continuo sin juntas" },
              { icon: ShieldCheck, t: "Garantía", d: "por escrito en cada trabajo" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-white/15 bg-navy-deep/40 p-4">
                <Icon className="h-6 w-6 text-cyan-soft" />
                <dt className="mt-3 font-display text-2xl text-white">{t}</dt>
                <dd className="text-sm text-white/70">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
