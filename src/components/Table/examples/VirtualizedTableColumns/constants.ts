import { ColumnDef } from '@tanstack/react-table';

import { IVirtualizedData } from '../VirtualizedTableWithDynamicRowHeight/types';

const baseColumns: ColumnDef<IVirtualizedData>[] = [
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

const createColumn = (index: number): ColumnDef<IVirtualizedData> => ({
  accessorKey: `column${index}`,
  header: `Column ${index}`,
  size: 100,
  cell: info => `Value ${index}-${info.row.index}`
});

export const columns: ColumnDef<IVirtualizedData>[] = [
  ...baseColumns,
  ...Array.from({ length: 992 }, (_, index) => createColumn(index + 9))
];

export const data: IVirtualizedData[] = Array.from({ length: 12 }, (_, i) => {
  const row: any = {
    id: i + 1,
    firstName: 'Name ' + (i + 1),
    lastName: 'Last ' + (i + 1),
    age: 20 + (i % 40),
    visits: Math.floor(Math.random() * 1000),
    status: i % 3 === 0 ? 'error' : 'ok',
    progress: i % 100,
    createdAt: new Date(Date.now() - i * 3600_000)
  };

  for (let j = 8; j <= 1000; j++) {
    row[`column${j}`] = `Value ${j}-${i}`;
  }

  return row;
});
