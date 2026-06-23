#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const rootDir = new URL('..', import.meta.url).pathname;
const billetsDir = join(rootDir, 'content', 'billets');
const pagesDir = join(rootDir, 'content', 'pages');

function splitFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return null;
  }

  return {
    raw: match[0],
    frontMatter: match[1],
    body: content.slice(match[0].length),
  };
}

function removeLine(frontMatter, key) {
  return frontMatter
    .split('\n')
    .filter((line) => !line.match(new RegExp(`^${key}:\\s*`)))
    .join('\n');
}

function convertPermalink(permalink) {
  return `/${permalink.replace(/\/?index\.html$/, '/').replace(/^\/?/, '')}`;
}

function getField(frontMatter, key) {
  const match = frontMatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? match[1].trim().replace(/^["']|["']$/g, '') : null;
}

function convertBillet(file) {
  const path = join(billetsDir, file);
  const content = readFileSync(path, 'utf8');
  const parts = splitFrontMatter(content);
  if (!parts) return false;

  let frontMatter = parts.frontMatter;
  const permalink = getField(frontMatter, 'permalink');
  if (!permalink) return false;

  frontMatter = removeLine(frontMatter, 'category');
  frontMatter = removeLine(frontMatter, 'layout');
  frontMatter = removeLine(frontMatter, 'permalink');
  frontMatter = `${frontMatter.trimEnd()}\nurl: ${convertPermalink(permalink)}`;

  writeFileSync(path, `---\n${frontMatter}\n---\n${parts.body}`, 'utf8');
  return true;
}

function convertPage(file) {
  const path = join(pagesDir, file);
  const content = readFileSync(path, 'utf8');
  const parts = splitFrontMatter(content);
  if (!parts) return false;

  let frontMatter = removeLine(parts.frontMatter, 'layout');
  const permalink = getField(frontMatter, 'permalink');
  if (permalink) {
    frontMatter = removeLine(frontMatter, 'permalink');
    frontMatter = `${frontMatter.trimEnd()}\nurl: /${permalink.replace(/^\/?/, '')}`;
  }

  writeFileSync(path, `---\n${frontMatter.trimEnd()}\n---\n${parts.body}`, 'utf8');
  return true;
}

let convertedBillets = 0;
let convertedPages = 0;

for (const file of readdirSync(billetsDir)) {
  if (file.endsWith('.md') && convertBillet(file)) {
    convertedBillets += 1;
  }
}

for (const file of readdirSync(pagesDir)) {
  if (file.endsWith('.md') && convertPage(file)) {
    convertedPages += 1;
  }
}

console.log(`Billets convertis: ${convertedBillets}`);
console.log(`Pages converties: ${convertedPages}`);
