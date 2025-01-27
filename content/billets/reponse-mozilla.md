Title: Mozilla / Pocket : la réponse de Mark Mayo
Date: 22-05-2015 11:42
Category: billets
Tags: pocket, wallabag, mozilla

*Ajout le 21 mai 2015 : NextInpact m'a contacté pour évoquer le sujet et a publié un article : [Mozilla critiquée pour son intégration prochaine de Pocket dans Firefox](http://www.nextinpact.com/news/95144-mozilla-critiquee-pour-son-integration-prochaine-pocket-dans-firefox.htm)*.

---

Il y a quelques jours, suite à la découverte du "mariage" Mozilla / Pocket, j'ai pris contact avec [Mark Mayo](https://blog.mozilla.org/press/bios/mark-mayo/), vice-président et manager général de Firefox.

Voici l'email que je lui ai envoyé (ne faites pas attention aux fautes, je ne suis pas bilingue, loin de là).

> Hello Mark,

> First of all, thank you for your reply on twitter.

> Just to be clear, I'm a french guy, I'm not english fluent, sorry for my mistakes.

> I want to talk with you about the integration of Pocket into next Firefox release.
> As a OSS developer and a Firefox user for long years, I want to say that I'm very surprised and very sad with the Mozilla's choice.

> As you know, some OSS alternatives exist.
> Your choice is contrary to Mozilla's baseline. Pocket is a silo for
> users, data are collected (and maybe reselled, who knows?).

> I'm the main developer of wallabag [https://github.com/wallabag/wallabag](https://github.com/wallabag/wallabag) and we are working on a new version, with an API, we already have a SaaS product, called Framabag https://framabag.org, supported by Framasoft, the 1st French association who supports free softwares (and who launched a campaign called Ungooglize the Internet [http://degooglisons-internet.org](http://degooglisons-internet.org)).
> But I don't send this email to tell you "stop that and use wallabag instead". No. I want to tell you "stop that and use OSS alternatives" (if it can be wallabag, it's better, for sure!).

> Moreover, you still have a great tool into Firefox, a read it later service, developed by cool guys. Why don't improve it? What will happen with this tool?

> In fact, your decision (Mozilla's decision) will appear to Firefox users like the Gnome decision to integrate Amazon into Gnome results few years ago (Edited: Ubuntu integrated Amazon results into Unity, not Gnome).
> As you can already see, a new issue was open on Bugzilla [https://bugzilla.mozilla.org/show_bug.cgi?id=1163434](https://bugzilla.mozilla.org/show_bug.cgi?id=1163434)

> You make great stuff, I know Mozilla needs money, but ethically, you're wrong. Totally wrong.

> I hope you will consider my email. I don't know if I can change something to this decision, but who knows?
> And if you want to hire me, I'm available!

> Kind regards,

> Nicolas

Voici la réponse de Mark Mayo. Cette réponse n'ayant rien de confidentiel, je me permets de la reproduire :

> > Hello Mark,
> >
> > First of all, thank you for your reply on twitter.

> > Just to be clear, I'm a french guy, I'm not english fluent, sorry for my mistakes.

> No problem, I speak some french but I'm not fluent. Should be enough for us to communicate, though.  :)

> > I want to talk with you about the integration of Pocket into next Firefox release.
> > As a OSS developer and a Firefox user for long years, I want to say that I'm very surprised and very sad with the Mozilla's choice.

> > As you know, some OSS alternatives exist.
> > Your choice is contrary to Mozilla's baseline. Pocket is a silo for users, data are collected (and maybe reselled, who knows?).

> We helped Pocket improve their ToS to be specific about that, so what they can/can't do is no mystery. And of course when we do partnerships we specify exactly what can and can't be done with user data. This is how we do it for every search partner, our geolocation partners, our Hello partnership, our safe browsing partners, and even Mozilla hosted services. Partnership contracts with commercial services is not new to us, in other words. This particular partnership contract mandates export of users' Pocket data, as example.

> > I'm the main developer of wallabag https://github.com/wallabag/wallabag and we are working on a new version, with an API, we already have a SaaS product, called Framabag https://framabag.org, supported by Framasoft, the 1st French association who supports free softwares (and who launched a campaign called Ungooglize the Internet http://degooglisons-internet.org).
> > But I don't send this email to tell you "stop that and use wallabag instead". No. I want to tell you "stop that and use OSS alternatives" (if it can be wallabag, it's better, for sure!).

> A couple of things.

> I'm not sure you understand that 100% of the Pocket code Firefox is shipping is open source. We are not shipping any closed source code for this project. Pocket's server backend is not open sourced, of course, but we have never mandated that web sites (or services) open source their server-side code before Firefox will load pages/data from them, so I don't believe anything is different there than we have always done.

> For bringing other read-it-later services (like wallabag!) in, we're still working out the timeline for this, and it involves finishing some Australis work so that non-XUL addons can integrate properly (the only reason Pocket is not being shipped as a pure add-on now). I'd love to work with you to see how we might feature wallabag in the future.

> > Moreover, you still have a great tool into Firefox, a read it later service, developed by cool guys. Why don't improve it? What will happen with this tool?

> We struggle to provide enough resources to features like to keep them competitive, working, improving, etc as we maintain so many other features in Firefox that we believe are more "core" to browsing. I agree that the service (specifically the server-side) works well for powering basic reading-list functionality. The team did a good job. Would be great to see someone pick that up and use it as part of an overall solution.

> > In fact, your decision (Mozilla's decision) will appear to Firefox users like the Gnome decision to integrate Amazon into Gnome results few years ago (Edited: Ubuntu integrated Amazon results into Unity, not Gnome).
> > As you can already see, a new issue was open on Bugzilla https://bugzilla.mozilla.org/show_bug.cgi?id=1163434

> > You make great stuff, I know Mozilla needs money, but ethically, you're wrong. Totally wrong.

> We already integrate Amazon into our search system, so I'm not sure what to say about the Gnome comparison. To be clear, though, this has absolutely nothing to do with money. We're shipping Pocket because we love their product, and so do our users. Pocket is, by very far, the most popular reading-list add-on used with Firefox. Pocket also started as a Firefox add-on and even won an add-ons developer contest years ago -- we've know Nate for a very long time. We're really happy to bring Pocket's great user experience, via our identity platform (Firefox Account), to more of our users who don't know about reading list services yet.

> Hoping this additional information is useful. We've also got updated FAQs and going out soon. And to say it again, let's get in touch again when we've made progress on opening the integration system up.

> Regards,

> -Mark
