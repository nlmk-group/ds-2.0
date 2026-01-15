/**
 * Преобразует строку в Start Case формат (каждое слово с заглавной буквы)
 * Аналог lodash startCase
 * 
 * @param str - Исходная строка
 * @returns Строка в формате Start Case
 * 
 * @example
 * toStartCase('helloWorld') // 'Hello World'
 * toStartCase('HelloWorld') // 'Hello World'
 * toStartCase('hello-world') // 'Hello World'
 */
export const toStartCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
