import { KoomLogo } from "@/components/identity/KoomLogo";
import { KoomMark } from "@/components/identity/KoomSymbol";
import { HeroSplinePlaceholder } from "@/components/placeholders/HeroSplinePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import {
  brand,
  palette,
  typography,
  naming,
  symbolMeaning,
  oktoLevels,
  coworkers,
} from "@/lib/brand";

export default function IdentityPage() {
  return (
    <main className="bg-warm-field min-h-screen overflow-x-hidden">
      {/* Bandeau */}
      <div className="flex items-center justify-center gap-3 border-b border-gold/10 bg-ink/60 py-2 text-[11px] uppercase tracking-[0.3em] text-sand/70">
        <span>Charte d'identité</span>
        <span className="text-gold">·</span>
        <span>{brand.name}</span>
      </div>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">
            Identité de marque
          </p>
          <div className="mb-6">
            <KoomLogo stacked withTagline size="xl" className="items-start" />
          </div>
          <p className="max-w-md text-lg leading-relaxed text-sand">
            {brand.promise}
          </p>
          <p className="mt-6 max-w-md border-l-2 border-gold/40 pl-4 text-cream/90">
            « {brand.mind} »
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-sand/80">
            <Chip>Premium</Chip>
            <Chip>Chaleur sénégalaise</Chip>
            <Chip>Tech, pas froide</Chip>
            <Chip>Accompagnante</Chip>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroSplinePlaceholder />
          <p className="mt-3 text-center text-xs text-sand/60">
            Référence pour la vidéo d'intro / scène 3D Spline (à produire).
          </p>
        </Reveal>
      </section>

      {/* LE NOM */}
      <Section id="nom" kicker="01 — Le nom" title="Pourquoi KOOM/KOOM">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-cream/90">{naming.statement}</p>
            <p className="mt-6 text-sand">
              <span className="text-gold">Racine wolof — </span>
              {naming.root}. {naming.meaning}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-2">
              {naming.ideas.map((idea, i) => (
                <li
                  key={idea}
                  className="flex items-center gap-3 rounded-xl border border-gold/10 bg-panel/60 px-4 py-3 text-sm text-cream/90"
                >
                  <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {idea}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* LE SYMBOLE */}
      <Section id="symbole" kicker="02 — Le symbole" title={symbolMeaning.title}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative flex justify-center rounded-3xl border border-gold/15 bg-gradient-to-b from-night/50 to-ink p-10">
              <KoomMark className="h-64 w-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {symbolMeaning.lines.map((line) => (
                <li key={line} className="flex gap-3 text-lg leading-relaxed text-cream/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {symbolMeaning.values.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-gold-grad px-4 py-1.5 text-sm font-medium text-ink"
                >
                  {v}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-sand/80">{symbolMeaning.note}</p>
          </Reveal>
        </div>
      </Section>

      {/* PALETTE */}
      <Section id="palette" kicker="03 — Couleurs" title="Palette chaude & premium">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {palette.map((c, i) => (
            <Reveal key={c.hex} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-white/5 shadow-panel">
                <div
                  className="flex h-28 items-end p-3"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: c.text === "dark" ? "#0C0A08" : "#F4ECDC" }}
                  >
                    {c.hex}
                  </span>
                </div>
                <div className="bg-panel/80 px-3 py-3">
                  <p className="font-display text-sm text-cream">{c.name}</p>
                  <p className="mt-0.5 text-xs leading-snug text-sand/80">{c.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TYPOGRAPHIE */}
      <Section id="typo" kicker="04 — Typographie" title="Une voix claire et premium">
        <div className="grid gap-6 md:grid-cols-2">
          {[typography.display, typography.sans].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-gold/10 bg-panel/60 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {i === 0 ? "Titres" : "Textes"}
                </p>
                <p
                  className={`mt-3 text-5xl text-cream ${
                    i === 0 ? "font-display font-semibold" : "font-sans"
                  }`}
                >
                  {t.name}
                </p>
                <p className="mt-2 text-sand/80">{t.role}</p>
                <p
                  className={`mt-5 text-lg text-cream/80 ${
                    i === 0 ? "font-display" : "font-sans"
                  }`}
                >
                  KOOM/KOOM — Aa Bb Cc 0123456789
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OKTO : DISTINCTION */}
      <Section id="okto" kicker="05 — Système" title="OKTO OS ≠ OKTO">
        <div className="grid gap-6 md:grid-cols-2">
          {oktoLevels.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-gold/15 bg-gradient-to-b from-night/50 to-ink p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-gold">{o.name}</h3>
                  <span className="rounded-full border border-gold/25 px-3 py-1 text-xs uppercase tracking-wider text-sand">
                    {o.scope}
                  </span>
                </div>
                <p className="mt-4 text-lg text-cream/90">{o.line}</p>
                <p className="mt-2 text-sand/80">{o.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Co-workers */}
        <Reveal delay={0.15}>
          <p className="mt-12 mb-4 text-sm uppercase tracking-[0.25em] text-sand/70">
            Les 6 co-workers coordonnés par OKTO OS
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {coworkers.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-gold/10 bg-panel/60 p-4 text-center transition-colors hover:border-gold/40"
              >
                <p className="font-display text-sm font-semibold text-gold">{c.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-sand/70">{c.role}</p>
                <p className="mt-2 text-xs leading-snug text-cream/80">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* PROCHAINE ÉTAPE */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-night/60 to-ink p-10 text-center md:p-14">
            <KoomLogo size="lg" className="mb-6 inline-flex" />
            <h2 className="font-display text-2xl text-cream md:text-3xl">
              L'identité est posée. Le site-expérience est la prochaine étape.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sand">
              Hero, OKTO (assistant visible), méthode, marché Sénégal, outils et CTA
              « Parler à OKTO » sont construits sur cette base.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-wider text-sand/70">
              <Chip>Next.js</Chip>
              <Chip>Tailwind</Chip>
              <Chip>Framer Motion</Chip>
              <Chip>Placeholders Spline</Chip>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-gold/10 py-8 text-center text-xs text-sand/60">
        {brand.name} — {brand.tagline}. Né et lancé au Sénégal 🇸🇳
      </footer>
    </main>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">{kicker}</p>
        <h2 className="mb-10 font-display text-3xl font-semibold text-cream md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gold/20 bg-panel/50 px-3 py-1">
      {children}
    </span>
  );
}
