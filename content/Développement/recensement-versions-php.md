Title: CMS, frameworks : recensement des versions de PHP (décembre 2015)
Date: 2015-12-11 12:00
Category: Développement
Tags: php, symfony, wallabag, magento


J'ai annoncé hier que [wallabag 2 ne serait pas compatible avec PHP <= 5.4](https://twitter.com/wallabagapp/status/674985952159338501), en conseillant vivement aux personnes qui avaient un serveur avec une version de PHP <= 5.4 de le mettre à jour.

Pour quelle raison wallabag ne sera pas compatible ? Car wallabag implémente [Rulerz](https://github.com/K-Phoen/rulerz) (pour avoir un joli moteur de règles) qui utilise les [générateurs](http://php.net/manual/fr/language.generators.syntax.php) ([*source*](https://github.com/K-Phoen/rulerz/pull/21/files#diff-b5d0ee8c97c7abd7e3fa29b9a27d1780)).

Suite à une discussion avec Pierrick de [Piwigo](http://piwigo.org) (qui me conseille de ne pas aller trop vite pour ne pas se couper une part non négligeable d'utilisateurs), j'ai décidé de faire le tour des applis PHP pour voir si on était dans le vrai ou pas avec wallabag.

Petit rappel : PHP 5.4 n'est plus maintenu (même les failles de sécurité) depuis le 3 septembre 2015.
Faut-il aussi vous rappeler que PHP 5.3 n'est plus maintenu depuis août 2014 et pour PHP 5.2, c'est depuis le 6 janvier 2011 (il y a bientôt 5 ans) ? ([*source*](http://php.net/supported-versions.php))

C'est facile de dire de mettre à jour son serveur, mais comment faire quand on est sur du mutualisé ?

## Jetons un œil du côté de certains hébergeurs

### OVH

Possible d'installer PHP **5.5, 5.6, 7** ([*source*](https://www.ovh.com/fr/hebergement-web/php.xml))

### Web4all

Possible d'installer PHP **5.2, 5.3, 5.4, 5.5** ([*source*](https://www.web4all.fr/hebergements.html))

### Alwaysdata

Possible d'installer PHP (accrochez-vous) ... **4.4.9 et de 5.2.5 à 7.0.0** ([*source*](https://twitter.com/alwaysdata/status/675249017836687360)).

Non, je ne reviendrai pas sur PHP 4.4.9 (mort depuis 7 ans et 4 mois). NON.

### Bilan

OK, je n'ai pas fait le tour de 10.000 hébergeurs, mais on voit quand même qu'il existe des hébergeurs grand public qui ont des versions correctes de PHP. Donc si votre hébergeur actuel ne vous propose pas PHP 5.5, contactez-le ... ou quittez-le. Ce n'est pas à vous de payer les lenteurs de votre hébergeur.

## CMS & frameworks

### Frameworks

* Zend Framework 3 : PHP > **5.5** ([*source*](http://framework.zend.com/blog/announcing-the-zend-framework-3-roadmap.html))
* Slim Framework 3 : PHP > **5.3** ([*source*]( http://docs.slimframework.com/start/get-started/))
* Laravel 5.1 : PHP > **5.5.9** ([*source*](http://laravel.com/docs/5.1#installation))
* Symfony 3.0 : PHP > **5.5.9** ([*source*](http://symfony.com/blog/symfony-3-0-0-beta1-released))

**50% PHP 5.3 et 50% PHP 5.5**

### CMS

* Wordpress 4.4 : PHP > **5.2.4** mais PHP > **5.6** recommandé ([*source*](https://wordpress.org/about/requirements/)). Je retiens (parce que ça m'arrange pour mon argumentaire) que Wordpress encourage vivement PHP 5.6 (ils proposent même un mail type à envoyer à son hébergeur).
* Joomla 3 : PHP > **5.5** ([*source*](https://www.joomla.org/about-joomla/technical-requirements.html))
* Drupal 8 : PHP > **5.5.9** ([*source*](https://www.drupal.org/requirements))
* Typo3 7.6.0 : PHP > **5.5** ([*source*](https://typo3.org/download/))
* Magento 2 : PHP > **5.5** ([*source*](http://devdocs.magento.com/guides/v2.0/install-gde/system-requirements.html))

**80% PHP 5.5 et 20% 5.6**

### Autres applications

* Piwik : PHP > 5.3.3 mais > 5.5 en 2016 ([*source*](http://piwik.org/docs/requirements/)). Je retiens donc PHP 5.5 car 2016, c'est demain.
* Piwigo : PHP > 5.2 ([*source*](http://fr.piwigo.org/basics/requirements))

**50% PHP 5.2 et 50% PHP 5.5**

## Conclusion

Nous avons donc :

* **PHP 5.2 : 9%**
* **PHP 5.3 : 18%**
* **PHP 5.5 : 64%**
* **PHP 5.6 : 9%**

En annonçant donc que wallabag v2 ne serait pas compatible avec PHP <= 5.4, je me situe dans les 73% des applis / frameworks présentes dans cet aperçu.

OK, des personnes ne pourront pas installer wallabag v2 du premier coup, mais ça leur permettra peut-être de se dire qu'il serait temps de changer de crèmerie.

Je suis bien évidemment pour avoir un maximum d'utilisateurs et se dire que potentiellement, on perd 30% d'utilisateurs, c'est beaucoup. Mais j'estime également que nous avons un rôle en incitant les gens à mettre à jour leurs plateformes.  
En dehors d'avoir le dernier gadget à la mode dans notre application (nous ne forçons pas les gens à avoir PHP 7 par exemple), c'est surtout une question de sécurité : les anciennes versions de PHP ont des failles de sécurité qui ne seront jamais corrigées.
