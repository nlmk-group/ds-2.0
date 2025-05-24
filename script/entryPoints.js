const fs = require('fs');
const path = require('path');

const libPath = path.resolve(__dirname, '../lib');
const constructPath = filePath => path.join(libPath, filePath);

console.log('🔧 Настройка точек входа...');

const createdFiles = fs.readdirSync(libPath).filter(f => f.startsWith('index.') && f.endsWith('.js'));
console.log('📁 Найдены файлы сборки:', createdFiles);

fs.writeFileSync(constructPath('index.js'), `export * from './index.es.js';\n`);

// Добавляем CSS импорт в бандлы
createdFiles.forEach(filename => {
  const filePath = constructPath(filename);

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');

    if (filename !== 'index.js' && !content.includes("import './css/main.css'")) {
      const newContent = `import './css/main.css';\n\n${content}`;
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Обновлен ${filename}`);
    } else if (filename === 'index.js') {
      console.log(`ℹ️ Пропускаем основную точку входа ${filename}`);
    } else {
      console.log(`ℹ️ CSS уже импортирован в ${filename}`);
    }
  }
});

// Создаем TypeScript декларации
const dtsContent = `export * from './dist/index';\nexport type { ComponentProps } from 'react';\n`;
fs.writeFileSync(constructPath('index.d.ts'), dtsContent);

// Создаем CSS экспорты для селективного импорта
const cssExports = `// CSS файлы библиотеки NLMK DS 2.0
export const mainCSS = './css/main.css';
export const variablesCSS = './css/temp-variables.css';
export const darkThemeCSS = './css/dark-theme-storybook.css';
`;
fs.writeFileSync(constructPath('styles.js'), cssExports);

// Создаем package.json для tree-shaking
if (fs.existsSync(constructPath('dist'))) {
  fs.writeFileSync(constructPath('dist/package.json'), '{"sideEffects": false}\n');
  console.log('📦 Создан dist/package.json для tree-shaking');
}

console.log('🎉 Точки входа настроены успешно!');