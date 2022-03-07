Title: Quelles nouveautés avec poche 1.3 ?
Date: 12-12-2013 10:24
Category: Billets
Tags: wallabag

La version 1.3 de poche sera disponible avant la fin d'année 2013. C'est une version qui apporte pas mal de nouveautés attendues. Allons y pour les présentations.

## Flux RSS

Depuis la partie "Config" de votre poche, vous aurez accès à trois flux RSS privés pour consulter depuis votre agrégateur préféré : les non lus, les favoris et les archives.

Grâce à ça, vous pouvez très bien connecter un de ces flux à IFTTT (ou [Trigger Happy](http://trigger-happy.eu/)) pour ensuite partager automatiquement vos liens sur twitter, facebook, etc.

Les usages devraient être nombreux.

## Tags

Ah ! Alors là, c'était une fonctionnalité vivement attendue par pas mal de monde, histoire de pouvoir trier un peu mieux les liens pochés. Je ne pensais pas l'implémenter sur poche v1, mais comme poche v2 (qui est en développement), ce n'est pas pour tout de suite, je me suis quand même décidé à complexifier encore un peu plus le code de poche en ajoutant les tags.

Pour l'instant, on n'ajoute des tags que lorsqu'on est sur un article (et pas via le bookmarklet ou les extensions type Firefox). Ensuite, un onglet Tags vous permet de retrouver tous vos tags.

Y'a même déjà un RSS par tag.

Je sais déjà qu'il y a quelques bugs, mais les correctifs arriveront par la suite, avec les retours de tout le monde.


## Télécharger la base de données


On pouvait déjà exporter un fichier JSON depuis la partie config. Mais que faire de ce fichier, sachant que poche ne gère pas encore l'import de fichier JSON ? Donc là, un second lien a été ajouté (pour l'instant, uniquement si vous utilisez sqlite).

La principale cible de cette fonctionnalité ? Les [utilisateurs de poche hosting](https://www.framabag.org) qui souhaiteraient quitter ce service pour s'auto-héberger.

## Récupération des vidéos Youtube

Depuis plusieurs mois, ce bug me perturbait quand même pas mal : poche ne savait pas récupérer les vidéos hébergées sur Youtube. C'est enfin corrigé. En grande partie grâce à [FiveFilters](http://fivefilters.org/) qui a gentiment contribué au projet poche en offrant l'avant dernière version de sa librairie Full-Text RSS (la version alors embarquée avec poche était la version open source qui était assez ancienne).


## Quelques corrections et ajouts

Des petits bugs par-ci par-là ont été corrigés, des traductions ont été mises à jour et la langue perse est maintenant disponible.

## Quand est-ce qu'on peut jouer avec ?

Avant la fin 2013. Promis. D'ici là, encore peut-être 2/3 petits trucs à corriger, mais dans l'esprit, la 1.3 ça sera avec tout ça. Si ça n'est pas un joli cadeau de Noël ça :) !
