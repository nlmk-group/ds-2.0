const fs = require('fs');
const path = require('path');

const LIB_DIR = path.join(__dirname, '../lib');
const INDEX_FILES = [path.join(LIB_DIR, 'index.js'), path.join(LIB_DIR, 'index.d.ts')];
const NEW_PATH = './dist/components/';

console.log('Начинаем постобработку библиотеки...');

// Исправление путей для Windows
function fixWindowsPaths(dir) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      try {
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          fixWindowsPaths(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.mjs') || file.endsWith('.cjs') || file.endsWith('.d.ts')) {
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Ищем только проблемный паттерн _polyfill-node:
          if (content.includes('_polyfill-node:')) {
            const updated = content.replace(/(_polyfill-node):/g, '$1_');
            fs.writeFileSync(filePath, updated, 'utf8');
            console.log(`Исправлены пути в файле: ${filePath}`);
          }
        }
        
        // Переименовываем только файлы с полифиллами
        if (file.includes('_polyfill-node:')) {
          const newFile = file.replace(/:/g, '_');
          const newPath = path.join(dir, newFile);
          fs.renameSync(filePath, newPath);
          console.log(`Переименован файл: ${file} -> ${newFile}`);
        }
      } catch (err) {
        console.error(`Ошибка при обработке файла ${filePath}:`, err);
      }
    });
  } catch (err) {
    console.error(`Ошибка при чтении директории ${dir}:`, err);
  }
}

// Обновление путей импорта в индексных файлах
function updateImportPaths() {
  INDEX_FILES.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        const data = fs.readFileSync(file, 'utf-8');
        const newValue = `import './css/main.css';\n\n${data.replaceAll('./', NEW_PATH)}`;
        fs.writeFileSync(file, newValue, 'utf-8');
        console.log(`📗 Обновлены пути импорта в ${file.split('/').at(-1)}`);
      } catch (error) {
        console.error(`Ошибка при обработке файла ${file}:`, error);
      }
    } else {
      console.warn(`Файл ${file} не найден`);
    }
  });
}

console.log('Шаг 1: Исправление путей для Windows...');
fixWindowsPaths(LIB_DIR);
console.log('Шаг 2: Обновление путей импорта...');
updateImportPaths();
console.log('Постобработка библиотеки завершена!');