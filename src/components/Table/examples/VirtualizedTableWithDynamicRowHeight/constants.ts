import { ColumnDef } from '@tanstack/react-table';

import { IVirtualizedData } from './types';

export const columns: ColumnDef<IVirtualizedData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 60,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'firstName',
    header: 'Имя'
  },
  {
    accessorKey: 'lastName',
    header: 'Фамилия'
  },
  {
    accessorKey: 'age',
    header: 'Возраст',
    size: 88,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'visits',
    header: 'Визиты',
    size: 88,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'status',
    header: 'Статус'
  },
  {
    accessorKey: 'progress',
    header: 'Прогресс, %',
    size: 112,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'createdAt',
    header: 'Дата создания',
    cell: info => info.getValue<Date>().toLocaleString(),
    size: 180
  }
];

export const data: IVirtualizedData[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  firstName: ['Анна', 'Иван', 'Мария', 'Алексей'][i % 4],
  lastName: ['Волкова', 'Орлов', 'Соколова', 'Морозов'][i % 4],
  age: 20 + (i % 40),
  visits: (i * 37) % 1000,
  status: i % 3 === 0 ? 'На проверке' : 'Подтверждён',
  progress: i % 100,
  createdAt: new Date(Date.now() - i * 3600_000)
}));
