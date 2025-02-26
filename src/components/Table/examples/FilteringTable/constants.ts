import { tableCustomFilterFn } from '@components/Table/constants';
import { ColumnDef } from '@tanstack/react-table';

import { TData } from './types';

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

export const columns: Array<ColumnDef<TData, any>> = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: info => info.getValue(),
    size: 200,
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: tableCustomFilterFn,
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
    filterFn: tableCustomFilterFn
  },
  {
    accessorKey: 'amount',
    header: 'Количество',
    cell: ({ getValue }) => getValue<number>().toLocaleString(),
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: tableCustomFilterFn,
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
    filterFn: tableCustomFilterFn
  },
  {
    accessorKey: 'category',
    header: 'Категория',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: tableCustomFilterFn
  },
  {
    accessorKey: 'price',
    header: 'Цена',
    cell: ({ getValue }) => `${getValue<number>().toLocaleString()} ₽`,
    enableColumnFilter: true,
    filterFn: tableCustomFilterFn,
    meta: {
      isNumeric: true
    }
  },
  {
    accessorKey: 'lastUpdate',
    header: 'Последнее обновление',
    cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString(),
    enableColumnFilter: true,
    filterFn: tableCustomFilterFn
  },
  {
    accessorKey: 'supplier',
    header: 'Поставщик',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    filterFn: tableCustomFilterFn
  },
  {
    accessorKey: 'quality',
    header: 'Качество',
    cell: ({ getValue }) => `${getValue<number>()}%`,
    enableColumnFilter: true,
    filterFn: tableCustomFilterFn,
    meta: {
      isNumeric: true
    }
  }
];
