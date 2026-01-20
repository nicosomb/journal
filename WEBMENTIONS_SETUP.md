# Configuration des Webmentions

Ce document explique comment configurer les webmentions pour recevoir des commentaires depuis Mastodon et d'autres instances ActivityPub.

## Qu'est-ce que les Webmentions ?

Les webmentions sont un protocole standard qui permet de recevoir des notifications quand quelqu'un mentionne votre contenu sur le web. Cela fonctionne avec :
- Mastodon et autres instances ActivityPub
- Twitter (via des services tiers)
- D'autres sites qui supportent les webmentions

## Configuration avec webmention.io

### 1. Déployer le site avec les balises webmention

**IMPORTANT** : Avant de créer un compte sur webmention.io, vous devez d'abord :
1. Déployer votre site en production (sur Netlify)
2. Vérifier que les balises `<link rel="webmention">` sont présentes dans le `<head>` de vos pages

Vous pouvez vérifier en inspectant le code source d'une page de votre site en ligne.

### 2. Créer un compte et ajouter votre domaine

Une fois le site déployé avec les balises :

1. Allez sur https://webmention.io
2. Créez un compte (gratuit)
3. Ajoutez votre domaine (ex: `loeuillet.org`)
   - webmention.io vérifiera automatiquement que les balises sont présentes
4. Récupérez votre **token API** dans les paramètres du domaine

### 3. Configurer les variables d'environnement

Vous devez définir deux variables d'environnement :

- `WEBMENTION_IO_TOKEN` : Votre token API webmention.io
- `WEBMENTION_IO_DOMAIN` : Votre domaine (ex: `loeuillet.org`)

#### Sur Netlify (recommandé)

1. Allez dans les paramètres de votre site sur Netlify
2. Section "Environment variables"
3. Ajoutez les deux variables :
   - `WEBMENTION_IO_TOKEN` = votre token
   - `WEBMENTION_IO_DOMAIN` = votre domaine

### 3. Vérifier que les balises sont présentes

Les balises `<link rel="webmention">` sont automatiquement ajoutées dans le `<head>` de chaque page. Vérifiez que votre site les affiche correctement.

### 4. Comment ça fonctionne

1. **Quelqu'un mentionne votre article** sur Mastodon (ou ailleurs)
2. **webmention.io détecte** la mention automatiquement
3. **Lors du build**, le script `_data/webmentions.js` récupère les webmentions depuis l'API
4. **Les commentaires s'affichent** automatiquement sous chaque article

### 5. Tester

Pour tester, mentionnez un de vos articles sur Mastodon avec l'URL complète :

```
J'ai écrit un article intéressant : https://votre-site.com/billets/2026/01/19/mon-article/
```

Attendez quelques minutes, puis reconstruisez votre site. Le commentaire devrait apparaître !

## Notes importantes

- Les webmentions sont récupérées **lors du build**, pas en temps réel
- Un cache de 5 minutes est utilisé pour éviter trop de requêtes
- Si le token n'est pas configuré, le système fonctionne mais ne récupère pas de webmentions
- Les webmentions sont organisées par URL de page

## Personnalisation

Vous pouvez personnaliser l'affichage des webmentions en modifiant :
- `_includes/webmentions.njk` : Template d'affichage
- `theme/css/main.css` : Styles CSS (section "Webmentions styles")
