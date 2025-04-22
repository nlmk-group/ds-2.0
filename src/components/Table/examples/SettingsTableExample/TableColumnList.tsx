import React, { useCallback, useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { ColumnSetting } from '@components/Table';

import { ITableColumnListProps } from './types';

import styles from './CustomSettings.module.scss';

// Тип для перетаскиваемых элементов
const TABLE_COLUMN_LIST_COLUMN_TYPE = 'column';

/**
 * Интерфейс для перетаскиваемого элемента
 */
interface DragItem {
  id: string;
  parentId: string;
  index: number;
  type: string;
}

/**
 * Компонент TableColumnList - список колонок с возможностью перетаскивания
 */
export const TableColumnList = <T extends object>({
  columns,
  visibleColumns,
  pinnedColumns,
  onVisibilityChange,
  onPinChange,
  columnOrder,
  onOrderChange
}: ITableColumnListProps<T>) => {
  // Состояние развернутых групп - по умолчанию все свернуты
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  // Структурные данные колонок
  const [columnStructure, setColumnStructure] = useState<{
    rootIds: string[];
    parentMap: Record<string, string>;
    childrenMap: Record<string, string[]>;
    columnsMap: Record<string, any>;
    levels: Record<string, number>; // Уровни вложенности для каждой колонки
  }>({
    rootIds: [],
    parentMap: {},
    childrenMap: {},
    columnsMap: {},
    levels: {}
  });

  /**
   * Построение структуры колонок при инициализации
   */
  useEffect(() => {
    const rootIds: string[] = [];
    const parentMap: Record<string, string> = {};
    const childrenMap: Record<string, string[]> = {};
    const columnsMap: Record<string, any> = {};
    const levels: Record<string, number> = {};

    // Рекурсивная обработка колонок и установка уровней вложенности
    const processColumns = (cols: any[], parent?: string, level: number = 0) => {
      cols.forEach(col => {
        const id = col.id || (typeof col.accessorKey === 'string' ? col.accessorKey : null);
        if (!id) return;

        columnsMap[id] = col;

        levels[id] = level;

        if (parent) {
          parentMap[id] = parent;

          if (!childrenMap[parent]) {
            childrenMap[parent] = [];
          }
          childrenMap[parent].push(id);
        } else {
          rootIds.push(id);
        }

        if (col.columns && Array.isArray(col.columns)) {
          processColumns(col.columns, id, level + 1);
        }
      });
    };

    processColumns(columns);

    setColumnStructure({
      rootIds,
      parentMap,
      childrenMap,
      columnsMap,
      levels
    });

    // Инициализация развернутых групп - по умолчанию все свернуты
    const initialExpanded: Record<string, boolean> = {};
    Object.keys(childrenMap).forEach(id => {
      initialExpanded[id] = false;
    });
    setExpandedGroups(initialExpanded);
  }, [columns]);

  /**
   * Переключение развернутого состояния группы
   */
  const toggleExpanded = useCallback((id: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  /**
   * Получение отсортированных колонок по родительскому ID
   * @param parentId ID родительской колонки или пустая строка для корневых
   */
  const getSortedColumns = useCallback(
    (parentId: string = ''): string[] => {
      const { rootIds, childrenMap } = columnStructure;

      const sourceColumns = parentId ? childrenMap[parentId] || [] : rootIds;

      return [...sourceColumns].sort((a, b) => {
        const aIndex = columnOrder.indexOf(a);
        const bIndex = columnOrder.indexOf(b);

        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        }

        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;

        return sourceColumns.indexOf(a) - sourceColumns.indexOf(b);
      });
    },
    [columnStructure, columnOrder]
  );

  /**
   * Обработчик изменения видимости колонки с учетом дочерних элементов
   * @param columnId ID колонки
   * @param isVisible Новое значение видимости
   */
  const handleVisibilityChange = useCallback(
    (columnId: string, isVisible: boolean) => {
      onVisibilityChange(columnId, isVisible);
  
      const childrenToUpdate: string[] = [];
      
      const getChildrenRecursively = (parentId: string) => {
        const children = columnStructure.childrenMap[parentId] || [];
        children.forEach(childId => {
          childrenToUpdate.push(childId);
          if (columnStructure.childrenMap[childId]) {
            getChildrenRecursively(childId);
          }
        });
      };
  
      if (columnStructure.childrenMap[columnId]) {
        getChildrenRecursively(columnId);
        
        if (!isVisible) {
          childrenToUpdate.forEach(childId => {
            onVisibilityChange(childId, false);
          });
        }
        else {
          childrenToUpdate.forEach(childId => {
            onVisibilityChange(childId, true);
          });
        }
      }
  
      const directParentId = columnStructure.parentMap[columnId];
      if (directParentId) {
        const siblings = columnStructure.childrenMap[directParentId] || [];
        
        const siblingsVisibility: Record<string, boolean> = {};
        siblings.forEach(siblingId => {
          if (siblingId === columnId) {
            siblingsVisibility[siblingId] = isVisible;
          } else {
            siblingsVisibility[siblingId] = visibleColumns[siblingId] !== false;
          }
        });
        
        const allSiblingsHidden = siblings.every(siblingId => siblingsVisibility[siblingId] === false);
        const anySiblingVisible = siblings.some(siblingId => siblingsVisibility[siblingId] !== false);
        
        if (allSiblingsHidden) {
          onVisibilityChange(directParentId, false);
        }
        else if (anySiblingVisible) {
          onVisibilityChange(directParentId, true);
        }
        
        const updateParentChain = (childId: string) => {
          const parentId = columnStructure.parentMap[childId];
          if (!parentId) return;
          
          const siblings = columnStructure.childrenMap[parentId] || [];
          
          const allChildrenHidden = siblings.every(sibId => visibleColumns[sibId] === false);
          const anyChildVisible = siblings.some(sibId => visibleColumns[sibId] !== false);
          
          if (allChildrenHidden) {
            onVisibilityChange(parentId, false);
          } else if (anyChildVisible) {
            onVisibilityChange(parentId, true);
          }
          
          updateParentChain(parentId);
        };
        
        updateParentChain(directParentId);
      }
    },
    [columnStructure, onVisibilityChange, visibleColumns]
  );

  /**
   * Функция для перемещения элемента в новый порядок
   */
  const moveItem = useCallback(
    (
      dragId: string,
      hoverId: string,
      dragParentId: string = '',
      hoverParentId: string = '',
      position: 'before' | 'after' = 'before'
    ) => {
      if (dragId === hoverId) return;

      if (dragParentId !== hoverParentId) {
        return;
      }

      const siblings = getSortedColumns(dragParentId);

      if (siblings.length <= 1) return;

      const dragIndex = siblings.indexOf(dragId);
      const hoverIndex = siblings.indexOf(hoverId);

      if (dragIndex === -1 || hoverIndex === -1) {
        return;
      }

      const newSiblings = [...siblings];

      newSiblings.splice(dragIndex, 1);

      let insertIndex;
      if (position === 'before') {
        insertIndex = newSiblings.indexOf(hoverId);
      } else {
        insertIndex = newSiblings.indexOf(hoverId) + 1;
      }

      if (insertIndex < 0) insertIndex = 0;
      if (insertIndex > newSiblings.length) insertIndex = newSiblings.length;

      newSiblings.splice(insertIndex, 0, dragId);

      const newOrder: string[] = [];

      const addColumnsInOrder = (parentId: string = '') => {
        let columnsToAdd: string[];

        if (parentId) {
          if (parentId === dragParentId) {
            columnsToAdd = newSiblings;
          } else {
            columnsToAdd = getSortedColumns(parentId);
          }
        } else {
          if (dragParentId === '') {
            columnsToAdd = newSiblings;
          } else {
            columnsToAdd = getSortedColumns('');
          }
        }

        for (const colId of columnsToAdd) {
          newOrder.push(colId);

          const childIds = columnStructure.childrenMap[colId] || [];
          if (childIds.length > 0) {
            addColumnsInOrder(colId);
          }
        }
      };

      addColumnsInOrder();

      onOrderChange(newOrder);
    },
    [columnStructure, getSortedColumns, onOrderChange]
  );

  /**
   * Перемещение элемента в начало списка
   */
  const moveToStart = useCallback(
    (dragId: string, parentId: string = '') => {
      const siblings = getSortedColumns(parentId);

      // Если нет сиблингов или элемент уже первый, ничего не делаем
      if (siblings.length <= 1 || siblings[0] === dragId) {
        return;
      }

      // Перемещаем элемент перед первым сиблингом
      moveItem(dragId, siblings[0], parentId, parentId, 'before');
    },
    [getSortedColumns, moveItem]
  );

  /**
   * Перемещение элемента в конец списка
   */
  const moveToEnd = useCallback(
    (dragId: string, parentId: string = '') => {
      const siblings = getSortedColumns(parentId);

      // Если нет сиблингов или элемент уже последний, ничего не делаем
      if (siblings.length <= 1 || siblings[siblings.length - 1] === dragId) {
        return;
      }

      // Перемещаем элемент после последнего сиблинга
      moveItem(dragId, siblings[siblings.length - 1], parentId, parentId, 'after');
    },
    [getSortedColumns, moveItem]
  );

  /**
   * Компонент для зоны перетаскивания (начало или конец списка)
   */
  const DropZone = useCallback(
    ({ parentId = '', position }: { parentId?: string; position: 'start' | 'end' }) => {
      const [_dropProps, drop] = useDrop({
        accept: TABLE_COLUMN_LIST_COLUMN_TYPE,
        canDrop: (item: DragItem) => {
          const { parentMap } = columnStructure;
          return (parentMap[item.id] || '') === parentId;
        },
        drop: (item: DragItem) => {
          if (position === 'start') {
            moveToStart(item.id, parentId);
          } else {
            moveToEnd(item.id, parentId);
          }
          return { handled: true };
        },
        collect: monitor => ({
          isOver: monitor.isOver() && monitor.canDrop()
        })
      });

      return <div ref={drop} className={styles.dropZone} data-position={position} data-parent-id={parentId} />;
    },
    [columnStructure, moveToStart, moveToEnd]
  );

  /**
   * Компонент для отображения колонки
   */
  const ColumnItem = useCallback(
    ({
      columnId,
      index,
      parentId = '',
      level = 0
    }: {
      columnId: string;
      index: number;
      parentId?: string;
      level?: number;
    }) => {
      const { columnsMap, childrenMap } = columnStructure;
      const column = columnsMap[columnId];

      if (!column) return null;

      const hasChildren = !!childrenMap[columnId] && childrenMap[columnId].length > 0;
      const isExpanded = expandedGroups[columnId] || false;
      const isVisible = visibleColumns[columnId] !== false;
      const pinned = pinnedColumns[columnId] || false;

      const title = typeof column.header === 'string' ? column.header : column.meta?.title || columnId;

      const [{ isDragging }, drag] = useDrag({
        type: TABLE_COLUMN_LIST_COLUMN_TYPE,
        item: { id: columnId, parentId, index, type: TABLE_COLUMN_LIST_COLUMN_TYPE },
        collect: monitor => ({
          isDragging: monitor.isDragging()
        })
      });

      const [{ isOver, canDrop }, drop] = useDrop({
        accept: TABLE_COLUMN_LIST_COLUMN_TYPE,
        canDrop: (item: DragItem) => {
          if (item.id === columnId) return false;

          // Проверяем, что элемент принадлежит тому же родителю
          const { parentMap } = columnStructure;
          return (parentMap[item.id] || '') === parentId;
        },
        drop: (item: DragItem, monitor) => {
          // Если дроп был уже обработан, игнорируем
          if (monitor.didDrop()) {
            return;
          }

          // Определяем направление перетаскивания
          const dragIndex = getSortedColumns(parentId).indexOf(item.id);
          const hoverIndex = getSortedColumns(parentId).indexOf(columnId);

          const position = dragIndex < hoverIndex ? 'after' : 'before';

          moveItem(item.id, columnId, parentId, parentId, position);

          return { handled: true };
        },
        collect: monitor => ({
          isOver: monitor.isOver({ shallow: true }),
          canDrop: monitor.canDrop()
        })
      });

      const childColumns = hasChildren ? getSortedColumns(columnId) : [];

      const childrenKey = childColumns.join(',');

      const columnClasses = [
        styles.column,
        isDragging ? styles.dragging : '',
        isOver && canDrop ? styles.dropTarget : ''
      ]
        .filter(Boolean)
        .join(' ');

      const indentStyle = {
        marginLeft: `${level * 16}px`
      };

      return (
        <>
          <div
            ref={node => {
              drag(drop(node));
            }}
            className={columnClasses}
            style={indentStyle}
            data-id={columnId}
            data-parent-id={parentId}
            data-level={level}
          >
            <ColumnSetting
              id={columnId}
              title={title}
              visible={isVisible}
              pinned={pinned}
              hasChildren={hasChildren}
              expanded={isExpanded}
              draggable={true}
              onVisibilityChange={visible => handleVisibilityChange(columnId, visible)}
              onPinChange={pinValue => onPinChange(columnId, pinValue)}
              onExpandChange={() => toggleExpanded(columnId)}
            />
          </div>

          {hasChildren && isExpanded && (
            <div className={styles.childColumns} key={childrenKey}>
              {/* Зона для перетаскивания в начало списка */}
              <DropZone parentId={columnId} position="start" />

              {/* Список дочерних колонок */}
              {childColumns.map((childId, idx) => (
                <ColumnItem key={childId} columnId={childId} index={idx} parentId={columnId} level={level + 1} />
              ))}

              {/* Зона для перетаскивания в конец списка */}
              <DropZone parentId={columnId} position="end" />
            </div>
          )}
        </>
      );
    },
    [
      columnStructure,
      expandedGroups,
      visibleColumns,
      pinnedColumns,
      getSortedColumns,
      toggleExpanded,
      handleVisibilityChange,
      onPinChange,
      moveItem,
      DropZone
    ]
  );

  const rootColumns = getSortedColumns();

  const rootKey = rootColumns.join(',');

  return (
    <div className={styles.table}>
      <div key={rootKey}>
        {/* Зона для перетаскивания в начало корневого списка */}
        <DropZone position="start" />

        {/* Список корневых колонок */}
        {rootColumns.map((columnId, idx) => (
          <ColumnItem key={columnId} columnId={columnId} index={idx} parentId="" level={0} />
        ))}

        {/* Зона для перетаскивания в конец корневого списка */}
        <DropZone position="end" />
      </div>
    </div>
  );
};
