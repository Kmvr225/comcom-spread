import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServicesByNeed } from "@/components/site/ServicesByNeed";
import { InstagramCTA } from "@/components/site/InstagramCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services — KOOM/KOOM",
  description: "Des services organisés par besoin : visibilité, image, réseaux, site, IA, automatisation.",
};

export default function ServicesPage() {
  return (
    <div className="bg-warm-field min-h-screen">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:pt-20">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Services par besoin</p>
          <h1 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            Pas des packs figés. Des outils selon votre besoin.
          </h1>
          <p className="mt-4 max-w-2xl text-sand">
            Choisissez ce qui vous parle, et pour chaque service, la formule : mise en place,
            gestion mensuelle, ou les deux. On combine selon votre situation.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <ServicesByNeed />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <InstagramCTA />
      </section>

      <Footer />
    </div>
  );
}
