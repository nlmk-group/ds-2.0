import React, { useState } from 'react';

import { Cell, Filter, Row, Table, tableFilterOperations, Tbody, Thead, Top } from '@components/index';
import {
  ColumnFiltersState,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';

import { TData } from './types';

import styles from '../Example.module.scss';

import { getCellProps } from '../utils';
import { columns, data } from './constants';

const FilterableTableExample = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  const table = useReactTable({
    data,
    columns: columns,
    state: {
      columnFilters,
      sorting
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 200,
      maxSize: 800,
      size: 200
    }
  });

  const getSelectOptionsForColumn = (columnId: string) => {
    const uniqueValues = new Set<string>();
    data.forEach(row => {
      const value = row[columnId as keyof TData];
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value));
      }
    });
    return Array.from(uniqueValues).map(value => ({
      value,
      label: value
    }));
  };

  return (
    <div className={styles.tableContainer}>
      <Table
        horizontalBorders
        verticalBorders
        style={{
          tableLayout: 'fixed',
          width: table.getCenterTotalSize()
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
                    style={{
                      width: header.getSize()
                    }}
                    drag={true}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    sort={canSort}
                    filtered={!!header.column.getFilterValue()}
                    sortDirection={isSorted}
                    onClick={() => {
                      if (canSort) {
                        header.column.toggleSorting();
                      }
                    }}
                    className={!header.column.getCanSort() ? styles.notSortable : ''}
                    title={flexRender(header.column.columnDef.header, header.getContext()) as string}
                    right={header.column.columnDef.meta?.isNumeric}
                  >
                    {header.column.getCanFilter() && (
                      <Filter
                        defaultValue=""
                        defaultFilterType="contains"
                        filterTypeOptions={tableFilterOperations}
                        filterValueOptions={getSelectOptionsForColumn(header.column.id)}
                        placeholder="Поиск ..."
                        withPortal
                        onFilterChange={(value, filterType) => {
                          if (!value || !filterType) {
                            header.column.setFilterValue(undefined);
                            return;
                          }
                          let filterValue = value;
                          if (header.column.id === 'lastUpdate' && value) {
                            filterValue = new Date(value).toISOString();
                          }
                          header.column.setFilterValue({
                            type: filterType,
                            value: filterValue
                          });
                        }}
                      />
                    )}
                  </Top>
                );
              })}
            </Row>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Row key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Cell key={cell.id} style={{ width: cell.column.getSize() }} {...getCellProps(cell)} />
              ))}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default FilterableTableExample;
