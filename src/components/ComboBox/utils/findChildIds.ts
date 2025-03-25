import { IComboBoxTreeOption } from '../types';

/**
 * Рекурсивно находит все дочерние ID для заданного элемента в древовидной структуре опций
 * @param id - ID родительского элемента
 * @param options - Массив древовидных опций
 * @returns Массив, содержащий ID самого элемента и всех его потомков
 * @example
 * const options = [
 *   { id: '1', parentId: null },
 *   { id: '2', parentId: '1' },
 *   { id: '3', parentId: '2' }
 * ];
 * findChildIds('1', options) // returns ['1', '2', '3']
 */
const findChildIds = (id: string, options: IComboBoxTreeOption[]): string[] => {
  const childIds = options
    .filter(option => option.parentId === id)
    .reduce<string[]>((acc, option) => {
      const childIds = findChildIds(option.id, options);
      return [...acc, ...childIds];
    }, []);

  return [id, ...childIds];
}

export default findChildIds;
