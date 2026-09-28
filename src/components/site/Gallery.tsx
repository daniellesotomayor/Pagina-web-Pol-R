import foam from "@/assets/work-foam.jpg";
import waterproof from "@/assets/work-waterproof.jpg";
import industrial from "@/assets/work-industrial.jpg";
import maintenance from "@/assets/work-maintenance.jpg";
import hero from "@/assets/hero-roof.jpg";

const items = [
  { img: hero, alt: "Aplicación de poliuretano en azotea industrial", caption: "Nave industrial · 1,800 m²", wide: true },
  { img: foam, alt: "Acabado de espuma de poliuretano", caption: "Acabado de espuma" },
  { img: waterproof, alt: "Impermeabilización de azotea residencial", caption: "Casa habitación" },
  { img: industrial, alt: "Techo industrial con recubrimiento reflectivo", caption: "Recubrimiento reflectivo" },
  { img: maintenance, alt: "Mantenimiento preventivo de drenajes", caption: "Mantenimiento preventivo" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-display text-lg uppercase tracking-[0.25em] text-cyan">Galería</p>
        <h2 className="mt-2 text-4xl font-bold uppercase text-primary sm:text-5xl">
          Trabajos realizados
        </h2>

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.caption}
              className={`group relative overflow-hidden rounded-2xl ${
                it.wide ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-navy-deep/80 px-4 py-3 text-sm font-semibold text-white">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
