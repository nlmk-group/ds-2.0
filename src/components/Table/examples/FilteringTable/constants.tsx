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
import { ColumnDef, FilterFn, Row } from '@tanstack/react-table';

import { IFilterValue, TData } from './types';

export const generateData = (count: number) => {
  const statuses = ['В наличии', 'Заканчивается', 'Нет в наличии', 'Под заказ'];
  const categories = ['Металлы', 'Сплавы', 'Драгоценные металлы', 'Редкие металлы'];
  const materials = [
    'Сталь',
    'Медь',
    'Алюминий',
    'Титан',
    'Золото',
    'Серебро',
    'Платина',
    'Никель',
    'Цинк',
    'Свинец',
    'Олово',
    'Хром',
    'Вольфрам',
    'Молибден'
  ];
  const today = new Date();
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: materials[Math.floor(Math.random() * materials.length)],
    amount: Math.floor(Math.random() * 1000) + 1,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    price: Math.floor(Math.random() * 10000) + 100,
    lastUpdate: new Date(thirtyDaysAgo.getTime() + Math.random() * (today.getTime() - thirtyDaysAgo.getTime())),
    supplier: `Поставщик ${Math.floor(Math.random() * 20) + 1}`,
    quality: Math.floor(Math.random() * 100) + 1
  }));
};

export const data: TData[] = generateData(100);

export const dropdownOptions = [
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

export const filterFunctions: Record<string, FilterFn<TData>> = {
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

const customFilterFn: FilterFn<TData> = (row, columnId, filterValue, addMeta) => {
  if (!filterValue) return true;
  const { type, value } = filterValue as IFilterValue;
  if (!value) return true;
  return filterFunctions[type](row, columnId, { type, value }, addMeta);
};

export const columns: Array<ColumnDef<TData, any>> = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: info => info.getValue(),
    size: 200,
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: customFilterFn,
    meta: {
      isNumeric: true
    }
  },
  {
    accessorKey: 'name',
    header: 'Название',
    cell: info => info.getValue(),
    enableColumnFilter: false,
    enableSorting: false,
    filterFn: customFilterFn
  },
  {
    accessorKey: 'amount',
    header: 'Количество',
    cell: ({ getValue }) => getValue<number>().toLocaleString(),
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: customFilterFn,
    meta: {
      isNumeric: true
    }
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: customFilterFn
  },
  {
    accessorKey: 'category',
    header: 'Категория',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: customFilterFn
  },
  {
    accessorKey: 'price',
    header: 'Цена',
    cell: ({ getValue }) => `${getValue<number>().toLocaleString()} ₽`,
    enableColumnFilter: true,
    filterFn: customFilterFn,
    meta: {
      isNumeric: true
    }
  },
  {
    accessorKey: 'lastUpdate',
    header: 'Последнее обновление',
    cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString(),
    enableColumnFilter: true,
    filterFn: customFilterFn
  },
  {
    accessorKey: 'supplier',
    header: 'Поставщик',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    filterFn: customFilterFn
  },
  {
    accessorKey: 'quality',
    header: 'Качество',
    cell: ({ getValue }) => `${getValue<number>()}%`,
    enableColumnFilter: true,
    filterFn: customFilterFn,
    meta: {
      isNumeric: true
    }
  }
];
