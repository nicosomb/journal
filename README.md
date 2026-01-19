# Migration vers Eleventy

Ce dossier contient la migration du blog de Pelican vers Eleventy.

## Installation

```bash
npm install
```

## Utilisation

### Générer le site
```bash
npm run build
```

### Serveur de développement
```bash
npm run serve
```

Le site sera accessible sur http://localhost:8080

### Nettoyer le dossier de sortie
```bash
npm run clean
```

## Structure

- `content/billets/` : Articles du blog (markdown)
- `content/pages/` : Pages statiques
- `content/images/` : Images
- `content/static/` : Fichiers statiques (CV, favicon, etc.)
- `_includes/` : Templates Nunjucks
- `_data/` : Données globales
- `theme/css/` : Feuilles de style
- `output/` : Site généré

## Format des articles

Les articles doivent avoir un front matter au format :

```yaml
---
title: Titre de l'article
date: 2021-09-21 14:11:00
category: billets
layout: article.njk
permalink: billets/2021/09/21/slug/index.html
---
```

Le `permalink` est **critique** pour préserver les URLs existantes.

## Conversion des articles

Pour convertir tous les articles de Pelican vers Eleventy :

```bash
npm run convert
```

Le script :
- Lit tous les fichiers depuis `../content/billets/`
- Convertit le front matter (Title → title, Date → date, etc.)
- Génère les permalinks au format `billets/YYYY/MM/DD/slug/index.html`
- Convertit les références `{static}`, `{filename}`, `{attach}`
- Écrit les fichiers convertis dans `content/billets/`

**Note** : Le script a déjà été exécuté et tous les articles ont été convertis.

## Prochaines étapes

1. ✅ Assets copiés (CSS, fonts, images)
2. ✅ Script de conversion créé et exécuté
3. ⏳ Tester la génération avec `npm run serve`
4. ⏳ Vérifier que les URLs générées correspondent à Pelican
5. ⏳ Créer le feed Atom
6. ⏳ Créer le sitemap
