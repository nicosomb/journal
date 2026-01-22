function getDomainFromUrl(urlString) {
  try {
    const url = new URL(urlString);
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname.startsWith('127.')) {
      return '';
    }
    return url.hostname;
  } catch (e) {
    return '';
  }
}

const siteUrl = process.env.URL || process.env.SITEURL || 'http://127.0.0.1:8080';
const webmentionDomain = process.env.WEBMENTION_IO_DOMAIN || getDomainFromUrl(siteUrl);

module.exports = {
  siteName: 'Journal personnel d\'un dev web, père et maire',
  author: 'Nicolas Lœuillet',
  siteUrl: siteUrl,
  webmentionDomain: webmentionDomain,
  subtextBefore: `<p>Bienvenue ici !</p><p>Je suis <strong>papa de deux enfants à mi-temps</strong>, <strong>développeur PHP à 80% chez PrestaShop</strong>, et <strong>maire de Rinxent à temps plein</strong>. Il m'arrive parfois d'avoir un peu de temps pour rédiger des <a href="archives.html">billets qui me paraissent intéressants</a> (mais attention, parfois, ils le sont moins).</p><p>Je <strong>tente aussi de faire un peu de photo</strong>, et j'en poste quelques-unes sur un joli (enfin, moi je trouve) site qui s'appelle <a href="https://instantanes.loeuillet.org/">Instantanés</a>.</p>`,
  subtextAfter: `<p>Si vous voulez en savoir un peu plus sur moi, <a href="/pages/a-propos.html">j'ai détaillé un peu plus ma vie ici</a>. Et pour que l'on discute ensemble, n'hésitez pas à <a href="mailto:nicolas@loeuillet.org">m'envoyer un petit mail</a> ou alors à venir sur <a href="https://piaille.fr/@nicosomb">Mastodon</a>.</p>
<p>À bientôt, je l'espère !<br /><strong>Nicolas Lœuillet</strong></p>`,
  social: [
    { name: 'mon journal de maire', url: 'https://www.nicolasloeuillet.fr' },
    { name: 'mes photos', url: 'https://instantanes.loeuillet.org' },
    { name: 'mastodon', url: 'https://piaille.fr/@nicosomb' },
    { name: 'github', url: 'https://github.com/nicosomb' }
  ],
  githubRepo: 'https://github.com/nicosomb/journal',
  githubBranch: 'main',
  timezone: 'Europe/Paris',
  feedAllAtom: 'feeds/all.atom.xml'
};
