import { IComboBoxOption } from '../types';

// Константы для базовых размеров
const DEFAULT_OPTIMAL_HEIGHT = 525;
const DEFAULT_MIN_HEIGHT = 118;

// Константы для высоты элементов
const ITEM_HEIGHT = 36;
const ITEM_WITH_CHILDREN_HEIGHT = 40;
const ITEM_NOT_MULTIPLE_HEIGHT = 46;

// Константы для дополнительных блоков
const SEARCH_BLOCK_HEIGHT = 64;
const CHECK_ALL_BLOCK_HEIGHT = 34;

// Вычисляем дополнительную высоту для поиска и кнопки "Выбрать все"
const calculateAdditionalHeight = (isSearch: boolean, isCheckAll: boolean): number => {
  const searchHeight = isSearch ? SEARCH_BLOCK_HEIGHT : 0;
  const checkAllHeight = isCheckAll ? CHECK_ALL_BLOCK_HEIGHT : 0;
  return searchHeight + checkAllHeight;
};

// Определяем высоту выпадающего списка в зависимости от количества элементов
const calculateDropdownHeights = (
  items: IComboBoxOption[],
  isMultiple: boolean,
  currentItemHeight: number,
  additionalHeight: number
) => {
  if (items.length === 0) {
    return {
      optimalHeight: DEFAULT_MIN_HEIGHT + additionalHeight,
      minHeight: DEFAULT_MIN_HEIGHT + additionalHeight
    };
  }

  if (!isMultiple) {
    const heightForSingleItem = items.length * ITEM_NOT_MULTIPLE_HEIGHT;
    const optimalHeightSingle = items.length > 15 ? DEFAULT_OPTIMAL_HEIGHT : heightForSingleItem;
    const minHeightSingle = items.length < 3 ? heightForSingleItem : DEFAULT_MIN_HEIGHT;

    return {
      optimalHeight: optimalHeightSingle + additionalHeight,
      minHeight: minHeightSingle + additionalHeight
    };
  }

  const heightForMultipleItems = items.length * currentItemHeight;
  const optimalHeightMultiple = items.length > 15 ? DEFAULT_OPTIMAL_HEIGHT : heightForMultipleItems;
  const minHeightMultiple = items.length < 3 ? heightForMultipleItems : DEFAULT_MIN_HEIGHT;

  return {
    optimalHeight: optimalHeightMultiple + additionalHeight,
    minHeight: minHeightMultiple + additionalHeight
  };
};

/**
 * Вычисляет оптимальную и минимальную высоту выпадающего списка на основе переданных параметров
 *
 * @param items - Массив опций для отображения в выпадающем списке
 * @param isSearch - Флаг наличия поиска в выпадающем списке
 * @param isCheckAll - Флаг наличия кнопки "Выбрать все" в выпадающем списке
 * @param isMultiple - Флаг множественного выбора
 * @param hasChildren - Флаг наличия вложенных элементов
 *
 * @returns Объект с параметрами высоты:
 * - optimalHeight: оптимальная высота выпадающего списка
 * - minHeight: минимальная высота выпадающего списка
 *
 * @example
 * ```typescript
 * const items = [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }];
 * const { optimalHeight, minHeight } = getDDHeightParameters(items, true, false, true);
 * ```
 */
const getDDHeightParameters = <T extends IComboBoxOption>(
  items: T[],
  isSearch = false,
  isCheckAll = false,
  isMultiple = true,
  hasChildren?: boolean
) => {
  // Определяем базовую высоту элемента
  const currentItemHeight = hasChildren ? ITEM_WITH_CHILDREN_HEIGHT : ITEM_HEIGHT;

  // Вычисляем дополнительную высоту
  const additionalHeight = calculateAdditionalHeight(isSearch, isCheckAll);

  // Возвращаем рассчитанные высоты
  return calculateDropdownHeights(items, isMultiple, currentItemHeight, additionalHeight);
};

export default getDDHeightParameters;
