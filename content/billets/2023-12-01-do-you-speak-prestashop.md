---
title: Do you speak PrestaShop?
date: 2023-12-01 11:00:00
tags:
  - opensource
url: /billets/2023/12/01/do-you-speak-prestashop/
---

Jeudi 30 novembre 2023 se tenait la toute première [PrestaShop Developer Conference](https://events.prestashop.com/prestashop-developer-conference). Avec [Julie Varisellaz](https://www.linkedin.com/in/julievarisellaz/), nous intervenions pour parler traductions au sein du projet PrestaShop. 

![Julie Varisellaz et Nicolas Lœuillet](/images/2023-12-01-do-you-speak-prestashop/prestashop-conference.jpg)

(merci [@Progi1984](https://piaille.fr/@progi1984) pour la photo)

> Découvrez le parcours d’une chaîne de traduction, du code jusqu’à votre boutique. Après une présentation de la plateforme Crowdin et du travail de la communauté de traducteurs, nous vous expliquerons comment nous avons automatisé le processus pour gagner en efficacité.

Voici les notes que nous avons prises pour préparer cette intervention. 

Les diapositives sont disponibles ici : [https://fr.slideshare.net/nicosomb/do-you-speak-prestashop](https://fr.slideshare.net/nicosomb/do-you-speak-prestashop)
## La plateforme Crowdin
- Il y a 2 façons de traduire sa boutique PrestaShop. Soit directement depuis son back-office (utile si l’on souhaite adopter un ton ou un vocabulaire précis pour s’adresser à ses clients). Soit directement via la plateforme de traduction Crowdin. 
- Si on passe par Crowdin, les traductions profiteront à toute la communauté.
- 82 langues ouvertes à la traduction. 12 langues traduites à 100% et environ une quinzaine traduites entre 97 et 99%.
## Le parcours d’une chaîne de traduction
- Qui dit nouvelles versions de PrestaShop dit nouveaux contenus à traduire. Un peu avant la sortie d’une version, on publie les nouveaux contenus sur Crowdin pour que les traducteurs puissent les traduire.
- Une chaîne doit aussi être validée par un proofreader pour être envoyée vers PrestaShop. Les proofreaders sont des traducteurs particulièrement actifs à qui on a donné les droits de validation. Ils sont là pour s’assurer de la qualité et de la cohérence des traductions.
- Une fois qu’une chaîne est traduite et validée par un proofreader, elle est envoyée vers PrestaShop. La synchronisation se fait tous les jours. Vous pouvez récupérer les dernières traductions sur votre boutique. Pour ça il ne faut pas oublier de mettre à jour la langue depuis votre back-office (Menu International > Traductions > Mettre à jour une langue). Les traductions que vous avez personnalisées dans votre back-office ne seront pas écrasées. 
## La contribution 
- Coder n’est pas le seul moyen de contribuer à un projet open source. La traduction est un autre moyen de contribuer ! 
- S’inscrire à un projet de langue sur Crowdin. Soit la langue est déjà traduite à 100% et on peut proposer des améliorations, soit la langue n’est pas encore à 100% et on peut contribuer pour aider à atteindre cet objectif. 
- Si c’est un sujet qui vous intéresse : article de blog tous les mois sur le blog du projet open source (Build) + channel Slack `prestashop.slack.com` `#translation` + Crowdin [https://crowdin.com/project/prestashop-official](https://crowdin.com/project/prestashop-official)
## Comment nous gérions les traductions avant

Tout se faisait à la main, avec les étapes suivantes : 

1. Clone de l’outil en local
2. Configuration et installation
3. Trouver la dernière personne qui avait réussi à faire fonctionner l’outil parce que “ça marche pas ©”
4. Exécution de la commande qui exporte les fichiers depuis le code
5. Copier des fichiers dans PrestaShop
6. Création d’une Pull Request à la main 
7. Retours de l’équipe Wording dans la Pull Request
8. Appliquer les retours dans PrestaShop en local 
9. GOTO 4

Autant dire que c'était laborieux et que tout le monde perdait du temps. 
## Comment nous gérons les traductions aujourd'hui

Au moyen des Github Actions. 

**Qu'est-ce qu'une Github Action ?** 

> GitHub Actions est une plateforme d’intégration continue et livraison continue (CI/CD) qui vous permet d’automatiser votre pipeline de génération, de test et de déploiement.
> 
> <cite>Documentation GitHub</cite>

Ces actions peuvent être déclenchées de manière manuelle ou automatique, suite à un événement : quand on ouvre une pull request, quand on l'assigne à quelqu'un, quand on démarre une discussion, etc. Bref : dès qu'on fait quelque chose sur Github, on peut déclencher une action. 

Une action se configure via un fichier YML, dans le répertoire `.github/workflows` de votre projet. 

Chez PrestaShop, on s'en sert pour beaucoup de choses : 

* mise à jour des dépendances internes (modules PrestaShop)
* sur les PR : près de 40 vérifications sont lancées via des Github Actions (tests, validation de PR, linter JS ou PHP, tests UI ou d'intégration)
* les Nightly
* le build de nos images Docker 
* la mise à jour et le déploiement de nos sites TopContributors et TopTranslators 

Et bien évidemment ... pour la gestion des traductions.

Il y a plusieurs mois de cela, un travail de réécriture du code a été lancée afin de faciliter la tâche des équipes Wording et Dev. Cette réécriture s'est faite sur notre outil TranslationTool. À l'heure actuelle, ce dépôt est privé. En effet, il contenait historiquement des données sensibles. 

En septembre dernier, nous avons de nouveau travaillé sur cet outil afin de le rendre compatible avec l'API V2 de Crowdin. Logiquement, je peux m'engager ici en disant que dans les semaines à venir, ce dépôt devrait être ouvert à la communauté, l'ensemble du nettoyage ayant été effectué. 

Et donc le travail de réécriture a été effectué, vous l'aurez compris, avec l'implémentation des Github Actions. 

Ce que je vais expliquer là est effectué pour chaque branche maintenue de PrestaShop. C'est à dire qu'aujourd'hui, le travail est fait pour les branches 1.7.x, 8.x et develop, à savoir PrestaShop 9. 

Les 2 premières étapes de notre processus sont lancées de manière manuelle. Ces actions ne concernent que la langue par défaut du projet, à savoir l'anglais : 

* on met à jour le dépôt du catalogue par défaut en extrayant le wording depuis les sources. Une Pull Request est ouverte sur le dépôt PrestaShop/PrestaShop, afin d'être revue et corrigée par l'équipe Wording. 
* puis on pousse ces changements sur Crowdin. 

L'équipe de traduction peut ainsi traduire les nouvelles chaines ou mettre à jour celles qui le nécessitent, via l'interface de Crowdin.  

Les différents catalogues sont ensuite utilisés pour générer des fichiers XLF. Ce sont eux qui sont utilisés par PrestaShop. 
Dans Crowdin, les fichiers sont rangés dans une arborescence par domaine. C'est à dire qu'on a par exemple, un dossier `Admin/Catalog/` qui contient le fichier `Feature.xlf`. 

De manière quotidienne, une action Github télécharge l'ensemble de ces fichiers XLF (c'est-à-dire l'ensemble des langues), puis les adapte à ce qui est attendu par PrestaShop, à savoir dans notre exemple, un seul fichier `translations/default/AdminCatalogFeature.xlf`. 

Ils sont ensuite poussés sur le dépôt public [TranslationFiles](https://github.com/PrestaShop/TranslationFiles). 
Ce dépôt contient toutes les traductions de toutes les versions de PrestaShop. 

À chaque fois qu'une modification (un push) est faite sur ce dépôt, une autre action prend la relève et crée une archive pour chaque langue puis la pousse sur un bucket Google Cloud Platform. 

Ces archives sont stockées sur Google Cloud Platform afin de ne pas atteindre les limites imposées par Github en terme de téléchargement. 

Ainsi, pour chaque version de PrestaShop et pour chaque langue, nous avons une archive disponible à l'URL suivante : `https://i18n.prestashop-project.org/translations/VERSION/LOCALE/LOCALE.zip`

Exemple : `https://i18n.prestashop-project.org/translations/8.1.0/fr-FR/fr-FR.zip`

🎉 Chaque boutique peut maintenant télécharger et utiliser la traduction souhaitée. 

En conclusion, le travail effectué permet de faire gagner énormément de temps aux équipes de PrestaShop. Il est sûrement possible d'améliorer encore tout cela, notamment avec des fonctionnalités de l'API V2 de Crowdin. Mais à l'heure actuelle, nous n'avons pas encore creusé de ce côté-là. 
Peut-être passons nous à côté de sujets qui pourraient encore nous aider : vos retours sont les bienvenus ! 

