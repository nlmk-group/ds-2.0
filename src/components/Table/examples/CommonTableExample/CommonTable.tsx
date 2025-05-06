import React from 'react';
import { SetStateAction } from 'react';

import { Box, Pagination, Spinner } from '@components/index';
import { Cell, Row, Table, Tbody, Thead, Top } from '@components/Table';
import { ESize } from '@components/Table/Top/types';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Header,
  OnChangeFn,
  SortingState,
  TableOptions,
  useReactTable
} from '@tanstack/react-table';
import { clsx } from 'clsx';

import styles from '../Example.module.scss';

export interface CommonTableProps<T> extends Omit<TableOptions<T>, 'getCoreRowModel'> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  onSortingChange?: OnChangeFn<SortingState>;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  size?: ESize;
  stickyHeader?: boolean;
  withPagination?: boolean;
  pagination?: { pageCount: number; pageSizes: number[] };
}

const CommonTable = <T,>({
  data,
  columns,
  isLoading = false,
  onSortingChange,
  onPageChange,
  onPageSizeChange,
  state,
  size = ESize.S,
  stickyHeader = false,
  withPagination = false,
  pagination
}: CommonTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange,
    state,
    pageCount: pagination?.pageCount
  });

  const tablePagination = table.getState().pagination;

  const handleChangeCurrentPage = (value: SetStateAction<number>) =>
    onPageChange?.(typeof value === 'function' ? value(tablePagination.pageIndex + 1) : value);

  const handleChangeElementsPerPage = (value: SetStateAction<number>) =>
    onPageSizeChange?.(typeof value === 'function' ? value(state?.pagination?.pageSize || 10) : value);

  const handleChangeSorting = (header: Header<T, unknown>) => {
    if (header.column.getCanSort()) {
      header.column.toggleSorting();
    }
  };
  const tablePageCount = table.getPageCount();

  return (
    <>
      <div style={{ height: '100%' }}>
        {isLoading ? (
          <Box justifyContent="center">
            <Spinner />
          </Box>
        ) : (
          <Table>
            <Thead className={clsx(stickyHeader && styles.tableHeaderSticky)}>
              {table.getHeaderGroups().map(headerGroup => (
                <Row key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Top
                      align="left"
                      key={header.id}
                      onClick={() => handleChangeSorting(header)}
                      size={size}
                      sort={header.column.getCanSort()}
                      sortDirection={header.column.getIsSorted()}
                      title={flexRender(header.column.columnDef.header, header.getContext())}
                    />
                  ))}
                </Row>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map(row => (
                <Row key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <Cell align="right" key={cell.id} size={size} width={cell.column.getSize()}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Cell>
                  ))}
                </Row>
              ))}
            </Tbody>
          </Table>
        )}
      </div>
      {withPagination && (
        <Pagination
          currentPage={tablePagination.pageIndex + 1}
          elementsPerPage={tablePagination.pageSize}
          maxPageCount={tablePageCount}
          pageSizes={pagination?.pageSizes}
          setCurrentPage={handleChangeCurrentPage}
          setElementsPerPage={handleChangeElementsPerPage}
          withSelect
        />
      )}
    </>
  );
};

export default CommonTable;
