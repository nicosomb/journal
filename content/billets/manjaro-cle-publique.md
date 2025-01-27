Title: Manjaro : "Erreur GPGME : Pas de données" / pas de clé publique
Date: 2021-12-20 10:23
Category: billets

Depuis quelques jours, à chaque fois que je lançais une commande de mise à jour avec `pacman` sur mon PC du boulot, j'avais cette erreur qui s'affichait :

```
Erreur GPGME : Pas de données
```

Mais aussi un message d'erreur m'indiquant que manjaro n'avait pas de clé publique.

<del>Après plusieurs recherches et plusieurs tests, je suis tombé sur quelqu'un qui avait le même souci que moi : [“error: GPGME error: No data” when trying to do anything in pacman](https://forum.manjaro.org/t/error-gpgme-error-no-data-when-trying-to-do-anything-in-pacman/78992/8)</del>

<del>Et à la fin de cette discussion, [un lien vers Stackoverflow](https://stackoverflow.com/questions/48117783/arch-linux-system-update-error-gpgme-error-no-data/67850084#67850084), évidemment.</del>

J'ai enfin trouvé [ce sujet de discussion sur le forum Manjaro](https://forum.manjaro.org/t/gpg-error-reading-key-no-public-key-when-updating-manjaro-keyring/86366).

Avec comme solution :

```
sudo rm -R /var/lib/pacman/sync
sudo pacman-mirrors -f5 && sudo pacman -Syy
```

Ça semble fonctionner. La suite au prochain épisode.
