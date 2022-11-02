Title: Style pour mieux afficher certains messages sur Mastodon
Date: 2022-11-02 13:37
Category: Billets

De retour sur Mastodon [par ici](https://piaille.fr/@nicosomb), je retrouve quelques soucis rencontrés précédemment.  
Comme celui de la non différence d'affichage entre un message public et un message à confidentialité restreinte. 

Il y a donc un moyen très facile pour changer ça. Il faut d'abord installer [Stylus](https://addons.mozilla.org/fr/firefox/addon/styl-us/). 

Puis créer un nouveau style propre au nom de domaine de votre instance Mastodon, avec le code CSS suivant : 

```

.button:active, .button:focus, .button:hover {
    text-decoration:underline;
}

.fa-unlock {
    color:#4648ca;   
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 0 0 2px #fff; 
}
.fa-lock {
    color:#ae2323;
    text-shadow: 0 0 2px #fff; 
}

.fa-at {
    color:#C00000;
    text-shadow: 0 0 2px #fff; 
}

.fa-globe {
    color:rgb(72, 145, 87);
    text-shadow: 0 0 2px #fff; 
}
.status__wrapper-direct, .detailed-status-direct, [aria-label="Messages directs"] .scrollable {
      background:rgba(0,0,0,.1);
}
```