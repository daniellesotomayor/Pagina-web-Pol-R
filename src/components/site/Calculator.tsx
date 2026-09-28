import { useMemo, useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const systems = [
  { id: "poliuretano", label: "Poliuretano espreado", min: 320, max: 430 },
  { id: "acrilico", label: "Impermeabilizante acrílico", min: 110, max: 170 },
  { id: "prefabricado", label: "Manto prefabricado", min: 180, max: 260 },
  { id: "mantenimiento", label: "Mantenimiento preventivo", min: 60, max: 95 },
] as const;

const mxn = (n: number) =>
  n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export function QuoteCalculator() {
  const [m2, setM2] = useState(100);
  const [system, setSystem] = useState<string>("poliuretano");

  const sys = systems.find((s) => s.id === system)!;
  const area = Number.isFinite(m2) && m2 > 0 ? m2 : 0;
  const range = useMemo(
    () => ({ low: area * sys.min, high: area * sys.max }),
    [area, sys],
  );

  const message = `Hola, quiero cotizar ${area} m² de ${sys.label} para mi techo. El estimado del sitio fue ${mxn(range.low)} - ${mxn(range.high)}.`;

  return (
    <section id="cotizador" className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <p className="inline-flex items-center gap-2 font-display text-lg uppercase tracking-[0.2em] text-cyan">
                <CalcIcon className="h-5 w-5" /> Cotizador rápido
              </p>
              <h2 className="mt-2 text-3xl font-bold uppercase text-primary">
                Calcula tu proyecto por m²
              </h2>

              <label className="mt-6 block text-sm font-semibold text-primary" htmlFor="m2">
                Metros cuadrados del techo
              </label>
              <input
                id="m2"
                type="number"
                min={1}
                max={100000}
                value={m2}
                onChange={(e) => setM2(Math.min(100000, Math.max(0, Number(e.target.value))))}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-lg font-semibold text-foreground outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
              />
              <input
                type="range"
                min={10}
                max={1000}
                step={5}
                value={Math.min(1000, area)}
                onChange={(e) => setM2(Number(e.target.value))}
                className="mt-4 w-full accent-[oklch(0.68_0.14_226)]"
                aria-label="Ajustar metros cuadrados"
              />

              <fieldset className="mt-6">
                <legend className="text-sm font-semibold text-primary">Sistema</legend>
                <div className="mt-2 grid gap-2">
                  {systems.map((s) => (
                    <label
                      key={s.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                        system === s.id
                          ? "border-cyan bg-cyan/10 font-semibold text-primary"
                          : "border-border text-muted-foreground hover:border-cyan/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sistema"
                        className="accent-[oklch(0.68_0.14_226)]"
                        checked={system === s.id}
                        onChange={() => setSystem(s.id)}
                      />
                      {s.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="flex flex-col justify-center bg-navy-deep p-8 text-white">
              <p className="text-sm uppercase tracking-widest text-cyan-soft">
                Estimado aproximado
              </p>
              <p className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                {mxn(range.low)}
              </p>
              <p className="font-display text-2xl text-white/70">a {mxn(range.high)}</p>
              <p className="mt-4 text-sm text-white/70">
                {area} m² · {sys.label} · {mxn(sys.min)} – {mxn(sys.max)} por m².
              </p>
              <p className="mt-4 rounded-lg bg-white/10 p-3 text-xs text-white/70">
                Estimación informativa. El precio final depende del estado del techo,
                pendientes, altura y accesos. La visita de inspección es sin costo.
              </p>
              <WhatsAppLink
                text={message}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-4 font-bold text-white transition-transform hover:scale-105"
              >
                Enviar por WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
