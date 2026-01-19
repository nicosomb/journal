#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { DateTime } = require('luxon');

/**
 * Slugifie un titre
 */
function slugify(title) {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^\w\s-]/g, '') // Enlever les caractères non alphanumériques
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-') // Remplacer les tirets multiples par un seul
    .trim()
    .replace(/^-+|-+$/g, ''); // Enlever les tirets en début et fin
}

/**
 * Échappe le titre pour YAML si nécessaire
 */
function escapeTitle(title) {
  if (title.includes(':') || title.includes('[') || title.includes(']') || 
      title.includes("'") || title.includes('"') || title.includes('#')) {
    return `"${title.replace(/"/g, '\\"')}"`;
  }
  return title;
}

// Récupérer les arguments
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: node create-billet.js "Titre du billet" [date]');
  console.error('Exemple: node create-billet.js "Mon nouveau billet"');
  console.error('Exemple: node create-billet.js "Mon nouveau billet" "2025-01-20 14:00"');
  process.exit(1);
}

const title = args[0];
const dateStr = args[1] || null;

// Générer la date
let date;
if (dateStr) {
  date = DateTime.fromFormat(dateStr, 'yyyy-MM-dd HH:mm', { zone: 'Europe/Paris' });
  if (!date.isValid) {
    console.error(`Erreur: date invalide "${dateStr}". Format attendu: YYYY-MM-DD HH:mm`);
    process.exit(1);
  }
} else {
  date = DateTime.now().setZone('Europe/Paris');
}

// Générer le slug
const slug = slugify(title);
if (!slug) {
  console.error('Erreur: impossible de générer un slug à partir du titre');
  process.exit(1);
}

// Générer le nom de fichier
const filename = `${date.toFormat('yyyy-MM-dd')}-${slug}.md`;

// Générer le permalink
const year = date.toFormat('yyyy');
const month = date.toFormat('MM');
const day = date.toFormat('dd');
const permalink = `billets/${year}/${month}/${day}/${slug}/index.html`;

// Générer le front matter
const escapedTitle = escapeTitle(title);
const frontMatter = `---
title: ${escapedTitle}
date: ${date.toFormat('yyyy-MM-dd HH:mm:ss')}
category: billets
layout: article.njk
permalink: ${permalink}
---

`;

// Chemin du fichier
const billetsDir = path.join(__dirname, 'content/billets');
const filePath = path.join(billetsDir, filename);

// Vérifier si le fichier existe déjà
if (fs.existsSync(filePath)) {
  console.error(`Erreur: le fichier ${filename} existe déjà`);
  process.exit(1);
}

// Créer le fichier
fs.writeFileSync(filePath, frontMatter, 'utf-8');

console.log(`✅ Billet créé: ${filename}`);
console.log(`   Titre: ${title}`);
console.log(`   Date: ${date.toFormat('dd/MM/yyyy HH:mm')}`);
console.log(`   Permalink: ${permalink}`);
console.log(`   Fichier: ${filePath}`);
