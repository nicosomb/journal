Title: Un an après, faisons le point sur wallabag.it
Date: 30-11-2017 18:00
Category: wallabag
Tags: wallabag, wallabagit, entrepreneuriat

## Précédémment ...

Précédemment, sur [nicolas.loeuillet.org](https://nicolas.loeuillet.org) :

* [Comment je vais tenter de gagner un peu d'argent avec un projet opensource]({filename}service-wallabag-it.md)
* [Comment je vais tenter de gagner ma vie avec un projet opensource]({filename}comment-je-vais-tenter-de-gagner-ma-vie-avec-un-projet-opensource.md)
* [Retours sur la mise en ligne de wallabag.it]({filename}retours-mise-ligne-wallabagit.md)
* [wallabag fête aujourd'hui ses 4 ans]({filename}wallabag-fete-aujourd-hui-ses-4-ans.md)
* [Mozilla rachète Pocket : pourquoi c’est une bonne et une mauvaise chose pour wallabag]({filename}mozilla-rachete-pocket-pourquoi-c-est-une-bonne-et-une-mauvaise-chose-pour-wallabag.md)

Voici donc les derniers épisodes concernant wallabag sur les douze derniers mois.

Aujourd'hui, il est donc temps de faire un petit point sur [wallabag.it](https://wallabag.it/fr), le service qui vous permet d'utiliser wallabag sans avoir à gérer un hébergement web.

## Espoirs …

On a commencé avec trois mois quasi parfaits :

* déc 2016 : 783€ de CA
* janv 2017 : 621€ de CA
* fév 2017 : 972€ de CA
* 887 utilisateurs
* 241 clients
* 745.000 articles

Toujours plus de visites sur le site. Toujours plus d’articles ajoutés.

On s’est aussi posé pour enfin calculer le coût d’un client à l’année (sur une base de 1.000 clients / an, qui nous semblait réalisable fin février) (parce que non, avant de lancer le service, je n'avais rien calculé pour fixer ce prix de 12€, pas d'étude de marché tout ça) :

* le client paie : **12€**
* on enlève les frais PayPlug et les charges de mon statut AE, il reste 9,83€
* on enlève 0,15€ (SSL) sur une base de 1.000 clients à l'année (et à 144 EUR / an – parce que non, je n'avais pas encore mis Let's Encrypt)
* on enlève 1,80€ (hébergement) sur une base de 1000 clients à l'année (et à 150 EUR / mois)
* il reste donc 7,88€

Un client me coûte donc **4,12€** par an.

## … désillusions …

Et puis le 1er mars, changement de tarif (fin de la période des 3 mois à 9€) et chute du nombre de nouveaux clients. Coïncidence ? Peut-être pas tant que ça : auparavant à 9€ par an, on passe au vrai prix, 12€ par an (donc au dessus du seuil psychologique des 10€). Avec des journées à 8 à 10 clients par moment, on enchaine les journées blanches (chose qui n'était presque jamais arrivée en trois mois).

Je sais bien aussi qu'il y a eu l'effet nouveauté.

Je n'ai jamais rien fait concernant le référencement et le marketing, donc tout se base presque uniquement sur les personnes qui cherchent wallabag et depuis le site wallabag.org, finissent sur wallabag.it.  

J'ai donc réfléchi à quelques solutions rapides à mettre en place (rapides parce que pour rappel, wallabag.it n'est pas mon job principal et donc je n'ai pas tout le temps que je souhaiterais pour améliorer le service – ce n'est pas faute d'idées).

### Mozilla + Pocket = <3

Et en même temps, Mozilla annonce racheter Pocket. Ce service longtemps propriétaire devrait logiquement passer open source dans les ~~semaines~~ mois à venir.

Même si Pocket n'a encore rien changé depuis le rachat, dans la tête de certaines personnes, ça a surement joué au fait que "Pocket appartient maintenant à Mozilla, Mozilla c'est trop bien, donc Pocket c'est trop bien".

Impossible de mesurer l'impact sur wallabag.it.

### Solutions mises en place

* relancer par mail les paiements échoués (début mars), mais ça n'a été fait que quelques fois, car je faisais ça à la main …
* ajouter une offre à 4€ pour 3 mois (mise en place le 13 mars 2017)
* ajout des paiements via PayPal (mise en place le 22 mars 2017), demandé par pas mal de personnes (d'ailleurs aujourd'hui, les paiements viennent principalement de PayPal)
* à l'occasion des 4 ans de wallabag, offre spéciale à 4€ pour un abonnement d'un an
* changement de mise en page sur le site, avec un affichage plus rapide des tarifs (là où avant il fallait cliquer sur Tarifs pour avoir le prix, on l’a dès le début maintenant) (mise en place courant mars)
* sur wallabag.org, ajout d'un lien directement dès la première page pour tester l'appli (avec donc création de compte sur wallabag.it)
* en septembre 2017, changement de tarif pour revenir à 9€ (et 3€ pour trois mois) suite à la lecture de l'article [Les modèles économiques sur Internet](https://www.jdecool.fr/blog/2017/08/02/les-modeles-economiques-sur-internet.html).
* en novembre 2017, mise en place d'un abonnement de soutien (25€ pour un an).

## … et puis bon, c'est pas très grave en fait.

Je me suis aussi rappelé que de toute façon, tant que je ne bosserai pas plus que ça sur le projet, ça serait compliqué de faire mieux en terme de visites et de clients.

Le but, c'est d'avoir une plateforme qui fonctionne tout le temps, à faible coût pour les utilisateurs et qui ne me prenne pas trop de temps au quotidien.

## Quelques chiffres

Pour les stats de wallabag.it, j'utilise Piwik en analysant les logs tous les jours. Donc je ne sais pas si c'est fiable ou pas.

![Graphique des visites de app.wallabag.it sur un an]({static}/images/wallabag-un-an/stats.png#full "Graphique des visites de app.wallabag.it sur un an")

* 606.000 visites
* 18 minutes de durée moyenne sur le site
* 17.000.000 de pages vues
* 1.000.000 de pages vues uniques
* 7.700.000 téléchargements uniques
* une base de données de 65 Go
* 3.454.721  articles
* 26.511 tags
* 3.115 utilisateurs
* 633 abonnements
* niveau chiffre d'affaires :
    * décembre 2016 : 783€
    * janvier 2017 : 621€
    * février : 972€
    * mars : 532€
    * avril : 456€
    * mai : 378€
    * juin : 192€
    * juillet : 284€
    * août : 384€
    * septembre : 249€
    * octobre : 309€
    * novembre : 455€

Dans les choses qu'il faudrait que j'analyse, c'est aussi le taux de renouvellement. Je sais qu'il y en a (des personnes ont régulièrement renouvelé leur abonnement 3 mois, ou alors sont passés de 3 à 12 mois ou alors ont pris plusieurs abonnements pour soutenir le projet), mais je n'ai pas d'outil pour étudier tout ça.

Clairement, ma principale priorité, c'est de répondre très rapidement aux utilisateurs, et de m'assurer que la plateforme marche le plus souvent possible. Je pense que depuis un an, c'est le cas. Donc c'est ma principale satisfaction dans cette aventure.

Comme vous pouvez le voir, je ne peux pas vivre de ce projet, je l'avais envisagé à un moment, oui, mais le fait qu'il y ait quelques contraintes (genre une maison à payer), je n'ai pas pu me permettre de risquer de passer à temps plein là-dessus (j'en ai pourtant eu l'occasion cet été puisque mon précédent employeur a mis la clé sous la porte).

## Pour conclure

![Un kangourou qui boit une bière]({static}/images/wallabag-un-an/kangourou.gif#float-right "Un kangourou qui boit une bière")

Pour conclure cet article uniquement, et pas l'aventure. Parce qu'aujourd'hui, c'est pas du tout prévu de fermer wallabag.it.

Donc, c'est bien, ça marche, je voulais voir si c'était possible de gagner de l'argent avec un projet open source, la réponse est oui. En vivre, si tu ne mets pas les moyens, non.

Dans les prochaines semaines, je vais peut-être être confronté à des soucis d'infrastructure (notamment niveau base de données), donc je vais voir pour optimiser tout ça. J'aurai l'occasion d'y revenir au moment venu dans d'autres billets qui seront plus techniques.

Allez, je vous en sers une bien fraiche, et à l'année prochaine !
