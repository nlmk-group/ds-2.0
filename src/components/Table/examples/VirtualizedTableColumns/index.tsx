import React, { useMemo, useRef } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';

import styles from '../Example.module.scss';

import { ECellStatus } from '../../Cell/types';
import { getCellProps } from '../utils';
import { columns, data } from './constants';

const VirtualizedTableWithHorizontalVirtualizationExample = () => {
  const table = useReactTable({
    data: useMemo(() => data, []),
    columns: useMemo(() => columns, []),
    getCoreRowModel: getCoreRowModel()
  });

  const visibleColumns = table.getVisibleLeafColumns();
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const columnVirtualizer = useVirtualizer({
    count: visibleColumns.length,
    estimateSize: index => visibleColumns[index].getSize(),
    getScrollElement: () => tableContainerRef.current,
    horizontal: true,
    overscan: 1
  });

  const virtualColumns = columnVirtualizer.getVirtualItems();
  const virtualPaddingLeft = virtualColumns[0]?.start ?? 0;
  const virtualPaddingRight = columnVirtualizer.getTotalSize() - (virtualColumns[virtualColumns.length - 1]?.end ?? 0);

  return (
    <div>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        (Виртуализированная таблица: {columns.length} columns)
      </Typography>

      <div className={styles.tableContainer} ref={tableContainerRef}>
        <Table style={{ width: `${columnVirtualizer.getTotalSize()}px` }} horizontalBorders verticalBorders>
          <Thead
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1
            }}
          >
            {table.getHeaderGroups().map(headerGroup => (
              <Row
                key={headerGroup.id}
                style={{
                  display: 'flex',
                  width: '100%'
                }}
              >
                {virtualPaddingLeft > 0 && <Top style={{ width: virtualPaddingLeft }} />}
                {virtualColumns.map(virtualColumn => {
                  const header = headerGroup.headers[virtualColumn.index];
                  return (
                    <Top
                      key={header.id}
                      style={{
                        width: header.getSize()
                      }}
                      title={flexRender(header.column.columnDef.header, header.getContext())}
                      right={header.column.columnDef.meta?.isNumeric}
                      className={styles.notSortable}
                    />
                  );
                })}
                {virtualPaddingRight > 0 && <Top style={{ width: virtualPaddingRight }} />}
              </Row>
            ))}
          </Thead>

          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Row
                key={row.id}
                style={{
                  display: 'flex',
                  width: '100%'
                }}
              >
                {virtualPaddingLeft > 0 && <Cell style={{ width: virtualPaddingLeft }} />}
                {virtualColumns.map(virtualColumn => {
                  const cell = row.getVisibleCells()[virtualColumn.index];
                  return (
                    <Cell
                      key={cell.id}
                      color={ECellStatus.WARNING}
                      style={{
                        width: cell.column.getSize()
                      }}
                      {...getCellProps(cell)}
                    />
                  );
                })}
                {virtualPaddingRight > 0 && <Cell style={{ width: virtualPaddingRight }} />}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default VirtualizedTableWithHorizontalVirtualizationExample;
