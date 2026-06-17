# KOOM/KOOM — Identité & site-expérience

Refonte de **COM-COM** en **KOOM/KOOM** : la marque qui transforme un besoin flou
en projet digital clair, structuré et réalisable. **Née et lancée au Sénégal 🇸🇳.**

> Vous venez avec l'idée. KOOM/KOOM apporte la clarté, la structure et l'accompagnement.
> **Soutenir · Développer · Guider.**

## Statut

**Phase 1 — Identité (livrée).** Symbole K∞M, palette chaude premium, typographie,
logo en composant, distinction OKTO OS / OKTO GUIDE, page de présentation de marque.
**Phase 2 — Site-expérience complet** (hero, OKTO GUIDE V1, méthode, marché, outils,
CTA « Parler à OKTO ») : à construire sur ce socle.

## Stack

- **Next.js 14** (App Router, export statique pour GitHub Pages)
- **Tailwind CSS** — tokens de marque dans `tailwind.config.ts`
- **Framer Motion** — apparitions au scroll, lévitation, halos
- **next/font** — Sora (titres) + Inter (textes)

## Identité

- **Nom** — racine wolof *Kom-Kom / Koom-koom* : économie, ressources, développement.
- **Symbole** — `K∞M` : les « OO » en infini ; deux infinis superposés, le bas
  (KOOM/KOOM) soutient le haut (le projet). Berceau + barres de croissance + accent
  Sénégal (vert · or · rouge). Réfs visuelles d'annonce → futur rendu 3D Spline.
- **Palette** — or solaire (accent principal), bleu nuit chaud, bleu tech (secondaire),
  vert croissance, rouge énergie, blanc cassé. Définie dans `lib/brand.ts`.

## OKTO — à ne pas confondre

- **OKTO OS** (interne) — coordonne KOOM/KOOM et les 6 co-workers : RADAR, L'ŒIL,
  LA VOIX, CADRE, ATELIER, RELAIS.
- **OKTO GUIDE** (visiteurs) — assistant qui comprend, classe et reformule le besoin
  client en brief clair. *(Phase 2.)*

## Structure

```
app/            layout, styles globaux, page d'identité
components/
  identity/     KoomLogo, KoomSymbol (mark + infini)
  placeholders/ KoomSymbolScene, HeroSplinePlaceholder (slots Spline)
  ui/           Reveal (animation scroll)
lib/brand.ts    tokens & contenus de marque (source unique)
clients/        projets clients / démos (ex. bonus-test)
```

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique -> out/
```

## Déploiement

Workflow `.github/workflows/deploy-koom.yml` : build Next.js + publication GitHub
Pages à chaque push sur la branche. Activer une fois : **Settings → Pages → Source : GitHub Actions**.
URL : `https://kmvr225.github.io/comcom-spread/`
