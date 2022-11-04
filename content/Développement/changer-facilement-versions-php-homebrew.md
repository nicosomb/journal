Title: Changer facilement de version de php avec Homebrew
Date: 2022-11-04 10:45
Category: Billets

Le code ci-dessous (à ajouter dans dans votre `~/.zshrc` ou `~/.bashrc`) ne fonctionne que si vous avez `homebrew` d'installé.

Il vous permet de permuter facilement de version de PHP en ligne de commande. 

```
# determine versions of PHP installed with HomeBrew
installedPhpVersions=($(brew ls --versions | ggrep -E 'php(@.*)?\s' | ggrep -oP '(?<=\s)\d\.\d' | uniq | sort))
# create alias for every version of PHP installed with HomeBrew
for phpVersion in ${installedPhpVersions[*]}; do
    value="{"
    for otherPhpVersion in ${installedPhpVersions[*]}; do
        if [ "${otherPhpVersion}" = "${phpVersion}" ]; then
            continue
        fi
        # unlink other PHP version
        value="${value} brew unlink php@${otherPhpVersion};"
    done
    # link desired PHP version
    value="${value} brew link php@${phpVersion} --force --overwrite; } &> /dev/null && php -v"
    alias "${phpVersion}"="${value}"
done
```

Il vous faut la dernière version de `grep` (`brew install grep`). 

Et maintenant, avec un `alias | grep php`, voici le résultat : 

```
7.4='{ brew unlink php@8.0; brew unlink php@8.1; brew link php@7.4 --force --overwrite; } &> /dev/null && php -v'
8.0='{ brew unlink php@7.4; brew unlink php@8.1; brew link php@8.0 --force --overwrite; } &> /dev/null && php -v'
8.1='{ brew unlink php@7.4; brew unlink php@8.0; brew link php@8.1 --force --overwrite; } &> /dev/null && php -v'
```

Vous n'avez plus qu'à jouer la commande `8.0` pour basculer sur la version 8.0 de PHP. Et ainsi de suite. 