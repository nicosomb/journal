Title: Une collaboration entre ownCloud et poche
Date: 22-01-2014 12:37
Category: wallabag
Tags: wallabag

Hier, une petite surprise est arrivée sur le projet poche hébergé sur GitHub : Jan-Christoph Borchardt, du projet ownCloud, créait un nouveau ticket, **Possibility of collaboration between Poche and ownCloud** ([#408](https://github.com/wallabag/wallabag/issues/408)).

Il nous propose de travailler ensemble pour que ownCloud ait une application de read-it-later. Plutôt que de devoir la développer de zéro, autant ne pas réinventer la roue et utiliser ce qui se fait déjà en open source.

Avec Vincent Jousse, nous travaillons depuis la fin 2013 sur la v2. C'est donc le bon moment pour réfléchir à cette collaboration.

C'est bien entendu une proposition qui m'enchante. **Travailler main dans la main avec ownCloud, ça serait cool !**

## Comment ça se concrétiserait ?

Nous créons poche v2 avec son API, etc. et ownCloud crée une application qui vient se connecter sur notre API. Nous ne mettons pas les mains dans le code d'ownCloud, et ça c'est pas mal. Nous ne sommes pas dépendants non plus d'ownCloud, car ils utiliseront notre API.
Tout est donc possible pour envisager d'autres collaborations (coucou MyCozyCloud :-) ) par la suite.

Techniquement, après une discussion sur IRC avec Vincent (`##poche` sur freenode), on aurait donc :
* un serveur poche (notre API), codé en PHP avec Silex
* un client poche, peut-être codé avec AngularJS. Ce client nous permettrait d'éviter les applications tierces pour Android / iPhone / etc. La partie publique gérerait le stockage hors ligne (localStorage), tout ça tout ça. Une grosse épine enlevée donc (maintenance des applis tierces, etc.).

Si le sujet vous intéresse, on peut en parler sur le Google Group (oui je sais, Google ...) ouvert pour les développeurs : [https://groups.google.com/forum/#!forum/poche-dev](https://groups.google.com/forum/#%21forum/poche-dev).

La priorité aujourd'hui est donc de **bien faire avancer la partie serveur**. Une fois qu'on aura quelque chose de stable (authentification, récupération d'articles, etc.), on pourra commencer à avancer sur la partie client.

Niveau délai, j'aimerais bien que l'API soit opérationnelle pour le premier semestre 2014. Il ne reste déjà plus que 5 mois. Au boulot.
Pour voir où on en est, vous pouvez aller voir le dépôt GitHub : [https://github.com/inthepoche/poche/tree/v2-silex](https://github.com/wallabag/wallabag). Pour rappel, on a mis en place un site de démo : [http://v2.inthepoche.com/](http://v2.wallabag.org/) (site qui peut à tout moment être complètement cassé, selon nos différents essais).

J'y retourne, on a _du pain dans la poche_ !
