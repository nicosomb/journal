---
title: Mise en place des webmentions
category: billets
date: 2026-01-22 07:00:00
layout: article.njk
permalink: billets/2026/01/22/webmentions/index.html
---

Il y a fort fort longtemps, sur ce site, on pouvait commenter via un formulaire classique (coucou le spam). Puis via Disqus (coucou le service externe pas respectueux de la vie privée). Puis plus rien. Puis via l'envoi de mail. 

Et puis j'ai tenté la mise en place des webmentions, [sous l'impulsion de Nicolas](https://nicolas-hoizey.com/articles/2017/07/27/so-long-disqus-hello-webmentions/#how-does-it-work-on-this-site) (ça va le melon ?) (pas moi, un autre, j'ai pas encore l'habitude de parler de moi à la troisième personne) (non mais par contre, tu fais la conversation tout seul là).  
Mais ce n'était pas absolument pas pratique (site généré en local via Pelican, un outil Python). [J'en parlais d'ailleurs rapidement ici](/billets/2022/03/08/deployer-son-site-pelican-avec-github-actions/index.html). 

[La récente migration vers l'écosystème javascript](/billets/2026/01/19/migration-blog-eleventy/index.html) m'a permis de repenser à cette solution. 

C'est donc non sans une certaine émotion que j'ai le plaisir de vous annoncer le retour fonctionnel des webmentions : vous pouvez me notifier depuis votre blog (si vous avez les webmentions en place) ou depuis le Fediverse (avec votre compte Mastodon par exemple). Il suffit juste de coller l'URL d'un de mes billets dans votre message et le tour est joué. 
 
 Techniquement, les mentions sont récupérées (que ça soit un partage, un commentaire ou un "j'aime") et publiées via un cron sur Netlify qui déploie ce site toutes les heures. [Vous avez un exemple du rendu ici par exemple](/billets/2026/01/21/pourquoi-et-comment-je-souhaite-rester-le-maire-de-ma-commune/index.html#webmentions).

 Seul petit souci connu : les emojis dans les pseudos ou dans les réponses s'affichent sous forme de point d'interrogation. [Un ticket est ouvert côté webmention.io](https://github.com/aaronpk/webmention.io/issues/203#issuecomment-3782647978). 
 
Allez, lâchez vos comms, comme disent les jeunes !
