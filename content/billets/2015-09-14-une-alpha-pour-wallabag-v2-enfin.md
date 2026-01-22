---
title: une alpha pour wallabag v2, enfin
category: billets
date: 2015-09-14 21:30:00
layout: article.njk
tags:
  - wallabag
  - opensource
permalink: billets/2015/09/14/une-alpha-pour-wallabag-v2-enfin/index.html
---

Et voila ! Enfin. Nous venons de publier la première alpha de wallabag v2. Vous pouvez aller [le billet complet sur le blog du projet](https://www.wallabag.org/blog/2015/09/14/wallabag-v2-alpha-finally).

Merci énormément à Jérémy Benoist pour tout le travail qu'il accomplit sur cette version, merci énorménent à Thomas Citharel pour tout ce qu'il fait également pour le projet.

Si vous voulez tester / installer, c'est ici :

    git clone https://github.com/wallabag/wallabag.git -b v2
    cd wallabag
    composer install
    php app/console wallabag:install
    php app/console server:run

N'hésitez pas à tester et à nous remonter les bugs, y'en a forcément. À vos claviers, bons tests !
