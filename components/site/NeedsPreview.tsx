"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NeedIcon } from "@/components/site/NeedIcon";
import { needs } from "@/lib/services";

export function NeedsPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {needs.map((group, i) => (
        <motion.div
          key={group.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
        >
          <Link
            href="/services"
            className="group flex h-full flex-col rounded-2xl border border-gold/10 bg-panel/40 p-5 transition-colors hover:border-gold/40"
          >
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-ink/40 text-gold">
              <NeedIcon name={group.icon} />
            </span>
            <h3 className="font-display text-lg font-semibold text-cream">{group.title}</h3>
            <p className="mt-1 text-sm text-sand/80">{group.tagline}</p>
            <span className="mt-3 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
              Voir les services →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
