import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { OktoExperience } from "@/components/site/OktoExperience";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Parler à OKTO — KOOM/KOOM",
  description: "Expliquez votre besoin à OKTO. Il comprend, structure et prépare votre demande.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-warm-field min-h-screen">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-14 text-center md:pt-20">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">L'expérience OKTO</p>
          <h1 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            Expliquez votre projet
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sand">
            Écrivez ou parlez. OKTO comprend votre besoin, pose quelques questions, et prépare un
            résumé clair à envoyer sur Instagram.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <OktoExperience />
      </section>

      <Footer />
    </div>
  );
}
