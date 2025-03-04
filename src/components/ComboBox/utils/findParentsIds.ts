import { IComboBoxTreeOption } from '../types';

/**
 * Находит все родительские ID для заданного элемента в древовидной структуре.
 *
 * @param id - ID элемента, для которого нужно найти родительские ID
 * @param options - Массив опций древовидной структуры
 * @returns Массив уникальных ID, включающий ID самого элемента и всех его родителей
 *
 * @example
 * const options = [
 *   { id: '1', parentId: null },
 *   { id: '2', parentId: '1' },
 *   { id: '3', parentId: '2' }
 * ];
 *
 * findParentsIds('3', options); // ['3', '2', '1']
 */
const findParentsIds = (id: string | null | undefined, options: IComboBoxTreeOption[]): string[] => {
  if (!id) {
    return [];
  }
  const result: string[] = [id];
  const option = options.find(option => option.id === id);
  const parentId = option?.parentId;
  if (parentId) {
    const parentIds = findParentsIds(parentId, options);
    result.push(parentId, ...parentIds);
  }
  return Array.from(new Set(result));
};

export default findParentsIds;
