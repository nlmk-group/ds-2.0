const fs = require('fs');
const path = require('path');

// TODO: когда заменим все токены, необходимо переписать скрипт
const oldTokensPath = path.join(__dirname, '../public/css/tokens/desktop/color/main-color-dark.css');
const newTokensPath = path.join(__dirname, '../public/css/tokens/dark-tokens.css');

// Пути для выходных файлов
const writeFilePath = path.join(__dirname, '../src/components/ThemeSwitcher/DarkTheme.ts');
const storyBookCSSFilePath = path.join(__dirname, '../public/css/dark-theme-storybook.css');

try {
  const oldTokens = fs.readFileSync(oldTokensPath, { encoding: 'utf-8' });
  const newTokens = fs.readFileSync(newTokensPath, { encoding: 'utf-8' });

  // Объединяем содержимое файлов
  const combinedStyles = oldTokens + '\n' + newTokens;

  // Извлекаем содержимое из :root блоков и объединяем
  const cleanStyles = combinedStyles
    .replace(/:root\s*{([^}]*)}/g, '$1') // извлекаем содержимое :root
    .replace(/\s/g, ' '); // убираем излишние пробелы и переносы строк

  // Оборачиваем все стили в единый селектор :root[data-theme="dark-theme"]
  const storyBookTheme = `:root[data-theme="dark-theme"] {\n${cleanStyles}\n}`;

  // Записываем результирующие файлы
  fs.writeFileSync(writeFilePath, `export const darkThemeStyles = \`:root{${cleanStyles}}\``);
  fs.writeFileSync(storyBookCSSFilePath, storyBookTheme);

  console.log('Файлы успешно созданы');
} catch (err) {
  console.error('Произошла ошибка:', err);
}
