#!/usr/bin/env node

/**
 * Script pour exécuter Pagefind en utilisant directement le binaire
 * Contourne le problème du wrapper npx qui ne trouve pas le bon binaire
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function findPagefindBinary() {
  const platform = process.platform === 'win32' ? 'windows' : process.platform;
  const arch = os.arch();
  
  const fs = await import('fs');
  
  // Essayer de trouver le binaire dans les packages optionnels
  // Pagefind peut être "pagefind" ou "pagefind_extended"
  const binaryNames = ['pagefind_extended', 'pagefind'];
  const possiblePlatforms = [
    `${platform}-${arch}`,
    `${platform}-x64`,
    'linux-x64',  // Pour Netlify (Linux)
    'linux-arm64',
    'darwin-x64',
    'darwin-arm64',
  ];
  
  for (const binaryName of binaryNames) {
    for (const platformArch of possiblePlatforms) {
      const path = join(rootDir, 'node_modules', `@pagefind`, platformArch, 'bin', binaryName);
      try {
        if (fs.default.existsSync(path)) {
          return path;
        }
      } catch (e) {
        // Continue
      }
    }
  }
  
  return null;
}

async function buildPagefind() {
  const sitePath = process.argv[2] || 'output';
  
  console.log(`Indexation de Pagefind pour le site: ${sitePath}`);
  
  const binaryPath = await findPagefindBinary();
  
  if (!binaryPath) {
    console.error('Impossible de trouver le binaire Pagefind. Essayez d\'utiliser l\'API Node.js.');
    // Fallback vers l'API Node.js
    try {
      const { createIndex } = await import('pagefind');
      const result = await createIndex({ site: sitePath });
      
      if (result.errors && result.errors.length > 0) {
        console.error('Erreurs lors de l\'indexation:', result.errors);
        process.exit(1);
      }
      
      console.log('Indexation Pagefind terminée avec succès!');
      return;
    } catch (error) {
      console.error('Erreur lors de l\'indexation Pagefind:', error.message);
      process.exit(1);
    }
  }
  
  // Utiliser le binaire directement
  return new Promise((resolve, reject) => {
    const child = spawn(binaryPath, ['--site', sitePath], {
      stdio: 'inherit',
      cwd: rootDir
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log('Indexation Pagefind terminée avec succès!');
        resolve();
      } else {
        console.error(`Pagefind s'est terminé avec le code ${code}`);
        reject(new Error(`Pagefind failed with code ${code}`));
      }
    });
    
    child.on('error', (error) => {
      console.error('Erreur lors de l\'exécution de Pagefind:', error.message);
      reject(error);
    });
  });
}

buildPagefind().catch((error) => {
  console.error('Erreur:', error.message);
  process.exit(1);
});
