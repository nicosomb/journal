---
title: Utiliser Mailcatcher via une machine Vagrant
date: 2015-10-28 09:30:00
category: billets
layout: article.njk
permalink: billets/2015/10/28/utiliser-mailcatcher-via-une-machine-vagrant/index.html
---

[Mailcatcher](http://mailcatcher.me/), c'est un serveur SMTP pour le local. Bien pratique, ça vous évite de devoir réellement envoyer des emails sur une boite mail toutes les deux minutes pour voir si la modification que vous venez de faire sur votre email s'affiche bien comme il faut.

![Mailcatcher](/images/2015-10-28-utiliser-mailcatcher-via-une-machine-vagrant/mailcatcher.png)

Au boulot, j'utilise une VM Vagrant pour mon projet. Comment faire pour pouvoir utiliser Mailcatcher sur ma VM ?

Déjà, il faut installer Mailcatcher (`gem install mailcatcher`).  
Ensuite, il faut rediriger le port `1080` de la VM vers le port `1080` de votre PC :

```
...
    config.vm.network :forwarded_port,  guest: 1080, host: 1080
...
```

Enfin, il faut démarrer Mailcatcher en lui forçant l'IP : `mailcatcher --ip=0.0.0.0`

Magie, vous avez accès à Mailcatcher en vous rendant sur `http//localhost:1080`.
