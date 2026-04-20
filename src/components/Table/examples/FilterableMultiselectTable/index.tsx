import React, { useMemo, useState } from 'react';

import { Cell, Filter, Row, Table, Tbody, Thead, Top } from '@components/index';
import { IconMultipleChoice24 } from '@components/Icon/IconsDirectory';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table';

import { TData } from '../FilteringTable/types';

import styles from '../Example.module.scss';

import { getCellProps } from '../utils';
import { data as sharedData } from '../FilteringTable/constants';

const multiselectFilterOperations = [
  {
    value: 'one_of',
    label: 'Один из',
    icon: <IconMultipleChoice24 />
  }
];

const oneOfFilterFn: FilterFn<TData> = (row, columnId, filterValue) => {
  const values = filterValue as string[] | undefined;
  if (!values || values.length === 0) return true;
  return values.includes(String(row.getValue(columnId)));
};

const multiselectColumns: Array<ColumnDef<TData, any>> = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: info => info.getValue(),
    size: 100,
    enableColumnFilter: false,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'name',
    header: 'Название',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    filterFn: oneOfFilterFn
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    filterFn: oneOfFilterFn
  },
  {
    accessorKey: 'category',
    header: 'Категория',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    filterFn: oneOfFilterFn
  },
  {
    accessorKey: 'supplier',
    header: 'Поставщик',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    filterFn: oneOfFilterFn
  }
];

const FilterableMultiselectTableExample = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: sharedData,
    columns: multiselectColumns,
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    defaultColumn: {
      minSize: 160,
      maxSize: 600,
      size: 200
    }
  });

  const uniqueValuesByColumn = useMemo(() => {
    const cache: Record<string, { value: string; label: string }[]> = {};
    multiselectColumns.forEach(col => {
      if (!col.enableColumnFilter) return;
      const columnId = (col as { accessorKey?: string }).accessorKey;
      if (!columnId) return;
      const unique = new Set<string>();
      sharedData.forEach(row => {
        const value = row[columnId as keyof TData];
        if (value !== undefined && value !== null) {
          unique.add(String(value));
        }
      });
      cache[columnId] = Array.from(unique)
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .map(value => ({ value, label: value }));
    });
    return cache;
  }, []);

  return (
    <div className={styles.tableContainer}>
      <Table horizontalBorders verticalBorders style={{ tableLayout: 'fixed', width: table.getCenterTotalSize() }}>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                const selectedValues = (header.column.getFilterValue() as string[] | undefined) ?? [];
                const canFilter = header.column.getCanFilter();
                const columnId = header.column.id;

                return (
                  <Top
                    key={header.id}
                    style={{ width: header.getSize() }}
                    filtered={selectedValues.length > 0}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
                    right={header.column.columnDef.meta?.isNumeric && index !== 0}
                  >
                    {canFilter && (
                      <Filter
                        mode="multiselect"
                        filterTypeOptions={multiselectFilterOperations}
                        filterValueOptions={uniqueValuesByColumn[columnId] ?? []}
                        selectedValues={selectedValues}
                        onSelectedValuesChange={next => {
                          header.column.setFilterValue(next.length ? next : undefined);
                        }}
                        placeholder="Фильтр"
                        withPortal={false}
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
              {row.getVisibleCells().map((cell, index) => (
                <Cell
                  key={cell.id}
                  style={{ width: cell.column.getSize() }}
                  align={index === 0 ? 'left' : undefined}
                  {...getCellProps(cell)}
                />
              ))}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default FilterableMultiselectTableExample;
