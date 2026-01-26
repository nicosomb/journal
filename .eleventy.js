const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const footnote_plugin = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));
  
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
      const dt = DateTime.fromISO(dateObj, {zone: 'Europe/Paris'});
      return dt.toFormat("dd-MM-yyyy");
    }
    return DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'}).toFormat("dd-MM-yyyy");
  });

  eleventyConfig.addFilter("readableDateWithTime", (dateObj) => {
    if (typeof dateObj === 'string') {
      const dt = DateTime.fromISO(dateObj, {zone: 'Europe/Paris'});
      return dt.toFormat("dd-MM-yyyy HH:mm");
    }
    return DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'}).toFormat("dd-MM-yyyy HH:mm");
  });

  eleventyConfig.addFilter("strftime", (dateObj, format) => {
    const dt = DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'});
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
    if (format === '%d-%m-%Y %H:%M') {
      return dt.toFormat("dd-MM-yyyy HH:mm");
    }
    return dt.toFormat("dd-MM-yyyy");
  });

  eleventyConfig.addFilter("pelicanUrl", (url) => {
    if (url.startsWith('{static}')) {
      return url.replace('{static}', '');
    }
    if (url.startsWith('{attach}')) {
      return url.replace('{attach}', '');
    }
    return url;
  });

  eleventyConfig.addFilter("pelicanLink", (link) => {
    if (link.includes('{filename}')) {
      return link.replace('{filename}', '').replace('../', '');
    }
    return link;
  });

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

  eleventyConfig.addFilter("countWebmentions", (webmentions, url, siteUrl) => {
    if (!webmentions || !url) return 0;
    
    const baseUrl = siteUrl || process.env.URL || process.env.SITEURL || 'http://127.0.0.1:8080';
    const pageUrl = url;
    const normalizedPageUrl = url.replace('/index.html', '').replace('.html', '');
    const fullPageUrl = baseUrl + url;
    const fullNormalizedPageUrl = baseUrl + normalizedPageUrl;
    
    const mentions = webmentions[pageUrl] || 
                     webmentions[normalizedPageUrl] || 
                     webmentions[fullPageUrl] || 
                     webmentions[fullNormalizedPageUrl] || 
                     [];
    return Array.isArray(mentions) ? mentions.length : 0;
  });

  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("nowToRfc3339", function() {
    return new Date().toISOString();
  });

  eleventyConfig.addFilter("groupByYear", function(collection) {
    const grouped = {};
    collection.forEach(item => {
      const year = new Date(item.date).getFullYear();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(item);
    });
    return Object.entries(grouped)
      .map(([year, articles]) => [parseInt(year), articles.sort((a, b) => b.date - a.date)])
      .sort((a, b) => b[0] - a[0]);
  });

  eleventyConfig.addFilter("filterByTag", function(collection, tag) {
    if (!collection || !Array.isArray(collection)) return [];
    if (!tag) return [];
    return collection.filter(item => {
      if (!item || !item.data) return false;
      const tags = item.data.tags || [];
      if (!Array.isArray(tags)) return false;
      return tags.includes(tag);
    }).sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("filterWithoutTags", function(collection) {
    if (!collection || !Array.isArray(collection)) return [];
    return collection.filter(item => {
      if (!item || !item.data) return false;
      const tags = item.data.tags;
      // Un billet n'a pas de tags si :
      // - tags est undefined/null
      // - tags est un tableau vide
      // - tags n'est pas un tableau
      if (!tags) return true;
      if (!Array.isArray(tags)) return true;
      return tags.length === 0;
    }).sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("slugify", function(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  eleventyConfig.addCollection("billets", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/billets/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("allTags", function(collectionApi) {
    const tags = new Set();
    const billets = collectionApi.getFilteredByGlob("content/billets/*.md");
    billets.forEach(item => {
      if (item && item.data) {
        const itemTags = item.data.tags;
        if (Array.isArray(itemTags) && itemTags.length > 0) {
          itemTags.forEach(tag => {
            if (tag && typeof tag === 'string') {
              const trimmedTag = tag.trim();
              if (trimmedTag) {
                tags.add(trimmedTag);
              }
            }
          });
        }
      }
    });
    const tagsArray = Array.from(tags).filter(t => t && t.length > 0).sort();
    return tagsArray;
  });

  eleventyConfig.ignores.add("migration-scripts/**");
  eleventyConfig.ignores.add("11ty/**");

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
    markdownHighlighter: "prism"
  };
};
