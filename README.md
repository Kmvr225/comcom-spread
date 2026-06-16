# BONUS — The Store · Site vitrine

Site vitrine pour la marque de mode & création **BONUS — The Store**
(Instagram : [@e_bonus_](https://www.instagram.com/e_bonus_)).
Réalisé par **COM'COM** comme proposition à présenter.

## Aperçu

Page unique, responsive, thème sombre, dans l'esprit du compte Instagram :
slogan « Créons de la valeur ensemble », mise en avant des produits, à propos,
démarche de la marque, newsletter et contact.

## Lancer en local

Aucune installation requise — c'est un site statique.

```bash
# avec Python
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Ou ouvrir directement `index.html` dans un navigateur.

## Structure

```
index.html        Page principale
assets/styles.css Styles (thème sombre, responsive)
assets/script.js  Menu mobile, animations, formulaires (démo)
```

## À personnaliser avant mise en ligne

- **Photos produits** : remplacer les visuels dégradés (`.media-1/2/3` dans
  `styles.css`) par les vraies photos. Glisser les images dans `assets/img/`
  et utiliser `background-image` ou des balises `<img>`.
- **Coordonnées** : adresse e-mail (`contact@bonus-thestore.com`) et lien
  Instagram dans `index.html`.
- **Prix** : actuellement « sur demande » — à compléter si souhaité.
- **Formulaires** : la newsletter et le contact sont en démo front.
  Les brancher sur un service (Formspree, Brevo, Mailchimp, etc.).

## Pistes d'évolution

- Boutique en ligne (paiement) si la cliente veut vendre directement.
- Nom de domaine + hébergement (Netlify / Vercel / GitHub Pages).
- Référencement local et fiche Google.

---
© COM'COM
