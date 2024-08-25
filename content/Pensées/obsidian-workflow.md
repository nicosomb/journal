Title: Créer une note bien rangée dans Obsidian grâce à une seule lettre
Date: 2024-08-25 17:00
Tags: logiciel, test
Category: Pensées

[Il y a plus de trois ans déjà](https://nicolas.loeuillet.org/billets/2021/03/02/obsidian-mon-nouvel-outil-de-prise-de-notes/), je vous parlais d'Obsidian. 

Aujourd'hui, je vais vous présenter comment je crée une note bien rangée dans un dossier spécifique grâce à une seule lettre ! 

Rien de plus simple que de créer une note, me direz-vous, et vous avez raison ! On fait "Fichier > Créer une note".  
Oui, sauf que si vous faites ça, ça crée une note à la racine (ou alors dans un seul dossier spécifique défini dans les paramètres, "Fichiers et liens > Emplacement par défaut de la nouvelle note").  
Ça fonctionne, mais ça n'est pas pratique si vous avec plusieurs dossiers dans lesquels vous créez régulièrement des fichiers.  
Il faut créer du coup créer la note, la nommer, la déplacer dans le dossier qui va bien.  

De mon côté, je n'ai qu'un seul coffre-fort ("vault") dans Obsidian. J'y range tout : 

- mes documents et compte-rendus de mairie 
- mes notes pour le basket
- mes notes de boulot
- mes notes personnelles

Et j'en avais marre de parcourir la liste des répertoires (qui peut vite être conséquente) pour aller créer un nouveau fichier dedans. 

Je vais donc vous présenter ma manière de faire. Pour cela, il vous faudra les plugins suivants : 

- [Rapid Notes](https://github.com/valteriomon/obsidian-rapid-notes)
- [Templater](https://github.com/SilentVoid13/Templater)

## Rapid Notes

Ce plugin vous permettra, grâce à une seule lettre, de créer un fichier dans le répertoire que vous souhaitez !

### Épingler la commande 

Dans la palette de commandes, accessible via CMD / Ctrl + P, plusieurs commandes sont disponibles dont : "Rapid Notes: New note in new tab".

C'est celle là qui m'intéresse. Je vais donc l'épingler pour qu'elle soit tout le temps dispo en haut de la liste lorsque j'affiche la palette de commandes.

Dans les paramètres d'Obsidian, allez dans "Palettes de commandes" : un champ "Nouvelle commande épinglée" est disponible. Cherchez "Rapid Notes: New note in new tab" et validez. 

Ainsi, quand vous ferez CMD / Ctrl + P, celle-ci sera tout en haut de la liste. 

### Configurer les dossiers et la lettre de raccourci

Dans les paramètres du plugin, il y a une section "Add new prefixes or create command shortcuts for saving directly into folders".

Voici ma configuration :

![Configuration de Rapid Notes]({static}/images/obsidian-workflow/config-rapid-notes.png#mid "")

Ainsi, lorsque nous jouerons la commande précédemment épinglée, nous pourrons saisir `p Le titre de ma note` et une note qui s'appellera `Le titre de ma note` sera créée dans le répertoire `03 Others/01 Perso/02 Journal/2024`.  
Et `m Compte-rendu de la réunion d'équipe` créera la note `Compte-rendu de la réunion d'équipe` dans le répertoire `02 Mairie/01 Journal/2024`.

Avec cette configuration, vous pouvez déjà vous simplifier la vie en gagnant du temps. 

Là où c'est un peu plus fort, c'est qu'on va coupler ça avec le plugin Templater. 

## Templater

Ce plugin est assez complet, il permet d'avoir des templates assez poussés et je ne l'utilise sûrement pas assez. 

Il va nous être utile puisque nous allons lui dire de nous créer des notes avec un format spécifique selon le dossier où la note se trouve. 

Je ne vais m'arrêter que sur la configuration qui nous intéresse ici : les "Folder templates". Il faut donc activer cette fonctionnalité dans le plugin. 

Ensuite, nous allons dire que pour chacun des répertoires qui nous intéressent, nous voulons tel ou tel template. 

Voyez ma configuration ci-dessous : 

![Configuration de Templater]({static}/images/obsidian-workflow/config-templater.png#mid "")

Pour tous les répertoires dans `02 Mairie/01 Journal`, je veux le template `01 Ressources/01 Templates/_mairie.md`. 

### Un exemple de template ?

Mais bien sûr !

Le template ci-dessous vous permettra de renommer votre fichier avec la date du jour et de stocker aussi cette date dans les données frontmatter de mon fichier. 

```
<% "---" %>
created_at: <% tp.date.now() %>
<% "---" %>
<%*
let filename = tp.file.title;
if (filename.length === 0) {
  filename = await tp.system.prompt("filename");
}
%>
<%
await tp.file.rename(tp.date.now("YYYY-MM-DD") + " " + filename)
%>
```

Je vous laisse imaginer tout ce qu'on peut faire, selon que l'on crée un fichier pour son asso, pour la vie perso, sa liste de courses, un compte-rendu de réunion, etc. 

## Workflow complet 

Voici donc ce que je fais pour créer une nouvelle note pour une compte-rendu de réunion avec mon équipe municipale : 

- `CMD + P`
- `Entrée` (puisque la commande qui se trouve en premier est la commande "Rapid Notes: New note in new tab")
- `m Réunion d'équipe`
- la note s'ouvre, prête à être éditée, s'appelle `YYYY-MM-DD Réunion d'équipe` et elle est rangée dans le bon dossier 

Le plugin Templater est très complet et vous permettra sûrement d'en faire beaucoup plus, 

## Pour conclure

N'hésitez pas à jouer avec ces plugins ou à créer des templates. Vous ne casserez rien logiquement. 

Si vous voulez discuter de tout ça, on peut échanger sur Mastodon : [https://piaille.fr/@nicosomb](https://piaille.fr/@nicosomb). 