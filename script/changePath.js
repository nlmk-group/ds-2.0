const fs = require('fs');
const path = require('path');

const constructFilePath = filePath => path.resolve(__dirname, filePath);

const NEW_PATH = './dist/components/';
const FILES = [constructFilePath('../lib/index.js'), constructFilePath('../lib/index.d.ts')];

FILES.forEach(file => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err;
    const newValue = `import './css/main.css';\n\n${data.replaceAll('./', NEW_PATH)}`;

    fs.writeFile(file, newValue, 'utf-8', err => {
      if (err) throw err;
      console.log(`📗 Modified ${file.split('/').at(-1)} complete!`);
    });
  });
});
