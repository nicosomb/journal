---
title: Cannot start service ddev-ssh-agent
category: billets
date: 2020-09-15 14:47:00
layout: article.njk
permalink: billets/2020/09/15/cannot-start-service-ddev-ssh-agent/index.html
---

Ce matin, impossible de démarrer mes projets en local qui tournent avec [ddev](https://ddev.readthedocs.io/en/stable/).

```
ERROR: for ddev-ssh-agent  Cannot start service ddev-ssh-agent: endpoint with name ddev-ssh-agent already exists in network ddev_default
```

Je n'ai pas réussi à supprimer le réseau en question : `Error response from daemon: network ddev_default id rga81fxo5vpxc74v29cue3djg has active endpoints`

Seule solution que j'ai trouvée : virer l'ensemble de mes images.

```
ddev delete --omit-snapshot <project>
ddev hostname --remove-inactive
ddev delete images
docker rm $(docker ps -a | awk '/ddev/ { print $1 }')
docker rmi $(docker images | awk '/ddev/ {print $3}')
docker rmi -f $(docker images -q)
docker volume rm $(docker volume ls | awk '/ddev|-mariadb/ { print $2 }')
```

Et ensuite :

```
docker network disconnect --force ddev_default ddev_default.owuhcm5ia6fke5mo1i2hiedes.53v6rfgjf6yaig5nabikoh0g0
docker network rm ddev_default
```

Voila.
