---
title: osxphotos, pour sauvegarder sa bibliothèque Apple Photos vers son NAS
date: 2023-02-27 12:00:00
category: billets
layout: article.njk
permalink: billets/2023/02/27/osxphotos-pour-sauvegarder-sa-bibliotheque-apple-photos-vers-son-nas/index.html
---

En lisant dernièrement «[ Migrating Google Photos to my Personal NAS](https://danb.me/blog/posts/migrating-google-photos/) », je me suis posé une question à laquelle je n’avais pas encore pensé : « comment être sûr de ne pas perdre mes photos stockées sur mon iPhone depuis toutes ces années ? ». 

Historiquement, je fais confiance à iCloud, le service de chez Apple pour sauvegarder mes photos en ligne. C’est pratique, ça me permet même de synchroniser ça sur mon ordinateur et aussi, de changer facilement de téléphone sans contrainte. 

**Oui, mais si iCloud venait à disparaitre ?** 

J’ai rapidement trouvé un outil qui permet d’exporter ses photos de sa bibliothèque Apple très facilement : [osxphotos](https://github.com/RhetTbull/osxphotos). Cet outil est extrêmement complet, et je pense que ce que je vais lister ci-dessous n’utilise que 5% de ses capacités. 

## Mes photos avant l’iPhone 

Comme beaucoup de monde, j’utilisais mon appareil-photo numérique (depuis 2002). Chaque événement était stocké dans un dossier “AAAA/JJ-MM-AAAA événement”, par exemple “2015/18-10-2015 Anniv de Nico” (petit message subliminal si jamais vous avez envie de me faire un cadeau) (cette année, ça tombe le même jour qu’en 2015 pour info). 

Toutes ces photos sont archivées sur mon NAS (un Synology). C’est propre. 

## Mon organisation au sein de l’appli Photos 

Mon téléphone me sert d’appareil-photo principal, je fais pas mal de photos, je fais du tri pour ne tenter de garder que le nécessaire (mais en fait, non, j’en conserve beaucoup trop). 
Résultat depuis novembre 2017 et mon arrivée dans le monde iPhone : j’ai 30.650 photos et 919 vidéos. 

Ces photos sont stockées telles quelles, je ne crée pas d’album. Et surtout, ces photos sont sur mon téléphone et uniquement sur mon téléphone. 

Il y a bien l’application Synology Photos, qui permet de sauvegarder le contenu du téléphone sur le NAS. Mais de mon côté, c’était beaucoup trop long. Mais vraiment très long. Peut-être des limites de mon NAS (DS215j) qui commence à dater un peu. 

Dans l’appli Photos, je ne créais pas d’album, je l’ai juste fait pour une partie de 2022 et pour 2023. À l’avenir, je le ferai pour tous les événements, ça me simplifie ma sauvegarde. 

## Première(s) sauvegarde(s)

J’ai donc 5 ans de photos à organiser et à sauvegarder. Sachant que je n’ai pas envie d’y passer trop de temps non plus. 

Le mieux, aurait été de parcourir toute ma bibliothèque, et de créer un dossier par événement. La flemme. 

Je décide donc que pour les années 2017 à 2022, tout sera rangé par mois. Exemple “01-01-2018 janvier” : ce dossier regroupe toutes les photos de janvier 2018 qui ne sont pas dans un album. 

Afin de ne pas lancer une commande qui prend trop de temps, j’ai lancé plusieurs fois la commande, par année. 

Voici par exemple la commande complète qui me permet d’exporter les photos de 2018 qui ne sont pas dans un album photos : 

```bash
osxphotos export --download-missing --update --only-new --not-in-album --directory "{created.year}/01-{created.mm}-{created.year} {created.month}" --only-photos --skip-live --skip-original-if-edited --convert-to-jpeg --jpeg-quality 0.9 --year 2018 ~/Pictures/Photos\ Library.photoslibrary ~/Desktop/export
```

## Explication des paramètres 

Ces paramètres me conviennent, ils ne correspondent pas à tous les besoins. Le mieux est de lire [la doc très fournie](https://github.com/RhetTbull/osxphotos#command-line-reference-export) et d’adapter pour vous.  

### Pour les photos sans dossier 

```bash
osxphotos export 
--download-missing # certaines photos sont sur iCloud et pas sur votre ordinateur, il faut forcer le téléchargement 
--update --only-new # osxphotos permet de ne récupérer que les photos jamais exportées (pratique pour faire un backup régulier sans devoir tout générer)
--not-in-album # je filtre ici sur les photos qui ne sont pas rangées dans un album
--directory "{created.year}/01-{created.mm}-{created.year} {created.month}" # format de la structure de sortie, exemple 01-01-2018 janvier
--only-photos # je ne veux que les photos, pas envie (pour le moment) de sauvegarder les vidéos
--skip-live # pour les photos au format Live, je ne veux pas conserver la copie "vidéo" de cette photo
--skip-original-if-edited # si vous avez retouché votre photo, la version originale est conservée, je décide de ne pas la conserver
--convert-to-jpeg # pour ne pas conserver les photos au format HEIC, je les convertis en JPG
--jpeg-quality 0.9 # qualité du fichier JPG, ici 90%
--year 2018 # un filtre sur l'année
~/Pictures/Photos\ Library.photoslibrary # répertoire de stockage de votre bibliothèque sur votre ordinateur
~/Desktop/export # répertoire de sortie de l'export 
```

Je vous le disais, j’ai pris des décisions (comme ne pas conserver l’originale ou les vidéos) qui répondent à mes besoins : libre à vous d’adapter. Le mieux est de faire plusieurs essais. 

### Pour les photos bien rangées dans un dossier 

La commande est sensiblement la même, je remplace juste `--not-in-album` par `--in-album` et le format d’export est `--directory "{created.year}/{folder_album}"`. 

### Répertoire de sortie 

Comme vous le voyez, je stocke tout dans un premier temps dans le dossier `~/Desktop/export`. J’ai tenté de tout renvoyer directement sur le NAS. Techniquement, c’est jouable, mais on retrouve de nouveau des soucis de latence. 

Donc pour la commande qui exporte une année complète, ce n’était pas possible. J’ai donc fait l’export en local, puis copié / collé à la main sur le NAS. 

## Sauvegardes suivantes

En fait, maintenant que j’ai tout configuré comme je le souhaite et que j’ai aussi exporté mes 30.000 photos, ça va être beaucoup plus simple pour les sauvegardes au quotidien. 

Pour éviter déjà de devoir saisir la commande en entier avec l’ensemble des paramètres, osxphotos donne la possibilité de se créer un fichier de configuration ([voir la documentation à ce sujet](https://github.com/RhetTbull/osxphotos#saving-and-loading-options)).

J’ai donc remplacé mes 2 commandes par celles-ci : 

```bash
osxphotos export ~/Desktop/export --load-config ~/dev/osxphotos.toml
osxphotos export ~/Desktop/export --load-config ~/dev/osxphotos-album.toml
```

Voici par exemple ce que contient `osxphotos.toml` : 
```toml
[export]
cleanup = true
convert_to_jpeg = true
directory = "{created.year}/01-{created.mm}-{created.year} {created.month}"
download_missing = true
jpeg_quality = 0.9
not_in_album = true
only_new = true
only_photos = true
library = "/Users/nLoeuillet/Pictures/Photos Library.photoslibrary"
skip_live = true
skip_original_if_edited = true
update = true
```

Deux fichiers de configuration, pour mes 2 cas d’usage (photos dans un dossier d’événement, photos du quotidien et donc pas un dossier). Peut-être est-il possible de n’avoir qu’une seule commande qui permettrait d’exporter tout comme il faut : si jamais c’est un album, alors tel format de sortie, sinon tel autre format de sortie. Il existe [la fonctionnalité de template](https://github.com/RhetTbull/osxphotos#template-system), si j’ai du temps et l’envie, je regarderai un jour. 

Limite, je pourrais aussi renvoyer directement l’export sur le NAS, puisque la volumétrie est plus faible qu’avec les exports annuels précédents. Mais pour le moment, je conserve le même fonctionnement. 

Voila donc un petit récap de mon process pour sauvegarder ma bibliothèque de photos Apple sur mon NAS. N’hésitez pas à en discuter avec moi par mail ou [sur Mastodon](https://piaille.fr/@nicosomb). 
