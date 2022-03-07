Title: Nouvelle alpha pour wallabag v2
Date: 2016-01-08 13:37
Category: Billets
Tags: php, symfony, wallabag

Et voila, après 4 mois de travail plus ou moins acharnés, on vient de sortir une nouvelle alpha avec pas mal de nouvelles fonctionnalités bien sympas, comme :

* l'import depuis wallabag v1 et pocket (en 1 clic, via leur API \o/)
* l'assignation automatique de tags quand on ajoute un nouvel article (en fonction de règles que l'on peut créer facilement)
* l'enregistrement public
* la validation via email pour se connecter
* l'export des articles dans une tonne de formats différents (PDF, JSON, EPUB, MOBI, XML, CSV)

Le billet complet (en anglais) est [sur le blog du projet](https://www.wallabag.org/blog/2016/01/08/wallabag-alpha1-v2).

Pour installer / tester :

```
git clone https://github.com/wallabag/wallabag.git -b v2
cd wallabag
composer install
php app/console wallabag:install
php app/console server:run
```

Amusez-vous bien, on retourne bosser !
