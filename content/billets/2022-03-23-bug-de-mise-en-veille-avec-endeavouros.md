---
title: Bug de mise en veille avec EndeavourOS
category: billets
date: 2022-03-23 14:45:00
layout: article.njk
permalink: billets/2022/03/23/bug-de-mise-en-veille-avec-endeavouros/index.html
---

Ça fait quelques semaines que j'ai basculé sur [EndeavourOS](https://endeavouros.com/) niveau distribution. C'est basé sur Arch Linux, c'est léger, ça fonctionne : ça me va très bien.  
Niveau bureau, c'est xfce. Pareil : c'est léger et ça fonctionne.

Je me suis rendu compte que, sur batterie, mon PC ne semblait pas se mettre en veille. Et donc la batterie se vidait extrêmement trop vite.

Et lorsque j'ai rallumé mon écran, j'ai eu cette erreur :

![Not enough swap space for hibernation](/images/2022-03-23-bug-de-mise-en-veille-avec-endeavouros/bug-veille.png)

Ah bah y'a pas de partition de swap. Je ne comprends pas, lors de l'installation, j'ai laissé la configuration par défaut.

Pas envie de formater de nouveau ma machine, j'ai donc regardé ce qu'il était possible de faire.

J'ai donc trouvé [cet article pour créer un fichier d'échange](https://wiki.archlinux.org/title/Swap_(Fran%C3%A7ais)#Fichier_d'%C3%A9change). Puis [celui-ci](https://confluence.jaytaala.com/display/TKB/Use+a+swap+file+and+enable+hibernation+on+Arch+Linux+-+including+on+a+LUKS+root+partition) (en anglais), où il est indiqué qu'un fichier, c'est sûrement mieux qu'une partition :

> Many Linux distribution installers will create an extra partition for swap.  However, there are several advantages to simply using a swap file on your root partition (the partition you installed Linux on).

J'ai donc suivi les instructions :

```
sudo dd if=/dev/zero of=/swapfile bs=4M count=1024
sudo chmod 600 /swapfile
mkswap /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Puis, pour ajouter le swap au démarrage, ajoutons la ligne `/swapfile none swap defaults 0 0` en éditant le fichier `/etc/fstab`.

Et voila, tout va mieux.
