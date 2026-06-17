// Tokens et contenus de marque KOOM/KOOM — source unique pour la charte d'identité.

export const brand = {
  name: "KOOM/KOOM",
  former: "COM-COM",
  tagline: "Soutenir · Développer · Guider",
  mind: "Vous venez avec l'idée. KOOM/KOOM apporte la clarté, la structure et l'accompagnement.",
  promise:
    "Transformer un besoin flou en projet digital clair, structuré et réalisable.",
};

export type PaletteColor = {
  name: string;
  hex: string;
  role: string;
  text?: "light" | "dark";
};

export const palette: PaletteColor[] = [
  { name: "Or solaire", hex: "#E9B949", role: "Accent principal — chaleur, valeur, soleil", text: "dark" },
  { name: "Or profond", hex: "#C8902B", role: "Profondeur métallique du symbole", text: "dark" },
  { name: "Ambre", hex: "#E07B39", role: "Énergie douce, chaleur humaine", text: "dark" },
  { name: "Bleu nuit", hex: "#121726", role: "Fond premium, profondeur tech", text: "light" },
  { name: "Bleu tech", hex: "#3B73D6", role: "Accent secondaire — technologie", text: "light" },
  { name: "Vert croissance", hex: "#1F8A57", role: "Développement, Sénégal", text: "light" },
  { name: "Rouge énergie", hex: "#D24A34", role: "Action, accent discret", text: "light" },
  { name: "Noir chaud", hex: "#0C0A08", role: "Le fond le plus profond", text: "light" },
  { name: "Blanc cassé", hex: "#F4ECDC", role: "Lisibilité, texte clair chaud", text: "dark" },
];

export const typography = {
  display: {
    name: "Sora",
    role: "Titres — géométrique, premium, tech sans froideur",
  },
  sans: {
    name: "Inter",
    role: "Textes — clarté, accessibilité, lisibilité",
  },
};

// Le sens du nom — racine wolof.
export const naming = {
  root: "Kom-Kom / Koom-koom",
  meaning:
    "En wolof, le nom renvoie à l'économie, aux ressources, à la gestion, à l'épargne, à l'acquisition et à la capacité de capitaliser.",
  ideas: [
    "Faire grandir une activité",
    "Gérer les ressources",
    "Structurer une économie",
    "Développer un projet",
    "Transformer une présence en valeur",
    "Accompagner vers plus de solidité",
  ],
  statement:
    "KOOM/KOOM vient d'une idée simple : aider les projets à se structurer, se rendre visibles et se développer. En wolof, Kom-Kom renvoie à l'économie, aux ressources et au développement. Notre rôle est de transformer un besoin flou en projet clair, utile et exploitable.",
};

// Lecture du symbole.
export const symbolMeaning = {
  title: "Le symbole K∞M",
  lines: [
    "Les deux « O » deviennent un signe infini couché.",
    "Deux infinis se superposent : celui du bas soutient, celui du haut est porté.",
    "Le bas, c'est KOOM/KOOM. Le haut, c'est votre projet.",
  ],
  values: ["Soutien", "Stabilité", "Continuité", "Développement"],
  note: "Une structure qui soutient — jamais une faiblesse, jamais une mascotte.",
};

// Distinction OKTO — à ne jamais confondre.
export const oktoLevels = [
  {
    id: "os",
    name: "OKTO OS",
    scope: "Interne",
    line: "OKTO OS organise KOOM/KOOM.",
    desc: "Le cerveau interne : il coordonne les co-workers et le travail de l'agence.",
  },
  {
    id: "guide",
    name: "OKTO GUIDE",
    scope: "Visiteurs",
    line: "OKTO GUIDE comprend les clients.",
    desc: "L'assistant visible : il aide à expliquer, classer et reformuler un besoin en brief clair.",
  },
];

// Les 6 co-workers internes coordonnés par OKTO OS.
export const coworkers = [
  { name: "RADAR", role: "Prospection", desc: "Repère les opportunités." },
  { name: "L'ŒIL", role: "Audit / diagnostic", desc: "Analyse les besoins." },
  { name: "LA VOIX", role: "Approche commerciale", desc: "Prépare l'approche." },
  { name: "CADRE", role: "Organisation / gestion", desc: "Organise tâches et devis." },
  { name: "ATELIER", role: "Création / production", desc: "Produit les contenus." },
  { name: "RELAIS", role: "Suivi client", desc: "Assure le suivi." },
];
