import { flatten } from 'flat';

const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const flattenObject = (ob: any, key: string) => {
  const result = {};
  if (typeof Object.values(ob)[0] === 'string') {
    (result as any)[key] = ob;
  }

  const flatObj = flatten({ [key]: ob }) as any;

  for (const i in flatObj) {
    const preName = i.replace(/.value|.type|.description/g, '');
    const name = kebabCase(preName).replace(/\./g, '-');
    if (i.includes(preName)) {
      (result as any)[name] = {
        ...(result as any)[name],
        ...{ [i.split('.').at(-1) as string]: flatObj[i] }
      };
    }
  }
  return result;
};

export const returnDarkColors = (darkPalette: any, recordKey: string) => {
  const records = {};
  const darkObject = Object.keys(darkPalette);
  const returnFlattenObject = darkObject.map(key => flattenObject(darkPalette[key], key));
  returnFlattenObject.forEach(key => Object.assign(records, key));
  return (records as any)[recordKey]?.value ?? 'Нет Цвета';
};

// Приоритетные ключи для сортировки. Чем меньше индекс ключа, тем приоритет выше
const SORT_PRIORITY_KEYS = [
  'default',
  'normal',
  'hover',
  'selected',
  'red',
  'yellow',
  'green',
  'error',
  'warning',
  'success'
].reverse();

const sortByPriority = (a: string, b: string): number => {
  return SORT_PRIORITY_KEYS.indexOf(b) + 1 - (SORT_PRIORITY_KEYS.indexOf(a) + 1);
};

export const sortColorKeys = (a: string, b: string): number => {
  const aKeys = a.split('-').filter(Boolean);
  const bKeys = b.split('-').filter(Boolean);

  for (let i = 0; i < aKeys.length; i++) {
    const aKey = aKeys[i];
    const bKey = bKeys[i];

    if (!bKey) return 1;

    const compareValue = sortByPriority(aKey, bKey) || aKey.localeCompare(bKey);

    if (compareValue) return compareValue;
  }

  return 0;
};
