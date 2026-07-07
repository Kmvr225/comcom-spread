# SÉNÉGAL PRIVILÈGE — Site vitrine

Site vitrine pour **Sénégal Privilège** : location de véhicules de luxe,
transport privé avec chauffeur et conciergerie haut de gamme à Dakar.
*Le Sénégal, version privilège.* — Réalisé par **COM'COM**.

## Aperçu

Page unique, responsive, **thème noir & or** (luxe, cinématique, sobre).
Typo serif haute couture (Cormorant Garamond) + sans moderne (Inter).
Fond noir mat, lignes dorées fluides, particules discrètes, **profondeur 3D**
(véhicules sur socle réfléchissant qui s'inclinent en perspective au survol),
animations au scroll et éléments sénégalais subtils (baobab en trait doré).

Structure : Hero → Services → La Flotte → L'Expérience (4 piliers) →
La Maison (identité Sénégal) → Contact → Cercle privé (newsletter) → Footer.

## Direction artistique

- **Noir profond** (`#0a0908`) — exclusivité
- **Or chaud** (`#c9a24a`) — prestige
- **Crème** (`#f4efe6`) — accent / texte
- Minimaliste, premium, cinématique. Jamais bling-bling, jamais cliché touristique.

## Code d'accès (aperçu privé)

Le site est protégé par un écran de code (idéal pour une présentation privée).

- **Code par défaut : `PRIVILEGE2026`**
- Pour le changer : éditer `GATE_CODE` en haut de `assets/script.js`.
- ⚠️ Protection « douce » (côté navigateur) : parfaite pour un aperçu pro,
  mais ce n'est pas une sécurité forte.

## Collecte des demandes (réservation + cercle privé)

Les formulaires envoient via **FormSubmit.co** (gratuit, sans inscription).

- Destination définie par `FORM_ENDPOINT` dans `assets/script.js`
  (actuellement `mbenson.valentino@gmail.com` — à remplacer par l'e-mail de
  Sénégal Privilège).
- ⚠️ **Activation unique** : au tout premier envoi, FormSubmit envoie un e-mail
  de confirmation à cette adresse. Il faut cliquer le lien une fois pour activer.

## À personnaliser (coordonnées)

Avant la mise en ligne publique, remplacer les valeurs de démonstration :

- **Téléphone / WhatsApp** : `+221 77 383 09 27` (liens `tel:` et `wa.me` dans
  `index.html`).
- **Instagram** : `@senegalprivilege` (liens dans `index.html`).
- **Photos** : les véhicules sont pour l'instant des silhouettes dessinées en
  trait doré (SVG). Elles peuvent être remplacées par les vrais visuels 9:16
  travaillés (Range Rover Autobiography, Classe S, GLE) sur socle noir brillant.

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

## Stratégie réseaux sociaux

Un plan de lancement Instagram / TikTok (12 premiers posts, hooks, captions,
idées de visuels, ordre de publication, DA noir/or) est disponible dans
[`docs/strategie-social-media.md`](docs/strategie-social-media.md).

---
© COM'COM
