import { ColumnDef } from '@tanstack/react-table';

import { IData } from './types';

import { ECellStatus } from '../Cell/types';

export const defaultData: IData[] = [
  { id: 1, name: 'Сталь', age: 25, status: ECellStatus.DEFAULT },
  { id: 2, name: 'Металл', age: 30, status: ECellStatus.SUCCESS },
  { id: 3, name: 'Чугун', age: 40, status: ECellStatus.ERROR },
  { id: 4, name: 'Сталь', age: 25, status: ECellStatus.DEFAULT },
  { id: 5, name: 'Металл', age: 30, status: ECellStatus.SUCCESS },
  { id: 6, name: 'Чугун', age: 40, status: ECellStatus.ERROR },
  { id: 7, name: 'Алюминий', age: 28, status: ECellStatus.DEFAULT },
  { id: 8, name: 'Медь', age: 35, status: ECellStatus.SUCCESS },
  { id: 9, name: 'Титан', age: 45, status: ECellStatus.ERROR },
  { id: 10, name: 'Бронза', age: 32, status: ECellStatus.DEFAULT },
  { id: 11, name: 'Латунь', age: 38, status: ECellStatus.SUCCESS },
  { id: 12, name: 'Никель', age: 27, status: ECellStatus.ERROR },
  { id: 13, name: 'Цинк', age: 42, status: ECellStatus.DEFAULT },
  { id: 14, name: 'Свинец', age: 33, status: ECellStatus.SUCCESS },
  { id: 15, name: 'Олово', age: 36, status: ECellStatus.ERROR },
  { id: 16, name: 'Хром', age: 29, status: ECellStatus.DEFAULT }
];

export const defaultColumns: ColumnDef<IData>[] = [
  { header: 'ID', accessorKey: 'id', meta: { isNumeric: true } },
  { header: 'Name', accessorKey: 'name' },
  { header: 'Age', accessorKey: 'age', meta: { isNumeric: true } },
  { header: 'Status', accessorKey: 'status' }
];
