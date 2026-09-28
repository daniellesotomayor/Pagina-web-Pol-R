import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const schema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre").max(80),
  telefono: z.string().trim().min(8, "Teléfono inválido").max(20),
  correo: z.string().trim().max(120).email("Correo inválido").or(z.literal("")),
  mensaje: z.string().trim().min(5, "Cuéntanos qué necesitas").max(800),
});

export function Contact() {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      nombre: String(fd.get("nombre") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      correo: String(fd.get("correo") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    setError(null);
    const d = parsed.data;
    const text = `Hola pol-r, soy ${d.nombre}. Teléfono: ${d.telefono}${
      d.correo ? ` · Correo: ${d.correo}` : ""
    }. ${d.mensaje}`;
    window.open(
      `https://wa.me/526562151654?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contacto" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-display text-lg uppercase tracking-[0.25em] text-cyan">Contacto</p>
        <h2 className="mt-2 text-4xl font-bold uppercase text-primary sm:text-5xl">
          Agenda tu inspección sin costo
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
              <Field label="Teléfono" name="telefono" type="tel" placeholder="656 000 0000" required />
            </div>
            <Field label="Correo (opcional)" name="correo" type="email" placeholder="tucorreo@mail.com" />
            <label className="mt-4 block text-sm font-semibold text-primary" htmlFor="mensaje">
              ¿Qué necesitas?
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              maxLength={800}
              required
              placeholder="Ej. Tengo una casa de 120 m² con goteras en la sala..."
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
            />
            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground transition-colors hover:bg-cyan"
            >
              <Send className="h-4 w-4" /> Enviar solicitud
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Al enviar se abrirá WhatsApp con tu mensaje listo.
            </p>
          </form>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title="Teléfono">
                <a href="tel:+526562151654" className="hover:text-cyan">+52 656 215 1654</a>
              </InfoCard>
              <InfoCard icon={Mail} title="Correo">
                <a href="mailto:contacto@pol-r.mx" className="hover:text-cyan">contacto@pol-r.mx</a>
              </InfoCard>
              <InfoCard icon={MapPin} title="Cobertura">
                Ciudad Juárez, Chihuahua y zona conurbada
              </InfoCard>
              <InfoCard icon={Clock} title="Horario">
                Lun a Vie 8:00 – 18:00 · Sáb 9:00 – 14:00
              </InfoCard>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa de cobertura en Ciudad Juárez"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-106.62%2C31.60%2C-106.34%2C31.80&layer=mapnik"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="mt-4 sm:mt-0">
      <label className="block text-sm font-semibold text-primary" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={120}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <Icon className="h-5 w-5 text-cyan" />
      <h3 className="mt-2 font-display text-xl uppercase text-primary">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
