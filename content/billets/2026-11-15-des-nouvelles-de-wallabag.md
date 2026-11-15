---
title: "Fin d'année intense sur wallabag"
date: 2026-11-15 14:00:00
tags:
  - wallabag
  - opensource
url: /billets/2026/11/15/des-nouvelles-de-wallabag/
---

Ça faisait un moment que je n'avais pas pris le temps de faire le point à propos de wallabag.

## wallabag.it

Le service fonctionne bien. Côté support, j'ai enfin outillé un peu les choses : chaque ticket entrant arrive avec les infos d'abonnement du client. J'ai aussi mis en place un moyen de déployer proprement app.wallabag.it (fini de faire git pull sur le serveur 🫣), et j'ai même un environnement de préproduction où je peux déployer une PR en cours. 

Hier, j'ai mis en ligne un nouveau design, [basé sur le travail de Timothée](https://github.com/wallabag/wallabag/discussions/8467), [product designer](https://timotheejulien.fr).  
Comme ce qu'on a commencé à faire l'an dernier avec Yassine, l'idée c'est de participer plus au développement du projet open source grâce aux abonnements de wallabag.it. Pour le design, ça sera pareil : on l'éprouve à grande échelle sur wallabag.it, on corrige les soucis et on le proposera sur wallabag.org dès que possible. 

## wallabag.org

### Prochaine version mineure 

Le gros morceau, c'est la 2.7. Ça fait 3 ans que j'ai dit qu'elle sortirait à la fin de l'année. 

On a publié la première alpha il y a deux jours. Beaucoup de nouvelles fonctionnalités (export Markdown, catalogue OPDS pour les liseuses, choix de la police dans la lecture, etc.) et un peu de ménage technique : fin de PHP 7.4 à 8.1, fin de l'export MOBI ou encore la suppression de l'import Pocket via leur API. 

### Les 2.6.x et les failles de sécurité 

On publie quelques versions patch de wallabag ... avec notamment de plus en plus de failles de sécurité signalées (légitimes ou non d'ailleurs). Les maintaineurs de projet open source vont bientôt passer tout leur temps à ne proposer que des releases de sécurité ... 

## Et la suite ? 

Aucune idée. Ça fait bientôt 14 ans que wallabag existe, 10 ans que wallabag.it est en ligne. Et j'ai jamais rien planifié. Tout se fait au fur et à mesure de nos envies, mais surtout, de nos disponibilités. 

Un grand merci à la super équipe de wallabag.org qui fait que ce projet est encore et toujours un logiciel crédible et fiable. 

Bisous et à bientôt !
