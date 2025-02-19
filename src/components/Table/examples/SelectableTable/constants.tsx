import React from 'react';

import { Checkbox } from '@components/index';
import { ECellStatus } from '@components/Table/Cell/types';
import { ColumnDef } from '@tanstack/react-table';

import { ISelectableData } from './types';

import styles from '../Example.module.scss';

export const columns: ColumnDef<ISelectableData>[] = [
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
    size: 56,
    meta: {
      className: ''
    }
  },
  {
    header: 'ID',
    accessorKey: 'id',
    meta: {
      className: styles.notSortable,
      isNumeric: true
    }
  },
  {
    header: 'Name',
    accessorKey: 'name',
    meta: {
      className: styles.notSortable
    }
  },
  {
    header: 'Age',
    accessorKey: 'age',
    meta: {
      className: styles.notSortable,
      isNumeric: true
    }
  },
  {
    header: 'Production Date',
    accessorKey: 'productionDate',
    meta: {
      className: styles.notSortable
    }
  },
  {
    header: 'Status',
    accessorKey: 'status',
    meta: {
      className: styles.notSortable
    }
  }
];

export const data: ISelectableData[] = [
  { id: 1, name: 'Сталь', age: 25, status: ECellStatus.DEFAULT, productionDate: new Date('2023-01-10') },
  { id: 2, name: 'Металл', age: 30, status: ECellStatus.SUCCESS, productionDate: new Date('2023-02-15') },
  { id: 3, name: 'Чугун', age: 40, status: ECellStatus.ERROR, productionDate: new Date('2023-03-20') },
  { id: 4, name: 'Алюминий', age: 22, status: ECellStatus.DEFAULT, productionDate: new Date('2023-04-05') },
  { id: 5, name: 'Медь', age: 35, status: ECellStatus.SUCCESS, productionDate: new Date('2023-05-10') },
  { id: 6, name: 'Титан', age: 28, status: ECellStatus.ERROR, productionDate: new Date('2023-06-18') },
  { id: 7, name: 'Бронза', age: 27, status: ECellStatus.DEFAULT, productionDate: new Date('2023-07-01') },
  { id: 8, name: 'Латунь', age: 32, status: ECellStatus.SUCCESS, productionDate: new Date('2023-08-12') },
  { id: 9, name: 'Никель', age: 38, status: ECellStatus.ERROR, productionDate: new Date('2023-09-15') },
  { id: 10, name: 'Цинк', age: 24, status: ECellStatus.DEFAULT, productionDate: new Date('2023-10-20') },
  { id: 11, name: 'Свинец', age: 29, status: ECellStatus.SUCCESS, productionDate: new Date('2023-11-05') },
  { id: 12, name: 'Олово', age: 33, status: ECellStatus.ERROR, productionDate: new Date('2023-12-15') }
];
