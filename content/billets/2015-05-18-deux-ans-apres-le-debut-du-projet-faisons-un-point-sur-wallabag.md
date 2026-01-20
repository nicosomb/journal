---
title: Deux ans après le début du projet, faisons un point sur wallabag
category: billets
date: 2015-05-18 12:00:00
layout: article.njk
permalink: billets/2015/05/18/deux-ans-apres-le-debut-du-projet-faisons-un-point-sur-wallabag/index.html
---

[Le dernier point sur ce blog remonte à Juillet 2014](billets/2014/07/07/un-petit-point-rapide-sur-wallabag-et-son-avancement/).

C'est mal, parce que ça donne l'impression que ça n'a pas bougé alors que oui, en coulisses, ça a pas mal bougé.

Pour rappel, si vous voulez suivre un peu plus l'actualité de wallabag, je vous conseille de [suivre notre compte twitter](https://twitter.com/wallabagapp), beaucoup plus bavard que ce blog.

## v1

Thomas ([@tcitworld](https://twitter.com/tcitworld)) a sorti une 1.9 avec pas mal de nouvelles fonctionnalités, notamment :

* l'export PDF et Mobi
* le partage vers Diaspora et Evernote
* un nouvel installeur (qui vous donne un peu plus d'infos sur la bonne configuration de votre serveur)
* la création publique de comptes. Vous l'activez et tout le monde peut se créer un compte sur votre instance de wallabag

Pour télécharger la 1.9, [c'est sur le site officiel que ça se passe](https://www.wallabag.org/pages/download-wallabag.html).

## v2

Alors là, ça a pas mal bougé du tout. Avec Jérémy ([@j0k](https://twitter.com/j0k)), on a refait pas mal de choses. [Le code se trouve sur la branche v2 du projet](https://github.com/wallabag/wallabag/tree/v2).

On retrouve les fonctionnalités de base de wallabag (ajouter un article, le mettre en favori, etc.). [Une API est disponible](http://v2.wallabag.org/api/doc/), bien pratique pour l'interaction avec des applications tierces.

Jérémy a revu [tout le moteur qui récupère le contenu d'un article](https://github.com/j0k3r/graby), et ça, ça va nous simplifier la vie, parce que l'ancienne méthode fonctionnait, mais d'un point de vue implémentation, c'était pas ça.

Toujours pas de date de livraison prévue, mais on avance bien (pas vite en ce moment, c'est vrai, mais on a une vie également à côté. Oui, je sais, c'est une hérésie d'avoir une vie).

J'aimerais bien une version beta cette année, mais je ne promets rien, tellement j'ai déjà trop menti avec cette v2.

### Smile et wallabag

Smile, mon employeur, m'a accordé 5 jours durant l'année 2015 pour travailler sur la v2 de wallabag. Merci à eux !

Smile est le 1er intégrateur européen de solutions open source et **on embauche**. Contactez-moi si ça vous intéresse !

## Framabag

N'oubliez pas que vous pouvez utiliser wallabag sans avoir de serveur en vous [créant un compte sur Framabag](https://www.framabag.org), un projet soutenu par Framasoft. [Il y a déjà plus de 5.000 comptes sur ce service](https://framabag.org/analytics/). Deux autres chiffres : plus de 1.200 stars sur github et plus de 20.000 téléchargements de wallabag depuis décembre 2013.

Si vous ne savez pas ce qu'est wallabag ou Framabag, ou si vous voulez en parler à votre vieille tante, [allez admirer cette jolie présentation](https://framabag.org/cquoi/#/) créée par Pyves, un gentil contributeur.

## Ça parle de wallabag

### Pocket / Firefox

[Un lien vers mon précédent billet fera l'affaire](billets/2015/05/15/pourquoi-mozilla-se-trompe/).

Je vais juste préciser que je suis en contact avec un haut placé chez Mozilla, mais que ça ne changera pas grand chose à mon avis.

## Rencontres

### Cozy Cloud

En avril, j'ai rencontré Frank et Benjamin, de Cozy Cloud, histoire de voir comment on pourrait bosser ensemble dans l'avenir.  
On a quelques billes pour pouvoir avancer de notre côté et espérer voir wallabag embarqué dans Cozy Cloud. Tout dépendra de toute façon de l'avancée de notre v2.

### RMLL 2015 ?

Début juillet se dérouleront [les 16èmes Rencontres Mondiales du Logiciel Libre à Beauvais](https://2015.rmll.info/). J'ai proposé un sujet, qui concerne wallabag, forcément : "Comment faire sa veille technologique librement". On devrait savoir dans les prochains jours si le sujet a été validé. Si c'est le cas, j'en reparlerai forcément ici.
