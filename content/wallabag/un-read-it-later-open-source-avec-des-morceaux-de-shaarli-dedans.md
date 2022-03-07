Title: Un read it later open source avec des morceaux de Shaarli dedans
Date: 28-03-2013 12:00
Category: Billets
Tags: wallabag

Edit du 4 avril 2013 : je me suis en route, j’ai commencé le développement de poche, un read it later open source en PHP.

Depuis quelques mois maintenant, j’utilise quotidiennement Pocket (anciennement Read-it-later). Vraiment pratique, entre le PC, la tablette et le téléphone, tout fonctionne très bien. Pour ne pas devenir « pocket dépendant », j’ai regardé s’il existait un read it later open source qui pourrait le remplacer.

J’ai trouvé 2/3 ébauches de choses pas inintéressantes (notamment Goose qui pourrait servir de base pour un tel outil), mais rien de fini et d’opérationnel.

Et je me suis en fait souvenu de shaarli, un delicious open source. Je vais donc le détourner de sa fonctionnalité principale — partager et sauvegarder ses favoris — pour en faire mon Read it later open source. Par défaut, tous les liens ajoutés sont privés. Pour l’instant, je leur ajoute tous le même tag (comme ça, je peux continuer à utiliser shaarli pour faire autre chose) et je récupère le flux RSS de ce tag que j’ajoute dans mon lecteur de flux.

Et là, Ô magie, je retrouve dans mon agrégateur les liens vers les articles que je souhaite lire. Elle est pas belle la vie ?

Tout n’est pas parfait, car l’intérêt d’un service à la Pocket, c’est qu’un article lu n’apparaît plus. Là, je dois coupler shaarli à un agrégateur pour retrouver cette fonctionnalité. L’intégration avec la tablette sera également à voir (je me souviens qu’il existe une application android pour partager vers shaarli, à voir si elle fonctionne toujours). Mais au moins, je gère mes données, je ne suis pas dépendant d’un service en ligne.

J’en ai profité pour demander à sebsauvage une petite évolution de shaarli : pouvoir ne pas ouvrir la popup lors de l’ajout d’un lien depuis le bookmarklet. L’intérêt ? Sauvegarder des liens encore plus rapidement.

Mais en rédigeant ce billet, je me rends compte qu’une autre évolution serait peut-être sympa : avoir un tag par défaut pour les liens. À voir si c’est pertinent, je verrai à l’usage.

Bref, si vous cherchez un pocket / instapaper / read it later open source, utilisez Shaarli.
