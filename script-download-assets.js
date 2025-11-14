// Script para descargar imágenes del slider desde Unsplash
// Ejecutar con: node script-download-assets.js

import https from 'https';
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const images = [
    {
        url: 'https://images.unsplash.com/photo-1759477444312-73e240a8ec46?w=1920&q=85',
        filename: 'assets/images/slider/electronica.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1715597964018-b9ecfd21574e?w=1920&q=85',
        filename: 'assets/images/slider/aire-acondicionado.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1640815169249-24705979d176?w=1920&q=85',
        filename: 'assets/images/slider/alarmas.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=1920&q=85',
        filename: 'assets/images/slider/soldadura.jpg'
    }
];

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filename);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => {});
            reject(err);
        });
    });
}

async function downloadAllImages() {
    console.log('Descargando imágenes del slider...\n');
    for (const image of images) {
        try {
            // Ensure directory exists
            const dir = image.filename.substring(0, image.filename.lastIndexOf('/'));
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            await downloadImage(image.url, image.filename);
        } catch (error) {
            console.error(`✗ Error downloading ${image.filename}:`, error.message);
        }
    }
    console.log('\n✓ Descarga completada!');
}

downloadAllImages();

