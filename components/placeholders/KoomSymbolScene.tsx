"use client";

import { motion } from "framer-motion";
import { KoomMark } from "@/components/identity/KoomSymbol";

/**
 * KoomSymbolScene — placeholder de la scène d'intro (réf. visuels d'annonce).
 * Évoque le rendu 3D final (podium, infini doré, anneau Sénégal, halo).
 * Sera remplacé par une scène Spline / vidéo Higgsfield.
 */
export function KoomSymbolScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Halo de spot */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(233,185,73,0.18),transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        {/* Le symbole, en lévitation */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <KoomMark className="h-56 w-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]" />
        </motion.div>

        {/* Podium + anneau Sénégal */}
        <div className="relative -mt-6 flex flex-col items-center">
          <motion.div
            className="h-3 w-72 rounded-full bg-senegal-arc opacity-90 blur-[0.5px]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mt-2 h-10 w-64 rounded-[50%] bg-gradient-to-b from-panel to-ink shadow-panel" />
          <div className="mt-1 h-2 w-40 rounded-[50%] bg-black/50 blur-md" />
        </div>
      </div>

      {/* Étiquette placeholder */}
      <span className="absolute bottom-2 right-3 rounded-full border border-gold/25 bg-ink/60 px-2.5 py-1 text-[10px] uppercase tracking-widest text-sand/70">
        Scène 3D · à venir
      </span>
    </div>
  );
}
