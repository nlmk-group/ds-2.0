import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';

import { Box, Typography } from '@components/index';
import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import type { Header } from '@tanstack/react-table';
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
import { columns, data, Person } from './constants';
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

  const getHeaderPinnedStyle = (header: Header<Person, unknown>, side: 'left' | 'right' | 'center'): CSSProperties => {
    const trueLeafs = header.getLeafHeaders().filter(h => !h.subHeaders || h.subHeaders.length === 0);
    if (side === 'left') {
      const leftOffset = trueLeafs[0]?.column.getStart('left') ?? 0;
      return { position: 'sticky', left: leftOffset, zIndex: 4 };
    }
    if (side === 'right') {
      const rightOffset = trueLeafs[trueLeafs.length - 1]?.column.getAfter('right') ?? 0;
      return { position: 'sticky', right: rightOffset, zIndex: 4 };
    }
    return {};
  };

  const getCellPinnedInfo = (columnId: string): { styles: CSSProperties; className: string } | null => {
    const col = table.getColumn(columnId);
    if (!col) return null;

    const pinned = col.getIsPinned();
    if (pinned === 'left') {
      return {
        styles: { position: 'sticky', left: col.getStart('left'), zIndex: 2 },
        className: styles.pinnedColumnLeft
      };
    }
    if (pinned === 'right') {
      return {
        styles: { position: 'sticky', right: col.getAfter('right'), zIndex: 2 },
        className: styles.pinnedColumnRight
      };
    }

    return null;
  };

  const renderHeader = (header: Header<Person, unknown>, side: 'left' | 'right' | 'center') => {
    const columnRelativeDepth = header.depth - header.column.depth;
    if (columnRelativeDepth > 1) return null;

    let rowSpan = 1;
    if (header.isPlaceholder) {
      const leafs = header.getLeafHeaders();
      rowSpan = Math.max(1, leafs[leafs.length - 1].depth - header.depth);
    }
    const metaRowSpan = header.column.columnDef.meta?.rowSpan;
    if (metaRowSpan !== undefined) rowSpan = metaRowSpan;

    let size = header.getSize();
    if (header.subHeaders && header.subHeaders.length > 0) {
      size = header.subHeaders.reduce((sum, sub) => sum + sub.getSize(), 0);
    }

    const pinnedStyle = getHeaderPinnedStyle(header, side);
    const pinnedClassMap: Record<string, string | undefined> = {
      left: styles.pinnedColumnLeft,
      right: styles.pinnedColumnRight
    };
    const pinnedClassName = pinnedClassMap[side];

    return (
      <Top
        key={header.id}
        style={{ width: size, minWidth: size, maxWidth: size, ...pinnedStyle }}
        className={pinnedClassName}
        colSpan={header.colSpan}
        rowSpan={rowSpan}
        drag={side === 'center' && (!header.subHeaders || header.subHeaders.length === 0)}
        onMouseDown={side === 'center' ? header.getResizeHandler() : undefined}
        onTouchStart={side === 'center' ? header.getResizeHandler() : undefined}
        title={
          typeof header.column.columnDef.header === 'string'
            ? header.column.columnDef.header
            : (header.column.columnDef.meta?.title as string) || header.id
        }
        right={!!header.column.columnDef.meta?.isNumeric}
      />
    );
  };

  return (
    <Box maxWidth="1024px" flexDirection="column" gap={0}>
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
          <Thead style={{ position: 'sticky', top: 0, zIndex: 3 }}>
            {table.getLeftHeaderGroups().map((leftGroup, rowIdx) => {
              const centerGroup = table.getCenterHeaderGroups()[rowIdx];
              const rightGroup = table.getRightHeaderGroups()[rowIdx];

              return (
                <Row key={leftGroup.id}>
                  {leftGroup.headers.map(h => renderHeader(h, 'left'))}
                  {centerGroup?.headers.map(h => renderHeader(h, 'center'))}
                  {rightGroup?.headers.map(h => renderHeader(h, 'right'))}
                </Row>
              );
            })}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const size = cell.column.getSize();
                  const pinnedInfo = getCellPinnedInfo(cell.column.id);

                  return (
                    <Cell
                      key={cell.id}
                      style={{ width: size, minWidth: size, maxWidth: size, ...(pinnedInfo?.styles || {}) }}
                      className={pinnedInfo?.className}
                      align={cell.column.columnDef.meta?.isNumeric ? 'right' : 'left'}
                      {...getCellProps(cell)}
                    />
                  );
                })}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </Box>
  );
};

export default LocalStorageTableExample;
