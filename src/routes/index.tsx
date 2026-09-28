import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Benefits } from "@/components/site/Benefits";
import { QuoteCalculator } from "@/components/site/Calculator";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "pol-r | Aislamiento Térmico e Impermeabilización en Cd. Juárez" },
      {
        name: "description",
        content:
          "Poliuretano espreado, impermeabilización residencial e industrial y mantenimiento preventivo de techos en Ciudad Juárez. Cotiza por WhatsApp.",
      },
      {
        property: "og:title",
        content: "pol-r | Aislamiento Térmico e Impermeabilización de Techos",
      },
      {
        property: "og:description",
        content:
          "Protege tu techo del frío, el calor extremo y las goteras. Inspección sin costo en Ciudad Juárez.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <QuoteCalculator />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
