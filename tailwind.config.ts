import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette KOOM/KOOM — réchauffée (or = accent principal, bleu = secondaire)
        ink: "#0C0A08", // noir chaud, fond le plus profond
        night: "#121726", // bleu nuit chaud
        panel: "#17120D", // surface chaude (cartes, panneaux)
        gold: "#E9B949", // or solaire — accent principal
        "gold-deep": "#C8902B",
        amber: "#E07B39", // chaleur / énergie douce
        blue: "#3B73D6", // bleu tech — secondaire
        "blue-soft": "#6FA0EA",
        green: "#1F8A57", // croissance / Sénégal
        red: "#D24A34", // énergie / action discrète
        cream: "#F4ECDC", // texte clair, chaud
        sand: "#CBB89C", // texte secondaire chaud
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(233,185,73,0.35)",
        "glow-soft": "0 0 120px -20px rgba(233,185,73,0.25)",
        panel: "0 20px 60px -25px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg, #F4D27A 0%, #E9B949 40%, #C8902B 100%)",
        "senegal-arc":
          "linear-gradient(90deg, #1F8A57 0%, #1F8A57 33%, #E9B949 33%, #E9B949 66%, #D24A34 66%, #D24A34 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
