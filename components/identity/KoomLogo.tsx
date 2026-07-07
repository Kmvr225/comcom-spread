import { InfinityGlyph } from "./KoomSymbol";

/**
 * KoomLogo — le logotype « K∞M » : les « OO » sont remplacés par l'infini.
 * Variantes : simple (une ligne) ou empilé « KOOM / KOOM » (deux lignes).
 */
export function KoomLogo({
  stacked = false,
  withTagline = false,
  className = "",
  size = "md",
}: {
  stacked?: boolean;
  withTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: { text: "text-xl", glyph: "h-5 w-10", gap: "gap-0.5" },
    md: { text: "text-3xl", glyph: "h-7 w-14", gap: "gap-1" },
    lg: { text: "text-5xl", glyph: "h-12 w-24", gap: "gap-1.5" },
    xl: { text: "text-7xl", glyph: "h-[4.5rem] w-36", gap: "gap-2" },
  }[size];

  const word = (
    <span className={`inline-flex items-center ${sizes.gap} font-display font-semibold tracking-tight ${sizes.text}`}>
      <span className="text-cream">K</span>
      <InfinityGlyph className={`${sizes.glyph} drop-shadow-[0_0_12px_rgba(233,185,73,0.35)]`} />
      <span className="text-cream">M</span>
    </span>
  );

  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      {stacked ? (
        <span className="inline-flex flex-col items-center leading-none">
          {word}
          {word}
        </span>
      ) : (
        word
      )}
      {withTagline && (
        <span className="mt-2 text-[0.6em] font-sans uppercase tracking-[0.35em] text-sand">
          Soutenir · Développer · Guider
        </span>
      )}
    </span>
  );
}
