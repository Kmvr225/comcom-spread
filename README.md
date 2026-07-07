# KOOM/KOOM — Identité

**KOOM/KOOM** : la marque qui transforme un besoin flou en projet digital clair,
structuré et réalisable. **Née et lancée au Sénégal 🇸🇳.**

> Vous venez avec l'idée. KOOM/KOOM apporte la clarté, la structure et l'accompagnement.
> **Soutenir · Développer · Guider.**

## Statut

**Identité (conservée).** Symbole K∞M, palette chaude premium, typographie, logo en
composant, distinction OKTO OS / OKTO. La page d'accueil est la charte d'identité.

**Site-expérience : à refaire entièrement plus tard.** Le site client (OKTO, services,
devis, etc.) a été retiré volontairement — il sera reconstruit sur cette base d'identité.

## Stack

- **Next.js 14** (App Router, export statique)
- **Tailwind CSS** — tokens de marque dans `tailwind.config.ts`
- **Framer Motion** — apparitions au scroll, lévitation, halos
- **next/font** — Sora (titres) + Inter (textes)

## Identité

- **Nom** — racine wolof *Kom-Kom / Koom-koom* : économie, ressources, développement.
- **Symbole** — `K∞M` : les « OO » en infini ; deux infinis superposés, le bas
  (KOOM/KOOM) soutient le haut (le projet). Bol qui soutient + barres de croissance +
  accent Sénégal (vert · or · rouge). Réfs visuelles dans `public/brand/`.
- **Palette & contenus** — définis dans `lib/brand.ts`.

## OKTO — à ne pas confondre

- **OKTO OS** (interne) — coordonne KOOM/KOOM et les 6 co-workers : RADAR, L'ŒIL,
  LA VOIX, CADRE, ATELIER, RELAIS.
- **OKTO** (visiteurs) — assistant visible. « Parler à OKTO ». *(À reconstruire.)*

## Structure

```
app/            layout, styles globaux, page d'identité (accueil)
components/
  identity/     KoomLogo, KoomSymbol (mark + infini)
  placeholders/ KoomSymbolScene, HeroSplinePlaceholder (slots Spline)
  ui/           Reveal (animation scroll)
lib/brand.ts    tokens & contenus de marque
public/brand/   visuels de référence (logo, emblème)
clients/        projets clients / démos (ex. bonus-test)
```

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique -> out/
```

## Déploiement

**Privé** : le workflow `.github/workflows/deploy-koom.yml` ne publie **pas**
automatiquement (manuel uniquement, et seulement si GitHub Pages est activé).
`basePath` = nom du dépôt au build (`NEXT_PUBLIC_BASE_PATH`).
Instagram : `@koomkoombyspread`.
