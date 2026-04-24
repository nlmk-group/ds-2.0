import { ColumnDef } from '@tanstack/react-table';

import { IOperationRow } from './types';

export const initialData: IOperationRow[] = [
  { id: 'op-1', step: 1, operation: 'Заготовка', shop: 'ЦЗ-1', equipment: 'Пресс-500', normTime: 15 },
  { id: 'op-2', step: 2, operation: 'Резка', shop: 'ЦЗ-1', equipment: 'Пила МП-4', normTime: 8 },
  { id: 'op-3', step: 3, operation: 'Сварка', shop: 'ЦСМ-2', equipment: 'Робот-А12', normTime: 22 },
  { id: 'op-4', step: 4, operation: 'Шлифовка', shop: 'ЦСМ-2', equipment: 'Станок ШС-10', normTime: 12 },
  { id: 'op-5', step: 5, operation: 'Контроль ОТК', shop: 'ОТК', equipment: '—', normTime: 5 },
  { id: 'op-6', step: 6, operation: 'Упаковка', shop: 'ЦУО', equipment: 'Линия УЛ-3', normTime: 6 }
];

export const columns: ColumnDef<IOperationRow>[] = [
  { accessorKey: 'step', header: '№', size: 80 },
  { accessorKey: 'operation', header: 'Операция', size: 200 },
  { accessorKey: 'shop', header: 'Цех', size: 120 },
  { accessorKey: 'equipment', header: 'Оборудование', size: 200 },
  { accessorKey: 'normTime', header: 'Норма, мин', size: 120, meta: { isNumeric: true } }
];
