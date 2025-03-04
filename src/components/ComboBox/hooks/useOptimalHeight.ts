import { useEffect } from 'react';

import { getDDHeightParameters } from '..';
import { useSetDropdownHeight } from '../context';

/**
 * Хук для автоматического расчета и установки оптимальной высоты выпадающего списка Combobox
 *
 * @param params - Параметры, аналогичные параметрам функции getDDHeightParameters:
 * - items: Массив опций для отображения в выпадающем списке
 * - isSearch: Флаг наличия поиска в выпадающем списке
 * - isCheckAll: Флаг наличия кнопки "Выбрать все" в выпадающем списке
 * - isMultiple: Флаг множественного выбора
 * - hasChildren: Флаг наличия вложенных элементов
 *
 * @remarks
 * Хук автоматически добавляет отступ 15px к рассчитанным значениям высоты
 * для обеспечения дополнительного пространства в выпадающем списке.
 *
 * @example
 * ```typescript
 * const items = [{ value: '1', label: 'Опция 1' }, { value: '2', label: 'Опция 2' }];
 *
 * function MyComponent() {
 *   useOptimalHeight(items, true, false, true);
 *   return <Combobox ... />;
 * }
 * ```
 */
export const useOptimalHeight = (...params: Parameters<typeof getDDHeightParameters>) => {
  const setDropdownHeight = useSetDropdownHeight();

  const dropdownHeight = getDDHeightParameters(...params);

  useEffect(() => {
    if (setDropdownHeight) {
      setDropdownHeight({
        minHeight: dropdownHeight.minHeight + 15,
        optimalHeight: dropdownHeight.optimalHeight + 15
      });
    }
  }, [dropdownHeight, ...params]);
};
