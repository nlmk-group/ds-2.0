import React, { useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  getCoreRowModel,
  useReactTable,
  VisibilityState
} from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { getCellProps } from '../utils';
import { columns, data } from './constants';
import { CustomSettings } from './CustomSettings';

/**
 * Компонент SettingsTableExample - пример таблицы с настраиваемыми колонками
 *
 * Этот компонент демонстрирует возможности по настройке таблицы:
 * - Изменение порядка колонок (перетаскивание)
 * - Показ/скрытие колонок
 * - Закрепление колонок (слева/справа)
 */
const SettingsTableExample = () => {
  /**
   * Функция для получения всех ID колонок из определения колонок
   * Рекурсивно обходит все колонки, включая вложенные
   */
  const getAllColumnIds = () => {
    const result: string[] = [];

    const processColumns = (cols: any[]) => {
      cols.forEach(col => {
        if (col.id) {
          result.push(col.id);
        }
        if (col.columns) {
          processColumns(col.columns);
        }
      });
    };

    processColumns(columns);
    return result;
  };

  /**
   * Инициализация видимости колонок
   * По умолчанию все колонки видимы
   */
  const initVisibility = () => {
    const visibility: VisibilityState = {};
    const processColumns = (cols: any[]) => {
      cols.forEach(col => {
        if (col.id) {
          visibility[col.id] = true;
        }
        if (col.columns) {
          processColumns(col.columns);
        }
      });
    };
    processColumns(columns);
    return visibility;
  };

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initVisibility());
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(getAllColumnIds());
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({});
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  /**
   * Преобразование объекта columnPinning в формат, понятный для компонента CustomSettings
   * Из { left: ['id1', 'id2'], right: ['id3'] } в { id1: 'left', id2: 'left', id3: 'right' }
   */
  const pinnedColumns: Record<string, 'left' | 'right' | false> = {};
  if (columnPinning.left) {
    columnPinning.left.forEach(id => {
      pinnedColumns[id] = 'left';
    });
  }
  if (columnPinning.right) {
    columnPinning.right.forEach(id => {
      pinnedColumns[id] = 'right';
    });
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      columnVisibility,
      columnOrder,
      columnPinning
    },
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 80,
      maxSize: 500,
      size: 120
    }
  });

  /**
   * Обработчик изменения видимости колонок из панели настроек
   * @param newVisibility Объект с новыми настройками видимости колонок
   */
  const handleVisibilityChange = (newVisibility: Record<string, boolean>) => {
    // Преобразуем объект newVisibility в формат, который ожидает tanstack/react-table
    const tableVisibility: VisibilityState = {};

    const parentMap: Record<string, string> = {};

    const buildParentMap = (cols: any[], parent?: string) => {
      cols.forEach(col => {
        if (col.id) {
          if (parent) {
            parentMap[col.id] = parent;
          }

          if (col.columns && col.columns.length > 0) {
            buildParentMap(col.columns, col.id);
          }
        }
      });
    };

    buildParentMap(columns);

    const isAnyParentHidden = (columnId: string): boolean => {
      let currentId = columnId;

      while (parentMap[currentId]) {
        const parentId = parentMap[currentId];
        if (newVisibility[parentId] === false) {
          return true;
        }
        currentId = parentId;
      }

      return false;
    };

    // Устанавливаем видимость для каждой колонки
    Object.keys(newVisibility).forEach(id => {
      // Колонка видима только если:
      // 1. Она помечена как видимая в настройках
      // 2. Все ее родители также видимы
      tableVisibility[id] = newVisibility[id] && !isAnyParentHidden(id);
    });

    setColumnVisibility(tableVisibility);
  };

  /**
   * Обработчик изменения порядка колонок из панели настроек
   * @param newOrder Массив с новым порядком колонок
   */
  const handleOrderChange = (newOrder: string[]) => {
    setColumnOrder(newOrder);
  };

  /**
   * Обработчик изменения закрепления колонок из панели настроек
   * @param newPinning Объект с новыми настройками закрепления колонок
   */
  const handlePinChange = (newPinning: Record<string, 'left' | 'right' | false>) => {
    const left: string[] = [];
    const right: string[] = [];

    // Преобразуем формат { id: 'left'/'right'/false } в { left: [], right: [] }
    Object.entries(newPinning).forEach(([id, pin]) => {
      if (pin === 'left') {
        left.push(id);
      } else if (pin === 'right') {
        right.push(id);
      }
    });

    setColumnPinning({ left, right });
  };

  return (
    <div>
      <CustomSettings
        columns={columns}
        visibleColumns={columnVisibility}
        columnOrder={columnOrder}
        pinnedColumns={pinnedColumns}
        defaultVisibleColumns={initVisibility()}
        defaultColumnOrder={getAllColumnIds()}
        onVisibilityChange={handleVisibilityChange}
        onOrderChange={handleOrderChange}
        onPinChange={handlePinChange}
      />

      <div className={styles.tableContainer} style={{ width: '100%' }}>
        <Table horizontalBorders verticalBorders>
          <Thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const columnRelativeDepth = header.depth - header.column.depth;

                  if (columnRelativeDepth > 1) {
                    return null;
                  }

                  let rowSpan = 1;

                  if (header.isPlaceholder) {
                    const leafs = header.getLeafHeaders();
                    rowSpan = Math.max(1, leafs[leafs.length - 1].depth - header.depth);
                  }

                  const metaRowSpan = header.column.columnDef.meta?.rowSpan;
                  if (metaRowSpan !== undefined) {
                    rowSpan = metaRowSpan;
                  }

                  const size = header.column.columnDef.meta?.size || header.getSize();

                  return (
                    <Top
                      key={header.id}
                      style={{ width: size }}
                      colSpan={header.colSpan}
                      rowSpan={rowSpan}
                      drag={true}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      title={
                        typeof header.column.columnDef.header === 'string'
                          ? header.column.columnDef.header
                          : (header.column.columnDef.meta?.title as string) || header.id
                      }
                      right={header.column.columnDef.meta?.isNumeric && index !== 1}
                    />
                  );
                })}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map((cell, index) => {
                  const size = cell.column.columnDef.meta?.size || cell.column.getSize();

                  return (
                    <Cell
                      key={cell.id}
                      style={{ width: size }}
                      align={index === 0 ? 'left' : undefined}
                      {...getCellProps(cell)}
                    />
                  );
                })}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default SettingsTableExample;
