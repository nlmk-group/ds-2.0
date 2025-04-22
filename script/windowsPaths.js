const fs = require('fs');
const path = require('path');
const glob = require('glob');

const LIB_DIR = path.join(__dirname, '../lib');

glob(path.join(LIB_DIR, '**/*.js'), (err, files) => {
  if (err) {
    console.error('Ошибка поиска файлов:', err);
    process.exit(1);
  }

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('_polyfill-node:')) {
      const updated = content.replace(/(_polyfill-node):/g, '$1_');
      fs.writeFileSync(file, updated, 'utf8');
    }
  });

  glob(path.join(LIB_DIR, '**/*:*'), { nodir: true }, (err, problematicFiles) => {
    if (err) {
      console.error('Ошибка поиска проблемных файлов:', err);
      process.exit(1);
    }

    problematicFiles.forEach(filePath => {
      const newPath = filePath.replace(/:/g, '_');
      fs.renameSync(filePath, newPath);
      console.log(`Переименован: ${filePath} -> ${newPath}`);
    });
  });
});