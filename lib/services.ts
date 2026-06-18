// Services KOOM/KOOM organisés par BESOIN client (pas par packs rigides).
// Chaque service peut être proposé en mise en place, gestion mensuelle, ou les deux.

export type Engagement = "mise-en-place" | "gestion" | "les-deux";

export type Service = {
  id: string;
  label: string;
  desc: string;
  engagements: Engagement[];
};

export type NeedGroup = {
  id: string;
  title: string;
  tagline: string;
  icon: string; // clé d'icône (rendue côté composant)
  services: Service[];
};

const ALL: Engagement[] = ["mise-en-place", "gestion", "les-deux"];

export const needs: NeedGroup[] = [
  {
    id: "visibilite",
    title: "Visibilité",
    tagline: "Être trouvé, localement.",
    icon: "pin",
    services: [
      { id: "google-maps", label: "Google Maps", desc: "Apparaître sur la carte, horaires, photos, avis.", engagements: ALL },
      { id: "fiche", label: "Fiche entreprise", desc: "Une présence claire et à jour.", engagements: ALL },
      { id: "menu", label: "Menu digital", desc: "Carte en QR code, mise à jour facile.", engagements: ALL },
      { id: "presence", label: "Présence locale", desc: "Être visible là où vos clients cherchent.", engagements: ["mise-en-place", "gestion"] },
    ],
  },
  {
    id: "image",
    title: "Image",
    tagline: "Une identité qui inspire confiance.",
    icon: "spark",
    services: [
      { id: "branding", label: "Branding", desc: "Positionnement, ton, univers de marque.", engagements: ["mise-en-place"] },
      { id: "logo", label: "Logo", desc: "Un symbole simple, premium, mémorable.", engagements: ["mise-en-place"] },
      { id: "identite", label: "Identité visuelle", desc: "Couleurs, typographies, déclinaisons.", engagements: ["mise-en-place"] },
      { id: "visuels", label: "Visuels réseaux", desc: "Templates et visuels prêts à publier.", engagements: ALL },
    ],
  },
  {
    id: "reseaux",
    title: "Réseaux sociaux",
    tagline: "Une présence vivante et régulière.",
    icon: "chat",
    services: [
      { id: "creation-compte", label: "Création de compte", desc: "Mise en place propre et optimisée.", engagements: ["mise-en-place"] },
      { id: "optimisation", label: "Optimisation", desc: "Bio, highlights, cohérence, repositionnement.", engagements: ["mise-en-place", "gestion"] },
      { id: "strategie", label: "Stratégie de contenu", desc: "Lignes éditoriales, formats, planning.", engagements: ALL },
      { id: "gestion-rs", label: "Gestion mensuelle", desc: "Publications et suivi en continu.", engagements: ["gestion"] },
    ],
  },
  {
    id: "digital",
    title: "Site & digital",
    tagline: "Votre base sur le web.",
    icon: "code",
    services: [
      { id: "vitrine", label: "Site vitrine", desc: "Présentation claire et premium.", engagements: ALL },
      { id: "landing", label: "Landing page", desc: "Une page pour convertir.", engagements: ["mise-en-place", "gestion"] },
      { id: "ecommerce", label: "E-commerce", desc: "Catalogue, commandes, paiement mobile (Wave / OM).", engagements: ALL },
      { id: "webapp", label: "Application web", desc: "Réservation, espace client, outil interne.", engagements: ALL },
      { id: "mobile", label: "Application mobile", desc: "Une app sur le téléphone de vos clients.", engagements: ALL },
    ],
  },
  {
    id: "ia",
    title: "IA & contenu",
    tagline: "Du contenu qui se démarque.",
    icon: "ai",
    services: [
      { id: "images-ia", label: "Images IA", desc: "Visuels produits, concepts, déclinaisons.", engagements: ALL },
      { id: "videos-ia", label: "Vidéos IA", desc: "Reels, TikTok, clips, publicités courtes.", engagements: ALL },
      { id: "pubs-ia", label: "Publicités IA", desc: "Créatives pensées pour performer.", engagements: ALL },
      { id: "contenu-artiste", label: "Contenu artistes & marques", desc: "Rollout, identité, promo de son.", engagements: ALL },
    ],
  },
  {
    id: "automatisation",
    title: "Automatisation",
    tagline: "Gagner du temps, ne rien rater.",
    icon: "gear",
    services: [
      { id: "assistant", label: "Assistant client", desc: "FAQ, commande, réservation, diagnostic.", engagements: ALL },
      { id: "reponses", label: "Réponses automatiques", desc: "Répondre vite, même hors ligne.", engagements: ["mise-en-place", "gestion"] },
      { id: "outils", label: "Outils internes", desc: "Petits outils sur mesure.", engagements: ALL },
      { id: "workflows", label: "Workflows simples", desc: "Automatiser les tâches répétitives.", engagements: ALL },
    ],
  },
];

export const engagementLabels: Record<Engagement, string> = {
  "mise-en-place": "Mise en place",
  gestion: "Gestion mensuelle",
  "les-deux": "Les deux",
};
