import { IComboBoxOption } from '../types';

const DEFAULT_MULTIPLE_ADDITION = 35;
const DEFAULT_DRAGGABLE_ADDITION = 15;
const DEFAULT_PADDING_ADDITION = 60;
const LABEL_WIDTH = 8;

/**
 * Вычисляет максимальную ширину элементов выпадающего списка комбобокса
 *
 * @param items - Массив опций для отображения в выпадающем списке
 * @param isMultiple - Флаг, указывающий является ли комбобокс мультиселектом
 * @param isDraggable - Флаг, указывающий поддерживается ли перетаскивание элементов
 * @param maxLevel - Максимальный уровень вложенности для древовидной структуры
 *
 * @returns Максимальная ширина элемента в пикселях. Минимальное значение - 150px
 *
 * @example
 * const items = [
 *   { label: 'Option 1', value: '1' },
 *   { label: 'Long Option 2', value: '2' }
 * ];
 * const width = getItemMaxWidth(items, true, false);
 */
const getItemMaxWidth = <T extends IComboBoxOption>(
  items: T[],
  isMultiple: boolean,
  isDraggable?: boolean,
  maxLevel?: number | undefined
) => {
  const multipleWidthAddition = isMultiple ? DEFAULT_MULTIPLE_ADDITION : 0;
  const treeWidthAddition = maxLevel ? maxLevel * DEFAULT_MULTIPLE_ADDITION : 0;
  const draggableWidthAddition = isDraggable ? DEFAULT_DRAGGABLE_ADDITION : 0;
  return items.reduce((width: number, item: T) => {
    const itemLabelLength = item.label.length;
    const itemLabelWidth =
      itemLabelLength * LABEL_WIDTH +
      DEFAULT_PADDING_ADDITION +
      multipleWidthAddition +
      treeWidthAddition +
      draggableWidthAddition;
    if (itemLabelWidth > width) return itemLabelWidth;
    return width;
  }, 150);
};

export default getItemMaxWidth;