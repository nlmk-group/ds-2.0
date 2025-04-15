import React, { SetStateAction, useEffect, useState } from 'react';

import { Cell, Pagination, Row, Spinner, Tbody, Thead, Top } from '@components/index';
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
import cn from 'classnames';

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
  SortableTableExample,
  TableWithStickyHeader,
  TableWithTanStackExample,
  VirtualizedTableWithDynamicRowHeightExample,
  VirtualizedTableWithHorizontalVirtualizationExample
} from '../examples';
import { defaultColumns, defaultData } from '../examples/constants';

import Table from '../Table';

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
    pageCount,
    pageSizes = [10, 20, 50],
    size = 's',
    stickyHeader = true
  }: Omit<TableOptions<T>, 'getCoreRowModel'> & {
    data: T[];
    columns: ColumnDef<T>[];
    isLoading?: boolean;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    pageSizes?: number[];
    pageCount?: number;
    size?: 'xs' | 'm' | 's';
    stickyHeader?: boolean;
  }) => {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      onSortingChange,
      state,
      pageCount: pageCount
    });

    const pagination = table.getState().pagination;

    const handleChangeCurrentPage = (value: SetStateAction<number>) =>
      onPageChange?.(typeof value === 'function' ? value(pagination.pageIndex + 1) : value);

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
        <div className="h-full overflow-auto">
          {isLoading ? (
            <div className="flex h-full w-full items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <Table>
              <Thead className={cn({ 'sticky top-0 z-10': stickyHeader })}>
                {table.getHeaderGroups().map(headerGroup => (
                  <Row key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <Top
                        align="left"
                        className="!border-x-0"
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
                      <Cell
                        align="right"
                        className="text-steel-90 tabular-nums cell-body1-table-medium"
                        key={cell.id}
                        size={size}
                        width={cell.column.getSize()}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Cell>
                    ))}
                  </Row>
                ))}
              </Tbody>
            </Table>
          )}
        </div>
        {state && Boolean(tablePageCount) && (
          <Pagination
            currentPage={pagination.pageIndex + 1}
            elementsPerPage={pagination.pageSize}
            maxPageCount={tablePageCount}
            pageSizes={pageSizes}
            setCurrentPage={handleChangeCurrentPage}
            setElementsPerPage={handleChangeElementsPerPage}
            withSelect
          />
        )}
      </>
    );
  };

  const [data, setData] = useState(defaultData)
  const [sorting, setSorting] = useState<SortingState>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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
    const { pageIndex, pageSize } = state.pagination ?? {}
    const start = pageIndex * pageSize
    const end = (pageIndex + 1) * pageSize
    setData(defaultData.slice(start, end))
  }, [currentPageNumber, pageSize])

  return (
    <CommonTable<IData>
      columns={defaultColumns}
      data={data}
      isLoading={false}
      onPageChange={setCurrentPageNumber}
      onPageSizeChange={setPageSize}
      onSortingChange={handleSortingChange}
      pageCount={pageCount}
      state={state}
    />
  );
};

CommonTableUsage.storyName = 'Реализация компонента таблицы c пагинацией и сортировкой с использованием tanstack';
