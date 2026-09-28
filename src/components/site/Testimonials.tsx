import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcela Ríos",
    role: "Casa habitación · Campestre",
    text: "Teníamos goteras cada temporada de lluvias. Aplicaron poliuretano y el cambio de temperatura en las recámaras se sintió desde el primer día.",
  },
  {
    name: "Ing. Luis Hernández",
    role: "Nave industrial · Parque Omega",
    text: "Trabajaron por etapas sin parar la producción. Entregaron reportes con fotos y el consumo de aire acondicionado bajó notablemente.",
  },
  {
    name: "Patricia Domínguez",
    role: "Local comercial · Zona Centro",
    text: "Muy puntuales y limpios. Explicaron cada paso y dejaron garantía por escrito. Ya los recomendé con dos vecinos.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-display text-lg uppercase tracking-[0.25em] text-cyan">
          Testimonios
        </p>
        <h2 className="mt-2 text-4xl font-bold uppercase text-primary sm:text-5xl">
          Lo que dicen nuestros clientes
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-cyan/40" />
              <blockquote className="mt-3 flex-1 text-foreground">"{t.text}"</blockquote>
              <div className="mt-5 flex gap-0.5" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan text-cyan" />
                ))}
              </div>
              <figcaption className="mt-3">
                <span className="block font-bold text-primary">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
