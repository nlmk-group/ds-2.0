import fetch from 'node-fetch';
import fs from 'fs';
import { exec } from 'child_process';
import StyleDictionary from 'style-dictionary';


const projectPath = process.env.GITLAB_PROJECT_PATH;
const tokenName = 'tokens%2Ejson'; // символ "." меняем на %2E
const tokenUrl = `https://gitlab.com/api/v4/projects/${projectPath}/repository/files/${tokenName}?ref=main`;
const tokensBuildDir = './tokens';
const baseTokenName = 'base-token.json';
const cssBuildPath = 'public/css/tokens/';

// набор фиксов для значений, которые приходят из фигмы не в том виде
function fixTypographyCSS(token) {
  const fontWeightAliases = {
    Thin: 100,
    Extralight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Semibold: 600,
    Bold: 700,
    Extrabold: 800,
    Black: 900
  };

  const convertPercentsToEm = (percent) => {
    const num = Number(percent.slice(0, -1)) / 100;
    return `${num}em`;
  };

  switch (token.type) {
    case 'fontWeights':
    case 'fontWeight':
      return fontWeightAliases[token.value];
    case 'fontSize':
    case 'fontSizes':
      return `${token.value}px`;
    case 'lineHeight':
    case 'lineHeights':
      return `${token.value}px`;
    case 'letterSpacing':
      return convertPercentsToEm(token.value);
    default:
      return token.value;
  }
}

// Создаем папку tokens если она не создана
if (!fs.existsSync(tokensBuildDir)) {
  fs.mkdirSync(tokensBuildDir);
}

// Загружаем файл токена из gitHub
async function getToken() {
  try {
    const res = await fetch(tokenUrl, {
      method: "GET",
      headers: {
        "PRIVATE-TOKEN": process.env.GITLAB_ACCESS_KEY
      }
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

const response = await getToken();
const token = JSON.parse(Buffer.from(response.content, "base64").toString());

// Сохраняем base-token в файл
fs.writeFileSync(`${tokensBuildDir}/${baseTokenName}`, JSON.stringify(token, null, 2));

// Создаем css файлы
buildTokensAndCss(token.$metadata.tokenSetOrder);

/**
 * @description
 * Создает набор .json файлов для каждого токена
 * Создает .css файл из каждого .json файла токена
 * @param files: string[]
 */
function buildTokensAndCss(files) {
  for (let filename of files) {
    buildToken(filename, () => {
      buildCss(filename);
    });
  }
}

/**
 * @description
 * Создает файл .json для токена и вызывает callback после создания файла
 * токен достается из baseToken с помощью библиотеки token-transformer
 * p.s. у token-transformer есть только cli версия, поэтому пришлось использовать exec
 * @param filename
 * @param callback
 */
function buildToken(filename, callback) {
  exec(
    `node node_modules/token-transformer ${tokensBuildDir}/${baseTokenName} ${tokensBuildDir}/${filename}.json ${filename} --expandTypography=true`,
    callback
  );
}

/**
 * Функция для подготовки токена к экспорту.
 *
 * Если тип токена равен "typography", применяются специфические стили
 * с помощью функции fixTypographyCSS к значению токена.
 * Во всех остальных случаях значение токена остается неизменным.
 *
 * Затем значение токена конвертируется в строковый формат JSON.
 *
 * На выходе функция возвращает строку, которую можно экспортировать
 * как константу в JavaScript с именем токена и его значением.
 *
 * @param {Object} token - Объект токена, содержащий тип и значение.
 * @return {String} - Строка, готовая к экспорту как JavaScript константа.
 */
function prepareToken(token) {
  let value = token.value;

  if (token.filePath.includes('typography')) {
    value = fixTypographyCSS(token);
  }

  return `  --${token.name}: ${value};`;
}

/**
 * @description Создает файл .css из файла токена
 * @param filename
 */
function buildCss(filename) {
  StyleDictionary.registerFormat({
    name: 'custom/css/variables',
    formatter({ dictionary }) {
      return (
        `/**\n* Do not edit directly\n* Generated on ${new Date()}\n*/\n\n:root {\n` +
        dictionary.allTokens
          .map((token) => {
            return prepareToken(token);
          })
          .join('\n') +
        `\n}`
      );
    }
  })

  StyleDictionary
    .extend({
      "source": [`${tokensBuildDir}/${filename}.json`],
      "platforms": {
        "css": {
          "transformGroup": "css",
          "buildPath": cssBuildPath,
          "files": [{
            "destination": `${filename}.css`,
            'format': 'custom/css/variables'
          }]
        }
      }
    })
    .buildAllPlatforms();

}
