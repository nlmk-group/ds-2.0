import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { ColumnSetting } from '@components/Table';
import { ColumnDef } from '@tanstack/react-table';

import { ITableColumnListProps } from './types';

import styles from './CustomSettings.module.scss';

// Расширенный тип для поддержки вложенных колонок
type TableColumn<T> = ColumnDef<T, any> & {
  parent?: { id: string };
  columns?: TableColumn<T>[];
};

export const TableColumnList = <T extends object>({
  columns,
  visibleColumns,
  columnOrder,
  pinnedColumns,
  onVisibilityChange,
  onOrderChange,
  onPinChange
}: ITableColumnListProps<T>) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const normalizeColumns = (cols: ColumnDef<T, any>[]): TableColumn<T>[] => {
    // Преобразуем колонки к нужному типу
    const typedColumns = cols as TableColumn<T>[];

    // Находим корневые колонки (без родителей)
    const rootColumns = typedColumns.filter(col => !col.parent);

    // Создаем карту дочерних колонок
    const childrenMap: Record<string, TableColumn<T>[]> = {};
    typedColumns.forEach(col => {
      if (col.parent?.id) {
        if (!childrenMap[col.parent.id]) {
          childrenMap[col.parent.id] = [];
        }
        childrenMap[col.parent.id].push(col);
      }
    });

    const result: TableColumn<T>[] = [];

    const processColumns = (columns: TableColumn<T>[], depth = 0) => {
      const sortedColumns = [...columns].sort((a, b) => {
        if (!a.id || !b.id) return 0;
        const aIndex = columnOrder.indexOf(a.id);
        const bIndex = columnOrder.indexOf(b.id);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });

      sortedColumns.forEach(col => {
        if (!col.id) return;

        result.push({
          ...col,
          meta: {
            ...col.meta,
            depth
          }
        });

        let colChildren: TableColumn<T>[] = [];
        if (col.columns && col.columns.length > 0) {
          colChildren = col.columns;
        } else if (col.id && childrenMap[col.id]) {
          colChildren = childrenMap[col.id];
        }

        const hasChildren = colChildren.length > 0;
        const isExpanded = col.id ? expandedGroups[col.id] || false : false;

        if (hasChildren && isExpanded) {
          processColumns(colChildren, depth + 1);
        }
      });
    };

    processColumns(rootColumns);
    return result;
  };

  const normalizedColumns = normalizeColumns(columns);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex === destinationIndex) return;

    // Получаем информацию о перетаскиваемой колонке
    const draggedColumn = normalizedColumns[sourceIndex];
    if (!draggedColumn?.id) return;

    // Проверяем, что колонка не имеет дочерних элементов
    const hasChildren =
      draggedColumn.columns?.length || normalizedColumns.some(col => col.parent?.id === draggedColumn.id);
    if (hasChildren) return;

    // Создаем новый порядок колонок
    const newOrder = [...columnOrder];
    const draggedColumnId = draggedColumn.id;

    // Удаляем перетаскиваемую колонку из текущей позиции
    const currentIndex = newOrder.indexOf(draggedColumnId);
    if (currentIndex !== -1) {
      newOrder.splice(currentIndex, 1);
    }

    // Вставляем в новую позицию
    newOrder.splice(destinationIndex, 0, draggedColumnId);

    onOrderChange(newOrder);
  };

  const handleExpandToggle = (columnId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="columns">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef} className={styles.droppableArea}>
            {normalizedColumns.map((column, index) => {
              if (!column.id) return null;
              const columnId = column.id;

              // Проверяем наличие дочерних элементов
              let hasChildren = false;
              if (column.columns && column.columns.length > 0) {
                hasChildren = true;
              } else {
                hasChildren = normalizedColumns.some(c => c.parent?.id === columnId);
              }

              const isExpanded = expandedGroups[columnId] || false;
              const depth = column.meta?.depth || 0;

              const pinned = pinnedColumns[columnId] || false;
              const columnStyle = depth > 0 ? { marginLeft: `${depth * 20}px` } : undefined;

              // Подготавливаем заголовок
              let title: string;
              if (typeof column.header === 'string') {
                title = column.header;
              } else if (column.meta && typeof column.meta.title === 'string') {
                title = column.meta.title;
              } else {
                title = columnId;
              }

              return (
                <Draggable key={columnId} draggableId={columnId} index={index} isDragDisabled={hasChildren}>
                  {(dragProvided, snapshot) => (
                    <div
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      style={{
                        ...dragProvided.draggableProps.style,
                        ...columnStyle,
                        opacity: snapshot.isDragging ? 0.7 : 1
                      }}
                      className={styles.draggableItem}
                    >
                      <ColumnSetting
                        id={columnId}
                        title={title}
                        visible={visibleColumns[columnId] || false}
                        pinned={pinned}
                        hasChildren={hasChildren}
                        expanded={isExpanded}
                        draggable={!hasChildren}
                        dragHandleProps={dragProvided.dragHandleProps || undefined}
                        onVisibilityChange={visible => onVisibilityChange(columnId, visible)}
                        onPinChange={!hasChildren ? pinned => onPinChange(columnId, pinned) : undefined}
                        onExpandChange={() => handleExpandToggle(columnId)}
                        highlighted={snapshot.isDragging}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
