import { Thermometer, PiggyBank, Leaf, Timer, Building2, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Thermometer,
    title: "Confort todo el año",
    desc: "Diferencias de hasta 15 °C entre el exterior y el interior en los veranos de Juárez.",
  },
  {
    icon: PiggyBank,
    title: "Ahorro energético real",
    desc: "Menos horas de minisplit y calefacción: la inversión se recupera en pocas temporadas.",
  },
  {
    icon: Leaf,
    title: "Menor huella de carbono",
    desc: "Superficies reflectivas que reducen la isla de calor y el consumo eléctrico.",
  },
  {
    icon: Timer,
    title: "Instalación rápida",
    desc: "La mayoría de los proyectos residenciales se terminan en uno o dos días.",
  },
  {
    icon: Building2,
    title: "Protege la estructura",
    desc: "Sin humedad, sin salitre ni corrosión en varilla, lámina y acabados interiores.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento mínimo",
    desc: "Solo una revisión anual para conservar la garantía y extender la vida útil.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-navy-deep py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-display text-lg uppercase tracking-[0.25em] text-cyan-soft">
              Beneficios
            </p>
            <h2 className="mt-2 text-4xl font-bold uppercase sm:text-5xl">
              Ahorro energético que se nota en el recibo
            </h2>
            <p className="mt-4 text-white/75">
              Un techo mal aislado puede representar hasta el 35% de la pérdida térmica de
              un inmueble. Con el sistema correcto, tu clima trabaja menos y tu casa o nave
              se mantiene estable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan/60"
              >
                <Icon className="h-7 w-7 text-cyan-soft" />
                <h3 className="mt-3 text-xl font-bold uppercase">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
