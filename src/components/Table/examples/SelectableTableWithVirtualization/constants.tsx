import React from 'react';

import { Checkbox } from '@components/index';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { ISelectionWithVirtualization } from './types';

const rawMaterials = ['Никель', 'Олово', 'Медь', 'Цинк', 'Алюминий', 'Железо'];

const enterpriseNames = ['Алтай', 'СГОК', 'Стагдок', 'Атриум', 'Пилигрим', 'МелТЭК'];

export const data: ISelectionWithVirtualization[] = Array.from({ length: 1000 }, (_, i) => {
  const name = rawMaterials[Math.floor(Math.random() * rawMaterials.length)];
  const enterprise = enterpriseNames[Math.floor(Math.random() * enterpriseNames.length)];
  const plan = Math.floor(Math.random() * 1000) + 100; // Планы от 100 до 1000
  const date = new Date(Date.now() + i * 3600_000)

  return {
    id: i + 1,
    name,
    plan,
    date,
    enterprise
  };
});

const columnHelper = createColumnHelper<ISelectionWithVirtualization>();

export const columns: ColumnDef<ISelectionWithVirtualization>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected() || table.getIsSomeRowsSelected()}
        multiple={table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      </div>
    ),
    size: 56
  },
  columnHelper.accessor('name', {
    header: 'Название сырья',
    size: 180
  }),
  columnHelper.accessor('plan', {
    header: 'Плановый объем',
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor('date', {
    header: 'Сроки поставки',
    cell: info => info.getValue<Date>().toLocaleString(),
    size: 180
  }),
  columnHelper.accessor('enterprise', {
    header: 'Предприятие'
  })
] as ColumnDef<ISelectionWithVirtualization>[];
