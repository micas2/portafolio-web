import galleryMap from './src/galleryMap.json' assert { type: 'json' };
import { projects } from './src/content.js';

console.log('--- Debugging Gallery Mapping ---');
projects.forEach(p => {
  const folder = p.folder;
  if (!folder) {
    console.log(`[PASS] Project "${p.title}" has no folder.`);
    return;
  }
  const imgs = galleryMap[folder];
  if (imgs) {
    console.log(`[OK] Project "${p.title}" (folder: "${folder}") found in galleryMap with ${imgs.length} images.`);
  } else {
    console.warn(`[FAIL] Project "${p.title}" (folder: "${folder}") NOT FOUND in galleryMap!`);
    console.log('Available keys in galleryMap:', Object.keys(galleryMap));
  }
});
