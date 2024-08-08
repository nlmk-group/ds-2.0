import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import StyleDictionary from 'style-dictionary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typographyTokensPath = path.join(__dirname, 'typographyTokens.json');
const colorTokensPath = path.join(__dirname, 'tokens.json');
const cssBuildPath = 'public/css/tokens/';

function fixTypographyCSS(token) {
  const fontWeightAliases = {
    Thin: 100, Extralight: 200, Light: 300, Regular: 400, Medium: 500,
    Semibold: 600, Bold: 700, Extrabold: 800, Black: 900
  };

  const convertPercentsToEm = percent => {
    const num = Number(percent.slice(0, -1)) / 100;
    return `${num}em`;
  };

  const typeHandlers = {
    fontWeights: value => fontWeightAliases[value] || value,
    fontWeight: value => fontWeightAliases[value] || value,
    fontSize: value => `${value}px`,
    fontSizes: value => `${value}px`,
    lineHeight: value => `${value}px`,
    lineHeights: value => `${value}px`,
    letterSpacing: value => typeof value === 'string' ? convertPercentsToEm(value) : `${value}em`,
    default: value => value
  };

  return (typeHandlers[token.type] || typeHandlers.default)(token.value);
}

function prepareTypographyToken(token) {
  if (token.type === 'typography') {
    return Object.entries(token.value).map(([key, value]) => {
      const subToken = { type: key, value: value };
      return `  --${token.name}-${key}: ${fixTypographyCSS(subToken)};`;
    }).join('\n');
  }

  let value = fixTypographyCSS(token);
  return `  --${token.name}: ${value};`;
}

function tokensToCssVariables(tokens, prefix = '') {
  let css = '';
  for (const [key, value] of Object.entries(tokens)) {
    if (value && value.type && value.value !== undefined) {
      const cssVarName = `--${prefix}${key}`;
      const cssVarValue = value.type === 'color' ? value.value : `${value.value}px`;
      css += `  ${cssVarName}: ${cssVarValue};\n`;
    } else if (typeof value === 'object' && value !== null) {
      css += tokensToCssVariables(value, `${prefix}${key}-`);
    }
  }
  return css;
}

StyleDictionary.registerFormat({
  name: 'custom/css/variables',
  formatter({ dictionary }) {
    return (
      `/**\n* Do not edit directly\n* Generated on ${new Date()}\n*/\n\n:root {\n` +
      dictionary.allTokens
        .map(token => prepareTypographyToken(token))
        .join('\n') +
      `\n}`
    );
  }
});

async function generateTokens() {
  try {
    // Обработка типографии
    const typographyContent = await fs.readFile(typographyTokensPath, 'utf8');
    const typographyTokens = JSON.parse(typographyContent);

    // Обработка цветов
    const colorContent = await fs.readFile(colorTokensPath, 'utf8');
    const colorTokens = JSON.parse(colorContent);

    await fs.mkdir(cssBuildPath, { recursive: true });

    // Генерация файла типографии
    StyleDictionary.extend({
      tokens: typographyTokens.global,
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: cssBuildPath,
          files: [
            {
              destination: 'typography-tokens.css',
              format: 'custom/css/variables'
            }
          ]
        }
      }
    }).buildAllPlatforms();

    console.log('Файл typography-tokens.css успешно создан');

    // Генерация файлов цветов
    const lightCss = `:root {\n${tokensToCssVariables(colorTokens.light)}}`;
    const darkCss = `:root {\n${tokensToCssVariables(colorTokens.dark)}}`;

    await fs.writeFile(path.join(cssBuildPath, 'light-tokens.css'), lightCss);
    console.log('Файл light-tokens.css успешно создан');

    await fs.writeFile(path.join(cssBuildPath, 'dark-tokens.css'), darkCss);
    console.log('Файл dark-tokens.css успешно создан');

  } catch (err) {
    console.error('Произошла ошибка:', err);
  }
}

generateTokens();
