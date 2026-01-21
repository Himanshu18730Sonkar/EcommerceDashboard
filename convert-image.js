import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

sharp(path.join(__dirname, 'public', 'dashboard.webp'))
  .resize(1200, 630, { fit: 'cover' })
  .png()
  .toFile(path.join(__dirname, 'public', 'og-image.png'))
  .then(() => {
    console.log('✅ Successfully converted dashboard.webp to og-image.png');
    console.log('Image resized to 1200x630 for optimal OG display');
  })
  .catch(err => {
    console.error('❌ Error converting image:', err);
  });
