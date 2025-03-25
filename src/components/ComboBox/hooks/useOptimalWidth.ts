import { useEffect } from 'react';

import { useSetDropdownWidth } from '../context';
import { getItemMaxWidth } from '..';

/**
 * Хук для автоматического расчета и установки оптимальной ширины выпадающего списка Combobox
 *
 * @param params - Параметры, аналогичные параметрам функции getItemMaxWidth:
 * - items: Массив опций для отображения в выпадающем списке
 * - isMultiple: Флаг, указывающий является ли комбобокс мультиселектом
 * - isDraggable: Флаг, указывающий поддерживается ли перетаскивание элементов
 * - maxLevel: Максимальный уровень вложенности для древовидной структуры
 *
 * @remarks
 * Хук вычисляет оптимальную ширину на основе самого длинного элемента списка,
 * учитывая дополнительное пространство для чекбоксов (при isMultiple=true),
 * иконок drag-n-drop (при isDraggable=true) и отступов для древовидной структуры.
 * Минимальная ширина выпадающего списка составляет 150px.
 *
 * @example
 * ```typescript
 * const items = [
 *   { label: 'Опция 1', value: '1' },
 *   { label: 'Длинная опция 2', value: '2' }
 * ];
 *
 * function MyComponent() {
 *   useOptimalWidth(items, true, false);
 *   return <Combobox ... />;
 * }
 * ```
 */
export const useOptimalWidth = (...params: Parameters<typeof getItemMaxWidth>) => {
  const setDropdownWidth = useSetDropdownWidth();

  const itemMaxWidth = getItemMaxWidth(...params);

  useEffect(() => {
    if (setDropdownWidth) {
      setDropdownWidth(itemMaxWidth);
    }
  }, [itemMaxWidth]);
};
