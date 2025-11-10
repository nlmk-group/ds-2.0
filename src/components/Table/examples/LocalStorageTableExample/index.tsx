import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Box, Typography } from '@components/index';
import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  ColumnSizingState,
  getCoreRowModel,
  useReactTable,
  VisibilityState
} from '@tanstack/react-table';

import styles from './LocalStorageTableExample.module.scss';

import { getCellProps } from '../utils';
import { columns, data } from './constants';
import { CustomSettings } from './CustomSettings';
import { useTableSettings } from './useTableSettings';

/**
 * Компонент LocalStorageTableExample - пример таблицы с сохранением настроек в localStorage
 *
 * Этот компонент демонстрирует возможности по сохранению пользовательских настроек:
 * - Видимость колонок сохраняется в localStorage
 * - Порядок колонок сохраняется в localStorage
 * - Закрепление колонок сохраняется в localStorage
 * - Размеры колонок сохраняются в localStorage
 * - При перезагрузке страницы настройки восстанавливаются
 */
const LocalStorageTableExample = () => {
  /**
   * Рекурсивная обработка колонок для извлечения ID и инициализации видимости
   */
  const processColumnsRecursive = (cols: any[], ids: string[], visibility: VisibilityState) => {
    cols.forEach(col => {
      if (col.id) {
        ids.push(col.id);
        visibility[col.id] = true;
      }
      if (col.columns) {
        processColumnsRecursive(col.columns, ids, visibility);
      }
    });
  };

  const defaultSettings = useMemo(() => {
    const ids: string[] = [];
    const visibility: VisibilityState = {};
    processColumnsRecursive(columns, ids, visibility);

    return {
      columnVisibility: visibility,
      columnOrder: ids,
      columnPinning: { left: [], right: [] },
      columnSizing: {}
    };
  }, []);

  const { loadSettings, saveSettings } = useTableSettings({
    storageKey: 'example-table',
    defaultSettings
  });

  const initialSettings = useMemo(() => loadSettings(), []);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialSettings.columnVisibility);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialSettings.columnOrder);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>(initialSettings.columnPinning);
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(initialSettings.columnSizing || {});
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnOrder,
      columnPinning,
      columnSizing
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onColumnSizingChange: setColumnSizing,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 180,
      maxSize: 500,
      size: 180
    }
  });

  /**
   * Сохраняем настройки при их изменении
   */
  useEffect(() => {
    const settings = {
      columnVisibility,
      columnOrder,
      columnPinning,
      columnSizing
    };
    saveSettings(settings);
  }, [columnVisibility, columnOrder, columnPinning, columnSizing, saveSettings]);

  /**
   * Преобразование columnPinning для CustomSettings
   */
  const pinnedColumns: Record<string, 'left' | 'right' | false> = useMemo(() => {
    const result: Record<string, 'left' | 'right' | false> = {};
    if (columnPinning.left) {
      columnPinning.left.forEach(id => {
        result[id] = 'left';
      });
    }
    if (columnPinning.right) {
      columnPinning.right.forEach(id => {
        result[id] = 'right';
      });
    }
    return result;
  }, [columnPinning]);

  /**
   * Обработчик изменения видимости колонок
   */
  const handleVisibilityChange = (newVisibility: Record<string, boolean>) => {
    setColumnVisibility(newVisibility);
  };

  /**
   * Обработчик изменения порядка колонок
   */
  const handleOrderChange = (newOrder: string[]) => {
    setColumnOrder(newOrder);
  };

  /**
   * Обработчик изменения закрепления колонок
   */
  const handlePinChange = (newPinning: Record<string, 'left' | 'right' | false>) => {
    const left: string[] = [];
    const right: string[] = [];

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
    <div style={{ maxWidth: '1024px' }}>
      <Box gap={16} style={{ marginBottom: '16px' }}>
        <Typography variant="Body1-Medium" color="var(--steel-90)">
          Настройте таблицу через панель настроек (видимость, порядок, закрепление столбцов).
        </Typography>
        <Typography variant="Body1-Medium" color="var(--steel-90)">
          Настройки автоматически сохраняются в localStorage и восстанавливаются при перезагрузке страницы.
        </Typography>
      </Box>

      <Box gap={8} style={{ marginBottom: '16px' }} justifyContent="flex-end">
        <CustomSettings
          columns={columns}
          visibleColumns={columnVisibility}
          columnOrder={columnOrder}
          pinnedColumns={pinnedColumns}
          defaultVisibleColumns={defaultSettings.columnVisibility}
          defaultColumnOrder={defaultSettings.columnOrder}
          onVisibilityChange={handleVisibilityChange}
          onOrderChange={handleOrderChange}
          onPinChange={handlePinChange}
        />
      </Box>

      <div ref={tableContainerRef} className={styles.tableContainer}>
        <Table
          horizontalBorders
          verticalBorders
          style={{
            width: '100%',
            minWidth: table
              .getAllLeafColumns()
              .filter(col => col.getIsVisible())
              .reduce((sum, col) => sum + col.getSize(), 0),
            tableLayout: 'auto'
          }}
        >
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

                  let size = header.getSize();
                  if (header.subHeaders && header.subHeaders.length > 0) {
                    size = header.subHeaders.reduce((sum, subHeader) => sum + subHeader.getSize(), 0);
                  }

                  return (
                    <Top
                      key={header.id}
                      style={{ width: size, minWidth: size, maxWidth: size }}
                      colSpan={header.colSpan}
                      rowSpan={rowSpan}
                      drag={!header.subHeaders || header.subHeaders.length === 0}
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
                  const size = cell.column.getSize();

                  return (
                    <Cell
                      key={cell.id}
                      style={{ width: size, minWidth: size, maxWidth: size }}
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

export default LocalStorageTableExample;
