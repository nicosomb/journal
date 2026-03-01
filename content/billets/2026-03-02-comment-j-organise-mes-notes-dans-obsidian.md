---
title: Comment j'organise mes notes dans Obsidian
category: billets
date: 2026-03-02 08:30:00
layout: article.njk
tags: 
permalink: billets/2026/03/02/comment-j-organise-mes-notes-dans-obsidian/index.html
---

J'utilise [Obsidian](https://obsidian.md/) depuis quelques années maintenant (j'ai tenté un passage vers Notesnook, j'y reviendrai peut-être).

J'avais en tête de noter ici ma façon d'organiser tout ça. Ça a pas mal évolué au fil des années, mais je crois que je commence enfin à avoir quelque chose qui me correspond bien. 

## Où je parle déjà d'Obsidian 

- [Obsidian, mon nouvel outil de prise de notes](/billets/2021/03/02/obsidian-mon-nouvel-outil-de-prise-de-notes/)
- [Shrink pinned tabs, le plugin pour Obsidian qui vous fait gagner de la place](/billets/2024/07/07/shrink-pinned-tabs-le-plugin-pour-obsidian-qui-vous-fait-gagner-de-la-place/)
- [Créer une note bien rangée dans Obsidian grâce à une seule lettre](/billets/2024/08/25/creer-une-note-bien-rangee-dans-obsidian-grace-a-une-seule-lettre/)
- [Obsidian, my new read-it-later app?](/billets/2024/08/29/obsidian-my-new-read-it-later-app/) 
- [Ma méthodologie pour le suivi des projets à la mairie](/billets/2026/02/26/ma-methodologie-pour-le-suivi-des-projets/)

## C'est rangé comment là-dedans ?

### Structure des dossiers

Je n'utilise qu'un seul coffre (`vault` dans Obsidian). Que ça soit pour le perso, la mairie, le boulot, etc. tout est au même endroit car il se peut que certaines notes concernent plusieurs thématiques. 

Par contre, je stockais tout dans des dossiers différents : 
- perso 
- mairie 
- basket 
- boulot 
- ainsi de suite

Mais c'était pas cohérent non plus, pour la raison citée plus haut : des notes concernent plusieurs thèmes, donc j'étais parfois embêté pour les classer. 

J'ai pris le parti de ne plus me soucier de où et comment elles sont rangées : tout va dans un dossier `notes`. Plus de prise de tête.  
C'est à chaque note de porter ses méta données : catégories, tags, etc. 

À ce sujet, y'a Lara qui a évoqué son organisation [sur son blog dans sa note `hebdromadaire`](https://lamecarlate.net/carnet/notes-hebdromadaires-30/) et elle est dans la team dossiers. 

> C'est aussi pour ça que je range dans des dossiers, sans trop me reposer sur les tags dans les fichiers.

### Méta données

Concernant les méta données de mes notes, je stocke évidemment des données standards : 
- titre
- date de création 
- tags

Les tags respectent, eux, une arborescence : 
- mairie
  - mairie/équipe
  - mairie/urbanisme
  - mairie/festivités
  - mairie/campagne
  - mairie/assos
    - mairie/assos/triathlon
    - etc.
  - mairie/notes
  - etc.
- perso
  - perso/journal
  - perso/notes
  - etc.
- basket
  - basket/notes
  - etc.
- wallabag
  - wallabag/notes
  - etc.
- boulot
  - boulot/notes
  - etc.

### Lieux

Dans le contenu des notes, dès que je parle d'un lieu physique, je crée un lien interne, de la forme `[[Nom du lieu]]` ([la doc Obsidian à ce sujet est ici](https://help.obsidian.md/links)).  
À la racine de mon coffre, j'ai un dossier `lieux`, où j'ai créé une note par lieu référencé dans mes notes. 

Extrait de mon dossier `lieux` : 
- Audresselles
- Avenue de l'Europe 
- Avenue de la Gare
- Bâtiment Cathédrale 
- Bazinghen
- etc.

Ces lieux sont : 
- des secteurs de la commune (rues, places, etc.)
- des bâtiments communaux
- les communes de la communauté de communes

Et quand j'ouvre chacune de ces notes `lieux`, je liste (via le plugin [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)) toutes les notes qui évoquent ce lieu. Pratique par exemple pour retrouver les notes de telle ou telle rue depuis le début de mon mandat. 

### Bases

[Bases](https://help.obsidian.md/bases), c'est un plugin natif. Et c'est sûrement ce qui manquait à Obsidian. 

Vous pouvez filtrer facilement vos notes selon les méta données, le dossier, leurs dates, etc. En fait, sur toutes les propriétés d'un fichier physique ou du contenu des notes.

J'en ai une douzaine : 
- À catégoriser : une base qui me liste les notes sans tag (car oui, toutes les notes doivent avoir au moins un tag)
- Captures : des notes que j'ai créées depuis [le plugin Obsidian Web clipper](https://help.obsidian.md/web-clipper). Souvent, ce sont des articles de presse, des exemples de projets dans d'autres communes, etc. 
- Carte : une base qui me géolocalise mes notes sur une carte. Y'a un petit paragraphe à ce sujet juste en-dessous. 
- Différentes bases qui filtrent simplement par tags (exemple : la liste de toutes les notes qui ont le tag pour la campagne des municipales 2026)

#### Ma base Cartes

Le plugin Bases permet d'avoir une vue de type Map. [La doc est ici](https://help.obsidian.md/bases/views/map).

Pour gérer ça, il faut stocker les notes `lieux` (voir plus haut) les coordonnées GPS. 

Exemple pour l'école maternelle : 

```
---
title: École maternelle
icon: school
color: purple
tags: places
coordinates:
  - 50.802894
  - 1.736711
---
```

Le résultat de la carte : 

![Capture d'écran d'une note dans Obsidian qui affiche une carte de Rinxent avec plusieurs marqueurs qui représentent différents lieux de la commune](/images/2026-03-01-comment-sont-rangees-mes-notes/base_carte.png)

J'adore le rendu, ce n'est pas forcément super utile d'avoir cette visualisation au quotidien, mais c'est joli. 

## Synchronisation et sauvegarde

Je paie l'abonnement Obsidian Sync pour avoir les notes sur mon téléphone et sur l'ordinateur. Il existe une solution de synchronisation avec iCloud, mais pas mal de soucis sont remontés par la communauté Obsidian, alors je préfère éviter. 

Niveau sauvegarde (car une synchronisation n'est pas une sauvegarde), mon coffre Obsidian est stocké sur mon Nextcloud perso (sur un serveur distant) qui est lui même sauvegardé sur mon NAS à la maison. Le serveur et le NAS sont eux aussi sauvegardés de manière régulière. 

## Plugins

Je ne vais pas lister tous les modules que j'ai installés (14 en tout). Je vais aborder uniquement ce dont j'ai quelque chose à dire. 

- Bases (natif) : j'en ai parlé plus haut 
- Explorateur de fichiers (natif) : il est encore actif, mais peut-être plus pour longtemps. Je ne me préoccupe plus de l'arborescence des fichiers, tout est dans `notes`. Donc à force, je le désactiverai peut-être.
- Palette de commandes (natif) et sélecteur rapide (natif) : les plugins qui me permettent de naviguer et effectuer toute sorte de tâche uniquement au clavier. 
- [Hider](https://github.com/kepano/obsidian-hider) : il permet de masquer certains éléments de l'interface
- [Hide folders](https://github.com/JonasDoesThings/obsidian-hide-folders) : pratique pour masquer des dossiers dans l'arborescence, comme celui des pièces jointes, ou même celui des notes. Je ne garde affiché que le répertoire `bases` qui sont mon point d'entrée de toutes mes notes (en plus du sélecteur rapide). 
- [Templater](https://silentvoid13.github.io/Templater/introduction.html) : des templates avancés pour les notes. J'en ai 2 pour l'instant : un pour ma note quotidienne et un pour les autres notes. 
- [Share Note](https://github.com/alangrainger/share-note) : pour partager des notes en ligne avec d'autres personnes (en mode consultation uniquement). 
- [Pandoc Plugin](https://github.com/OliverBalfour/obsidian-pandoc) : pour exporter les notes dans différents formats, mais surtout pour pouvoir ajouter un template de sortie sur mes exports PDF et faire de jolis documents. 

J'ai également épinglé des commandes dans la palette de commandes pour les retrouver en haut de liste (comme la création de notes, etc.). 

## Thème

J'ai installé [le thème Minimal](https://minimal.guide/home) (avec les schémas de couleur par défaut). Je ne vais pas lister l'ensemble de la configuration du thème. Mais l'idée, c'est que j'essaie de garder quelque chose de discret et sobre pour ne pas être pollué par plein d'éléments visuels.

## Pour conclure 

Ce billet n'est pas là pour vous dire d'adopter ma méthode d'organisation.  
J'ai lu pas mal de choses à propos d'Obsidian, et j'ai trouvé pas mal d'inspiration chez les autres. Donc si ça peut servir, autant partager.
