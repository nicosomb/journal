---
title: Mes templates de notes Obsidian
category: billets
date: 2026-03-12 18:07:04
layout: article.njk
tags:
  - outillage
permalink: billets/2026/03/12/mes-templates-de-notes-obsidian/index.html
---

Il y a quelques jours, [je détaillais mon organisation dans Obsidian](/billets/2026/03/02/comment-j-organise-mes-notes-dans-obsidian/).

Concernant les templates de notes, j'utilise le plugin [Templater](https://silentvoid13.github.io/Templater/introduction.html), et je n'ai — à ce jour — que deux modèles. 

## Note quotidienne

C'est ma note "journal perso", où je note, quand j'y pense, mes pensées du moment sur tous les sujets : perso, sport, boulot, mairie, etc. 

### Template 

Il est assez simple et correspond à mon organisation. Il prend la date du jour pour le titre et la propriété de date de création (oui, ça fait doublon, mais le titre peut être changé, même si en pratique ce n'est jamais le cas).

```
<% "---" %>
title: <% tp.date.now('YYYY-MM-DD') %>
created_at: <% tp.date.now('YYYY-MM-DD') %>
tags:
  - perso/journal
<% "---" %>
``` 

## Note 

Ce template, c'est pour tout le reste : RDV en mairie, réunion avec les élu-es, une note de doc pour le boulot, etc. 

### Template 

Ici, c'est plus complexe. 

Lorsque je crée ce type de note, j'ai 3 questions qui s'affichent. 

D'abord, la date de la note. Par défaut, c'est fixé à la date du jour. Mais ça peut être une date dans le futur quand je prépare ma prochaine réunion d'équipe par exemple. Cette date est utilisée ensuite pour le nom du fichier et le titre de la note. Pour cette astuce, j'ai demandé de l'aide sur le Discord d'Obsidian. 

Puis, on demande le nom de la note (`Réunion d'équipe`, `Commission développement durable`, `Mme Durand`, etc.). Ce nom est ajouté à la date pour le nom du fichier et le titre de la note. Ce qui fait que ma note sera nommée `2026-03-23 Réunion d'équipe` par exemple. 

Et enfin, dernière chose qui me permet de pré-remplir ma note : une fenêtre de suggestion des tags. Je ne peux en choisir qu'un seul (il faudrait que je vois si c'est possible de faire une sélection multiple), mais c'est déjà une bonne chose. Pour cette fenêtre de suggestion, [j'ai trouvé l'astuce ici](https://zachyoung.dev/posts/templater-snippets). 

```
<%*
const spawnDatePicker = (title) => {
  return new Promise((resolve) => {
    const modal = new tp.obsidian.Modal(tp.app);
    modal.setTitle(title);
    const content = createFragment((frag) => {
      const input = new tp.obsidian.TextComponent(modal.contentEl);
      input.setValue(tp.date.now('YYYY-MM-DD'));
      input.inputEl.type = "date";
      input.inputEl.style = "width: 100%;";
      const save = () => {
        resolve(input.getValue());
        modal.close();
      }
      const handleKeyDown = (evt) => {
        if (evt.key === "Escape") {
          resolve(input.getValue());
          modal.close();
        } else if (evt.key === "Enter") {
          save();
        }
      }
      input.inputEl.addEventListener("keydown", handleKeyDown);
      const buttonContainer = frag.createDiv("modal-button-container");
      new tp.obsidian.ButtonComponent(buttonContainer)
        .setButtonText("Submit")
        .setCta()
        .onClick(save);
      new tp.obsidian.ButtonComponent(buttonContainer)
        .setButtonText("Cancel")
        .onClick(save);
    });
    modal.setContent(content);
    modal.open();
  });
};

let reunion_date = await spawnDatePicker("Date de réunion")
let filename = await tp.system.prompt("Titre ?");
-%>
<% "---" %>
title: <% reunion_date + " " + filename %>
created_at: <% reunion_date %> 
tags:
  -  <% tp.system.suggester(item => item, Object.keys(tp.app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>
<% "---" %>
<%
await tp.file.rename(reunion_date + " " + filename)
%>
```

Et vous, vos astuces de template, c'est quoi ?
