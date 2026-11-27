import React, { SetStateAction } from 'react';

import PreviewSkeleton from '@components/_storybook/PreviewSkeleton';
import { Pagination } from '@components/index';
import Scrollbar from '@components/Scrollbar';
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

import { getCellProps } from '../utils';

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
      <Scrollbar className={styles.tableContainer}>
        {isLoading ? (
          <PreviewSkeleton kind="table" />
        ) : (
          <Table>
            <Thead className={clsx(stickyHeader && styles.tableHeaderSticky)}>
              {table.getHeaderGroups().map(headerGroup => (
                <Row key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Top
                      right={header.index > 0 && Boolean(header.column.columnDef.meta?.isNumeric)}
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
                  {row.getVisibleCells().map((cell, index) => (
                    <Cell
                      align={index > 0 && cell.column.columnDef.meta?.isNumeric ? 'right' : 'left'}
                      key={cell.id}
                      size={size}
                      {...getCellProps(cell)}
                    />
                  ))}
                </Row>
              ))}
            </Tbody>
          </Table>
        )}
      </Scrollbar>
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
