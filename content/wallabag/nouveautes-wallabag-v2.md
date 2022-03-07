Title: wallabag v2, quelles nouveautés ?
Date: 16-08-2015 13:30
Category: Billets
Tags: php, symfony, wallabag

Bon maintenant, on ne rigole plus, depuis que j'ai annoncé [aux RMLL]({filename}effectuez-veille-liberte-rmll2015-beauvais.md) qu'une alpha de wallabag v2 allait sortir en septembre 2015, il a fallu se mettre à bosser activement.

Listons donc les dernières nouveautés de ce mois d'août.

## Un peu de technique pour une fois

### OK, wallabag, c'est bien, ça marche, mais c'est quoi dedans ?

Pour cette v2, on utilise le framework Symfony2 (oui c'est du PHP, et alors ? #troll). Parmi les bundles ajoutés dernièrement, arrêtons-nous sur [LexikFormFilterBundle](https://github.com/lexik/LexikFormFilterBundle). C'est celui que nous utilisons pour les filtres (voir plus bas).

Ce bundle est vraiment bien fait et très simple d'utilisation. Si on souhaite ajouter un filtre sur les articles présents dans wallabag, une seule ligne est nécessaire (la condition est que la donnée filtrée doit se trouver en base).

Par exemple, le filtre pour le temps de lecture, c'est ça :

```
$builder->add('readingTime', 'filter_number_range');
```

Le bundle va se charger d'ajouter les listes sur le formulaire et d'ajouter ce qu'il faut à la requête pour retourner les bons résultats.

### Capistrano

[capistrano](http://capistranorb.com/), c'est entre autre un outil de déploiement. Bon, c'est en Ruby, personne n'est parfait #troll.

J'ai mis cet outil en place pour [le site de démo de la v2](http://v2.wallabag.org). À terme, Framabag sera également mis à jour de cette façon (mon état lors des mises en prod de Framabag s'en trouvera alors amélioré, j'aurai le poil soyeux, etc.).

L'avantage de cet outil, c'est que vous n'avez plus à démarrer Filezilla pour mettre à jour votre appli en envoyant vos milliers de fichiers.  
Pour résumer, capistrano va :

* se connecter sur votre serveur
* mettre à jour votre appli (et faire une sauvegarde de l'ancienne version, pratique pour un rollback)
* et jouer les commandes dont vous avez besoin (vider le cache par exemple)

Voici le fichier que j'utilise pour mettre à jour le site de la v2 :

```
set :application, 'wallabag'
set :repo_url, 'git@github.com:wallabag/wallabag.git'

set :ssh_user, 'mon_user'
server 'mon_serveur', user: fetch(:ssh_user), roles: %w{web app db}

set :scm, :git

set :format, :pretty
set :log_level, :info
# set :log_level, :debug

set :composer_install_flags, '--no-dev --prefer-dist --no-interaction --optimize-autoloader'

set :linked_files, %w{app/config/parameters.yml}
set :linked_dirs, %w{app/logs web/uploads}

set :keep_releases, 3

after 'deploy:finishing', 'deploy:cleanup'
```

## Les filtres

Voila, on a fini avec la technique, repassons aux choses sérieuses.

C'est une fonctionnalité attendue, et je suis bien content qu'elle fasse son arrivée.

### Estimation du temps de lecture

Dans wallabag, depuis toujours, on vous donne une estimation du temps de lecture nécessaire pour un article. OK, c'est pratique quand on commence à lire l'article, on sait à quoi s'en tenir.

Problématique : je sais que j'ai 15 minutes devant moi, je veux lire un article, tu me proposes quoi, wallabag ?

Solution : le filtre par temps de lecture (screenshot plus bas).

### Nom de domaine

Problématique : je veux lire tout un dossier qui se trouve sur monsite.fr et que j'ai archivé en plusieurs fois dans wallabag. Le moteur de recherche, c'est pas mal, mais pas la meilleure solution.

Solution : le filtre par nom de domaine.

### Date de sauvegarde

Problématique : ah, j'ai sauvegardé un article super intéressant l'autre jour, mais je ne me souviens pas de son titre. Je sais que c'était lundi.

Solution : le filtre par date de sauvegarde.

##### Type d'articles

Problématique : j'ai mis de côté pas mal de vidéos, et je veux me faire une petite séance cinéma. Je fais comment dans wallabag, hein ?

Solution : le filtre par type d'articles (vidéo, audio, image, PDF, etc.).

## Nouveau design : material

Depuis que le projet a changé de nom (pour rappel, on est passé de poche à wallabag), le projet était doté du thème `baggy`. Il y a quelques mois, quand nous avons commencé la v2, nous avons continué avec ce thème, faute de nouveauté (et comme nous ne sommes que développeurs, impossible pour nous de créer quoique ce soit de joli).

Et puis début août, un contributeur venu de nulle part (c'est beau le monde de l'opensource) arrive avec `material`.

### Page de login

![Page de login]({static}/images/wallabag-v2-nouveautes/login.png#mid "Page de login")

### Page d'accueil

![Page d'accueil]({static}/images/wallabag-v2-nouveautes/home.png#mid "Page d'accueil")

### Article

![article](article.png)
![Vue article]({static}/images/wallabag-v2-nouveautes/article.png#mid "Vue article")


### Configuration

![Configuration]({static}/images/wallabag-v2-nouveautes/config.png#mid "Configuration")

## On peut tester ?

Bien sur. C'est même vivement conseillé. Ça se passe ici : http://v2.wallabag.org (login wallabag, password wallabag).

Elle sort vraiment en septembre cette première alpha ? Oui ! [Regardez ce qu'il nous reste à faire](https://github.com/wallabag/wallabag/issues?q=is%3Aopen+is%3Aissue+milestone%3A2.0.0-alpha.0). Autant dire que c'est largement jouable.

Forcément, j'en parlerai ici, vous ne raterez pas l'info.
