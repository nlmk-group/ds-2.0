const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/css/tokens/desktop/color/main-color-dark.css');
const writeFilePath = path.join(__dirname, '../src/components/ThemeSwitcher/DarkTheme.ts');
const storyBookCSSFilePath = path.join(__dirname, '../public/css/dark-theme-storybook.css');

try {
  const styles = [filePath]
    .map(path => fs.readFileSync(path, { encoding: 'utf-8' }))
    .join('\n')
    .replace(/\s+/g, '');

  const storyBookTheme = styles.replace(':root', ':root[data-theme="dark-theme"]');

  fs.writeFileSync(writeFilePath, `export const darkThemeStyles = '${styles}'`);
  fs.writeFileSync(storyBookCSSFilePath, storyBookTheme);
} catch (err) {
  console.log(err);
}
