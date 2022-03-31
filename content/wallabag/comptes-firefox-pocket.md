Title: Un peu de mouvement chez Pocket et l'info du coût du rachat
Date: 2022-03-31 13:30
Category: Billets

En lisant l'article allemand [« Bevorstehende Umstellung der Pocket-Konten auf Firefox-Konten »](https://www.soeren-hentzschel.at/mozilla/pocket-umstellung-firefox-konto/), on apprend qu'il sera très prochainement obligatoire d'avoir un compte Firefox pour accéder à son compte Pocket. 

On peut trouver un peu de détails dans le site de support de Mozilla : [Transition de Pocket vers les comptes Firefox](https://support.mozilla.org/fr/kb/transition-pocket-vers-comptes-firefox). 

Bon, c'est pas un changement très important. Ça nous permet juste d'avoir aussi l'information (peut-être déjà connue du monde entier, mais moi je savais pas) du coût du [rachat de Pocket par Mozilla en 2017]({filename}mozilla-rachete-pocket-pourquoi-c-est-une-bonne-et-une-mauvaise-chose-pour-wallabag.md) : 

> Pocket wurde im Februar 2017 für 30 Millionen Dollar von Mozilla übernommen. 

Trente millions de dollars pour une entreprise qui cherchait (cherche ?) son modèle économique. OK.  
Depuis, on ne sait pas trop ce que ça donne et je n'ai pas vu beaucoup de nouvelles fonctionnalités arriver. 

## Ah mais ils ne devaient pas rendre opensource leur code au fait ? 

Ah bah oui tiens, bonne question Nicolas : ça en est où ça ? [Allons voir le ticket concerné sur Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1343006), qui nous renvoie [sur un ticket Github](https://github.com/Pocket/extension-save-to-pocket/issues/75#issuecomment-655311178).  
Où l'on apprend par Mike Koidin (CEO de Pocket, le fondateur Nate Weiner étant parti) que certaines briques ont été ouvertes. 

Notamment [le projet proxy-server](https://github.com/Pocket/proxy-server), un truc qui permet de donner du contenu sponsorisé tout en préservant la vie privée. Ha ha. 

Donc le cœur de Pocket, le code qui permet d'aller récupérer le contenu d'un article, et la manière dont les choses sont stockées et analysées, aucune trace pour l'instant. 

Un jour peut-être. Ou pas. 