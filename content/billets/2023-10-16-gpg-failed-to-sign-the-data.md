---
title: gpg failed to sign the data
date: 2023-10-16 16:30:00
category: billets
layout: article.njk
permalink: billets/2023/10/16/gpg-failed-to-sign-the-data/index.html
---

Cet après-midi, sans raison apparente, plus possible de signer mes commits. Voici l'erreur que j'avais : 

```
error: gpg failed to sign the data
fatal: failed to write commit object
```

Rajouter `GIT_TRACE=1` avant `git commit`, histoire de débugguer un peu, n'a rien changé. 

Un autre moyen de trouver l'origine a été de jouer cette commande :

```
echo "test" | gpg --clearsign
```

Et j'ai eu ce message : 
```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

test
gpg: échec de la signature : Inappropriate ioctl for device
gpg: [stdin]: clear-sign failed: Inappropriate ioctl for device
```

Et j'ai trouvé la solution (toute simple) ici : [gpg: signing failed: Inappropriate ioctl for device](https://github.com/keybase/keybase-issues/issues/2798) : 

```
export GPG_TTY=$(tty)
```