/**
 * optimize-images.js
 * Generates compressed WebP thumbnails for all project images.
 * Thumbnails go to:  public/proyectos-thumbs/<folder>/<file>.webp
 * Originals stay in: public/proyectos/<folder>/<file>
 *
 * Run: node optimize-images.js
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SRC_DIR   = join(__dirname, 'public', 'proyectos');
const DEST_DIR  = join(__dirname, 'public', 'proyectos-thumbs');

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff']);
const THUMB_WIDTH  = 600;   // px – enough for the grid, tiny file size
const THUMB_QUALITY = 72;   // WebP quality 0–100

let processed = 0;
let skipped   = 0;
let errors    = 0;

/** Walk a directory recursively and collect all files */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error('❌  Source directory not found:', SRC_DIR);
    process.exit(1);
  }

  const allFiles = await walk(SRC_DIR);
  const imageFiles = allFiles.filter(f => IMAGE_EXTS.has(extname(f).toLowerCase()));

  console.log(`🖼  Found ${imageFiles.length} images. Generating WebP thumbnails…\n`);

  for (const srcPath of imageFiles) {
    const rel      = srcPath.slice(SRC_DIR.length + 1); // e.g. "Hot Travel/Hot travel + RIU.png"
    const destPath = join(DEST_DIR, rel.replace(/\.[^.]+$/, '.webp'));
    const destDirPath = dirname(destPath);

    // Skip .gif — keep as-is (animation)
    if (extname(srcPath).toLowerCase() === '.gif') {
      skipped++;
      continue;
    }

    // Skip if thumbnail already exists (re-run safety)
    if (existsSync(destPath)) {
      skipped++;
      continue;
    }

    try {
      await mkdir(destDirPath, { recursive: true });
      await sharp(srcPath, { limitInputPixels: false })
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(destPath);

      process.stdout.write(`  ✓ ${rel}\n`);
      processed++;
    } catch (err) {
      console.error(`  ✗ ${rel} — ${err.message}`);
      errors++;
    }
  }

  console.log(`\n✅  Done! ${processed} converted, ${skipped} skipped, ${errors} errors.`);
}

main().catch(console.error);
