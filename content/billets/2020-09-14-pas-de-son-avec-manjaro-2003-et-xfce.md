---
title: Pas de son avec Manjaro 20.0.3 et xfce
category: billets
date: 2020-09-14 14:48:00
layout: article.njk
permalink: billets/2020/09/14/pas-de-son-avec-manjaro-2003-et-xfce/index.html
---

Je viens tout juste d'installer Manjaro 20.0.3 sur mon HP Probook 450 et surprise, pas de son.

```
➜  ~ cat /proc/asound/cards
--- no soundcards ---
```

Aucune carte son détectée ... Très bien.

Quelques recherches plus loin, et je remonte à ce ticket Arch Linux : [No sound after upgrading to linux 5.4.1](https://bugs.archlinux.org/task/64720).

Manipulation à faire : éditer `/etc/default/grub` et ajouter `snd_hda_intel.dmic_detect=0` sur la ligne `GRUB_CMDLINE_LINUX_DEFAULT`.

On redémarre et logiquement, ça fonctionne.
