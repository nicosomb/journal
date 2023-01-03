Title: Comment je vais tenter de gagner un peu d'argent avec un projet opensource
Date: 2016-12-05 13:00
Category: wallabag
Tags: wallabag, entrepreneuriat, wallabagit

> Quoi ? Argent et opensource dans la même phrase ?

Oui ! Chiche.

En avril 2013, je créais wallabag ([qui s'appelait alors poche]({filename}poche-pour-remplacer-instapaper-pocket-et-readability.md)) pour mes besoins personnels uniquement.

De fil en aiguille, le projet a pris un peu d'ampleur. Jusqu'à devenir aujourd'hui quelque chose qui me prend beaucoup de temps **tous les jours**.

Nous sommes une équipe de trois développeurs ([j0k3r](https://github.com/j0k3r) et [tcitworld](https://github.com/tcitworld)), accompagnés par les développeurs des applications Android, iOS et Windows Phone et des extensions Chrome et Firefox, et enfin une équipe d'une dizaine de traducteurs.
Ça commence à faire un beau petit projet.

Courant 2013, j'ai lancé un service de création à la demande de wallabag (qui s'appelait alors app.inthepoche.com). En janvier 2014, après avoir rejoint l'équipe de Framasoft, ce service se renommait [Framabag](https://www.framabag.org).
Aujourd'hui, ce service compte [plus de 11.400 comptes](https://framabag.org/analytics/) : la création d'un compte étant gratuite, ces comptes ne sont pas tous utilisés régulièrement, bien évidemment.

Puisque ce projet me prenait de plus en plus de temps, je me suis rapidement mis dans la tête d'essayer de bosser de manière plus officielle dessus, d'en faire mon job. À la manière de [Piwigo.com](http://piwigo.com/), [Kanboard](https://kanboard.net/hosting) / [Miniflux](https://miniflux.net/hosted), [FeedHQ](https://feedhq.org/) ou encore [Wordpress](https://wordpress.com/), pourquoi ne pas tenter de gagner de l'argent avec un projet open source ?

Plusieurs solutions pour ça : se mettre à son compte et tenter d'en vivre à 100%, profiter d'un licenciement, bosser la nuit, etc.

L'idée de me mettre à mon compte exclusivement pour wallabag a vite été écartée : maison à nourrir et enfants à payer (ou presque) ont eu raison de moi.

L'an dernier, j'ai tenté la rupture conventionnelle (qui a l'avantage de vous proposer des aides assez rapidement), ça n'a pas pu se faire.

J'ai dernièrement changé d'employeur, où j'ai pu demander un 80% pour consacrer encore plus de temps au projet. Le risque était minime : moins de salaire OK, mais c'est suffisant pour nourrir la maison et 1 journée par semaine pour wallabag (en plus des soirées déjà consacrées).

Niveau création d'entreprise, plusieurs solutions également : auto entrepreneur, entreprise individuelle, ~~travailler illégalement~~.

Le top aurait été de ne pas choisir le statut auto entrepreneur (statut contraignant, etc.), mais clairement, je n'avais pas envie de me lancer dans une tonne de paperasses : ça m'aurait encore plus fait perdre de temps. Donc du coup, j'ai choisi le statut auto entrepreneur : en 10 minutes (dont 9 minutes pour choisir le bon type d'entreprise à créer), c'est réglé.

Les récents changements dans le secteur des *read it later* (Instapaper racheté par Pinterest, fermeture de Readability) et [tcitworld](https://github.com/tcitworld)) (qui m'a bien remotivé) m'ont poussé à me lancer. **Enfin**.

Coup de chance, en démarrant tout ça, j'ai été contacté par une entreprise pour développer de nouvelles fonctionnalités sur wallabag : ces idées étaient dans notre roadmap, le fait que cette entreprise les souhaitait a juste modifié le calendrier. Ces fonctionnalités ont été (ou seront) toutes intégrées dans l'application open source : tout le monde est gagnant dans l'histoire.

Restait à mettre en place la partie Abonnements et un site vitrine pour présenter le service.

Concernant la partie Abonnements, techniquement c'est un bundle (= "plugin", "module", "addon" si vous n'êtes pas dans le monde Symfony, le framework qui fait tourner wallabag) qui gère tout ça. Puisque les utilisateurs de l'application opensource n'ont pas besoin de ce bundle, je ne me voyais pas l'intégrer à l'application opensource distribuée sur wallabag.org. J'ai donc un fork de ce projet (en dépôt privé pour l'instant) où je récupère les dernières évolutions de wallabag. Si ça vous intéresse, [j'ai suivi cette doc trouvée sur StackOverflow](http://stackoverflow.com/questions/10065526/github-how-to-make-a-fork-of-public-repository-private).
C'est prévu que je rende ce fork opensource. Il me reste juste à nettoyer un peu et ajouter des tests.

Pour le site vitrine, j'ai trouvé un thème tout fait sur [html5up.net](https://html5up.net), j'ai développé un petit projet Silex et voila. Ce site sera lui aussi bientôt *opensourcé*.

L'un des atouts du service wallabag.it que je voulais mettre en avant était le côté vie privée.
C'est pourquoi le choix des partenaires choisis était important : [web4all.fr](https://www.web4all.fr/) pour l'hébergement, [Mailjet](https://fr.mailjet.com/?mjlang=fr) pour l'emailing et [PayPlug](https://www.payplug.com/) pour le paiement en ligne.
Il n'y a que pour le site de support où j'ai mis en place FreshDesk, je n'ai pas encore trouvé d'alternative française ou européenne à moindre frais (si vous en connaissez, prévenez-moi). C'est moins critique car le site de support n'est pas utilisé pour stocker les articles, pour les infos bancaires ou pour les infos type adresse email. Mais il faut remplacer ce service, ça sera peut-être fait avec l'installation d'une application auto hébergée.

Et puis voila, tout était prêt : il fallait bien se lancer un jour ou l'autre. Samedi 3 décembre (le 3 revient souvent dans les dates de wallabag : [3 avril 2013 et le tout premier commit]({filename}poche-pour-remplacer-instapaper-pocket-et-readability.md), [3 octobre 2013 et la v1](https://www.wallabag.org/blog/2013/10/03/117), [3 avril 2016 et la v2](https://www.wallabag.org/blog/2016/04/03/wallabag-v2), [3 octobre 2016 et la v2.1](https://www.wallabag.org/blog/2016/10/03/wallabag-21)), samedi 3 décembre donc, j'ai sauté le pas. Tout s'est mis en place presque sans encombre.

Beaucoup de retours positifs par mail ou sur twitter. Personne pour me dire *Quoi ? Argent et opensource dans la même phrase ?*. Des premiers clients (je ne suis pas encore arrivé aux [22 millions de comptes chez Pocket](https://getpocket.com/) mais je m'en approche tout doucement quand même !), des premiers bugs : bref ça y est. C'est parti.

Aujourd'hui on peut donc se créer un compte sur [wallabag.it](https://www.wallabag.it/fr) pour me payer mes prochaines vacances (profitez-en, y'a une promo jusque début mars !).
Pour moins d'un café par mois, vous avez accès à la toute dernière version de wallabag, avec toutes les fonctionnalités actives (comme par exemple l'import asynchrone depuis Pocket / Instapaper et cie, ce qui vous évitera d'installer RabbitMQ ou Redis sur votre Raspberry).

Vous pouvez aussi installer wallabag chez vous [en téléchargeant tout ça ici](https://www.wallabag.org/). Le projet est et restera open source et gratuit. Ne faites confiance qu'à vous même pour gérer vos données :-)
