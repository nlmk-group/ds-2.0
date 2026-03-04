import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import type { Header } from '@tanstack/react-table';

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

  const getPinnedInfo = (
    header: Header<Person, unknown>
  ): { styles: CSSProperties; className: string; pinnedSize?: number } | null => {
    const leafHeaders = header.getLeafHeaders();
    const pinnedState = table.getState().columnPinning;
    const leftPinned = pinnedState.left || [];
    const rightPinned = pinnedState.right || [];
    const leftLeafs = leafHeaders.filter(h => leftPinned.includes(h.column.id));
    const rightLeafs = leafHeaders.filter(h => rightPinned.includes(h.column.id));
    const leafCount = leafHeaders.length;

    if (leftLeafs.length > 0 && leftLeafs.length === leafCount) {
      return {
        styles: { position: 'sticky', left: leftLeafs[0].column.getStart('left'), zIndex: 4 },
        className: styles.pinnedColumnLeft
      };
    }

    if (rightLeafs.length > 0 && rightLeafs.length === leafCount) {
      return {
        styles: {
          position: 'sticky',
          right: rightLeafs[rightLeafs.length - 1].column.getAfter('right'),
          zIndex: 4
        },
        className: styles.pinnedColumnRight
      };
    }

    if (leftLeafs.length > 0) {
      const pinnedSize = leftLeafs.reduce((sum, h) => sum + h.getSize(), 0);
      return {
        styles: { position: 'sticky', left: leftLeafs[0].column.getStart('left'), zIndex: 4, width: pinnedSize, minWidth: pinnedSize, maxWidth: pinnedSize },
        className: styles.pinnedColumnLeft,
        pinnedSize
      };
    }

    if (rightLeafs.length > 0) {
      const pinnedSize = rightLeafs.reduce((sum, h) => sum + h.getSize(), 0);
      return {
        styles: {
          position: 'sticky',
          right: rightLeafs[rightLeafs.length - 1].column.getAfter('right'),
          zIndex: 4,
          width: pinnedSize,
          minWidth: pinnedSize,
          maxWidth: pinnedSize
        },
        className: styles.pinnedColumnRight,
        pinnedSize
      };
    }

    return null;
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

  return (
    <Box maxWidth="1024px" flexDirection="column">
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
            {table.getHeaderGroups().map((headerGroup) => (
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

                  const pinnedInfo = getPinnedInfo(header);
                  const pinnedState = table.getState().columnPinning;
                  const leftPinned = pinnedState.left || [];
                  const rightPinned = pinnedState.right || [];
                  const leafHeaders = header.getLeafHeaders();
                  const leftLeafs = leafHeaders.filter(h => leftPinned.includes(h.column.id));
                  const rightLeafs = leafHeaders.filter(h => rightPinned.includes(h.column.id));
                  const totalLeafs = leafHeaders.length;
                  const isPartialPin =
                    pinnedInfo?.pinnedSize !== undefined &&
                    (leftLeafs.length > 0 || rightLeafs.length > 0) &&
                    (leftLeafs.length < totalLeafs || rightLeafs.length < totalLeafs);

                  if (isPartialPin && leftLeafs.length > 0) {
                    const pinnedColSpan = leftLeafs.length;
                    const unpinnedColSpan = totalLeafs - leftLeafs.length;
                    const pinnedSize = leftLeafs.reduce((sum, h) => sum + h.getSize(), 0);
                    const unpinnedSize = leafHeaders
                      .filter(h => !leftPinned.includes(h.column.id))
                      .reduce((sum, h) => sum + h.getSize(), 0);

                    const title =
                      typeof header.column.columnDef.header === 'string'
                        ? header.column.columnDef.header
                        : (header.column.columnDef.meta?.title as string) || header.id;

                    return (
                      <React.Fragment key={header.id}>
                        <Top
                          style={{
                            width: pinnedSize,
                            minWidth: pinnedSize,
                            maxWidth: pinnedSize,
                            ...pinnedInfo!.styles
                          }}
                          className={pinnedInfo!.className}
                          colSpan={pinnedColSpan}
                          rowSpan={rowSpan}
                          drag={false}
                          title={title}
                        />
                        {unpinnedColSpan > 0 && (
                          <Top
                            style={{ width: unpinnedSize, minWidth: unpinnedSize, maxWidth: unpinnedSize }}
                            colSpan={unpinnedColSpan}
                            rowSpan={rowSpan}
                            drag={false}
                            title={title}
                          />
                        )}
                      </React.Fragment>
                    );
                  }

                  return (
                    <Top
                      key={header.id}
                      style={{ width: size, minWidth: size, maxWidth: size, ...(pinnedInfo?.styles || {}) }}
                      className={pinnedInfo?.className}
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
                      right={!!header.column.columnDef.meta?.isNumeric}
                    />
                  );
                })}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map((cell) => {
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
