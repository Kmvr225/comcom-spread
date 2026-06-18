// Logique front-end de LIA / OKTO GUIDE : comprendre le besoin, orienter,
// préparer une demande. Détection par mots-clés, questions guidées, brief final.

export type CategoryId =
  | "visibilite-locale"
  | "menu"
  | "reseaux"
  | "site"
  | "ecommerce"
  | "app"
  | "branding"
  | "contenu-ia"
  | "artiste"
  | "assistant-ia"
  | "autre";

export type Category = {
  id: CategoryId;
  label: string;
  intro: string; // ce que LIA répond quand elle reconnaît le besoin
  recommended: string[]; // services recommandés (labels lisibles)
  keywords: string[];
};

export const categories: Category[] = [
  {
    id: "visibilite-locale",
    label: "Visibilité locale",
    intro: "On va vous rendre visible là où vos clients cherchent : Google Maps, fiche à jour, avis, photos.",
    recommended: ["Google Maps", "Fiche entreprise", "Présence locale"],
    keywords: ["maps", "google", "carte", "localis", "visible", "trouver", "clients", "magasin", "boutique", "commerce", "avis"],
  },
  {
    id: "menu",
    label: "Menu digital",
    intro: "Un menu digital propre en QR code, facile à mettre à jour — parfait pour un restaurant, snack ou café.",
    recommended: ["Menu digital", "Google Maps", "Visuels réseaux"],
    keywords: ["menu", "carte", "restaurant", "resto", "snack", "café", "cafe", "plat", "qr"],
  },
  {
    id: "reseaux",
    label: "Réseaux sociaux",
    intro: "On structure votre présence : compte optimisé, ligne de contenu, planning, et gestion si besoin.",
    recommended: ["Stratégie de contenu", "Optimisation", "Gestion mensuelle"],
    keywords: ["instagram", "insta", "tiktok", "facebook", "réseau", "reseau", "compte", "abonné", "abonne", "post", "contenu", "communauté"],
  },
  {
    id: "site",
    label: "Site web",
    intro: "On crée votre base sur le web : un site clair, premium et rapide qui vous représente.",
    recommended: ["Site vitrine", "Landing page", "Branding"],
    keywords: ["site", "web", "vitrine", "landing", "page", "internet", "présentation"],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    intro: "On met en place votre boutique en ligne : catalogue, commandes et paiement mobile (Wave / Orange Money).",
    recommended: ["E-commerce", "Site vitrine", "Réponses automatiques"],
    keywords: ["vendre", "boutique en ligne", "ecommerce", "e-commerce", "panier", "paiement", "wave", "orange money", "commande", "livraison"],
  },
  {
    id: "app",
    label: "Application",
    intro: "On conçoit votre application web ou mobile : réservation, espace client ou outil sur mesure.",
    recommended: ["Application web", "Application mobile", "Assistant client"],
    keywords: ["app", "application", "mobile", "réservation", "reservation", "plateforme", "espace client", "outil"],
  },
  {
    id: "branding",
    label: "Branding",
    intro: "On pose votre identité : logo, couleurs, ton et univers — une marque qui inspire confiance.",
    recommended: ["Logo", "Identité visuelle", "Branding"],
    keywords: ["marque", "branding", "logo", "identité", "identite", "charte", "image de marque", "lancer ma marque"],
  },
  {
    id: "contenu-ia",
    label: "Contenu IA (photo / vidéo)",
    intro: "On crée vos contenus IA. On commence par une base visuelle (pack de concepts), puis on anime les meilleurs.",
    recommended: ["Images IA", "Vidéos IA", "Publicités IA"],
    keywords: ["ia", "intelligence artificielle", "vidéo", "video", "reels", "clip", "photo", "visuel", "pub", "publicité", "montage"],
  },
  {
    id: "artiste",
    label: "Projet artiste / musique",
    intro: "On construit votre rollout d'artiste : identité, visuels, clips IA, TikTok et promo de votre son.",
    recommended: ["Contenu artistes & marques", "Vidéos IA", "Identité visuelle"],
    keywords: ["artiste", "musique", "son", "rappeur", "chanteur", "clip", "rollout", "promo", "single"],
  },
  {
    id: "assistant-ia",
    label: "Assistant IA",
    intro: "On ajoute un assistant intelligent à votre site ou app : FAQ, commande, réservation ou devis.",
    recommended: ["Assistant client", "Réponses automatiques", "Workflows simples"],
    keywords: ["assistant", "chatbot", "bot", "automatis", "faq", "réponse auto", "reponse auto"],
  },
  {
    id: "autre",
    label: "Autre / je ne sais pas encore",
    intro: "Pas de souci : on part de votre situation et on clarifie ensemble. Décrivez simplement où vous en êtes.",
    recommended: [],
    keywords: [],
  },
];

export function detectCategory(text: string): Category {
  const t = text.toLowerCase();
  let best: { cat: Category; score: number } | null = null;
  for (const cat of categories) {
    let score = 0;
    for (const k of cat.keywords) if (t.includes(k)) score += 1;
    if (score > 0 && (!best || score > best.score)) best = { cat, score };
  }
  return best?.cat ?? categories.find((c) => c.id === "autre")!;
}

// Questions guidées communes (légères, 3-4 max).
export const guidedQuestions = [
  {
    id: "businessType",
    q: "Vous êtes plutôt… ?",
    options: ["Commerce", "Restaurant", "Artiste", "Marque", "PME", "Association", "Startup", "Autre"],
  },
  {
    id: "goal",
    q: "Votre objectif principal ?",
    options: ["Plus de clients", "Plus de visibilité", "Vendre en ligne", "Lancer un projet", "Gagner du temps", "Améliorer mon image"],
  },
  {
    id: "engagement",
    q: "Vous cherchez… ?",
    options: ["Une mise en place", "Un accompagnement mensuel", "Les deux", "Je ne sais pas encore"],
  },
  {
    id: "deadline",
    q: "Pour quand ?",
    options: ["Le plus vite possible", "Ce mois-ci", "Dans 1 à 3 mois", "Pas pressé"],
  },
] as const;

export type Answers = {
  clientMessage: string;
  category: Category;
  businessType?: string;
  goal?: string;
  engagement?: string;
  deadline?: string;
};

export function buildBrief(a: Answers): string {
  const lines = [
    "Bonjour KOOM/KOOM, voici ma demande :",
    "",
    `• Type de projet : ${a.category.label}`,
    a.businessType ? `• Profil : ${a.businessType}` : "",
    a.goal ? `• Objectif : ${a.goal}` : "",
    a.engagement ? `• Formule : ${a.engagement}` : "",
    a.deadline ? `• Délai : ${a.deadline}` : "",
    a.category.recommended.length
      ? `• Pistes suggérées : ${a.category.recommended.join(", ")}`
      : "",
    "",
    `Ma description : ${a.clientMessage || "(à préciser)"}`,
    "",
    "— Préparé avec OKTO, l'assistant de KOOM/KOOM.",
  ];
  return lines.filter((l) => l !== "").join("\n");
}
