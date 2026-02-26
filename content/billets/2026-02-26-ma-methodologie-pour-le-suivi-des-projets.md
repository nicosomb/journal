---
title: Ma méthodologie pour le suivi des projets à la mairie
category: billets
date: 2026-02-26 14:00:00
layout: article.njk
tags:
  - mairie
  - outillage
permalink: billets/2026/02/26/ma-methodologie-pour-le-suivi-des-projets/index.html
---

Puisque ça peut éventuellement intéresser certain-es d'entre vous, j'avais en tête depuis un moment de partager ici ma manière de suivre les projets en cours à la mairie.

Je vais lister ci-dessous les différentes manières que j'ai d'effectuer des demandes, de remonter des problèmes ou encore de prendre des notes lors des rendez-vous. 

Si vous avez des idées pour améliorer mon quotidien, n'hésitez pas. 

## Suivi des mails envoyés

Les mails, c'est vraiment le point le plus complexe à suivre. On envoie un mail, il arrive chez les personnes concernées, mais on ne sait pas ce qu'il devient. 

Et le pire : à partir du moment où j'ai envoyé le mail (ou presque), mon cerveau oublie que j'ai effectué la demande.  
Et quelques semaines / mois plus tard, hop, mon cerveau se réveille : « hey, mais qu'en est-il de cette demande ? ». 

Voici donc ce que j'ai mis en place sur ma boite mail (c'est du Gmail, j'évoquais le sujet en 2021 sur [24 jours de web](https://www.24joursdeweb.fr/2021/comment-jai-reussi-non-a-remplacer-les-suites-proprietaires-dans-notre-mairie)).

### Messages suivis ⭐️

C'est une fonctionnalité native de Gmail, il faut cliquer sur la petite étoile pour que le mail se retrouve dans cette catégorie. J'y stocke des mails que j'estime nécessaires d'avoir sous la main, et que je souhaite donc retrouver rapidement. 

À ce jour, il y en a 12. Ça peut être un mail où je suis en copie et dont je veux voir s'il y a une avancée, ça peut être un mail qui a une pièce jointe importante en ce moment (typiquement, le nombre de documents dont on peut être remboursé durant la campagne des municipales, etc). 

C'est une catégorie "vivante" : les mails ne sont pas destinés à rester là plusieurs mois ou années. 

### Important ↠

Ici aussi, c'est une fonctionnalité native de Gmail. Elle ressemble à la catégorie précédente, sauf que j'y stocke des infos plus "froides" (des sujets statiques). Aujourd'hui, il y a 7 mails dedans. 

C'est pas mal de mails qui concernant des identifiants ou numéros de téléphone d'urgence (astreinte en cas de souci électrique etc). Ça pourrait éventuellement être regroupé avec la les messages suivis, mais ça évite aussi d'en avoir trop sous la même catégorie. 

### Pas de réponse 🏷️ 

Alors, là, rien de natif. C'est un script hébergé sur la plateforme Apps Scripts de Google et qui tourne une fois par jour. 

Il parcourt les emails envoyés dans la période "entre 180 jours et 3 jours" par rapport à la date courante. Pour chaque mail où je suis le dernier correspond à avoir envoyé une réponse, il ajoute une étiquette "Pas-reponse".  
Il est possible de mettre une discussion en sourdine, en lui appliquant l'étiquette "Ignorer-pas-reponse". 

Alors, évidemment, c'est pas fiable à 100%, puisque certaines discussions se terminent avec un de mes mails. Mais j'ai l'impression que c'est toujours mieux que d'oublier certains sujets. 

Aujourd'hui, j'ai 10 mails qui ont cette étiquette. 

Vous trouverez ma source d'inspiration ici : [Find emails with no reply automatically in Gmail](https://www.rixxo.com/blog/find-emails-with-no-reply-automatically-in-gmail/).
    
## Kanlab

[Kanlab](https://www.alcose.fr/Home/Kanlab) est une plateforme payante mise en place il y a bientôt 3 ans. En théorie, toute demande à destination du service technique devrait se retrouver sur cette plateforme. 

Elle permet à chaque interlocuteur (élu-e, agent-e, associations, enseignant-e, etc.) de créer un ticket avec photos, nom du bâtiment / rue de l'incident et une description. Je vise chaque ticket pour validation puis la responsable du service technique assigne le ticket à la bonne personne. On peut ensuite noter quand c'est terminé. 

J'ai dit "en théorie" puisque nous n'y stockons pas tout, moi le premier. Il est parfois plus simple pour moi d'envoyer un mail que d'aller sur le site de Kanlab pour saisir le ticket. Il n'y a pas d'appli smartphone et donc l'envoi d'un mail est, pour moi, plus simple. 

On peut ensuite avoir un export par bâtiment, par période, par agent etc pour un suivi des actions en cours. 

J'ai récemment contacté le prestataire pour savoir si c'était possible de créer un ticket par envoi de mail (sur une boite personnalisée), mais ça n'est absolument pas à l'ordre du jour. Une application smartphone serait un réel plus également. 

## Todoist 

[Todoist](https://www.todoist.com/fr) est un gestionnaire de tâches. Je m'en sers pour le perso, pour wallabag, pour le boulot et donc aussi pour la mairie. 

C'est uniquement pour les tâches dont je suis l'exécutant. Je n'y stocke aucune tâche qui doit être effectuée par quelqu'un d'autre. 

## Obsidian 

[Obsidian](https://obsidian.md/) est mon outil de prise de notes. Là aussi, je m'en sers pour toutes les casquettes de ma vie : boulot, perso, basket, mairie. 

Pas de suivi de tâches, c'est exclusivement du compte-rendu, de la prise de notes, des réflexions, etc. 

Je note quelques infos sur chacune de mes permanences, sur mes réunions avec l'équipe ou encore sur des notes à la volée à prendre rapidement (quand je suis par exemple à la boulangerie et qu'on me parle d'un souci / qu'on veut des infos, etc). 

Pour ce dernier type de notes, j'utilise l'application iOS [Bebop](https://www.jackcheng.com/bebop/). Elle permet, depuis un widget, de créer une note avec le bon format de titre (`AAAA-MM-DD Titre.md`) dans le bon dossier.  
Puis, je les retrouve dans une catégorie `À catégoriser` quand je suis sur Obsidian sur l'ordi.  
Quand j'ai le temps, je regarde ces notes à catégoriser / traiter et je fais le nécessaire. 

Concernant ma manière de stocker et classifier mes notes dans Obsidian, j'ai prévu d'en faire un billet dédié. 

## Pour conclure 

Y'a rien de parfait (y'a du Gmail, y'a des trous dans la raquette, etc), mais c'est ma manière de faire en ce moment. Il m'arrive de faire un peu de veille technique sur des outils qui pourraient améliorer mon organisation quotidienne, mais pour le moment, rien de mieux que ça. 

Si vous avez des idées, n'hésitez pas, je suis à l'écoute !
