"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { NeedIcon } from "@/components/site/NeedIcon";
import { brand } from "@/lib/brand";
import {
  type Engagement,
  engagementLabels,
  needs,
} from "@/lib/services";

type Selection = Record<string, Engagement>; // serviceId -> engagement

export function ServicesByNeed() {
  const [selection, setSelection] = useState<Selection>({});

  const toggle = (serviceId: string, eng: Engagement) =>
    setSelection((prev) => {
      const next = { ...prev };
      if (next[serviceId] === eng) delete next[serviceId];
      else next[serviceId] = eng;
      return next;
    });

  const selected = useMemo(() => {
    const out: { label: string; eng: Engagement }[] = [];
    for (const group of needs)
      for (const s of group.services)
        if (selection[s.id]) out.push({ label: s.label, eng: selection[s.id] });
    return out;
  }, [selection]);

  const send = async () => {
    const lines = [
      "Bonjour KOOM/KOOM, voici les services qui m'intéressent :",
      "",
      ...selected.map((s) => `• ${s.label} — ${engagementLabels[s.eng]}`),
      "",
      "Pouvez-vous me préparer une proposition ?",
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
    } catch {
      /* clipboard indisponible */
    }
    window.open(brand.instagramUrl, "_blank", "noopener");
  };

  return (
    <div>
      <div className="space-y-14">
        {needs.map((group, gi) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.04 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-panel/60 text-gold">
                <NeedIcon name={group.icon} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">{group.title}</h3>
                <p className="text-sm text-sand/80">{group.tagline}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {group.services.map((s) => (
                <div
                  key={s.id}
                  className={`rounded-2xl border bg-panel/40 p-4 transition-colors ${
                    selection[s.id] ? "border-gold/50" : "border-gold/10 hover:border-gold/25"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-medium text-cream">{s.label}</h4>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-sand/80">{s.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.engagements.map((eng) => (
                      <button
                        key={eng}
                        onClick={() => toggle(s.id, eng)}
                        className={`rounded-full px-3 py-1 text-xs transition-colors ${
                          selection[s.id] === eng
                            ? "bg-gold-grad text-ink"
                            : "border border-gold/20 text-sand hover:border-gold/50 hover:text-cream"
                        }`}
                      >
                        {engagementLabels[eng]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Barre de sélection */}
      {selected.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky bottom-4 z-30 mt-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gold/30 bg-ink/90 px-5 py-4 shadow-panel backdrop-blur"
        >
          <p className="text-sm text-cream">
            {selected.length} service{selected.length > 1 ? "s" : ""} sélectionné
            {selected.length > 1 ? "s" : ""}
          </p>
          <button
            onClick={send}
            className="rounded-full bg-gold-grad px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Envoyer ma sélection sur Instagram
          </button>
        </motion.div>
      )}
    </div>
  );
}
