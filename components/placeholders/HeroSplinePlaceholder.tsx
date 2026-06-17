"use client";

import { KoomSymbolScene } from "./KoomSymbolScene";

/**
 * HeroSplinePlaceholder — emplacement réservé à la future scène Spline du hero.
 * Encapsule la scène-symbole en attendant l'intégration 3D / vidéo.
 */
export function HeroSplinePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-night/60 to-ink ${className}`}
      data-spline-slot="hero"
    >
      <KoomSymbolScene className="min-h-[420px] w-full" />
    </div>
  );
}
