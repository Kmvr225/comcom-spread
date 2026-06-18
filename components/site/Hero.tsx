"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(233,185,73,0.14),transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">
            Digital local · Sénégal
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl">
            Faites <span className="text-gold">grandir</span> votre activité,
            <br className="hidden md:block" /> en ligne.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-sand">
            Sites, applications, visibilité, réseaux, IA. Expliquez votre besoin —
            même flou — et OKTO vous oriente vers la bonne solution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-full bg-gold-grad px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Expliquer mon projet
            </a>
            <a
              href="#experience"
              className="rounded-full border border-gold/30 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-gold/60"
            >
              Parler à OKTO
            </a>
          </div>
          <p className="mt-6 text-sm text-sand/70">
            Vous venez avec l'idée. KOOM/KOOM apporte la clarté, la structure et
            l'accompagnement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-gold/15 shadow-glow-soft"
          >
            <Image
              src="/brand/koom-logo-stacked.png"
              alt="KOOM/KOOM"
              width={900}
              height={1100}
              priority
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
