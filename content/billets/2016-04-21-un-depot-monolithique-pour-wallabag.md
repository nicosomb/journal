---
title: Un dépôt monolithique pour wallabag ?
category: billets
date: 2016-04-21 17:00:00
layout: article.njk
permalink: billets/2016/04/21/un-depot-monolithique-pour-wallabag/index.html
---

Un dépôt monolithique, kézaco ? C'est un dépôt global, qui regroupe tous les applications de votre projet.

Par exemple, un dépôt monolithique pour wallabag, ça serait un dépôt qui recense le code source de l'application web, de la documentation, du site web, de l'appli android, de l'image Docker, etc.

## Mais t'es fou ? Tout dans un seul dépôt ?

Oui. Tout.

Quelques exemples de projets qui font ça ? Google, Facebook ou plus proche de wallabag, [Symfony](https://github.com/symfony/symfony).

Dans le projet Symfony, il y a un dépôt qui regroupe tout le code source du framework et un dépôt par composant.  
Par exemple, le composant `Console` a son propre dépôt ici : [https://github.com/symfony/Console](https://github.com/symfony/Console) et se trouve aussi dans le dépôt global : [https://github.com/symfony/symfony/tree/master/src/Symfony/Component/Console](https://github.com/symfony/symfony/tree/master/src/Symfony/Component/Console)

Tout est synchronisé automatiquement (via un outil développé par Fabien Potencier pour remplacer `git subtree`, pas assez performant pour un projet comme Symfony).

L'intérêt ? La personne qui souhaite récupérer tout le projet Symfony peut récupérer le framework complet. La personne qui ne souhaite que le composant `Console` le peut également.

## Quels intérêts pour wallabag ?

Prenons le cas de notre dépôt pour l'image Docker : [https://github.com/wallabag/docker/blob/master/Dockerfile](https://github.com/wallabag/docker/blob/master/Dockerfile)

Dans ce fichier se trouve la dernière version stable de wallabag en dur.

Dans le projet `wallabag/wallabag`, on a aussi des fichiers où cette version est stockée (la documentation, le README, etc.).

Si nous n'avions qu'un seul dépôt, une seule pull request serait nécessaire. Là, il en faut une par dépôt. Donc autant de revues de code nécessaires.

Certains changements (typiquement, des changements dans l'API) pourraient également impacter les applications pour smartphone par exemple. Là encore, un seul dépôt pour gérer tout ça apporterait de la flexibilité pour faire évoluer les projets.

La documentation de tous nos projets se trouverait à un seul endroit.  
Il n'y aurait qu'un seul endroit pour rapporter des bugs : bien plus pratique pour les utilisateurs qui n'auraient pas à se demander si c'est dans tel ou tel dépôt.

## Quelles contraintes ?

C'est là le souci : il faudrait mettre ça en place et j'ai une crainte de tout casser.

Il faudrait aussi mettre en place la synchronisation automatique entre tous les dépôts, pour éviter de devoir ça manuellement à chaque merge.

Quelques inconnues sur la mise en place, mais je compte bien me lancer.  
Je vais surement ouvrir un ticket sur `wallabag/wallabag` pour avoir l'avis des principaux contributeurs à wallabag.

À suivre donc, car je compte avancer là-dessus dans les semaines à venir.
