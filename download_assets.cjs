const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
    { url: 'https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/img/perfil.jpg', file: 'perfil.jpg' },
    { url: 'https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/img/ria.jpg', file: 'ria.jpg' },
    { url: 'https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/img/voluntariado.jpg', file: 'voluntariado.jpg' },
    { url: 'https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/img/danza.jpg', file: 'danza.jpg' },
    { url: 'https://capellania-usil-voluntariado-2026.vercel.app/vamos-logo.jpg', file: 'vamos-logo.jpg' },
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return download(res.headers.location, dest).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
            }
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${path.basename(dest)}`);
                resolve();
            });
        }).on('error', err => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

(async () => {
    for (const item of assets) {
        const dest = path.join(targetDir, item.file);
        try {
            await download(item.url, dest);
        } catch (e) {
            console.error(`Error downloading ${item.file}:`, e.message);
        }
    }
    console.log('All downloads completed!');
})();
