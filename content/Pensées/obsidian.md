Title: Obsidian, mon nouvel outil de prise de notes
Date: 2021-03-02 17:51
Tags: logiciel, test
Description: Une appli forte comme un roc.
Category: Billets

Il y a quelques jours, j'ai découvert [Obsidian](https://obsidian.md/), un logiciel de prise de notes.

Alors, clairement, le résumer uniquement à de la prise de notes, ça ne serait pas juste. Mais c'est pour résumer.

## Historique

Je suis passé par Evernote, Notion.so, Joplin ou encore Zettlr. Toutes ont leurs avantages et leurs inconvénients. Evernote et Notion, on peut déjà ajouter comme inconvénient le manque d'interopérabilité (tiens, je vous conseille la lecture du blog [formats-ouverts.org](https://formats-ouverts.org/) en passant). Les notes sont stockées dans un format propriétaire : le jour où vous voulez les quitter, c'est pas pratique (même si c'est possible d'exporter).

Joplin et Zettlr sont open source 🎉. Je ne suis pas fan de l'interface de ces applis, mais c'est purement subjectif. Par contre, niveau format des données, vous pouvez ouvrir vos fichiers Markdown tranquillement. Et envisager une synchronisation vers un service numérique de votre choix (au hasard, votre installation Nextcloud).

Bref, pour plein de raisons, valables ou non, je n'ai jamais trouvé le **bon** outil. Le truc idéal qui me permet de stocker mes comptes-rendus de réunion de mairie, les entretiens de boulot, la liste de courses, mon journal de bord personnel (ouais, mon journal intime quoi), des bouts de code, etc.

Et j'ai découvert Obsidian.

## Présentation générale

Niveau interface, je trouve ça plus agréable que Zettlr. Les applis mobiles sont sur la feuille de route et devraient arriver assez prochainement.  

Depuis l'application, j'ouvre le dossier `Notes` présent dans mon Nextcloud. Tout s'affiche et de manière très fluide. Pas d'application qui utilise Electron pour être multi plateforme (ou alors ça n'en a pas l'air). C'est vraiment rapide et ça change pour ce genre d'application. C'est très agréable.

Ah, le temps que j'y pense, si vous voulez un inconvénient qui peut être bloquant pour certain·e·s : Obsidian n'est pas open source. Mais apparemment, des tests ont été faits pour vérifier qu'aucune donnée n'était envoyée sur un serveur quelconque, et c'est le cas.

Bon, voila, revenons à la présentation.

Il y a un système de modèle de note (pratique pour les comptes-rendus de réunion, pour les notes quotidiennes, liste de courses, etc.). Ça manquait sur Zettlr. Tu crées une note, tu lui appliques un modèle et hop, tu as déjà toute la structure de ton fichier, y'a plus qu'à.

Ça fonctionne par coffres (*vault*) pour la gestion de vos projets. Vous pouvez donc avoir un coffre pour le boulot, un pour votre asso, un pour la vie perso, un pour le jardinage. Ou alors tout stocker dans le même dossier et avoir un sous-dossier par projet (c'est ce que je fais).

Il existe un système de plugins. Je ne vais pas vous faire la présentation de chacun, mais je vous conseille **Advanced tables** (pour créer facilement des tableaux en Markdown) et aussi **Dataview**. J'y reviendrai.

Si vous connaissez Zettlr, vous connaissez aussi surement la méthode [**Zettelkasten**](https://fr.wikipedia.org/wiki/Zettelkasten). Une organisation entre vos fichiers, qui vous permet de les lier entre eux.  Vous retrouverez cette possibilité avec Obsidian. Et vous avez aussi la possibilité de visualiser ça sous forme d'une belle image.

![Obsidian, mon nouvel outil de prise de notes]({static}/images/obsidian/EvYsxUdWYAIGh2o.jpg#full "")

Alors, moi, ça ne me sert à rien. Mais il semblerait que pour les chercheur⋅ses, ça soit top.

Alors, y'a plein plein d'autres fonctionnalités (la possibilité de séparer l'écran en plusieurs parties pour afficher vos fichiers, de définir un répertoire qui stockera vos pièces jointes, le sélecteur rapide avec Ctrl+O, afficher sous format de diapositive, etc). Mais le mieux est de tester quelques jours et de voir si ça vous correspond.

Vous pouvez installer un thème qui vous correspond, y'en a de toutes sortes.

## Plugin Dataview

Bon, je vais m'attarder un peu plus sur ce plugin, tout jeune ([version 0.1.7](https://github.com/blacksmithgu/obsidian-dataview)).

Il vous permet de gérer vos données (le contenu de vos fichiers Markdown) comme une base de données. Je m'explique.

### Afficher sous forme de table

Vous avez dans vos fichiers un répertoire ~~games~~ non, je vais prendre un exemple de choses que je connais. Vous avez un répertoire **beers**, ce répertoire contient autant de fichiers que de bières testées. Chaque fichier contient des données sur les fameuses bières.

![Obsidian, mon nouvel outil de prise de notes]({static}/images/obsidian/dossier-beers.png#mid "")

Exemple :

```
---
taux: 10°
apparence: Trouble et dorée arborant une belle mousse crémeuse, généreuse et consistante.
couleur: blonde
pays: belgique
note: 5
---
```

Et bien le plugin permet de visualiser vos données sous forme de tableau, avec un lien vers le fichier correspondant. Voici la requête à écrire :

```dataview
table taux, apparence, couleur, pays, note
from "beers"
sort note desc
```

Et le résultat :

![Obsidian, mon nouvel outil de prise de notes]({static}/images/obsidian/beer_data.png#mid "")

### Afficher une liste de fichiers

Beaucoup de mes fichiers sont datés : c'est-à-dire que leur nom est de la forme `AAAA-MM-JJ Réunion équipe.md` par exemple.

Et bien, j'ai la possibilité de pouvoir lister tous ces fichiers avec la requête suivante (mes fichiers triés par date) :

```dataview
table from "Mairie/Permanences/2020"
sort mtime desc
```

### Afficher toutes les cases à cocher présentes dans mes fichiers

Dans mes comptes-rendus de réunion, je mets régulièrement des cases à cocher quand il y a des choses à faire (le code Markdown est le suivant : `- [ ] j'ai ça à faire`).

Et bien, avec la requête qui va bien, je peux lister toutes ces choses à faire très simplement. Voici la requête (qui va parcourir le dossier `Mairie/CR/2021` et rechercher toutes les cases à cocher) :

```dataview
task from "Mairie/CR/2021"
```

## En conclusion

Pour résumer, je suis très satisfait d'Obsidian.  
Donnez lui sa chance et suivez son actualité. C'est un logiciel assez jeune, multi plateforme, qui évolue vite. Il y a encore des bugs (par exemple, un export PDF quand on utilise des `dataview` semble cassé), mais ça va dans le très bon sens.
