#!/usr/bin/env node

/**
 * Script pour exécuter Pagefind via l'API Node.js
 * Contourne le problème du binaire manquant pour certaines architectures
 */

import { createIndex } from 'pagefind';

async function buildPagefind() {
  const sitePath = process.argv[2] || 'output';
  
  console.log(`Indexation de Pagefind pour le site: ${sitePath}`);
  
  try {
    const result = await createIndex({
      site: sitePath
    });
    
    if (result.errors && result.errors.length > 0) {
      console.error('Erreurs lors de l\'indexation:', result.errors);
      process.exit(1);
    }
    
    console.log('Indexation Pagefind terminée avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'indexation Pagefind:', error.message);
    process.exit(1);
  }
}

buildPagefind();
