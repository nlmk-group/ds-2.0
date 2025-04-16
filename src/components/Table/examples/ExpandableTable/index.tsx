import React, { useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';
import {
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import clsx from 'clsx';

import styles from '../Example.module.scss';

import { getCellProps } from '../utils';
import { columns, data } from './constants';

const ExpandableTableExample = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      sorting
    },
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowCanExpand: row => !!row.original.details,
    defaultColumn: {
      minSize: 30
    }
  });

  return (
    <div className={clsx(styles.tableContainer, styles.tableContainerExpandable)}>
      <Table horizontalBorders verticalBorders>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const canSort = header.column.getCanSort();
                const isSorted = header.column.getIsSorted();

                return (
                  <Top
                    key={header.id}
                    sort={canSort}
                    sortDirection={isSorted}
                    style={{
                      width: header.getSize(),
                      minWidth: header.getSize()
                    }}
                    onClick={() => {
                      if (canSort) {
                        header.column.toggleSorting();
                      }
                    }}
                    className={clsx(
                      !header.column.getCanSort() ? styles.notSortable : '',
                      header.column.columnDef.meta?.isExpander && styles.expanderColumn
                    )}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
                    right={header.column.columnDef.meta?.isNumeric}
                  />
                );
              })}
            </Row>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map(row => (
            <React.Fragment key={row.id}>
              <Row>
                {row.getVisibleCells().map(cell => {
                  const rowStatus = row.original.status;
                  return (
                    <Cell
                      key={cell.id}
                      color={rowStatus}
                      {...getCellProps(cell)}
                      disableHover={cell.column.columnDef.meta?.isExpander}
                      className={clsx(cell.column.columnDef.meta?.isExpander && styles.expanderColumn)}
                    />
                  );
                })}
              </Row>
              {row.getIsExpanded() && row.original.details && (
                <Row>
                  <Cell colSpan={row.getVisibleCells().length}>
                    <Typography
                      variant="Body1-Medium"
                      color="var(--steel-90)"
                      style={{ padding: '8px', background: 'transparent' }}
                    >
                      <strong>Details:</strong> {row.original.details}
                    </Typography>
                  </Cell>
                </Row>
              )}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ExpandableTableExample;
