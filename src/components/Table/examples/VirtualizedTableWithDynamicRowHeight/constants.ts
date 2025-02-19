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
    header: 'First Name'
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name'
  },
  {
    accessorKey: 'age',
    header: 'Age',
    size: 50,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    size: 50,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    size: 80,
    meta: { isNumeric: true }
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: info => info.getValue<Date>().toLocaleString(),
    size: 180
  }
];

export const data: IVirtualizedData[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  firstName: 'Name ' + (i + 1),
  lastName: 'Last ' + (i + 1),
  age: 20 + (i % 40),
  visits: Math.floor(Math.random() * 1000),
  status: i % 3 === 0 ? 'error' : 'ok',
  progress: i % 100,
  createdAt: new Date(Date.now() - i * 3600_000)
}));
