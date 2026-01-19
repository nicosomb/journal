---
title: Gestion des Google Fonts avec tarteaucitron.js
date: 2020-01-16 10:50:00
category: billets
layout: article.njk
permalink: billets/2020/01/16/gestion-des-google-fonts-avec-tarteaucitronjs/index.html
---

[tarteaucitron.js](https://opt-out.ferank.eu/fr/) vous permet de "gérer facilement vos cookies" et les scripts externes chargés sur votre site.

Vous pouvez lui demander de gérer le chargement de vos polices Google Fonts, elles ne seront chargées qu'après validation des internautes.  
Mais la documentation n'est pas correcte.

Il est indiqué qu'il faut faire :

```
<script type="text/javascript">
        tarteaucitron.user.googleFonts = 'families';
        (tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');
</script>
```

Mais il faut que `tarteaucitron.user.googleFonts` soit un tableau. Ce qui donne par exemple :

```
<script type="text/javascript">
        tarteaucitron.user.googleFonts = ['Ubuntu', 'Roboto Condensed'];
        (tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');
</script>
```

Voila, avec ça, ça devrait fonctionner.
