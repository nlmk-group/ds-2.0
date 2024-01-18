const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/css/tokens/main-color-dark.css');
const writeFilePath = path.join(__dirname, '../src/components/ThemeSwitcher/DarkTheme.ts');

try {
  const styles = [filePath]
    .map(path => fs.readFileSync(path, { encoding: 'utf-8' }))
    .join('\n')
    .replace(/\s+/g, '');

  fs.writeFileSync(writeFilePath, `export const darkThemeStyles = '${styles}'`);
} catch (err) {
  console.log(err);
}
