# BONUS — Site vitrine

Site vitrine pour **BONUS** : *The Store* (sacs & pièces pour working women, 2026)
et *Le Mag* (magazine beauté / bien-être / lifestyle, depuis 2024).
Made in Sénégal 🇸🇳 — Instagram : [@e_bonus_](https://www.instagram.com/e_bonus_).
Réalisé par **COM'COM**.

## Aperçu

Page unique, responsive, thème clair (ivoire + terracotta + doré), typo serif,
animations au scroll. Structure : Hero → Ce qui fait Bonus → L'Apéro (événements)
→ Le Store → Le Mag → À propos → Contact → Newsletter.

## Code d'accès (aperçu privé)

Le site est protégé par un écran de code (idéal pour une présentation privée).

- **Code par défaut : `BONUS2026`**
- Pour le changer : éditer `GATE_CODE` en haut de `assets/script.js`.
- ⚠️ Protection « douce » (côté navigateur) : parfaite pour un aperçu pro,
  mais ce n'est pas une sécurité forte.

## Collecte des e-mails (newsletter + contact)

Les formulaires envoient via **FormSubmit.co** (gratuit, sans inscription).

- Destination définie par `FORM_ENDPOINT` dans `assets/script.js`
  (actuellement `mbenson.valentino@gmail.com` — à remplacer par l'e-mail voulu).
- ⚠️ **Activation unique** : au tout premier envoi, FormSubmit envoie un e-mail
  de confirmation à cette adresse. Il faut cliquer le lien une fois pour activer.

## Mise en ligne (GitHub Pages)

Un workflow (`.github/workflows/deploy.yml`) publie le site automatiquement.

**Étape manuelle unique** (à faire une fois sur GitHub) :
1. Aller dans **Settings → Pages** du dépôt.
2. Sous **Build and deployment → Source**, choisir **GitHub Actions**.
3. Le prochain push (ou relance du workflow) publie le site.

URL une fois en ligne : `https://kmvr225.github.io/comcom-spread/`

## Lancer en local

```bash
python3 -m http.server 8000   # puis http://localhost:8000
```

## À personnaliser

- **Photos** : remplacer les dégradés (`.media-*`, `.mag-*` dans `styles.css`)
  par les vraies photos (sacs, couverture du Numéro 01, Apéro).
- **Prix** : actuellement « sur demande / en vente ».
- **Code d'accès** et **e-mail de réception** : voir ci-dessus.

---
© COM'COM
