/**
 * Преобразует строку в Start Case формат (каждое слово с заглавной буквы)
 * Аналог lodash startCase
 * 
 * Поддерживает различные форматы:
 * - camelCase / PascalCase
 * - kebab-case / snake_case
 * - Множественные пробелы
 * - Аббревиатуры (ID, XML и т.д.)
 * 
 * @param str - Исходная строка
 * @returns Строка в формате Start Case
 * 
 * @example
 * toStartCase('helloWorld') // 'Hello World'
 * toStartCase('HelloWorld') // 'Hello World'
 * toStartCase('hello-world') // 'Hello World'
 * toStartCase('hello_world') // 'Hello World'
 * toStartCase('userID') // 'User Id'
 * toStartCase('XMLHttpRequest') // 'Xml Http Request'
 * toStartCase('foo  bar') // 'Foo Bar'
 */
export const toStartCase = (str: string): string => {
  const words = str.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
  if (!words) return '';
  return words
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};
