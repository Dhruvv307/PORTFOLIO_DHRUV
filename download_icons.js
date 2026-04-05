const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = {
  'python.png': 'https://raw.githubusercontent.com/github/explore/main/topics/python/python.png',
  'html.png': 'https://raw.githubusercontent.com/github/explore/main/topics/html/html.png',
  'css.png': 'https://raw.githubusercontent.com/github/explore/main/topics/css/css.png',
  'firebase.png': 'https://raw.githubusercontent.com/github/explore/main/topics/firebase/firebase.png'
};

Object.entries(icons).forEach(([filename, url]) => {
  const filepath = path.join(__dirname, 'public', 'images', filename);
  const file = fs.createWriteStream(filepath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
});
