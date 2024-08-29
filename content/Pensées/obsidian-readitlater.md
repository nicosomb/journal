Title: Obsidian, my new read-it-later app?
Date: 2024-08-29 12:00
Tags: obsidian
Category: Pensées

I use and love Obsidian for more than 3 years now.

I already told you about this application twice: « [Obsidian, mon nouvel outil de prise de notes](https://nicolas.loeuillet.org/billets/2021/03/02/obsidian-mon-nouvel-outil-de-prise-de-notes/) » and « [Créer une note bien rangée dans Obsidian grâce à une seule lettre](https://nicolas.loeuillet.org/billets/2024/08/25/creer-une-note-bien-rangee-dans-obsidian-grace-a-une-seule-lettre/) » (sorry, it’s in french). I even developed a plugin [to shrink your pinned tabs](https://nicolas.loeuillet.org/billets/2024/07/07/shrink-pinned-tabs-le-plugin-pour-obsidian-qui-vous-fait-gagner-de-la-place/).

Today, I want to show you how you can use Obsidian to replace Pocket, Instapaper, Omnivore or wallabag (oh wait!), as your read-it-later application.

One of Obsidian's great strengths is that you save your notes locally and in markdown: this is what we will do with our web articles.

Locally and in markdown ❤️

Requirements:

- Obsidian 😅
- [ReadItLater plugin](https://github.com/DominikPieper/obsidian-ReadItLater)

> ReadItLater is a simple plugin for Obsidian to collect interesting information from your clipboard into your vault.

I configured a new keyboard shortcut (`CMD + Shift + R`) to execute the `Save clipboard` command.

## My workflow

I’m reading a web article (or a YouTube video, a Mastodon toot, whatever) and I want to archive it locally. Here are the steps to do that:

- I copy its URL to the clipboard
- I open Obsidian
- `CMD + Shift + R`
- That’s it.

💡 A great improvement could be to have a browser extension or a bookmarklet.

## Classify article

Obsidian supports [tags](https://help.obsidian.md/Editing+and+formatting/Tags) and [properties](https://help.obsidian.md/Editing+and+formatting/Properties). With these features, you can easily assign new tags or other properties (for example, the status: unread, favorite, etc.).

## List unread articles

With [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) plugin, it’s easy to create a new note which lists unread articles for examples. Or your favorites ones.

## Share article with someone

In wallabag, you can share a saved article with someone by creating a public link.

With « [Share note](https://github.com/alangrainger/share-note) » plugin, it’s so easy to have this behavior.

For example, here is an article I saved with Obsidian and that I share with you thanks to the plugin: [https://share.note.sx/0g63rt07#4gU5b9Y4IDqL9XZvLfVQAxA64xLzYF9i36eHuCACtfc](https://share.note.sx/0g63rt07#4gU5b9Y4IDqL9XZvLfVQAxA64xLzYF9i36eHuCACtfc).

## To conclude

Give it a try to this solution, it can be nice for you if you’re looking for an offline solution (and with content saved in markdown). 