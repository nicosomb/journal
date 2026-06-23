#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import https from 'https';
import { URL } from 'url';
import Parser from 'rss-parser';

const dataDir = new URL('../data/', import.meta.url);
const PHOTO_LIMIT = 3;
mkdirSync(dataDir, { recursive: true });

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

function normalizeUrl(url) {
  try {
    const urlObj = new URL(url);
    let path = urlObj.pathname;
    if (path.endsWith('/') && path !== '/') {
      path = path.slice(0, -1);
    }
    return `${urlObj.origin}${path}`;
  } catch {
    return url;
  }
}

async function fetchWebmentions() {
  const token = process.env.WEBMENTION_IO_TOKEN || '';
  const domain = process.env.WEBMENTION_IO_DOMAIN || '';

  if (!token || !domain) {
    return {};
  }

  const apiUrl = `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}&per-page=1000`;
  const data = await getJSON(apiUrl);
  const organized = {};

  if (Array.isArray(data.children)) {
    for (const mention of data.children) {
      const target = mention['wm-target'];
      if (!target) continue;

      const normalized = normalizeUrl(target);
      const urlObj = new URL(normalized);
      const path = urlObj.pathname;
      const variants = [
        normalized,
        `${normalized}/`,
        normalized.replace(/\/$/, ''),
        normalized.replace(/\/index\.html$/, ''),
        normalized.replace(/\.html$/, ''),
        path,
        `${path}/`,
        path.replace(/\/$/, ''),
        path.replace(/\/index\.html$/, ''),
        path.replace(/\.html$/, ''),
      ];

      for (const variant of new Set(variants)) {
        if (!organized[variant]) {
          organized[variant] = [];
        }
        if (!organized[variant].some((item) => item.url === mention.url)) {
          organized[variant].push(mention);
        }
      }
    }
  }

  for (const mentions of Object.values(organized)) {
    mentions.sort((a, b) => {
      const dateA = new Date(a.published || a['wm-received']);
      const dateB = new Date(b.published || b['wm-received']);
      return dateA - dateB;
    });
  }

  return organized;
}

async function fetchPhotos() {
  const parser = new Parser({
    customFields: {
      item: ['content:encoded'],
    },
  });

  try {
    const feed = await parser.parseURL('https://instantanes.loeuillet.org/feeds/posts.xml');
    if (!feed || !Array.isArray(feed.items)) {
      return [];
    }

    return feed.items
      .map((item) => {
        const content = item.content || item['content:encoded'] || item.contentSnippet || '';
        const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
        return {
          title: item.title || '',
          url: item.link || '',
          imageUrl: imgMatch ? imgMatch[1] : null,
          date: item.pubDate || item.isoDate || '',
        };
      })
      .filter((photo) => photo.imageUrl)
      .slice(0, PHOTO_LIMIT);
  } catch (error) {
    console.error(`Erreur lors de la récupération du flux RSS photo: ${error.message}`);
    const existingPhotos = new URL('photos.json', dataDir);
    if (existsSync(existingPhotos)) {
      try {
        return JSON.parse(readFileSync(existingPhotos, 'utf8')).slice(0, PHOTO_LIMIT);
      } catch {
        return [];
      }
    }
    return [];
  }
}

const [webmentions, photos] = await Promise.all([
  fetchWebmentions().catch((error) => {
    console.error(`Erreur lors de la récupération des webmentions: ${error.message}`);
    return {};
  }),
  fetchPhotos(),
]);

writeFileSync(new URL('webmentions.json', dataDir), `${JSON.stringify(webmentions, null, 2)}\n`);
writeFileSync(new URL('photos.json', dataDir), `${JSON.stringify(photos, null, 2)}\n`);
