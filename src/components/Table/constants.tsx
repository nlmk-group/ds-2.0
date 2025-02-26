import React from 'react';

import {
  IconEqualsSign24,
  IconExceptionContains24,
  IconFinishingContains24,
  IconGreater24,
  IconGreaterOrEqual24,
  IconLess24,
  IconLessOrEqual24,
  IconNotEqualSign24,
  IconSelectionContains24,
  IconStartingContains24
} from '@components/index';
import { FilterFn, Row } from '@tanstack/react-table';

import { IFilterValue, TData } from './examples/FilteringTable/types';

export const tableFilterOperations = [
  {
    value: 'contains',
    label: 'Содержит',
    icon: <IconSelectionContains24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'not_contains',
    label: 'Не содержит',
    icon: <IconExceptionContains24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'starts_with',
    label: 'Начинается с...',
    icon: <IconStartingContains24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'ends_with',
    label: 'Заканчивается на...',
    icon: <IconFinishingContains24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'equals',
    label: 'Равно',
    icon: <IconEqualsSign24 htmlColor="var(--brand-sapphire-60)" />,
    disabled: true
  },
  {
    value: 'not_equals',
    label: 'Не равно',
    icon: <IconNotEqualSign24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'greater',
    label: 'Больше',
    icon: <IconGreater24 htmlColor="var(--brand-sapphire-60)" />,
    disabled: true
  },
  {
    value: 'greater_or_equal',
    label: 'Больше или равно',
    icon: <IconGreaterOrEqual24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'less',
    label: 'Меньше',
    icon: <IconLess24 htmlColor="var(--brand-sapphire-60)" />
  },
  {
    value: 'less_or_equal',
    label: 'Меньше или равно',
    icon: <IconLessOrEqual24 htmlColor="var(--brand-sapphire-60)" />
  }
];
export const basicFilterFunctions: Record<string, FilterFn<TData>> = {
  contains: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    const cellValue = String(row.getValue(columnId)).toLowerCase();
    return cellValue.includes(String(value.value).toLowerCase());
  },
  not_contains: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    const cellValue = String(row.getValue(columnId)).toLowerCase();
    return !cellValue.includes(String(value.value).toLowerCase());
  },
  starts_with: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    const cellValue = String(row.getValue(columnId)).toLowerCase();
    return cellValue.startsWith(String(value.value).toLowerCase());
  },
  ends_with: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    const cellValue = String(row.getValue(columnId)).toLowerCase();
    return cellValue.endsWith(String(value.value).toLowerCase());
  },
  equals: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    if (columnId === 'lastUpdate') {
      const rowDate = new Date(row.getValue(columnId));
      const filterDate = new Date(value.value);
      return rowDate.toDateString() === filterDate.toDateString();
    }
    return row.getValue(columnId) === value.value;
  },
  not_equals: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    if (columnId === 'lastUpdate') {
      const rowDate = new Date(row.getValue(columnId));
      const filterDate = new Date(value.value);
      return rowDate.toDateString() !== filterDate.toDateString();
    }

    const cellValue = String(row.getValue(columnId)).toLowerCase();
    const filterValue = String(value.value).toLowerCase();
    return cellValue !== filterValue;
  },
  greater: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    if (columnId === 'lastUpdate') {
      const rowDate = new Date(row.getValue(columnId));
      const filterDate = new Date(value.value);
      return rowDate > filterDate;
    }
    const cellValue = Number(row.getValue(columnId));
    return cellValue > Number(value.value);
  },
  greater_or_equal: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    if (columnId === 'lastUpdate') {
      const rowDate = new Date(row.getValue(columnId));
      const filterDate = new Date(value.value);
      return rowDate >= filterDate;
    }
    const cellValue = Number(row.getValue(columnId));
    return cellValue >= Number(value.value);
  },
  less: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    if (columnId === 'lastUpdate') {
      const rowDate = new Date(row.getValue(columnId));
      const filterDate = new Date(value.value);
      return rowDate < filterDate;
    }
    const cellValue = Number(row.getValue(columnId));
    return cellValue < Number(value.value);
  },
  less_or_equal: (row: Row<TData>, columnId: string, value: IFilterValue) => {
    if (columnId === 'lastUpdate') {
      const rowDate = new Date(row.getValue(columnId));
      const filterDate = new Date(value.value);
      return rowDate <= filterDate;
    }
    const cellValue = Number(row.getValue(columnId));
    return cellValue <= Number(value.value);
  }
};

export const tableCustomFilterFn: FilterFn<TData> = (row, columnId, filterValue, addMeta) => {
  if (!filterValue) return true;
  const { type, value } = filterValue as IFilterValue;
  if (!value) return true;
  return basicFilterFunctions[type](row, columnId, { type, value }, addMeta);
};
