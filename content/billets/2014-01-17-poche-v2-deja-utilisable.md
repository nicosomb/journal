---
title: poche v2 déjà utilisable
date: 2014-01-17 13:38:00
category: billets
layout: article.njk
permalink: billets/2014/01/17/poche-v2-deja-utilisable/index.html
---

Houla, pas de panique, rien d'extraordinaire pour l'instant.

Mais les fonctionnalités de base sont là :

* sauvegarder un lien
* le marquer comme favori
* l'archiver
* le supprimer

Finalement, poche c'est ça. Uniquement ça.

Les deux points principaux qu'il manque pour pouvoir sortir une première beta :

* un système d'authentification
* les tags

## Côté techno

On continue avec le PHP, le framework choisi est [Silex](http://silex.sensiolabs.org/). Merci à Vincent Jousse pour son aide ! Sans lui, la v2 serait encore en état de végétation. Il a démarré concrètement le projet v2 et j'ai pu — depuis quelques jours — mettre les mains dedans pour moi aussi faire avancer cette version.

Une API est déjà disponible. Vous pouvez [regarder le code source par ici](https://github.com/wallabag/wallabag).

Pour tous ceux qui souhaitent contribuer à poche en le connectant à d'autres projets (Cozy, clients Twitter, etc.), c'est sur cette API qu'il faudra taper (le système d'authentification n'étant pas encore disponible, il faudra l'envisager par la suite, mais ça n'est pas le plus complexe).

Et pour tous ceux qui savent développer en PHP et qui connaissent un peu un framework, vous êtes les bienvenus pour faire avancer la v2 encore plus vite. Si vous maitrisez Symfony ou Silex, venez :) !

## Bon, c'est pas ça, mais on peut tester ?

Bien sur ! Un site de démo est disponible ici : http://v2.inthepoche.com/.

Amusez-vous bien avec ! Et ne cassez pas tout.
