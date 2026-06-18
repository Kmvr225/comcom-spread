import type { CSSProperties } from "react";

/**
 * OktoAvatar — le visage d'OKTO : peau verte (signature), tenue premium dans
 * le thème (col roulé fin + blazer bleu nuit, épingle infini dorée).
 * Classe et rassurant : ni smoking, ni tenue légère, jamais décontracté.
 */
export function OktoAvatar({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={className}
      style={style}
      role="img"
      aria-label="OKTO, l'assistant de KOOM/KOOM"
      fill="none"
    >
      <defs>
        <radialGradient id="okto-skin" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#5FBE8A" />
          <stop offset="70%" stopColor="#46A472" />
          <stop offset="100%" stopColor="#37855C" />
        </radialGradient>
        <linearGradient id="okto-blazer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c2742" />
          <stop offset="100%" stopColor="#131a2d" />
        </linearGradient>
        <linearGradient id="okto-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4D27A" />
          <stop offset="100%" stopColor="#C8902B" />
        </linearGradient>
        <radialGradient id="okto-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E9B949" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E9B949" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="160" cy="150" rx="150" ry="150" fill="url(#okto-glow)" />

      {/* Épaules / blazer */}
      <path
        d="M44 360 C46 286 96 262 132 256 L188 256 C224 262 274 286 276 360 Z"
        fill="url(#okto-blazer)"
      />
      {/* Col roulé fin (warm charcoal) */}
      <path
        d="M120 250 C120 286 200 286 200 250 L196 300 L124 300 Z"
        fill="#2a2218"
      />
      <path d="M126 262 C150 276 170 276 194 262" stroke="#3a3020" strokeWidth="3" fill="none" />
      {/* Revers du blazer */}
      <path d="M132 256 L160 300 L120 322 L108 274 Z" fill="#243150" />
      <path d="M188 256 L160 300 L200 322 L212 274 Z" fill="#243150" />
      <path d="M132 256 L160 300" stroke="#36456e" strokeWidth="2.5" />
      <path d="M188 256 L160 300" stroke="#36456e" strokeWidth="2.5" />
      {/* Épingle infini dorée sur le revers */}
      <g transform="translate(120,292) scale(0.5)">
        <path
          d="M0 0 C0 -16 -26 -16 -26 0 C-26 16 0 16 0 0 C0 -16 26 -16 26 0 C26 16 0 16 0 0 Z"
          stroke="url(#okto-gold)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Cou */}
      <path d="M140 214 L180 214 L180 252 C180 264 140 264 140 252 Z" fill="#3d8c63" />

      {/* Oreilles */}
      <ellipse cx="96" cy="146" rx="11" ry="17" fill="url(#okto-skin)" />
      <ellipse cx="224" cy="146" rx="11" ry="17" fill="url(#okto-skin)" />

      {/* Tête */}
      <ellipse cx="160" cy="138" rx="68" ry="78" fill="url(#okto-skin)" />

      {/* Cheveux nets et courts */}
      <path
        d="M92 132 C86 58 234 58 228 132 C220 104 206 96 160 96 C114 96 100 104 92 132 Z"
        fill="#241a12"
      />
      <path d="M92 132 C100 110 120 100 160 100" stroke="#3a2a1c" strokeWidth="3" fill="none" />

      {/* Sourcils */}
      <path d="M120 120 C130 114 146 114 152 119" stroke="#1c140d" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M168 119 C176 114 192 114 200 120" stroke="#1c140d" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Yeux */}
      <ellipse cx="136" cy="138" rx="12" ry="8.5" fill="#FBF6EA" />
      <ellipse cx="184" cy="138" rx="12" ry="8.5" fill="#FBF6EA" />
      <circle cx="138" cy="139" r="5" fill="#23150c" />
      <circle cx="186" cy="139" r="5" fill="#23150c" />
      <circle cx="140" cy="137" r="1.6" fill="#fff" />
      <circle cx="188" cy="137" r="1.6" fill="#fff" />

      {/* Nez */}
      <path d="M159 144 C156 154 156 158 162 160" stroke="#2f7a54" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Bouche — sobre, posée */}
      <path d="M144 174 C154 182 166 182 176 174" stroke="#27613f" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
