const fs = require('fs');
const path = require('path');

const LIB_DIR = path.join(__dirname, '../lib');
const INDEX_FILES = [path.join(LIB_DIR, 'index.js'), path.join(LIB_DIR, 'index.d.ts')];
const NEW_PATH = './dist/components/';

console.log('Обновление путей импорта...');

// Функция для обновления путей импорта в индексных файлах
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

updateImportPaths();
console.log('Обновление путей импорта завершено!');