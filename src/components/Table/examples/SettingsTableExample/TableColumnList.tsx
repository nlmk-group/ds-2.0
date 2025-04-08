import React, { useEffect, useState } from 'react';

import { ColumnSetting } from '@components/Table';
import { ColumnDef } from '@tanstack/react-table';

import { ITableColumnListProps } from './types';

import styles from './CustomSettings.module.scss';

type TableColumn<T> = ColumnDef<T, any> & {
  parent?: { id: string };
  columns?: TableColumn<T>[];
  accessorKey?: string;
};

export const TableColumnList = <T extends object>({
  columns,
  visibleColumns,
  pinnedColumns,
  onVisibilityChange,
  onPinChange,
  columnOrder: _columnOrder,
  onOrderChange: _onOrderChange
}: ITableColumnListProps<T>) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [flattenedColumns, setFlattenedColumns] = useState<TableColumn<T>[]>([]);
  const [columnsMap, setColumnsMap] = useState<Record<string, TableColumn<T>>>({});
  const [localVisibleColumns, setLocalVisibleColumns] = useState<Record<string, boolean>>(visibleColumns);

  useEffect(() => {
    const flatColumns: TableColumn<T>[] = [];
    const colMap: Record<string, TableColumn<T>> = {};
    const initialVisibility: Record<string, boolean> = { ...visibleColumns };

    let idCounter = 0;
    const ensureColumnHasId = (col: any): any => {
      if (!col.id) {
        if (col.accessorKey) {
          col.id = col.accessorKey;
        } else if (col.header && typeof col.header === 'string') {
          col.id = col.header.replace(/\s+/g, '_').toLowerCase();
        } else {
          col.id = `column_${idCounter++}`;
        }
      }
      return col;
    };

    const processColumns = (cols: any[]) => {
      cols.forEach(col => {
        const processedCol = ensureColumnHasId(col);
        const colId = processedCol.id;

        if (initialVisibility[colId] === undefined) {
          initialVisibility[colId] = true;
        }

        flatColumns.push(processedCol);
        colMap[colId] = processedCol;

        if (processedCol.columns && processedCol.columns.length > 0) {
          processColumns(processedCol.columns);
        }
      });
    };

    processColumns(columns);

    setFlattenedColumns(flatColumns);
    setColumnsMap(colMap);
    setLocalVisibleColumns(initialVisibility);
  }, [columns, visibleColumns]);

  const getRootColumns = (): TableColumn<T>[] => {
    const typedColumns = columns as TableColumn<T>[];
    return typedColumns.filter(col => !col.parent);
  };

  const handleExpandToggle = (columnId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  const handleVisibilityChange = (columnId: string, isVisible: boolean) => {
    const updateChildrenVisibility = (childColumns: TableColumn<T>[], visible: boolean) => {
      if (!childColumns || childColumns.length === 0) return {};

      let updatedVisibility: Record<string, boolean> = {};

      childColumns.forEach(child => {
        if (!child.id) return;

        updatedVisibility[child.id] = visible;

        if (child.columns && child.columns.length > 0) {
          const childUpdates = updateChildrenVisibility(child.columns as TableColumn<T>[], visible);
          updatedVisibility = { ...updatedVisibility, ...childUpdates };
        }
      });

      return updatedVisibility;
    };

    let newVisibility: Record<string, boolean> = { [columnId]: isVisible };

    const column = columnsMap[columnId];
    if (column && column.columns && column.columns.length > 0) {
      const childUpdates = updateChildrenVisibility(column.columns as TableColumn<T>[], isVisible);
      newVisibility = { ...newVisibility, ...childUpdates };
    }

    if (isVisible) {
      const updateParentVisibility = (column: TableColumn<T> | undefined): Record<string, boolean> => {
        if (!column || !column.parent) return {};

        const parentId = column.parent.id;
        const parentColumn = flattenedColumns.find(col => col.id === parentId);

        let parentVisibility: Record<string, boolean> = { [parentId]: true };

        if (parentColumn && parentColumn.parent) {
          const grandParentVisibility = updateParentVisibility(parentColumn);
          parentVisibility = { ...parentVisibility, ...grandParentVisibility };
        }

        return parentVisibility;
      };

      const column = flattenedColumns.find(col => col.id === columnId);
      if (column && column.parent) {
        const parentVisibility = updateParentVisibility(column);
        newVisibility = { ...newVisibility, ...parentVisibility };
      }
    }

    const updatedVisibility = { ...localVisibleColumns, ...newVisibility };
    setLocalVisibleColumns(updatedVisibility);

    Object.entries(newVisibility).forEach(([colId, visible]) => {
      onVisibilityChange(colId, visible);
    });
  };

  const generateUniqueId = (column: TableColumn<T>, index: number): string => {
    if (column.id) return column.id;

    if (column.accessorKey) return column.accessorKey;

    if (column.header && typeof column.header === 'string') {
      return column.header.replace(/\s+/g, '_').toLowerCase();
    }

    return `column_${index}`;
  };

  const isColumnVisible = (columnId: string): boolean => {
    return localVisibleColumns[columnId] !== undefined ? localVisibleColumns[columnId] : true;
  };

  const renderColumns = () => {
    const rootCols = getRootColumns();

    const renderColumnWithChildren = (column: TableColumn<T>, index: number, depth: number = 0) => {
      const columnId = generateUniqueId(column, index);

      const isParent = column.columns && column.columns.length > 0;
      const isExpanded = expandedGroups[columnId] || false;
      const pinned = pinnedColumns[columnId] || false;

      let title: string;
      if (typeof column.header === 'string') {
        title = column.header;
      } else if (column.meta && typeof column.meta.title === 'string') {
        title = column.meta.title;
      } else {
        title = columnId;
      }

      return (
        <React.Fragment key={columnId}>
          <div className={styles.draggableItem} style={{ paddingLeft: `${depth * 20}px` }}>
            <ColumnSetting
              id={columnId}
              title={title}
              visible={isColumnVisible(columnId)}
              pinned={pinned}
              hasChildren={isParent}
              expanded={isExpanded}
              draggable={!isParent}
              onVisibilityChange={visible => handleVisibilityChange(columnId, visible)}
              onPinChange={!isParent ? pinned => onPinChange(columnId, pinned) : undefined}
              onExpandChange={() => handleExpandToggle(columnId)}
            />
          </div>

          {isParent && isExpanded && (
            <div>
              {column.columns!.map((childColumn, childIndex) =>
                renderColumnWithChildren(childColumn as TableColumn<T>, childIndex, depth + 1)
              )}
            </div>
          )}
        </React.Fragment>
      );
    };

    // Рендерим список
    return (
      <div className={styles.droppableArea}>
        {rootCols.map((column, index) => renderColumnWithChildren(column, index))}
      </div>
    );
  };

  return <div>{renderColumns()}</div>;
};
