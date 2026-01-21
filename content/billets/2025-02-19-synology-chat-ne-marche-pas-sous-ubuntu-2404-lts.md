---
title: Synology Chat ne marche pas sous Ubuntu 24.04 LTS
category: billets
date: 2025-02-19 07:30:00
layout: article.njk
permalink: billets/2025/02/19/synology-chat-ne-marche-pas-sous-ubuntu-2404-lts/index.html
---

[J'expliquais hier](https://nicolas.loeuillet.org/billets/2025/02/18/un-systeme-de-messagerie-a-domicile-merci-synology/) que j'avais installé à la maison Synology Chat sur les ordinateurs de la maison.

J'ai eu un souci avec un ordinateur qui tourne sous Ubuntu 24.04 LTS.

Voici l'erreur que j'ai obtenue en démarrant le logiciel :

```
LaunchProcess: failed to execvp:
/opt/Synology
Trace/breakpoint trap (core dumped)
```

Le souci se trouve au niveau du répertoire d'installation de Synology Chat.
Le répertoire concerné est `/opt/Synology Chat`. Il suffit de le renommer en supprimant l'espace pour obtenir `/opt/SynologyChat`.

Il y a également un lien symbolique à modifier.

```
sudo mv /opt/Synology\ Chat /opt/SynologyChat
sudo rm /etc/alternatives/synochat
sudo ln -s /opt/SynologyChat/synochat /etc/alternatives/synochat
sudo nano /usr/share/applications/synochat.desktop # modifier Exec=/opt/Synology Chat/synochat en Exec=/opt/SynologyChat/synochat
```

Logiquement, après tout ça, votre souci devrait être corrigé.
