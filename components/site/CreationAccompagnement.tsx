import { Reveal } from "@/components/ui/Reveal";

export function CreationAccompagnement() {
  const cards = [
    {
      tag: "Au départ",
      title: "Mise en place",
      desc: "On crée et on lance : Google Maps, menu digital, site, réseaux, identité, contenu IA. Une base propre, prête à servir.",
      points: ["Création / configuration", "Livraison clé en main", "Vous êtes autonome ensuite"],
    },
    {
      tag: "Dans la durée",
      title: "Gestion mensuelle",
      desc: "On s'occupe du suivi : publications, mises à jour, contenu, maintenance, améliorations. Vous avancez, on reste à côté.",
      points: ["Suivi régulier", "Contenu & mises à jour", "Accompagnement continu"],
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.1}>
          <div className="h-full rounded-3xl border border-gold/15 bg-gradient-to-b from-night/50 to-ink p-8">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">{c.tag}</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-cream">{c.title}</h3>
            <p className="mt-3 text-sand/90">{c.desc}</p>
            <ul className="mt-5 space-y-2">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-cream/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
      <Reveal className="md:col-span-2">
        <p className="text-center text-sm text-sand/80">
          Sous chaque service, vous choisissez naturellement : <span className="text-cream">Mise en place</span>,{" "}
          <span className="text-cream">Gestion mensuelle</span> ou{" "}
          <span className="text-cream">les deux</span>.
        </p>
      </Reveal>
    </div>
  );
}
