Title: une alpha pour wallabag v2, enfin
Date: 14-09-2015 21:30
Category: billets
Tags: php, symfony, wallabag

Et voila ! Enfin. Nous venons de publier la première alpha de wallabag v2. Vous pouvez aller [le billet complet sur le blog du projet](https://www.wallabag.org/blog/2015/09/14/wallabag-v2-alpha-finally).

Merci énormément à Jérémy Benoist pour tout le travail qu'il accomplit sur cette version, merci énorménent à Thomas Citharel pour tout ce qu'il fait également pour le projet.

Si vous voulez tester / installer, c'est ici :

    git clone https://github.com/wallabag/wallabag.git -b v2
    cd wallabag
    composer install
    php app/console wallabag:install
    php app/console server:run

N'hésitez pas à tester et à nous remonter les bugs, y'en a forcément. À vos claviers, bons tests !
