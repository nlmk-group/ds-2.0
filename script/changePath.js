const fs = require('fs');
const path = require('path');

const constructFilePath = filePath => path.resolve(__dirname, filePath);

const FILES = [constructFilePath('../lib/index.es.js'), constructFilePath('../lib/index.umd.js')];

fs.writeFileSync(constructFilePath('../lib/index.js'), `export * from './index.es.js';\n`);

FILES.forEach(file => {
  if (fs.existsSync(file)) {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      const newValue = `import './css/style.css';\n\n${data}`;

      fs.writeFile(file, newValue, 'utf-8', err => {
        if (err) throw err;
        console.log(`📗 Modified ${file.split('/').at(-1)} complete!`);
      });
    });
  } else {
    console.log(`⚠️ File not found: ${file}`);
  }
});

const dtsContent = `export * from './dist/components/index';`;
fs.writeFileSync(constructFilePath('../lib/index.d.ts'), dtsContent);
