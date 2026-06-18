import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { OktoExperience } from "@/components/site/OktoExperience";
import { NeedsPreview } from "@/components/site/NeedsPreview";
import { CreationAccompagnement } from "@/components/site/CreationAccompagnement";
import { ClientExamples } from "@/components/site/ClientExamples";
import { InstagramCTA } from "@/components/site/InstagramCTA";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="bg-warm-field min-h-screen">
      <Nav />
      <Hero />

      {/* EXPÉRIENCE OKTO — cœur du site */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">L'expérience</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-cream md:text-4xl">
              Dites votre besoin.
              <br />
              OKTO le transforme en projet clair.
            </h2>
            <p className="mt-4 max-w-md text-sand">
              Pas de liste froide de packs. Vous expliquez — par écrit ou à la voix — et OKTO
              comprend, pose les bonnes questions et prépare votre demande.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-cream/90">
              {["Comprend votre besoin, même flou", "Pose 3-4 questions simples", "Prépare un résumé prêt à envoyer", "Vous oriente vers les bonnes solutions"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <OktoExperience />
          </Reveal>
        </div>
      </section>

      {/* BESOINS */}
      <Section kicker="Vos besoins" title="On part de ce que vous voulez, pas d'un catalogue">
        <NeedsPreview />
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="rounded-full border border-gold/30 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-gold/60"
          >
            Explorer tous les services
          </Link>
        </div>
      </Section>

      {/* CRÉATION + ACCOMPAGNEMENT */}
      <section id="accompagnement" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Création + accompagnement</p>
          <h2 className="mb-10 font-display text-3xl font-semibold text-cream md:text-4xl">
            On lance, puis on reste à vos côtés
          </h2>
        </Reveal>
        <CreationAccompagnement />
      </section>

      {/* EXEMPLES CLIENTS */}
      <Section kicker="Pour qui" title="Des projets locaux, accompagnés concrètement">
        <ClientExamples />
      </Section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <InstagramCTA />
      </section>

      <Footer />
    </div>
  );
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">{kicker}</p>
        <h2 className="mb-10 font-display text-3xl font-semibold text-cream md:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
