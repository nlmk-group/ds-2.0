import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { TableColumnItem } from '@components/Table';
import { ColumnDef } from '@tanstack/react-table';

import styles from './CustomSettings.module.scss';
import { ITableColumnListProps } from './types';

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

  const normalizeColumns = (cols: ColumnDef<T, any>[]): ColumnDef<T, any>[] => {
    const rootColumns = cols.filter(col => !col.parent);

    const childrenMap: Record<string, ColumnDef<T, any>[]> = {};
    cols.forEach(col => {
      if (col.parent?.id) {
        if (!childrenMap[col.parent.id]) {
          childrenMap[col.parent.id] = [];
        }
        childrenMap[col.parent.id].push(col);
      }
    });

    const result: ColumnDef<T, any>[] = [];

    const processColumns = (columns: ColumnDef<T, any>[], depth = 0) => {
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

        const hasChildren = col.columns?.length || (col.id && childrenMap[col.id]?.length);
        const isExpanded = expandedGroups[col.id] || false;

        if (hasChildren && isExpanded) {
          const children = col.columns || childrenMap[col.id] || [];
          processColumns(children, depth + 1);
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

    const newOrder = [...columnOrder];
    const [movedColumn] = newOrder.splice(sourceIndex, 1);
    newOrder.splice(destinationIndex, 0, movedColumn);

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

              const hasChildren = column.columns?.length > 0;
              const isExpanded = expandedGroups[column.id] || false;
              const depth = column.meta?.depth || 0;

              const pinned = pinnedColumns[column.id] || false;

              const columnStyle = depth > 0 ? { marginLeft: `${depth * 20}px` } : undefined;

              return (
                <Draggable
                  key={column.id}
                  draggableId={column.id}
                  index={index}
                  isDragDisabled={hasChildren}
                >
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{ ...provided.draggableProps.style, ...columnStyle }}
                      className={styles.draggableItem}
                    >
                      <TableColumnItem
                        id={column.id}
                        title={
                          typeof column.header === 'string'
                            ? column.header
                            : (column.meta?.title as string) || column.id
                        }
                        visible={visibleColumns[column.id] || false}
                        pinned={pinned}
                        hasChildren={hasChildren}
                        expanded={isExpanded}
                        draggable={!hasChildren}
                        dragHandleProps={provided.dragHandleProps}
                        onVisibilityChange={visible => onVisibilityChange(column.id!, visible)}
                        onPinChange={!hasChildren ? pinned => onPinChange(column.id!, pinned) : undefined}
                        onExpandChange={() => handleExpandToggle(column.id!)}
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
