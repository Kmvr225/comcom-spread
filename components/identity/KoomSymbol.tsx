import type { CSSProperties } from "react";

/**
 * InfinityGlyph — le « OO » de KOOM rendu en signe infini couché.
 * Deux lobes continus, dégradé or, ombre portée pour la profondeur 3D.
 */
export function InfinityGlyph({
  className,
  title = "infini",
}: {
  className?: string;
  title?: string;
}) {
  const id = title.replace(/\s+/g, "-");
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4D27A" />
          <stop offset="45%" stopColor="#E9B949" />
          <stop offset="100%" stopColor="#C8902B" />
        </linearGradient>
      </defs>
      {/* Ombre / profondeur */}
      <path
        d="M100 54 C100 18 168 18 168 54 C168 90 100 90 100 54 C100 18 32 18 32 54 C32 90 100 90 100 54 Z"
        stroke="#5A3D12"
        strokeWidth="15"
        strokeLinecap="round"
        opacity="0.5"
        transform="translate(0,4)"
      />
      {/* Trait principal */}
      <path
        d="M100 50 C100 14 168 14 168 50 C168 86 100 86 100 50 C100 14 32 14 32 50 C32 86 100 86 100 50 Z"
        stroke={`url(#grad-${id})`}
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * KoomMark — l'icône complète : l'infini porté par un berceau qui soutient,
 * avec l'accent Sénégal (vert · or · rouge). Reprend la lecture du symbole :
 * le bas soutient, le haut est porté.
 */
export function KoomMark({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={className}
      style={style}
      role="img"
      aria-label="Symbole KOOM/KOOM"
      fill="none"
    >
      <defs>
        <linearGradient id="mark-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4D27A" />
          <stop offset="45%" stopColor="#E9B949" />
          <stop offset="100%" stopColor="#C8902B" />
        </linearGradient>
        <linearGradient id="mark-cradle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1F8A57" />
          <stop offset="42%" stopColor="#E9B949" />
          <stop offset="58%" stopColor="#E9B949" />
          <stop offset="100%" stopColor="#D24A34" />
        </linearGradient>
        <radialGradient id="mark-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E9B949" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E9B949" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo */}
      <ellipse cx="120" cy="80" rx="110" ry="80" fill="url(#mark-glow)" />

      {/* L'infini porté (le haut = le projet) */}
      <g transform="translate(20,30) scale(0.83)">
        <path
          d="M100 54 C100 18 168 18 168 54 C168 90 100 90 100 54 C100 18 32 18 32 54 C32 90 100 90 100 54 Z"
          stroke="#5A3D12"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.5"
          transform="translate(0,4)"
        />
        <path
          d="M100 50 C100 14 168 14 168 50 C168 86 100 86 100 50 C100 14 32 14 32 50 C32 86 100 86 100 50 Z"
          stroke="url(#mark-gold)"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </g>

      {/* Le berceau qui soutient (le bas = KOOM/KOOM) */}
      <path
        d="M44 120 C44 178 196 178 196 120"
        stroke="#5A3D12"
        strokeWidth="20"
        strokeLinecap="round"
        opacity="0.5"
        transform="translate(0,5)"
      />
      <path
        d="M44 120 C44 178 196 178 196 120"
        stroke="url(#mark-cradle)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* Barres de croissance dans le berceau (économie / koom-koom) */}
      <g fill="url(#mark-gold)">
        <rect x="104" y="138" width="9" height="16" rx="2" />
        <rect x="116" y="130" width="9" height="24" rx="2" />
        <rect x="128" y="120" width="9" height="34" rx="2" />
      </g>
    </svg>
  );
}
