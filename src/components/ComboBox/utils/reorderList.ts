/**
 * Изменяет порядок элементов в массиве, перемещая элемент с позиции startIndex на позицию endIndex
 *
 * @template T - Тип элементов массива
 * @param list - Исходный массив элементов
 * @param startIndex - Индекс элемента, который нужно переместить
 * @param endIndex - Индекс позиции, куда нужно переместить элемент
 * @returns Новый массив с измененным порядком элементов
 *
 * @example
 * ```typescript
 * const items = ['A', 'B', 'C', 'D'];
 * const reordered = reorderList(items, 0, 2);
 * // результат: ['B', 'C', 'A', 'D']
 * ```
 *
 * @remarks
 * Функция создает новый массив, не изменяя исходный.
 * Если startIndex некорректный (элемент не найден), возвращается копия исходного массива.
 */
const reorderList = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
  const shallowCopy = [...list];
  const [removed] = shallowCopy.splice(startIndex, 1);
  if (removed) {
    shallowCopy.splice(endIndex, 0, removed);
  }
  return shallowCopy;
};

export default reorderList;
