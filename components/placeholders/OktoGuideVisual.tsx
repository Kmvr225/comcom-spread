"use client";

import { motion } from "framer-motion";
import { OktoAvatar } from "@/components/identity/OktoAvatar";

/**
 * OktoGuideVisual — visuel d'OKTO GUIDE (assistant visible des clients).
 * Avatar premium + bulle d'accueil. Placeholder du futur rendu 3D / animé.
 */
export function OktoGuideVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-end justify-center ${className}`}
      data-spline-slot="okto-guide"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_35%,rgba(233,185,73,0.16),transparent_70%)]" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <OktoAvatar className="h-72 w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
      </motion.div>

      {/* Bulle d'accueil */}
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute right-2 top-6 z-20 max-w-[180px] rounded-2xl rounded-br-sm border border-gold/20 bg-panel/90 px-4 py-3 text-sm text-cream shadow-panel backdrop-blur"
      >
        Bonjour, je suis <span className="text-gold">OKTO</span>. Décrivez votre besoin,
        je vous aide à le structurer.
      </motion.div>
    </div>
  );
}
