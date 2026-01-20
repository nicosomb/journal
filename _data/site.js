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
  subtext: `<p>Bienvenue sur mon journal personnel, où il arrive parfois que je
publie des <a href="archives.html">choses intéressantes</a> (ou pas). Je tente de faire un peu de photo de temps à autre, et c'est sur <a href="https://instantanes.loeuillet.org/">cet autre site</a> que ça se passe.</p>
<p>Si vous voulez en savoir un peu plus sur moi, <a href="/pages/a-propos.html">j'ai listé ici</a> les sujets qui me passionnent.</p>
<p>N'hésitez pas à <a href="mailto:nicolas@loeuillet.org">m'envoyer un petit mail</a> si vous souhaitez que l'on discute.</p>
<p>À bientôt,<br />Nicolas Lœuillet</p>`,
  social: [
    { name: 'photos', url: 'https://instantanes.loeuillet.org' },
    { name: 'mastodon', url: 'https://piaille.fr/@nicosomb' },
    { name: 'github', url: 'https://github.com/nicosomb' }
  ],
  githubRepo: 'https://github.com/nicosomb/journal',
  githubBranch: 'main',
  timezone: 'Europe/Paris',
  feedAllAtom: 'feeds/all.atom.xml'
};
