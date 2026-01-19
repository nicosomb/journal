---
title: Mon workflow de publication de photos en 2026
date: 2026-01-07 10:00:00
category: billets
layout: article.njk
permalink: billets/2026/01/07/mon-workflow-de-publication-de-photos-en-2026/index.html
---

Il y a bientôt 3 ans, je publiais [« Mon workflow de publication de photos »](https://nicolas.loeuillet.org/billets/2023/03/17/mon-workflow-de-publication-de-photos/). Depuis, les outils que j'utilise ont changé.

Je convertis toujours mes photos en WebP avec [bespoke](https://github.com/tmcw/bespoke). C'est un vieil outil (pas mis à jour depuis 4 ans) mais il fait le boulot. Je l'ai un peu personnalisé pour conserver les données exif ([j'en parle dans ce ticket](https://github.com/tmcw/bespoke/issues/38)).

Concernant la génération du site [instantanes.loeuillet.org](https://instantanes.loeuillet.org/), j'ai basculé tout ça courant 2024 sur Eleventy (11ty), avec le template [Niepce](https://github.com/GoOz/Niepce).  
L'inconvénient de [photo-stream](https://github.com/waschinski/photo-stream), que j'utilisais précédemment, était que c'était du Ruby, que je ne maitrise pas. Pas pratique pour avoir un environnement en local ou mettre les mains dedans en cas de nécessité. 

Ici, avec 11ty, je n'ai qu'à ajouter un nouveau dossier pour chaque nouvelle photo (avec un fichier Markdown pour les métadonnées). 

Ensuite, pour la mise en ligne, plus d'hébergement chez moi : j'utilise Netlify ([j'en parlais ici](https://nicolas.loeuillet.org/billets/2024/04/04/bascule-chez-netlify/)) pour le déploiement et l'hébergement. L'offre gratuite est largement suffisante pour moi. Et le fait d'avoir un déploiement de chaque nouvelle pull request me permet d'être sûr de ne pas publier de conneries.

## Aparté sur mon organisation pour archiver mes photos

À propos de la sauvegarde de mes photos prises au quotidien avec mon téléphone, il faudra que je mette à jour l'article [« osxphotos, pour sauvegarder sa bibliothèque Apple Photos vers son NAS »](https://nicolas.loeuillet.org/billets/2023/02/27/osxphotos-pour-sauvegarder-sa-bibliotheque-apple-photos-vers-son-nas/). En effet, j'ai simplifié un peu les fichiers de configuration utilisés. Et il faudra aussi que je reprenne un rythme plus correct de sauvegarde pour éviter les accidents 😬.  
[David](https://larlet.fr/david/) m'avait pointé [PhotosExport](https://github.com/rcarmo/PhotosExport), une alternative à osxphotos plus légère avec moins de configuration. Elle fait très bien le boulot, mais ses manques (comme le choix du format de sortie ou la possibilité d'exporter par album) font que je ne changerai pas d'outil. Mais ça peut peut-être vous convenir.

Et vous, qu'utilisez-vous pour sauvegarder vos photos stockées sur votre iPhone ?
