---
title: "Retour d'expérience de PayPlug et PayPal pour wallabag.it"
category: billets
date: 2019-07-30 16:00:00
layout: article.njk
tags:
  - wallabag
permalink: billets/2019/07/30/retour-dexperience-de-payplug-et-paypal-pour-wallabagit/index.html
---

Suite à un message de [Marien](https://tutut.delire.party/@marien), voici un petit retour concernant mon usage de PayPlug et de PayPal pour [wallabag.it](https://www.wallabag.it/fr/).
Voici ses questions :
* es-tu content des deux services ?
* comment les as-tu mis en place ?
* comment gèrent-ils les erreurs de paiement ?
* comment ça gère la TVA ?
* comment gérer les paiements automatiques mensuels ?

Je vais aussi en profiter pour rajouter quelques informations concernant ma facturation.

## Es-tu content des deux services ?

Globalement, oui, je suis satisfait des deux services. Au démarrage, je ne proposais pas PayPal, je ne souhaitais travailler qu'avec des solutions européennes. Et puis, de plus en plus d'utilisateurs m'ont demandé pour mettre en place cette solution. Je l'ai donc fait au bout de 3 mois d'ouverture. [J'en parlais d'ailleurs ici](billets/2017/11/30/un-an-apres-faisons-le-point-sur-wallabagit/) (vous pourrez même voir les frais de commission de PayPlug. C'est grosso modo la même chose pour PayPal).

Stat intéressante quant à l'utilisation de PayPlug par les clients de wallabag.it. Voici ci-dessous mes frais liés à l'utilisation de PayPlug (plus de clients utilisent la solution, plus je paie de frais) :

* déc. 2016	41,76 €
* janv. 2017	33,12 €
* févr. 2017	52,32 €
* mars 2017	20,09 €
* avr. 2017	7,95 €
* mai 2017	5,04 €
* juin 2017	1,98 €
* juil. 2017	1,32 €
* août 2017	4,14 €
* sept. 2017	3,51 €
* oct. 2017	3,24 €
* oct. 2017	3,24 €
* nov. 2017	8,76 €

Dès la mise en place de PayPal, les clients ont privilégié l'usage de celui-ci (surement par habitude, on connait beaucoup plus PayPal que PayPlug, ça rassure etc.)

S'il fallait en choisir un, ma préférence va à PayPlug, forcément. Même si la très grande majorité utilise PayPal, je reste attaché à certaines valeurs. Petit plus : on peut personnaliser sa page de paiement avec PayPlug (bon, moi j'ai fait sobre par contre).

![Page de paiement Payplug](/images/2019-07-30-retour-dexperience-de-payplug-et-paypal-pour-wallabagit/payplug.png)

## Comment les as-tu mis en place ?

wallabag c'est un projet PHP basé sur Symfony. J'utilise donc les librairies proposées par PayPlug et PayPal pour gérer les paiements :
* PayPlug : https://github.com/payplug/payplug-php
* PayPal : https://github.com/paypal/PayPal-PHP-SDK

Je stocke en base chaque paiement (on verra plus tard ce que j'en fais) avec les informations nécessaires à l'abonnement des utilisateurs.

Mon code n'est pas disponible, mais je me suis toujours dit de le rendre open source. *Un jour peut-être* ...

## Comment gèrent-ils les erreurs de paiement ?

Pour cette question, je vous laisse lire leur documentation respective.

## Comment ça gère la TVA ?

Je ne suis pas posé la question car je ne suis pas asujetti à la TVA avec mon statut micro entrepreneur. Mais de toute façon, ce n'est pas — à mon avis — pas le role des solutions de paiement en ligne. Un client doit de payer 100 € TTC, il te paie 100 € via PayPal. C'est au niveau facturation que nous allons gérer ça différemment je pense. Si je me trompe, dites-le.

## Comment gérer les paiements automatiques mensuels ?

Sur wallabag.it, aujourd'hui, les paiements automatiques n'existent pas. Il faut que l'utilisateur pense à renouveler son abonnement (ne vous inquiétez pas, il reçoit des mails de relance ;-) ).

Chez PayPlug, il y a un billet chez eux qui explique la démarche : https://blog.payplug.com/fr/creer-un-paiement-en-plusieurs-fois-avec-lapi-de-payplug

## Comment tu gères ta facturation ?

J'utilise le service en ligne [facturation.pro](https://www.facturation.pro). J'en suis très satisfait. J'ai l'abonnement Premium (30€ par an) et c'est suffisant pour moi.
Au tout début, je créais chaque client et chaque facture à la main. Je ne vous raconte pas que je m'amusais bien ... surtout les premiers jours quand il y a eu des pics d'inscription. Et puis en fait, le site propose [une API](https://www.facturation.pro/api-webservice-facturation) et [un service pour Symfony existe](https://github.com/Tiloweb/tiloweb-matpe).

Je me suis donc créé un petit outil de facturation qui me permet de créer un client et de nouvelles factures pour chaque client. Je me rends donc sur mon interface de facturation tous les jours, je crée en un clic les nouveaux clients si nécessaire, et je crée la facture associée à chaque client. Deux clics par client, pas plus. Comparativement à la création via deux formulaires au tout début de wallabag.it ...

Cet outil va chercher dans ma table d'abonnements (dont je parlais tout à l'heure dans **Comment les as-tu mis en place**) et m'affiche ce qu'il faut créer.

## En conclusion

Voila un peu comment ça fonctionne pour wallabag.it avec le paiement et la facturation. Il y a des choses à améliorer, surtout niveau code, mais ça marche. Donc je n'y touche pas trop :-)
