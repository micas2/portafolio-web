import fs from 'fs';
import path from 'path';

const proyectosDir = path.join(process.cwd(), 'public', 'proyectos');
const outputFile = path.join(process.cwd(), 'src', 'galleryMap.json');

const isMedia = (file) => {
  const ext = path.extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.gif', '.mp4', '.webp'].includes(ext);
};

const mapDirectory = (dirPath, basePath = '') => {
  let results = [];
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results = results.concat(mapDirectory(fullPath, path.join(basePath, item)));
    } else if (isMedia(item)) {
      results.push(path.join(basePath, item).replace(/\\/g, '/'));
    }
  }
  return results;
};

const generateGallery = () => {
  const map = {};
  
  if (fs.existsSync(proyectosDir)) {
    const folders = fs.readdirSync(proyectosDir);
    
    for (const folder of folders) {
      const folderPath = path.join(proyectosDir, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        map[folder] = mapDirectory(folderPath);
      }
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(map, null, 2));
  console.log('Gallery map generated successfully at', outputFile);
};

generateGallery();
