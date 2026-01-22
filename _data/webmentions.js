const https = require('https');
const { URL } = require('url');

const WEBMENTION_IO_TOKEN = process.env.WEBMENTION_IO_TOKEN || '';
const WEBMENTION_IO_DOMAIN = process.env.WEBMENTION_IO_DOMAIN || '';

let webmentionsCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000;

async function fetchWebmentions() {
  if (!WEBMENTION_IO_TOKEN || !WEBMENTION_IO_DOMAIN) {
    console.warn('Webmentions: Token ou domaine non configuré. Les webmentions ne seront pas récupérées.');
    return {};
  }
  if (webmentionsCache && cacheTimestamp && (Date.now() - cacheTimestamp) < CACHE_DURATION) {
    return webmentionsCache;
  }

  try {
    const apiUrl = `https://webmention.io/api/mentions.jf2?domain=${WEBMENTION_IO_DOMAIN}&token=${WEBMENTION_IO_TOKEN}&per-page=1000`;
    
    const data = await new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      };
      
      https.get(apiUrl, options, (res) => {
        const contentType = res.headers['content-type'] || '';
        const chunks = [];
        
        res.on('data', (chunk) => {
          chunks.push(chunk);
        });
        
        res.on('end', () => {
          try {
            const buffer = Buffer.concat(chunks);
            const data = buffer.toString('utf8');
            const json = JSON.parse(data);
            resolve(json);
          } catch (e) {
            console.error('Erreur lors du parsing JSON:', e.message);
            reject(e);
          }
        });
      }).on('error', (err) => {
        reject(err);
      });
    });

    const organized = {};
    
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach(mention => {
        const target = mention['wm-target'];
        if (target) {
          const normalizedUrl = normalizeUrl(target);
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
            if (!organized[url].find(m => m.url === mention.url)) {
              organized[url].push(mention);
            }
          });
        }
      });
    }
    Object.keys(organized).forEach(url => {
      organized[url].sort((a, b) => {
        const dateA = new Date(a.published || a['wm-received']);
        const dateB = new Date(b.published || b['wm-received']);
        return dateA - dateB;
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
    let path = urlObj.pathname;
    if (path.endsWith('/') && path !== '/') {
      path = path.slice(0, -1);
    }
    return `${urlObj.origin}${path}`;
  } catch (e) {
    return url;
  }
}

module.exports = async function() {
  return await fetchWebmentions();
};
