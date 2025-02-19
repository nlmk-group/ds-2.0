import React, { useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { getCellProps } from '..';
import { columns, data } from './constants';

const SortableTableExample = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 100,
      maxSize: 800,
      size: 150
    }
  });

  const totalWidth = table.getCenterTotalSize();
  const containerWidth = '100%';

  return (
    <div className={styles.tableContainer}>
      <Table
        horizontalBorders
        verticalBorders
        style={{
          tableLayout: 'fixed',
          width: Math.max(totalWidth, typeof containerWidth === 'string' ? 800 : containerWidth)
        }}
      >
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const canSort = header.column.getCanSort();
                const isSorted = header.column.getIsSorted();

                return (
                  <Top
                    key={header.id}
                    disable={!canSort}
                    sort={canSort}
                    sortDirection={isSorted}
                    style={{
                      width: header.getSize()
                    }}
                    drag={true}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    onClick={() => {
                      if (canSort) {
                        header.column.toggleSorting();
                      }
                    }}
                    title={flexRender(header.column.columnDef.header, header.getContext()) as string}
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
                const rowStatus = row.original.status;

                return (
                  <Cell
                    key={cell.id}
                    color={rowStatus}
                    {...getCellProps(cell)}
                    style={{
                      width: cell.column.getSize()
                    }}
                  />
                );
              })}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default SortableTableExample;
