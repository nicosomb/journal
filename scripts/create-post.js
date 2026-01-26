#!/usr/bin/env node

import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const billetsDir = join(rootDir, 'content', 'billets');

function slugify(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return {
    date: `${year}-${month}-${day}`,
    datetime: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
    year,
    month,
    day
  };
}

function createBillet(title) {
  if (!title || title.trim() === '') {
    console.error('Erreur: Veuillez fournir un titre pour le billet.');
    console.log('Usage: node scripts/create-post.js "Titre du billet"');
    process.exit(1);
  }

  const dateInfo = getDateString();
  const slug = slugify(title);
  const filename = `${dateInfo.date}-${slug}.md`;
  const filepath = join(billetsDir, filename);

  // Vérifier si le fichier existe déjà
  if (existsSync(filepath)) {
    console.error(`Erreur: Le fichier ${filename} existe déjà.`);
    process.exit(1);
  }

  const permalink = `billets/${dateInfo.year}/${dateInfo.month}/${dateInfo.day}/${slug}/index.html`;

  const content = `---
title: ${title}
category: billets
date: ${dateInfo.datetime}
layout: article.njk
tags: 
permalink: ${permalink}
---

`;

  try {
    writeFileSync(filepath, content, 'utf8');
    console.log(`✓ Billet créé: ${filename}`);
    console.log(`  Chemin: ${filepath}`);
  } catch (error) {
    console.error(`Erreur lors de la création du fichier: ${error.message}`);
    process.exit(1);
  }
}

// Récupérer le titre depuis les arguments de ligne de commande
const title = process.argv.slice(2).join(' ');

createBillet(title);
