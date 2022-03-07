Title: HAProxy, Let's Encrypt et plusieurs certificats
Date: 2017-02-10 15:46
Category: Billets
Tags: wallabag, haproxy, letsencrypt

Voici ma recette pour gérer plusieurs noms de domaine avec donc forcément plusieurs certificats SSL.

Petite présentation de mon infra :

* un serveur frontal avec HAProxy
* un serveur web pour \*.wallabag.it
* un serveur web pour \*.wallabag.org et wllbg.org
* un serveur MariaDB
* un serveur RabbitMQ

(ce ne sont pas des serveurs, mais des containeurs, mais dans l'idée, c'est pareil)

Je vais donc créer mes certificats sur mon frontal puis changer la configuration de HAProxy pour prendre en compte tout ça.

## Installation de Let's Encrypt sur mon frontal

```
git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
```

C'est tout.

## Génération de mon certificat

Avant toute chose, il faut couper HAProxy (sinon, impossible de communiquer avec les serveurs de Let's Encrypt) :

```
service haproxy stop
./letsencrypt-auto certonly --standalone
service haproxy start
```

Vous avez maintenant des fichiers générés dans `/etc/letsencrypt/live/votrenomdedomaine.com/` (ce sont en fait des alias vers `/etc/letsencrypt/archive/votrenomdedomaine.com/`.

Nous allons créer un fichier qui va concaténer `privkey.pem` et `cert.pem`
```
cd /etc/letsencrypt/live/votrenomdedomaine.com/
cat privkey.pem >> cle.pem
cat fullchain.pem >> cle.pem
```

## Configuration de HAProxy

Éditez `/etc/haproxy/haproxy.cfg`. Voici ce que ça donne pour moi :

```
frontend mon-front
    mode http
    bind  *:80
    option httplog
    option forwardfor
    option http-server-close
    option httpclose

    acl host_ndd hdr(host) -i votrenomdedomaine.com www.votrenomdedomaine.com
    use_backend mon-back-2 if host_ndd

    redirect scheme https code 301 if !{ ssl_fc }
default_backend mon-back-1

frontend mon-front-ssl
    mode http
    bind *:443 ssl crt /etc/ssl/certificate-gandi.pem crt /etc/letsencrypt/live/votrenomdedomaine.com/cle.pem crt /etc/letsencrypt/live/votreautrenomdedomaine.com/cle.pem

    option httplog
    option forwardfor
    option http-server-close
    option httpclose

    acl host_ndd hdr(host) -i votrenomdedomaine.com www.votrenomdedomaine.com
    use_backend mon-back-2 if host_ndd

    reqadd X-Forwarded-Proto:\ https
    http-request add-header X-CLIENT-IP %[src]
default_backend mon-back-1
```

J'ai deux frontaux, un pour le port 80, un pour le port 443. Par défaut, ils renvoient tous les deux sur `mon-back-1`. Dans certains cas (selon le nom de domaine, géré par le SNI), ça renvoie sur `mon-back-2`.

Concernant les certificats SSL, ce qui nous intéresse est la ligne `bind *:443 ssl ...`. Pour chaque nouveau certificat créé, vous ajoutez sur cette ligne le chemin vers le fichier `cle.pem` qu'on a créé précédemment : `crt /chemin/vers/votre/cle.pem`.

Sur cette ligne, j'ai `/etc/ssl/certificate-gandi.pem` qui correspond à mon certificat wildcard de chez Gandi (à l'époque, je n'avais pas pris le temps de regarder pour Let's Encrypt).

## Conclusion

Aujourd'hui, j'ai donc tous mes NDD en \*.wallabag.it qui sont gérés par le certificat `certificate-gandi.pem` puis wllbg.org et wallabag.org (et static.wallabag.org, puis prochainement doc.wallabag.org) qui sont gérés par mes certificats Let's Encrypt.

Pour wallabag.it, ça migrera dans les prochaines semaines sur du Let's Encrypt.
