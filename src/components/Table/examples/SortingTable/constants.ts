import { ECellStatus } from '@components/Table/Cell/types';
import { ColumnDef } from '@tanstack/react-table';

import { ISortingData } from './types';

export const columns: ColumnDef<ISortingData>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    enableSorting: true,
    meta: {
      isNumeric: true
    }
  },
  {
    header: 'Name',
    accessorKey: 'name',
    enableSorting: true
  },
  {
    header: 'Age',
    accessorKey: 'age',
    enableSorting: true,
    meta: {
      isNumeric: true
    }
  },
  {
    header: 'Production Date',
    accessorKey: 'productionDate',
    enableSorting: true,
    cell: info => {
      const date = info.getValue<Date>();
      return date.toLocaleDateString();
    }
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableSorting: false
  }
];

export const data: ISortingData[] = [
  { id: 1, name: 'Сталь', age: 25, status: ECellStatus.DEFAULT, productionDate: new Date('2023-01-10') },
  { id: 2, name: 'Металл', age: 30, status: ECellStatus.SUCCESS, productionDate: new Date('2023-02-15') },
  { id: 3, name: 'Чугун', age: 40, status: ECellStatus.ERROR, productionDate: new Date('2023-03-20') },
  { id: 4, name: 'Сталь', age: 22, status: ECellStatus.DEFAULT, productionDate: new Date('2023-04-05') },
  { id: 5, name: 'Металл', age: 35, status: ECellStatus.SUCCESS, productionDate: new Date('2023-05-10') },
  { id: 6, name: 'Чугун', age: 28, status: ECellStatus.ERROR, productionDate: new Date('2023-06-18') },
  { id: 7, name: 'Сталь', age: 27, status: ECellStatus.DEFAULT, productionDate: new Date('2023-07-01') },
  { id: 8, name: 'Металл', age: 32, status: ECellStatus.SUCCESS, productionDate: new Date('2023-08-12') },
  { id: 9, name: 'Чугун', age: 38, status: ECellStatus.ERROR, productionDate: new Date('2023-09-15') },
  { id: 10, name: 'Сталь', age: 24, status: ECellStatus.DEFAULT, productionDate: new Date('2023-10-20') },
  { id: 11, name: 'Алюминий', age: 29, status: ECellStatus.SUCCESS, productionDate: new Date('2023-11-05') },
  { id: 12, name: 'Медь', age: 33, status: ECellStatus.ERROR, productionDate: new Date('2023-12-15') },
  { id: 13, name: 'Титан', age: 45, status: ECellStatus.DEFAULT, productionDate: new Date('2024-01-03') },
  { id: 14, name: 'Бронза', age: 31, status: ECellStatus.SUCCESS, productionDate: new Date('2024-01-18') },
  { id: 15, name: 'Латунь', age: 36, status: ECellStatus.ERROR, productionDate: new Date('2024-02-01') },
  { id: 16, name: 'Никель', age: 26, status: ECellStatus.DEFAULT, productionDate: new Date('2024-02-14') },
  { id: 17, name: 'Цинк', age: 42, status: ECellStatus.SUCCESS, productionDate: new Date('2024-02-28') },
  { id: 18, name: 'Свинец', age: 34, status: ECellStatus.ERROR, productionDate: new Date('2024-03-10') },
  { id: 19, name: 'Олово', age: 37, status: ECellStatus.DEFAULT, productionDate: new Date('2024-03-22') },
  { id: 20, name: 'Хром', age: 28, status: ECellStatus.SUCCESS, productionDate: new Date('2024-04-05') },
  { id: 21, name: 'Вольфрам', age: 39, status: ECellStatus.ERROR, productionDate: new Date('2024-04-18') },
  { id: 22, name: 'Молибден', age: 41, status: ECellStatus.DEFAULT, productionDate: new Date('2024-05-01') },
  { id: 23, name: 'Платина', age: 44, status: ECellStatus.SUCCESS, productionDate: new Date('2024-05-15') },
  { id: 24, name: 'Палладий', age: 30, status: ECellStatus.ERROR, productionDate: new Date('2024-05-28') },
  { id: 25, name: 'Серебро', age: 23, status: ECellStatus.DEFAULT, productionDate: new Date('2024-06-10') }
];
