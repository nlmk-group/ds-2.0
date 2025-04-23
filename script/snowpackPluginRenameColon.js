const fs = require('fs').promises;
const path = require('path');

module.exports = function () {
  return {
    name: 'rename-colon',
    async optimize({ buildDirectory }) {
      console.log('Запущен плагин rename-colon для обработки файлов с двоеточиями...');
      
      const processFiles = async (dir) => {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            await processFiles(fullPath);
          } else if (entry.name.includes(':')) {
            const newName = entry.name.replace(/:/g, '-');
            const newPath = path.join(dir, newName);
            await fs.rename(fullPath, newPath);
            console.log(`Переименован файл: ${entry.name} -> ${newName}`);
          }
          
          // Также исправляем ссылки в JS-файлах
          if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.mjs'))) {
            try {
              const content = await fs.readFile(fullPath, 'utf8');
              if (content.includes('_polyfill-node:')) {
                const updated = content.replace(/(_polyfill-node):/g, '$1-');
                await fs.writeFile(fullPath, updated, 'utf8');
                console.log(`Исправлены пути в файле: ${fullPath}`);
              }
            } catch (err) {
              console.error(`Ошибка при обработке файла ${fullPath}:`, err);
            }
          }
        }
      };
      
      try {
        await processFiles(buildDirectory);
        console.log('Обработка файлов с двоеточиями завершена.');
      } catch (err) {
        console.error('Ошибка при обработке файлов:', err);
      }
    }
  };
};