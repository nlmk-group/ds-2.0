#!/usr/bin/env node

/**
 * Скрипт для автоматической генерации секции "exports" в package.json
 * на основе структуры директорий в src/components
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
const PACKAGE_JSON_PATH = path.resolve(__dirname, '../package.json');

/**
 * Получает список всех компонентов из директории src/components
 */
function getComponentsList() {
  const items = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true });

  return items
    .filter(item => {
      if (!item.isDirectory()) return false;

      const excludedDirs = ['_storybook', 'declaration', 'utils'];
      if (excludedDirs.includes(item.name)) return false;

      const baseIndexPath = path.join(COMPONENTS_DIR, item.name, 'index');
      const indexPathTsx = `${baseIndexPath}.tsx`;
      const indexPathTs = `${baseIndexPath}.ts`;

      return fs.existsSync(indexPathTsx) || fs.existsSync(indexPathTs);
    })
    .map(item => item.name)
    .sort();
}

/**
 * Генерирует секцию exports для package.json
 */
function generateExports(components) {
  const exports = {
    '.': {
      import: './lib/index.js',
      types: './lib/index.d.ts'
    }
  };

  components.forEach(component => {
    exports[`./${component}`] = {
      import: `./lib/${component}/index.js`,
      types: `./lib/${component}/index.d.ts`
    };
  });

  exports['./*'] = {
    import: './lib/*/index.js',
    types: './lib/*/index.d.ts'
  };

  exports['./css/main.css'] = './lib/css/main.css';
  exports['./css/style.css'] = './lib/css/main.css';
  exports['./css/*'] = './lib/css/*';

  exports['./fonts/*'] = './lib/fonts/*';

  return exports;
}

/**
 * Обновляет package.json с новыми exports
 */
function updatePackageJson(exports) {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));

  packageJson.exports = exports;

  if (!packageJson.type) {
    packageJson.type = 'module';
  }

  if (packageJson.sideEffects === undefined) {
    packageJson.sideEffects = false;
  }

  if (!packageJson.module) {
    packageJson.module = './lib/index.js';
  }

  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n');
}

/**
 * Главная функция
 */
function main() {
  console.log('🔍 Сканирование компонентов...');

  const components = getComponentsList();

  console.log(`✅ Найдено ${components.length} компонентов:`);
  console.log(components.map(c => `  - ${c}`).join('\n'));

  console.log('\n📝 Генерация exports...');

  const exports = generateExports(components);

  console.log(`✅ Создано ${Object.keys(exports).length} экспортов`);

  console.log('\n💾 Обновление package.json...');

  updatePackageJson(exports);

  console.log('✅ package.json обновлен!');
}

try {
  main();
} catch (error) {
  console.error('❌ Ошибка:', error.message);
  process.exit(1);
}
