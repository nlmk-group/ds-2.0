import React from 'react';

import { Checkbox } from '@components/index';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { ISelectionWithVirtualization } from './types';

const rawMaterials = ['Никель', 'Олово', 'Медь', 'Цинк', 'Алюминий', 'Железо'];

const enterpriseNames = ['Алтай', 'СГОК', 'Стагдок', 'Атриум', 'Пилигрим', 'МелТЭК'];

export const data: ISelectionWithVirtualization[] = Array.from({ length: 1000 }, (_, i) => {
  const name = rawMaterials[i % rawMaterials.length];
  const enterprise = enterpriseNames[(i + Math.floor(i / rawMaterials.length)) % enterpriseNames.length];
  const plan = 100 + ((i * 37) % 901);
  const date = new Date(2026, 10, 1 + (i % 30));

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
        aria-label="Выбрать все поставки"
        checked={table.getIsAllRowsSelected() || table.getIsSomeRowsSelected()}
        multiple={table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Checkbox
          aria-label={`Выбрать поставку №${row.original.id}`}
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
    header: 'План, т',
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor('date', {
    header: 'Дата поставки',
    cell: info => info.getValue<Date>().toLocaleString(),
    size: 180
  }),
  columnHelper.accessor('enterprise', {
    header: 'Предприятие'
  })
] as ColumnDef<ISelectionWithVirtualization>[];
