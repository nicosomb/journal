const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Plugin RSS
  eleventyConfig.addPlugin(pluginRss);
  
  // Configuration des dossiers
  // Copier les images et fichiers statiques depuis content/ (maintenant dans 11ty)
  eleventyConfig.addPassthroughCopy({
    "content/images": "images",
    "content/static": "static",
    "theme/css": "theme/css",
    "theme/fonts": "theme/fonts",
    "_redirects": "_redirects"
  });

  // Filtres de date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (typeof dateObj === 'string') {
      // Si c'est une chaîne ISO, la convertir en Date
      const dt = DateTime.fromISO(dateObj, {zone: 'Europe/Paris'});
      return dt.toFormat("dd-MM-yyyy");
    }
    return DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'}).toFormat("dd-MM-yyyy");
  });

  eleventyConfig.addFilter("strftime", (dateObj, format) => {
    const dt = DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'});
    // Format français similaire à Pelican
    if (format === '%d-%m-%Y') {
      return dt.toFormat("dd-MM-yyyy");
    }
    if (format === '%d-%m') {
      return dt.toFormat("dd-MM");
    }
    if (format === '%Y-%m-%d') {
      return dt.toFormat("yyyy-MM-dd");
    }
    if (format === '%a %d %B %Y') {
      return dt.setLocale('fr').toFormat("EEE dd MMMM yyyy");
    }
    return dt.toFormat("dd-MM-yyyy");
  });

  // Filtre pour gérer les références Pelican
  eleventyConfig.addFilter("pelicanUrl", (url) => {
    // Convertit {static}/images/... en /images/...
    if (url.startsWith('{static}')) {
      return url.replace('{static}', '');
    }
    // Convertit {attach}/static/... en /static/...
    if (url.startsWith('{attach}')) {
      return url.replace('{attach}', '');
    }
    return url;
  });

  // Filtre pour les liens internes {filename}
  eleventyConfig.addFilter("pelicanLink", (link) => {
    // Convertit {filename}../billets/... en liens relatifs
    if (link.includes('{filename}')) {
      // À adapter selon le contexte
      return link.replace('{filename}', '').replace('../', '');
    }
    return link;
  });

  // Filtre pour nettoyer le chemin de fichier (enlever ./ au début)
  eleventyConfig.addFilter("cleanPath", (path) => {
    if (path && path.startsWith('./')) {
      return path.substring(2);
    }
    return path;
  });

  eleventyConfig.addFilter("filterByProperty", (array, property, value) => {
    if (!Array.isArray(array)) return [];
    return array.filter(item => item && item[property] === value);
  });

  eleventyConfig.addFilter("filterByPropertyIn", (array, property, ...values) => {
    if (!Array.isArray(array)) return [];
    return array.filter(item => item && item[property] && values.includes(item[property]));
  });

  eleventyConfig.addFilter("filterByPropertyNot", (array, property, ...values) => {
    if (!Array.isArray(array)) return [];
    return array.filter(item => item && item[property] && !values.includes(item[property]));
  });

  // Filtre pour limiter une collection à N éléments
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Filtre pour obtenir la date actuelle en RFC3339
  eleventyConfig.addFilter("nowToRfc3339", function() {
    return new Date().toISOString();
  });

  // Filtre pour grouper par année
  eleventyConfig.addFilter("groupByYear", function(collection) {
    const grouped = {};
    collection.forEach(item => {
      const year = new Date(item.date).getFullYear();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(item);
    });
    // Convertir en array de [year, articles] et trier par année décroissante
    return Object.entries(grouped)
      .map(([year, articles]) => [parseInt(year), articles.sort((a, b) => b.date - a.date)])
      .sort((a, b) => b[0] - a[0]);
  });

  // Collections
  eleventyConfig.addCollection("billets", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/billets/*.md").sort((a, b) => {
      return b.date - a.date; // Plus récent en premier
    });
  });

  // Ignorer les dossiers de migration et l'ancien dossier 11ty
  eleventyConfig.ignores.add("migration-scripts/**");
  eleventyConfig.ignores.add("11ty/**");

  // Configuration de base
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "output"
    },
    templateFormats: ["md", "njk", "html", "xml"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // Permet d'utiliser les fichiers markdown avec front matter personnalisé
    markdownHighlighter: "prism"
  };
};
