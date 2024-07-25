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
  const combinedStyles = (oldTokens + newTokens).replace(/\s+/g, '');
  const storyBookTheme = combinedStyles.replace(':root', ':root[data-theme="dark-theme"]');
  fs.writeFileSync(writeFilePath, `export const darkThemeStyles = '${combinedStyles}'`);
  fs.writeFileSync(storyBookCSSFilePath, storyBookTheme);
  console.log('Файлы успешно созданы');
} catch (err) {
  console.error('Произошла ошибка:', err);
}
