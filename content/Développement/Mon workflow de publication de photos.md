Title: Publier des photos, c’est intime 
Date: 2023-03-17 09:30  
Category: Développement  
Tags: photos

L’autre jour, [j’annonçais un nouvel espace de publication]({filename}../Pensées/Publier des photos, c'est intime.md) de certaines de mes photos.  

Je vais aujourd’hui lister les différentes étapes pour publier ces photos. 

## Conversion en WebP 

Afin de ne pas publier des photos au poids trop important, j’ai décidé d’utiliser [le format WebP](https://fr.wikipedia.org/wiki/WebP) pour chacune de mes photos. 

Pour cette étape, j’utilise l’outil [`bespoke`](https://github.com/tmcw/bespoke) de Tom MacWright. Il redimensionne et convertit en jpg et en WebP. 

Je l’ai adapté pour mes besoins, à savoir : 
* conservation des données EXIF
* uniquement générer du WebP et uniquement en 2880 px de large maximum. 

Cet outil est très efficace et rapide. 

## Génération du site 

Pour le site en ligne, j’utilise [`photo-stream`](https://github.com/waschinski/photo-stream). C’est écrit en `ruby`, donc pas vraiment ce que je préfère. Mais ça fonctionne très bien et l’équipe de contribution est assez réactive (j’ai remonté des bugs et ai demandé le support de WebP, tout a été implémenté en quelques jours ❤️). 

### Localement 

Je ne maitrise absolument pas l’écosystème `ruby` alors je reconnais que j’ai un peu galéré. Passé mes déboires d’installation de dépendances, j’ai trouvé ce qu’il me fallait : 

```ruby
rbenv init
eval "$(rbenv init - zsh)"
rbenv shell 3.1.2
```

J’ai enfin un terminal qui est dans les bonnes conditions pour lancer les commandes suivantes : 

```ruby
bundle install
bundle exec jekyll build # génération du site
```

Pour tester localement, je lance un petit serveur web dans le répertoire `_site` généré pour ouvrir le fichier `index.html` (je peux faire ça puisque j’ai `php` installé en local sur ma machine) : 

```
php -S localhost:8002
```

Et voila ! 

### En ligne 

Maintenant que j’ai vérifié que tout était OK en local, je peux publier. 

J’ai un dépôt privé sur Github où je stocke mon fork de `photo-stream` et le répertoire `photos` nécessaire pour stocker mes photos. 

Pour la publication, j’ai créé une Github actions. À chaque commit sur mon dépôt, l’action génère le site (c’est-à-dire ce que je fais en local dans l’étape précédente) et déploie le site généré sur mon serveur. 

Voici le fichier `.github/workflows/deploy.yml` que j’ai concocté : 

```yaml
name: deploy

on:
    push:
        branches:
            - main

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v3
        - uses: ruby/setup-ruby@v1
          with:
            ruby-version: '3.1.2' # Not needed with a .ruby-version file
            bundler-cache: true # runs 'bundle install' and caches installed gems automatically
        - run: bundle install

        - name: Install dependencies
          run: sudo apt install libvips-tools

        - name: Build the project
          shell: bash
          run: "bundle exec jekyll build"

        - name: Check if we have everything
          shell: bash
          run: "ls -la _site/"

        - name: Remove the existing file structure
          uses: appleboy/ssh-action@master
          with:
              host: ${{ secrets.HOST }}
              username: ${{ secrets.USER }}
              key: ${{ secrets.SSHKEY }}
              port: ${{ secrets.PORT }}
              script: |
                rm -rf /var/www/*

        - name: Copy output via scp
          uses: appleboy/scp-action@master
          with:
              host: ${{ secrets.HOST }}
              username: ${{ secrets.USER }}
              port: ${{ secrets.PORT }}
              key: ${{ secrets.SSHKEY }}
              source: "_site/"
              target: "/var/www"

        - name: Copy output into site root
          uses: appleboy/ssh-action@master
          with:
              host: ${{ secrets.HOST }}
              username: ${{ secrets.USER }}
              key: ${{ secrets.SSHKEY }}
              port: ${{ secrets.PORT }}
              script: |
                mv /var/www/_site/* /var/www/
                rmdir /var/www/_site
```

Magie, ça fonctionne ! 

## Pour conclure 

Il y a sûrement des choses à améliorer dans mon process, mais ça fonctionne et pour le moment, c’est le principal. 

Dans les choses à faire, j’aimerais par exemple ne plus versionner le fork de `photo-stream` et le cloner (ou l’installer via `ruby` ?) depuis la Github action uniquement. Je n’aurais ainsi que mes photos dans un dépôt Github et ça serait amplement suffisant. 