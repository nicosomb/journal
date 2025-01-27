Title: wallabag.it en chiffres, un peu de technique
Date: 2020-12-10 16:52
Tags: wallabagit, entrepreneuriat, wallabag
Category: billets

Dernièrement, j'ai publié [le bilan financier de l'année 2020]({filename}quatre-annees.md).

Je vais prendre le temps aujourd'hui de parler de chiffres, mais du côté technique.

Pour rappel, wallabag, ce n'est pas seulement un outil pour "lire plus tard". C'est aussi une manière d'archiver, de sauvegarder le web, afin de ne pas perdre un article, une information, une recette.

## Du côté de la base de données

Au 5 janvier 2021 à 7h49, wallabag.it représente **8.140.776 articles**. Plus de 8 millions d'articles sauvegardés depuis décembre 2016.
C'est aussi plus de **120.000 tags**, ces étiquettes qui vous permettent de classer vos articles.
Vous êtes près de **18.000** à avoir testé l'application sur app.wallabag.it, pour presque **3.500** abonnements (une personne qui se réabonne tous les ans est comptée plusieurs fois dans ce chiffre, peu importe le montant de l'abonnement).

Saviez-vous que vous pouviez écrire des annotations au sein d'un article ? C'est tellement pratique. Vous sélectionnez une zone de texte et vous rédigez une note pour préciser quelque chose. Et bien, sur wallabag.it, il y a **11.500 annotations** de rédigées. C'est peu en comparaison du nombre d'articles, c'est surtout lié au fait que c'est une fonctionnalité peu mise en avant.

Autre fonctionnalité assez méconnue : le système de tags automatiques. C'est tellement puissant ! En fonction du contenu de l'article, du titre ou d'autres éléments, wallabag assigne tout seul le tag qui va bien.
Un exemple ? "Si le titre contient le mot cheval, alors ajoute le tag équitation". Vous configurez cela une fois pour toute, et vous êtes tranquilles.
Vous découvrez cette fonctionnalité ? Vous n'êtes pas les seuls : seulement **1.500 règles** ont été mises en place sur wallabag.it.

Cette étude très rapide de chiffres me permet de me rendre compte qu'il faudrait mettre plus en avant ces fonctionnalités avancées, via un didacticiel par exemple. À réfléchir !

8 millions d'articles, c'est pas mal, mais ça représente quoi sur le disque ? **117 Go ! **

D'ailleurs, en parlant disques, quelle est l'infrastructure utilisée ?

### Infrastructure

Deux serveurs (hébergés chez Hetzner) servent à faire tourner le service. Un pour le serveur web (Nginx + RabbitMQ pour l'import depuis un service externe comme pinboard ou pocket + un serveur mail), l'autre pour pour la base de données.

Tout est sauvegardé quotidiennement via mydumper et borg.

Je n'interviens sur les serveurs que pour le strict minimum. Pour le reste, je passe par [mon super admin sys](https://luc.frama.io/#resume).

## En terme de stats alors ?

J'utilise Matomo (anciennement piwik) pour les stats d'accès. J'utilise le système de parcours des logs Nginx, ce qui me permet par exemple de comptabiliser les accès depuis les applications mobiles (qui se branchent sur l'API).

En 2018, app.wallabag.it a comptabilisé plus de **467.000 visites**.
En 2019, c'était plus de **561.000 visites**.

2020, année de confinement, vous avez été (beaucoup) plus nombreux à utiliser le service : **1,168 million de visites pour 9 millions de pages vues** ! Plus du double par rapport à l'année précédente. Pour 2021, je ne pense pas que je doublerai encore, mais sait-on jamais !

Je ne suis pas expert en étude de stats, donc ça s'arrêtera là pour Matomo. Mais il y a surement plein de choses à faire pour étudier le comportement des utilisateurs et améliorer certaines choses.

![Statistiques d'accès]({static}/images/chiffres-technique/courbe.png#full "Statistiques d'accès")

## Conclusion

Des chiffres impressionnants pour cette année 2020 ... surtout, je le dis souvent, pour un service où je ne fais aucune publicité. Il y a un site internet qui n'a pas bougé depuis 3 ans, je ne fais aucune communication pour aller chercher de nouveaux clients ... bref, que du bouche à oreille et du référencement naturel qui s'est fait au fil de l'eau.

On se donne RDV en janvier 2022 pour 2,5 millions de visites ?
