---
title: "Comment rendre privé le fork d'un dépôt public ?"
category: billets
date: 2022-06-13 14:00:00
layout: article.njk
tags:
  - wallabag
  - opensource
permalink: billets/2022/06/13/comment-rendre-prive-le-fork-dun-depot-public/index.html
---

J'ai ce lien dans mes favoris vers Stackoverflow depuis quelques années, il est temps de l'archiver ici une bonne fois pour toute :  [how to make a fork of public repository private?](https://stackoverflow.com/questions/10065526/github-how-to-make-a-fork-of-public-repository-private)

Cette documentation me permet d'avoir un dépôt privé pour [wallabag.it](https://www.wallabag.it), avec des modifications propres à la plateforme wallabag.it.

Aujourd'hui, les commandes qui me sont le plus utiles, ce sont celles qui me permettent de récupérer les nouveautés de wallabag (version open source) pour les intégrer à wallabag.it.

```
cd private-repo
git remote add public https://github.com/exampleuser/public-repo.git
git pull public master # Creates a merge commit
git push origin master
```
