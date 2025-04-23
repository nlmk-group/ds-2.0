import React, { SetStateAction, useEffect, useState } from 'react';

import { Box, Cell, Pagination, Row, Spinner, Tbody, Thead, Top } from '@components/index';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Header,
  OnChangeFn,
  SortingState,
  TableOptions,
  TableState,
  useReactTable
} from '@tanstack/react-table';
import clsx from 'clsx';

import styles from './Table.stories.module.scss';

import {
  ExpandableTableExample,
  FilterableTableExample,
  GroupHeaderTableWithResizeExample,
  GroupingHeaderTableExample,
  IData,
  SelectableTableExample,
  SelectableTableWithGroupingHeaderExample,
  SelectableTableWithPaginationExample,
  SelectableTableWithVirtualizationExample,
  SettingsTableExample,
  SortableTableExample,
  TableWithStickyHeader,
  TableWithTanStackExample,
  VirtualizedTableWithDynamicRowHeightExample,
  VirtualizedTableWithHorizontalVirtualizationExample
} from '../examples';
import { defaultColumns, defaultData } from '../examples/constants';
import Table from '../Table';
import { ESize } from '../Top/types';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Table/Stories',
  component: Table,
  decorators: [withPadding]
};

export const BasicTable = () => <TableWithTanStackExample />;
BasicTable.storyName = 'Таблица по умолчанию';

export const StickyHeader = () => <TableWithStickyHeader />;
StickyHeader.storyName = 'Таблица с закрепленным заголовком';

export const VirtualizedTableWithDynamicRowHeight = () => <VirtualizedTableWithDynamicRowHeightExample />;
VirtualizedTableWithDynamicRowHeight.storyName = 'Виртуализированная таблица с динамической высотой строк';

export const VirtualizedTableWithHorizontalVirtualization = () => (
  <VirtualizedTableWithHorizontalVirtualizationExample />
);
VirtualizedTableWithHorizontalVirtualization.storyName = 'Таблица с горизонтальной виртуализацией';

export const FilterableTable = () => <FilterableTableExample />;
FilterableTable.storyName = 'Таблица с фильтрами, сортировкой и возможностью изменения ширины столбцов';

export const SortableTable = () => <SortableTableExample />;
SortableTable.storyName = 'Таблица с сортировкой и возможностью изменения ширины столбцов';

export const ExpandableTable = () => <ExpandableTableExample />;
ExpandableTable.storyName = 'Таблица с раскрывающимися строками';

export const GroupingHeaderTable = () => <GroupingHeaderTableExample />;
GroupingHeaderTable.storyName = 'Таблица с группировкой и заголовками';

export const GroupHeaderTableWithResize = () => <GroupHeaderTableWithResizeExample />;
GroupHeaderTableWithResize.storyName = 'Таблица с группировкой и заголовками с возможностью изменения ширины столбцов';

export const TableWithSettings = () => <SettingsTableExample />;
TableWithSettings.storyName = 'Таблица с настройками колонок';

// export const TableComponents = () => <TableComponentsExample />;
// TableComponents.storyName = 'Таблица с компонентами';

export const SelectableTable = () => <SelectableTableExample />;
SelectableTable.storyName = 'Таблица с выбором строк';

export const SelectableTableWithPagination = () => <SelectableTableWithPaginationExample />;
SelectableTableWithPagination.storyName = 'Таблица с выбором строк и пагинацией';

export const SelectableTableWithGroupingHeader = () => <SelectableTableWithGroupingHeaderExample />;
SelectableTableWithGroupingHeader.storyName = 'Таблица с выбором строк и многоуровневой шапкой';

export const SelectableTableWithVirtualization = () => <SelectableTableWithVirtualizationExample />;
SelectableTableWithVirtualization.storyName = 'Таблица с выбором строк и виртуализацией';

export const CommonTableUsage = () => {
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
  }: Omit<TableOptions<T>, 'getCoreRowModel'> & {
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
  }) => {
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
                        title={flexRender(header.column.columnDef.header, header.getContext()) as string}
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

  return <CommonTable<IData> data={defaultData} columns={defaultColumns} />;
};

CommonTableUsage.storyName = 'Реализация компонента таблицы с использованием tanstack';

export const CommonTableWithPaginationAndSortingUsage = () => {
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
  }: Omit<TableOptions<T>, 'getCoreRowModel'> & {
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
  }) => {
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
                        title={flexRender(header.column.columnDef.header, header.getContext()) as string}
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

  const [data, setData] = useState(defaultData);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const handleSortingChange: OnChangeFn<SortingState> = updaterOrValue => {
    setCurrentPageNumber(1);
    setSorting(updaterOrValue);
  };

  const pageCount = Math.ceil(defaultData.length / pageSize);

  const state: Pick<TableState, 'sorting' | 'pagination'> = {
    sorting,
    pagination: {
      pageIndex: currentPageNumber - 1,
      pageSize
    }
  };

  useEffect(() => {
    const { pagination, sorting } = state;
    const { pageIndex, pageSize } = pagination;

    const sortedData = [...defaultData].sort((a, b) => {
      for (const sort of sorting) {
        const comparator = (a: IData, b: IData) => {
          const aValue = a[sort.id as keyof IData] ?? 0;
          const bValue = b[sort.id as keyof IData] ?? 0;
          return sort.desc ? (aValue < bValue ? 1 : -1) : aValue > bValue ? 1 : -1;
        };
        return comparator(a, b);
      }
      return 0;
    });

    const start = pageIndex * pageSize;
    const end = (pageIndex + 1) * pageSize;
    setData(sortedData.slice(start, end));
  }, [currentPageNumber, pageSize, sorting]);

  return (
    <CommonTable<IData>
      stickyHeader
      columns={defaultColumns}
      data={data}
      isLoading={false}
      withPagination
      pagination={{ pageCount, pageSizes: [10, 15] }}
      onPageChange={setCurrentPageNumber}
      onPageSizeChange={setPageSize}
      onSortingChange={handleSortingChange}
      state={state}
    />
  );
};

CommonTableWithPaginationAndSortingUsage.storyName =
  'Реализация компонента таблицы c пагинацией и сортировкой с использованием tanstack';
