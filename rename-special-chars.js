import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'public', 'proyectos');

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s\.-]/gi, '')   // Remove special characters but keep spaces, dots, dashes
    .trim();
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const slugified = slugify(item);
    let newPath = fullPath;

    if (slugified !== item && slugified.length > 0) {
      newPath = path.join(dir, slugified);
      console.log(`Renaming: "${item}" -> "${slugified}"`);
      fs.renameSync(fullPath, newPath);
    }

    if (fs.statSync(newPath).isDirectory()) {
      processDir(newPath);
    }
  }
}

if (fs.existsSync(SRC_DIR)) {
  console.log('--- Renaming files with special characters ---');
  processDir(SRC_DIR);
  console.log('--- Done! ---');
} else {
  console.error('Source directory not found:', SRC_DIR);
}
