import React, { CSSProperties, useMemo, useState } from 'react';

import { Box, Button, Typography } from '@components/index';
import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { ColumnPinningState, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from './PinnedColumnsTableExample.module.scss';

import { getCellProps } from '../utils';
import { columns, data } from './constants';

/**
 * Компонент PinnedColumnsTableExample - пример таблицы с закрепленными столбцами и горизонтальным скроллом
 *
 * Демонстрирует:
 * - Закрепление столбцов слева и справа
 * - Горизонтальный скролл с сохранением позиции закрепленных столбцов
 * - Правильное позиционирование (sticky) для закрепленных столбцов
 * - Визуальное выделение закрепленных столбцов
 *
 * @example
 * ```tsx
 * <PinnedColumnsTableExample />
 * ```
 */
const PinnedColumnsTableExample = () => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['id', 'name'],
    right: []
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      columnPinning
    },
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    enableColumnPinning: true,
    defaultColumn: {
      minSize: 80,
      maxSize: 500,
      size: 120
    }
  });

  /**
   * Вспомогательная функция для получения стилей и классов закрепленных столбцов
   * Рассчитывает offset для каждого столбца в зависимости от его позиции
   */
  const getPinnedInfo = (columnId: string, isHeader = false): { styles: CSSProperties; className: string } | null => {
    const pinnedState = table.getState().columnPinning;
    const leftPinned = pinnedState.left || [];
    const rightPinned = pinnedState.right || [];

    if (leftPinned.includes(columnId)) {
      let leftOffset = 0;
      const columnIndex = leftPinned.indexOf(columnId);

      for (let i = 0; i < columnIndex; i++) {
        const prevColumnId = leftPinned[i];
        const prevColumn = table.getColumn(prevColumnId);
        if (prevColumn) {
          leftOffset += prevColumn.getSize();
        }
      }

      return {
        styles: {
          position: 'sticky',
          left: leftOffset,
          zIndex: isHeader ? 4 : 2
        },
        className: ''
      };
    }

    if (rightPinned.includes(columnId)) {
      let rightOffset = 0;
      const columnIndex = rightPinned.indexOf(columnId);

      for (let i = columnIndex + 1; i < rightPinned.length; i++) {
        const nextColumnId = rightPinned[i];
        const nextColumn = table.getColumn(nextColumnId);
        if (nextColumn) {
          rightOffset += nextColumn.getSize();
        }
      }

      return {
        styles: {
          position: 'sticky',
          right: rightOffset,
          zIndex: isHeader ? 4 : 2
        },
        className: styles.pinnedColumnRight
      };
    }

    return null;
  };

  /**
   * Переключение закрепления столбца слева
   */
  const togglePinLeft = (columnId: string) => {
    setColumnPinning(prev => {
      const currentLeft = prev.left || [];
      const isPinned = currentLeft.includes(columnId);

      return {
        ...prev,
        left: isPinned ? currentLeft.filter(id => id !== columnId) : [...currentLeft, columnId]
      };
    });
  };

  /**
   * Переключение закрепления столбца справа
   */
  const togglePinRight = (columnId: string) => {
    setColumnPinning(prev => {
      const currentRight = prev.right || [];
      const isPinned = currentRight.includes(columnId);

      return {
        ...prev,
        right: isPinned ? currentRight.filter(id => id !== columnId) : [...currentRight, columnId]
      };
    });
  };

  /**
   * Сброс всех закреплений
   */
  const resetPinning = () => {
    setColumnPinning({ left: [], right: [] });
  };

  const pinnedColumnsInfo = useMemo(() => {
    const left = columnPinning.left || [];
    const right = columnPinning.right || [];
    return {
      left: left.length,
      right: right.length,
      total: left.length + right.length
    };
  }, [columnPinning]);

  return (
    <Box maxWidth="1024px" flexDirection="column">
      <Box gap={8} style={{ marginBottom: '16px' }} justifyContent="space-between" alignItems="center">
        <Box gap={8} pb={16}>
          <Button size="s" onClick={() => togglePinLeft('id')}>
            {columnPinning.left?.includes('id') ? 'Открепить' : 'Закрепить'} ID слева
          </Button>
          <Button size="s" onClick={() => togglePinLeft('name')}>
            {columnPinning.left?.includes('name') ? 'Открепить' : 'Закрепить'} Название слева
          </Button>
          <Button size="s" onClick={() => togglePinRight('description')}>
            {columnPinning.right?.includes('description') ? 'Открепить' : 'Закрепить'} Описание справа
          </Button>
          <Button variant="secondary" size="s" onClick={resetPinning}>
            Сбросить все закрепления
          </Button>
        </Box>
        <Typography variant="Body2-Medium" style={{ color: 'var(--steel-70)' }}>
          Закреплено: {pinnedColumnsInfo.total} столбцов (слева: {pinnedColumnsInfo.left}, справа:{' '}
          {pinnedColumnsInfo.right})
        </Typography>
      </Box>

      <div className={styles.tableContainer}>
        <Table
          horizontalBorders
          verticalBorders
          style={{
            width: '100%',
            minWidth: 1600,
            tableLayout: 'auto'
          }}
        >
          <Thead style={{ position: 'sticky', top: 0, zIndex: 3 }}>
            {table.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const pinnedInfo = getPinnedInfo(header.column.id, true);
                  const size = header.column.columnDef.size || header.getSize();

                  const headerStyles: CSSProperties = {
                    width: size,
                    minWidth: size,
                    maxWidth: size,
                    cursor: 'default',
                    ...(pinnedInfo?.styles || {})
                  };

                  return (
                    <Top
                      key={header.id}
                      style={headerStyles}
                      className={pinnedInfo?.className}
                      title={
                        typeof header.column.columnDef.header === 'string'
                          ? header.column.columnDef.header
                          : (header.column.columnDef.meta?.title as string) || header.id
                      }
                      right={header.column.columnDef.meta?.isNumeric}
                    />
                  );
                })}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const pinnedInfo = getPinnedInfo(cell.column.id, false);
                  const size = cell.column.columnDef.size || cell.column.getSize();

                  const cellStyles: CSSProperties = {
                    width: size,
                    minWidth: size,
                    maxWidth: size,
                    ...(pinnedInfo?.styles || {})
                  };

                  return (
                    <Cell key={cell.id} style={cellStyles} className={pinnedInfo?.className} {...getCellProps(cell)} />
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

export default PinnedColumnsTableExample;
