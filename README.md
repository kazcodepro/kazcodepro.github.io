# kaz — portfolio (React + Vite + TypeScript)

Site portfolio prêt pour **GitHub Pages** (`kazcodepro.github.io`).

## Mettre en ligne (méthode automatique, recommandée)

1. Dans ton repo `kazcodepro.github.io`, **supprime les anciens fichiers** (`index.html`, `styles.css`, `script.js`, `videos/`).
2. Copie tout le contenu de ce dossier dans le repo (y compris le dossier caché `.github`).
3. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
4. `git add . && git commit -m "new portfolio" && git push`
5. Après ~1 minute, le site est sur https://kazcodepro.github.io

## Mettre en ligne sans Node (méthode manuelle)

Utilise `kaz-portfolio-dist.zip` : mets son contenu à la racine du repo et choisis
**Settings → Pages → Source : Deploy from a branch → main / (root)**.

## Développer en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère /dist
```

## Modifier le contenu

Tout se change dans **`src/data/profile.ts`** : pseudo, Discord, GitHub, disponibilité, works (vidéos),
compétences et textes de la banderole.

- Ajouter un work : mets `workN.mp4` et `workN.jpg` dans `public/videos/`, puis ajoute une ligne `work(...)`.
- Ajouter des projets / avis : remplace `ProjectsEmpty` par une liste de cartes, ou ajoute les avis dans `announcements`.
- Texte d'intro : `src/pages/Home.tsx`.

## Structure

```
src/
  components/   Header, Ribbon, Marquee, Orb, WorkCard, CopyButton…
  pages/        Home, Projects, Works, About, Contact
  data/         profile.ts (données typées)
  services/     ClipboardService (classe)
  models/       ContactMessage (classe)
  hooks/        useReveal, useDocumentTitle
  styles/       base.css, layout.css, components.css
```

Routage en `HashRouter` (`/#/works`) : aucune configuration serveur nécessaire sur GitHub Pages.
