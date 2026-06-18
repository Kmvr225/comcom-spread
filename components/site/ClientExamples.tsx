"use client";

import { motion } from "framer-motion";

const examples = [
  { who: "Restaurants", line: "Menu digital, Google Maps, photos qui donnent faim, plus de couverts." },
  { who: "Artistes", line: "Identité, visuels, clips IA et rollout pour faire monter votre son." },
  { who: "Commerces", line: "Visibilité locale, boutique en ligne, paiement mobile, fidélisation." },
  { who: "PME", line: "Site premium, image pro, outils et automatisations qui font gagner du temps." },
  { who: "Marques", line: "Branding fort, contenu régulier, présence cohérente partout." },
  { who: "Associations & institutions", line: "Présence claire, communication structurée, confiance." },
];

export function ClientExamples() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {examples.map((e, i) => (
        <motion.div
          key={e.who}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="rounded-2xl border border-gold/10 bg-panel/40 p-5"
        >
          <h3 className="font-display text-lg font-semibold text-gold">{e.who}</h3>
          <p className="mt-1.5 text-sm leading-snug text-sand/90">{e.line}</p>
        </motion.div>
      ))}
    </div>
  );
}
