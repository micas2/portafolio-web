/**
 * optimize-images.js
 * Generates two optimized WebP derivatives for every project image:
 *
 *   - Thumbnails (grid):  public/proyectos-thumbs/<folder>/<file>.webp
 *                          width 600px, quality 72
 *   - Display (hero + lightbox): public/proyectos-display/<folder>/<file>.webp
 *                          width 1600px, quality 78
 *
 * Originals stay in: public/proyectos/<folder>/<file>
 * The browser NEVER loads an original: grid uses thumbs, hero/lightbox use display.
 *
 * Run: node optimize-images.js
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SRC_DIR = join(__dirname, 'public', 'proyectos');

const TARGETS = [
  {
    name: 'thumbs',
    dir: join(__dirname, 'public', 'proyectos-thumbs'),
    width: 600,
    quality: 72,
  },
  {
    name: 'display',
    dir: join(__dirname, 'public', 'proyectos-display'),
    width: 1600,
    quality: 78,
  },
];

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff']);

let processed = 0;
let skipped = 0;
let errors = 0;

/** Walk a directory recursively and collect all files */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error('Source directory not found:', SRC_DIR);
    process.exit(1);
  }

  const allFiles = await walk(SRC_DIR);
  const imageFiles = allFiles.filter((f) => IMAGE_EXTS.has(extname(f).toLowerCase()));

  console.log(`Found ${imageFiles.length} images. Generating WebP derivatives...\n`);

  for (const target of TARGETS) {
    console.log(`-> ${target.name} (${target.width}px, q${target.quality})`);
  }
  console.log('');

  for (const srcPath of imageFiles) {
    const rel = srcPath.slice(SRC_DIR.length + 1);

    // Skip .gif — keep as-is (animation)
    if (extname(srcPath).toLowerCase() === '.gif') {
      skipped++;
      continue;
    }

    for (const target of TARGETS) {
      const destPath = join(target.dir, rel.replace(/\.[^.]+$/, '.webp'));

      // Skip if derivative already exists (re-run safety)
      if (existsSync(destPath)) {
        skipped++;
        continue;
      }

      try {
        await mkdir(dirname(destPath), { recursive: true });
        await sharp(srcPath, { limitInputPixels: false })
          .resize({ width: target.width, withoutEnlargement: true })
          .webp({ quality: target.quality })
          .toFile(destPath);

        process.stdout.write(`  [${target.name}] ${rel}\n`);
        processed++;
      } catch (err) {
        console.error(`  [${target.name}] ${rel} - ${err.message}`);
        errors++;
      }
    }
  }

  console.log(`\nDone! ${processed} generated, ${skipped} skipped, ${errors} errors.`);
}

main().catch(console.error);
