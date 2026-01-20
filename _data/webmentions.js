/**
 * Récupère les webmentions depuis webmention.io
 * Pour utiliser ce fichier, vous devez :
 * 1. Créer un compte sur https://webmention.io
 * 2. Ajouter votre domaine
 * 3. Récupérer votre token API
 * 4. Définir la variable d'environnement WEBMENTION_IO_TOKEN
 */

const https = require('https');
const { URL } = require('url');

// Token API webmention.io (à définir dans les variables d'environnement)
const WEBMENTION_IO_TOKEN = process.env.WEBMENTION_IO_TOKEN || '';
const WEBMENTION_IO_DOMAIN = process.env.WEBMENTION_IO_DOMAIN || '';

// Cache pour éviter de faire trop de requêtes lors du build
let webmentionsCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchWebmentions() {
  // Si pas de token, retourner un tableau vide
  if (!WEBMENTION_IO_TOKEN || !WEBMENTION_IO_DOMAIN) {
    console.warn('Webmentions: Token ou domaine non configuré. Les webmentions ne seront pas récupérées.');
    return {};
  }

  // Utiliser le cache si disponible
  if (webmentionsCache && cacheTimestamp && (Date.now() - cacheTimestamp) < CACHE_DURATION) {
    return webmentionsCache;
  }

  try {
    const apiUrl = `https://webmention.io/api/mentions.jf2?domain=${WEBMENTION_IO_DOMAIN}&token=${WEBMENTION_IO_TOKEN}&per-page=1000`;
    
    const data = await new Promise((resolve, reject) => {
      https.get(apiUrl, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            resolve(json);
          } catch (e) {
            reject(e);
          }
        });
      }).on('error', (err) => {
        reject(err);
      });
    });

    // Organiser les webmentions par URL de page
    const organized = {};
    
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach(mention => {
        const target = mention['wm-target'];
        if (target) {
          // Normaliser l'URL (enlever le trailing slash, index.html, etc.)
          const normalizedUrl = normalizeUrl(target);
          // Stocker sous plusieurs formats pour faciliter la correspondance
          const variations = [
            normalizedUrl,
            normalizedUrl + '/',
            normalizedUrl.replace(/\/$/, ''),
            normalizedUrl.replace(/\/index\.html$/, ''),
            normalizedUrl.replace(/\.html$/, '')
          ];
          
          variations.forEach(url => {
            if (!organized[url]) {
              organized[url] = [];
            }
            // Éviter les doublons
            if (!organized[url].find(m => m.url === mention.url)) {
              organized[url].push(mention);
            }
          });
        }
      });
    }

    // Trier les webmentions par date (plus récentes en premier)
    Object.keys(organized).forEach(url => {
      organized[url].sort((a, b) => {
        const dateA = new Date(a.published || a['wm-received']);
        const dateB = new Date(b.published || b['wm-received']);
        return dateB - dateA;
      });
    });

    webmentionsCache = organized;
    cacheTimestamp = Date.now();
    
    return organized;
  } catch (error) {
    console.error('Erreur lors de la récupération des webmentions:', error.message);
    return {};
  }
}

function normalizeUrl(url) {
  try {
    const urlObj = new URL(url);
    // Enlever le trailing slash
    let path = urlObj.pathname;
    if (path.endsWith('/') && path !== '/') {
      path = path.slice(0, -1);
    }
    return `${urlObj.origin}${path}`;
  } catch (e) {
    return url;
  }
}

// Fonction principale exportée par Eleventy
module.exports = async function() {
  return await fetchWebmentions();
};
