import { useEffect, useMemo } from 'react';

import { IComboBoxGroupOption, IComboBoxOption, IdToOrderMap, IGroupedItem } from '../types';

/**
 * Сравнивает индексы сортировки двух элементов
 *
 * @param nextIndex - Индекс следующего элемента
 * @param currentIndex - Индекс текущего элемента
 * @returns Число, определяющее порядок сортировки (-1, 0, 1)
 */
export const compareSortIndexes = ({
  nextIndex,
  currentIndex
}: {
  nextIndex: number | undefined;
  currentIndex: number | undefined;
}): number => {
  if (nextIndex === undefined || currentIndex === undefined) {
    return 0;
  }
  return nextIndex - currentIndex;
};

/**
 * Хук для управления порядком элементов списка
 *
 * @param items - Массив элементов для сортировки
 * @param ordering - Объект, содержащий порядок элементов (id -> index)
 * @param setOrdering - Функция для обновления порядка элементов
 * @returns Объект с отсортированными элементами и функцией переупорядочивания
 *
 * @example
 * ```typescript
 * const { orderedItems, reorder } = useOrderedItems(items, ordering, setOrdering);
 * ```
 */
export const useOrderedItems = <T extends IComboBoxOption>(
  items: T[],
  ordering: IdToOrderMap,
  setOrdering: (value: IdToOrderMap) => void
) => {
  const orderedItems = useMemo(() => {
    return [...items].sort((next, current) => {
      return compareSortIndexes({ nextIndex: ordering[next.id], currentIndex: ordering[current.id] });
    });
  }, [items, ordering]);

  const reorder = (items: T[]) => {
    setOrdering(items.reduce<IdToOrderMap>((acc, item, index) => ({ ...acc, [item.id]: index }), {}));
  };

  return { orderedItems, reorder };
};

/**
 * Хук для управления порядком элементов, зависящих от родительского порядка
 *
 * @param parentOrdering - Порядок родительских элементов
 * @param items - Массив элементов для сортировки
 * @param itemsOrdering - Текущий порядок элементов
 * @param setOrdering - Функция для обновления порядка элементов
 * @param isDisabled - Флаг отключения зависимой сортировки
 * @returns Объект с отсортированными элементами и функцией переупорядочивания
 *
 * @example
 * ```typescript
 * const { orderedItems, reorder } = useDependOrdering({
 *   parentOrdering,
 *   items,
 *   itemsOrdering,
 *   setOrdering,
 *   isDisabled: false
 * });
 * ```
 */
export const useDependOrdering = ({
  parentOrdering,
  items,
  itemsOrdering,
  setOrdering,
  isDisabled
}: {
  parentOrdering: IdToOrderMap;
  itemsOrdering: IdToOrderMap;
  items: IComboBoxGroupOption[];
  setOrdering: (newValue: IdToOrderMap) => void;
  isDisabled: boolean;
}) => {
  const { orderedItems, reorder } = useOrderedItems(items, itemsOrdering, setOrdering);

  useEffect(() => {
    if (!isDisabled) {
      const orderedByParent = [...items].sort((next, current) => {
        return compareSortIndexes({
          nextIndex: parentOrdering[next.groupId!],
          currentIndex: parentOrdering[current.groupId!]
        });
      });
      reorder(orderedByParent);
    }
  }, [parentOrdering, isDisabled]);

  return { orderedItems, reorder };
};

/**
 * Хук для управления порядком сгруппированных элементов
 *
 * @param items - Массив элементов для группировки и сортировки
 * @param itemsOrdering - Порядок элементов внутри групп
 * @param groupsOrdering - Порядок самих групп
 * @param setOrdering - Функция для обновления порядка элементов
 * @param setGroupsOrdering - Функция для обновления порядка групп
 * @returns Объект с отсортированными сгруппированными элементами и функциями переупорядочивания
 *
 * @remarks
 * Хук создает иерархическую структуру, где элементы сгруппированы по groupId,
 * и позволяет управлять порядком как на уровне групп, так и на уровне элементов внутри групп.
 *
 * @example
 * ```typescript
 * const { orderedGroupedItems, reorder, groupsReorder } = useGroupsDependOrdering({
 *   items,
 *   itemsOrdering,
 *   groupsOrdering,
 *   setOrdering,
 *   setGroupsOrdering,
 *   isDisabled: false
 * });
 * ```
 */
export const useGroupsDependOrdering = ({
  items,
  itemsOrdering,
  groupsOrdering,
  setOrdering,
  setGroupsOrdering
}: {
  itemsOrdering: IdToOrderMap;
  items: IComboBoxGroupOption[];
  groupsOrdering: IdToOrderMap;
  setOrdering: (newValue: IdToOrderMap) => void;
  setGroupsOrdering: (newValue: IdToOrderMap) => void;
  isDisabled: boolean;
}) => {
  const { orderedItems, reorder } = useOrderedItems(items, itemsOrdering, setOrdering);

  const groupedItems = useMemo(
    () =>
      orderedItems.reduce<IGroupedItem[]>((result, item) => {
        const group = result.find(g => g.id === item.groupId);

        if (group) {
          group.items?.push({
            id: item.id,
            label: item.label
          });
        } else {
          result.push({
            id: item.groupId || '',
            label: item.groupLabel || '',
            items: [{ id: item.id, label: item.label }],
            isGroupLabel: true
          });
        }

        return result;
      }, []),
    [orderedItems]
  );

  const { orderedItems: orderedGroupedItems, reorder: groupsReorder } = useOrderedItems(
    groupedItems,
    groupsOrdering,
    setGroupsOrdering
  );

  return { orderedGroupedItems, reorder, groupsReorder };
};
