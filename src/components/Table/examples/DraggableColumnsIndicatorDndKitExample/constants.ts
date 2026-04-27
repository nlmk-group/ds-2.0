import { ColumnDef } from '@tanstack/react-table';

export interface IShiftRow {
  id: string;
  shift: string;
  brigade: string;
  planOutput: number;
  factOutput: number;
  downtime: number;
  rejects: number;
}

export const initialData: IShiftRow[] = [
  { id: 's-1', shift: '1-я', brigade: 'Бригада №3', planOutput: 180, factOutput: 174, downtime: 12, rejects: 2 },
  { id: 's-2', shift: '2-я', brigade: 'Бригада №1', planOutput: 180, factOutput: 182, downtime: 5, rejects: 1 },
  { id: 's-3', shift: '3-я', brigade: 'Бригада №2', planOutput: 180, factOutput: 165, downtime: 30, rejects: 4 },
  { id: 's-4', shift: '1-я', brigade: 'Бригада №4', planOutput: 180, factOutput: 180, downtime: 8, rejects: 0 }
];

export const initialColumns: ColumnDef<IShiftRow>[] = [
  { id: 'shift', accessorKey: 'shift', header: 'Смена', size: 120 },
  { id: 'brigade', accessorKey: 'brigade', header: 'Бригада', size: 180 },
  { id: 'planOutput', accessorKey: 'planOutput', header: 'План, т', size: 120, meta: { isNumeric: true } },
  { id: 'factOutput', accessorKey: 'factOutput', header: 'Факт, т', size: 120, meta: { isNumeric: true } },
  { id: 'downtime', accessorKey: 'downtime', header: 'Простой, мин', size: 140, meta: { isNumeric: true } },
  { id: 'rejects', accessorKey: 'rejects', header: 'Брак ОТК, т', size: 140, meta: { isNumeric: true } }
];
