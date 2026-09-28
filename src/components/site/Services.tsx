import { Check } from "lucide-react";
import foam from "@/assets/work-foam.jpg";
import waterproof from "@/assets/work-waterproof.jpg";
import industrial from "@/assets/work-industrial.jpg";
import maintenance from "@/assets/work-maintenance.jpg";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const services = [
  {
    img: foam,
    title: "Poliuretano espreado",
    desc: "Espuma de poliuretano de alta densidad aplicada en sitio: aislante térmico e impermeabilizante en una sola capa, sin juntas ni traslapes.",
    points: [
      "Barrera contra calor extremo y heladas",
      "Se adapta a cualquier forma de losa o lámina",
      "Acabado con recubrimiento elastomérico reflectivo",
    ],
  },
  {
    img: waterproof,
    title: "Impermeabilización residencial",
    desc: "Sistemas acrílicos y prefabricados para casas: eliminamos filtraciones de raíz, reparamos grietas y sellamos bajadas de agua.",
    points: [
      "Diagnóstico y reparación de fisuras",
      "Refuerzo en perímetros y drenajes",
      "Acabado blanco reflectivo de larga vida",
    ],
  },
  {
    img: industrial,
    title: "Impermeabilización industrial",
    desc: "Naves, bodegas y centros de distribución. Trabajamos con cronograma, protocolo de seguridad y sin detener tu operación.",
    points: [
      "Grandes superficies de lámina y concreto",
      "Sellado de tragaluces y perfiles",
      "Reportes fotográficos de avance",
    ],
  },
  {
    img: maintenance,
    title: "Mantenimiento preventivo",
    desc: "Programas anuales de revisión para que tu techo llegue entero a la temporada de lluvias y al invierno juarense.",
    points: [
      "Limpieza de drenajes y coladeras",
      "Resellado de puntos críticos",
      "Renovación de capa de acabado",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-display text-lg uppercase tracking-[0.25em] text-cyan">
          Nuestros servicios
        </p>
        <h2 className="mt-2 max-w-2xl text-4xl font-bold uppercase text-primary sm:text-5xl">
          Soluciones completas para tu techo
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1008}
                height={800}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold uppercase text-primary">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  text={`Hola, me interesa el servicio de ${s.title}. ¿Me pueden cotizar?`}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-cyan hover:text-primary"
                >
                  Pedir cotización
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
