const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');

const directoryPath = 'applications';
let manifest = [];

const walkDirectory = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkDirectory(filepath, callback);
    } else if (path.extname(filepath) === '.json' && filepath.includes('/metadata.json')) {
      callback(filepath);
    }
  });
};

walkDirectory(directoryPath, (filepath) => {
  const content = jsonfile.readFileSync(filepath);
  manifest.push(content);
});

jsonfile.writeFileSync('manifest.json', manifest, { spaces: 2 });
console.log('Manifest created successfully.');
