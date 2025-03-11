import { IComboBoxTreeOption } from '../types';
import isArrayNotHaveNullOrUndefined from './isArrayNotHaveNullOrUndefined';

/**
 * Рекурсивно находит ID всех родительских элементов для заданных ID в древовидной структуре.
 *
 * @param ids - Массив ID элементов, для которых нужно найти родительские ID
 * @param options - Массив опций древовидной структуры
 * @returns Массив ID всех найденных родительских элементов
 *
 * @example
 * const options = [
 *   { id: '1', parentId: null },
 *   { id: '2', parentId: '1' },
 *   { id: '3', parentId: '2' },
 * ];
 *
 * findManyParentsIds(['3'], options); // returns ['2', '1']
 */
const findManyParentsIds = (ids: string[], options: IComboBoxTreeOption[]): string[] => {
  const result: string[] = [];
  const parentsIds = options
    .filter(option => ids.includes(option.id))
    .map(option => option.parentId)
    .filter(Boolean);
  if (parentsIds.length > 0 && isArrayNotHaveNullOrUndefined(parentsIds)) {
    const nextParentIds = findManyParentsIds(parentsIds, options);
    result.push(...parentsIds, ...nextParentIds);
  }

  return result;
};

export default findManyParentsIds;
