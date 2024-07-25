import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу tokens.json
const tokensPath = path.join(__dirname, 'tokens.json');

// Путь, куда будем сохранять CSS файлы
const outputDir = path.join(__dirname, 'public', 'css', 'tokens');

// Функция для преобразования значения токена в CSS-совместимый формат
function formatTokenValue(value, type) {
  if (typeof value === 'string' || type === 'color') {
    return value;
  }
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return JSON.stringify(value);
}

// Функция для рекурсивного обхода объекта токенов и создания CSS переменных
function tokensToCssVariables(tokens, prefix = '') {
  let css = '';
  try {
    for (const [key, value] of Object.entries(tokens)) {
      if (value && value.type && value.value !== undefined) {
        const cssVarName = `--${prefix}${key}`;
        const cssVarValue = formatTokenValue(value.value, value.type);
        css += `  ${cssVarName}: ${cssVarValue};\n`;
      } else if (typeof value === 'object' && value !== null) {
        css += tokensToCssVariables(value, `${prefix}${key}-`);
      }
    }
  } catch (error) {
    console.error('Ошибка при обработке токенов:', error);
  }
  return css;
}

async function generateTokens() {
  try {
    const data = await fs.readFile(tokensPath, 'utf8');
    const tokens = JSON.parse(data);

    const lightCss = `:root {\n${tokensToCssVariables(tokens.light)}}`;
    const darkCss = `:root {\n${tokensToCssVariables(tokens.dark)}}`;

    await fs.mkdir(outputDir, { recursive: true });

    await fs.writeFile(path.join(outputDir, 'light-tokens.css'), lightCss);
    console.log('Файл light-tokens.css успешно создан');

    await fs.writeFile(path.join(outputDir, 'dark-tokens.css'), darkCss);
    console.log('Файл dark-tokens.css успешно создан');
  } catch (err) {
    console.error('Произошла ошибка:', err);
  }
}

generateTokens();
