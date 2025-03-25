import { IComboBoxTree, IComboBoxTreeOption } from '../types';
import isArrayNotHaveNullOrUndefined from './isArrayNotHaveNullOrUndefined';

/**
 * Преобразует древовидную структуру данных в плоский массив опций с информацией об уровне вложенности
 * и родительском элементе.
 *
 * @param data - Массив элементов древовидной структуры
 * @returns Массив опций с дополнительными свойствами level и parentId
 *
 * @example
 * const tree = [
 *   {
 *     id: '1',
 *     label: 'Родитель',
 *     children: [
 *       { id: '2', label: 'Ребенок' }
 *     ]
 *   }
 * ];
 *
 * const options = getTreeOptions(tree);
 * // Результат:
 * // [
 * //   { id: '1', label: 'Родитель', parentId: null, level: 1 },
 * //   { id: '2', label: 'Ребенок', parentId: '1', level: 2 }
 * // ]
 */
const getTreeOptions = (data: IComboBoxTree[]): IComboBoxTreeOption[] => {
  const treeOptions: IComboBoxTreeOption[] = [];

  /**
   * Рекурсивно обходит дерево и добавляет элементы в плоский массив
   * @param data - Текущий уровень дерева
   * @param parentId - ID родительского элемента
   * @param level - Текущий уровень вложенности
   */
  function deepRecursiveData(data: IComboBoxTree[], parentId: string | null, level: number) {
    data.forEach(item => {
      const children = item.children;
      const option = {
        ...item,
        parentId,
        level
      };
      treeOptions.push(option);
      if (children && children.length > 0 && isArrayNotHaveNullOrUndefined(children)) {
        deepRecursiveData(children, item.id, level + 1);
      }
    });
  }

  deepRecursiveData(data, null, 1);
  return treeOptions;
};

export default getTreeOptions;
