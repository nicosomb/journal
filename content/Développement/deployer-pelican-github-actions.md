Title: Déployer son site Pelican avec Github Actions
Date: 2022-03-08 10:00
Category: Billets

[Depuis que je génère ce site avec Pelican]({filename}re-pelican.md), je faisais toute la partie génération / déploiement à la main. À savoir :

```
pelican content -s publishconf.py
rsync -avc --delete output/ user@serveur:/var/www/
```

Absolument rien de versionné, donc pas trop possible de revenir en arrière quelques jours après, etc.

Bref, je me suis posé un peu pour voir comment améliorer ça, et je suis tombé sur cet article : [Deploying a pelican static site with Github actions](https://nielscautaerts.xyz/deploying-a-pelican-static-site-with-github-actions.html).

L'article est bien détaillé et tout est fonctionnel.

Seule contrainte pour l'instant : j'ai désactivé la partie Webmentions parce que le plugin faisait tout péter dans le déploiement, sans comprendre quoique ce soit.
