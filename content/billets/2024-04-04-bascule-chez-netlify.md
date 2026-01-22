---
title: Bascule chez Netlify
category: billets
date: 2024-04-04 18:00:00
layout: article.njk
tags:
  - photo
  - blog
permalink: billets/2024/04/04/bascule-chez-netlify/index.html
---

Depuis quelques mois, je publie des photos sur [instantanes.loeuillet.org](https://instantanes.loeuillet.org). J'étais content du résultat visuel, mais techniquement, la solution en place ne me plaisait pas du tout. 

C'était basé sur [photo-stream](https://github.com/waschinski/photo-stream), un très bon outil ... mais codé en Ruby.  
Autant dire que je ne maitrisais pas grand chose là-dedans. 

Et puis Nicolas (pas moi, [un autre !](https://nicolas-hoizey.photo/)) m'a parlé du projet de GoOz : [Niepce](https://github.com/GoOz/Niepce).  
C'est un template pour Eleventy, un générateur de site statique en javascript. Je ne suis pas expert JS, mais j'ai des connaissances qui me permettent de mieux comprendre ce qui est fait. Et mon entourage pro est plus proche de cette techno que de Ruby : pratique si j'ai des questions. 

J'ai donc décidé de migrer mon site et [le résultat me plait beaucoup](https://instantanes.loeuillet.org/). 

Puisque je discutais avec Nicolas de l'hébergement de ce site, il m'a rappelé l'existence de Netlify, qu'on utilise déjà pour héberger la doc de wallabag. 

Et donc, plutôt que de devoir gérer une action Github pour publier mon site, j'ai branché Netlify sur mon dépôt de photos et hop ! C'est hébergé chez eux. 

Et puisque Netlify permet aussi d'exécuter du Python, j'ai déplacé ce journal personnel (généré via Pelican) là-bas également. 

Logiquement, vous ne vous êtes rendus compte de rien (pour les 2/3 rares personnes abonnées au flux RSS de instantanes.loeuillet.org, il n'a pas changé). 

Pour résumer : merci Nicolas, GoOz et Netlify ! 