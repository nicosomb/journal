---
title: Retours sur la mise en ligne de wallabag.it
date: 2016-12-07 23:00:00
category: billets
layout: article.njk
permalink: billets/2016/12/07/retours-sur-la-mise-en-ligne-de-wallabagit/index.html
---

Bon, on peut souffler un peu. La mise en ligne de wallabag.it s'est plutôt bien passé : beaucoup de retours, quasiment que des retours positifs. [Un article sur NextInpact](http://www.nextinpact.com/news/102394-wallabag-propose-desormais-solution-hebergee-a-12-euros-par-an.htm) (un peu critique, mais ces critiques sont justifiées donc bon).

Il a fallu surtout supporter [l'effet Capital](http://1001pharmacies.github.io/general/effet-capital) (à une moindre échelle, je le reconnais).

Rapidement, des utilisateurs sont arrivés, se sont créés un compte et ont décidé de récupérer leurs milliers d'articles de Pocket ou Instapaper : des gens ont plus de 15.000 articles chez Pocket. Mais vous êtes fous ? Passons.

Ça a surtout permis de tester à grande échelle l'import asynchrone de wallabag. Pour tester, on a testé.

Dans un premier temps, j'avais mis en place Redis pour stocker les articles et les traiter de manière asynchrone. wallabag supporte aussi RabbitMQ, mais Redis étant plus léger, plus simple à installer, ça me paraissait un bon compromis.

J'avais lancé les workers (script qui consomme les articles stockés dans Redis pour les récupérer en ligne et les stocker dans la base de wallabag) en ligne de commande, classiquement. Quasiment une dizaine de workers pour Pocket, pareil pour Instapaper et tous les autres (environ 70 workers).

Ça marchait. Presque.

Il ne fallait pas trop charger la mule, sinon le CPU était vite sous l'eau. Problème constaté : certains workers mourraient, il fallait donc les relancer. Hop, un cron qui vérifie régulièrement le nombre de workers qui tournent et relance ce qu'il faut pour qu'on ait toujours nos 70 workers. [Une ébauche de ce cron se trouve ici](https://gist.github.com/nicosomb/976c7888d653b338fcab1787fa6c75ef).

Pendant que les workers tentaient despérément de consommer les articles, les utilisateurs, eux, continuaient d'envoyer des articles. On est très rapidement arrivé à 100.000 articles à importer. CENT. MILLE. En moins de 24h.

[@bourvill](https://github.com/bourvill), qui développe l'appli wallabag pour iOS, me conseille de ne pas laisser tourner mes worker indéfininement, mais de les faire consommer quelques messages, puis de les tuer pour les relancer. Y'a eu un peu de mieux. Mais c'était pas la forme non plus.

Il me parle ensuite de [supervisor](http://supervisord.org/). Hop, à la poubelle mon cron, supervisor c'est génial. On lui dit : "voici une commande à surveille : si elle meurt, tu la relances."

Extrait de configuration pour mes workers Pocket par exemple :

```
[group:pocket-workers]

[program:pocket-01]
command=php bin/console rabbitmq:consumer -e=prod import_pocket -w -vvv
directory=/var/www/app.wallabag.it/current/
autostart=true
autorestart=true
startretries=3
stderr_logfile=/var/log/import-workers/pocket.err.log
stdout_logfile=/var/log/import-workers/pocket.out.log
user=www-data

[program:pocket-02]
command=php bin/console rabbitmq:consumer -e=prod import_pocket -w -vvv
directory=/var/www/app.wallabag.it/current/
autostart=true
autorestart=true
startretries=3
stderr_logfile=/var/log/import-workers/pocket.err.log
stdout_logfile=/var/log/import-workers/pocket.out.log
user=www-data
```

supervisor est aussi plus pratique pour arrêter / démarrer / ajouter de nouveaux workers.

Bon, c'était mieux pour gérer les workers, mais les problèmes de performance étaient toujours là.

Au bout de 48h, je décide de couper les imports. Le temps de laisser Redis digérer les 50.000 articles avec seulement quelques workers : le fait d'en faire tourner trop faisait ramer l'appli en elle-même, certains utilisateurs avaient des timeout.

Après avoir discuté avec [@j0k3r](https://github.com/j0k3r) et [@bourvill](https://github.com/bourvill) des optimisations possibles, je décide d'abandonner Redis pour installer RabbitMQ.

Et là, surprise : ça trace. Alors que RabbitMQ est plus lourd, il s'en sort mieux. Logique, il est fait pour ça (Redis n'étant à la base pas fait pour ça), si jamais un worker plante, on ne risque pas de perdre de messages. Et le bundle utilisé pour communiquer avec RabbitMQ est surement plus performant que la librairie PHP utilisée pour Redis.

![RabbitMQ](/images/2016-12-07-retours-sur-la-mise-en-ligne-de-wallabagit/rabbitmq.png)

Joie donc. Je décide de faire un test grandeur nature : import de 8.000 articles depuis Pocket avec 15 workers. Pour les 4.000 premiers articles, ça a plutôt bien tourné. Et puis après, c'est devenu plus compliqué, les CPU ont commencé à chauffer.

Grrr.

De la RAM ajoutée et c'était mieux : je décide donc de réouvrir les imports à tout le monde après des tests de plusieurs milliers d'articles (Merci [elpep](https://twitter.com/elpep), [gnppn](https://twitter.com/gnppn) et [lpenou](https://twitter.com/lpenou)).

[@bourvill](https://github.com/bourvill), toujours lui, me dit d'activer aussi la *quality of service* dans RabbitMQ : en gros ça permet de n'affecter que quelques messages à un worker, pour éviter qu'il les prenne tous (le gourmand) et il en laisse ainsi aux autres et le parallélisme peut ainsi fonctionner. J'ai donc appris que sans ça, j'avais beau lancer 42 workers pour une même queue, ça n'aurait rien changé.

Pendant ce temps, et comme depuis le début de l'aventure de toute façon, [Benoit](https://twitter.com/benoitgeorgelin), de [web4all](https://www.web4all.fr/) (mon hébergeur), a toujours été là pour me soutenir, pour changer les perfs des serveurs (ajouter de la RAM, ajouter des CPU, surveiller les serveurs), tester plein de trucs. Un grand merci à lui !

Résultat : ce soir, ça semble se stabiliser, y'a des moments où les CPU chauffent encore, je tue les workers si vraiment les 4 CPU sont à plus de 80% chacun et ça repart. Donc encore un peu de boulot à faire niveau performance, mais c'est beaucoup plus supportable : ça importe et le site est utilisable.

Depuis 3 jours, mon ordi, c'est ça quasi en permanence : surveiller les CPU, voir le nombre d'articles en base, regarder ce qu'il reste à importer.

![Contrôle](/images/2016-12-07-retours-sur-la-mise-en-ligne-de-wallabagit/iterm.jpg)

Aujourd'hui, tout s'est un peu calmé (et c'est pas plus mal), mais ça m'a permis de corriger des bugs dans wallabag (découverts via les imports), d'apprendre plein de choses et de voir que finalement, le service tournait pas trop mal :)

Quelques chiffres :

* 2500 visiteurs uniques en moins de 48h
* 160.000 articles importés en moins de 72h
* une base de données de 2,5 Go
* beaucoup de retours extrêmement positifs : merci !

C'était éprouvant, mais intéressant ! On continue !
