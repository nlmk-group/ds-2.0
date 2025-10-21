import React from 'react';

import { Input, OptionItem, SimpleSelect } from '@components/index';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

export type EditableRow = {
  id: string;
  product: string;
  quantity: number;
  price: number;
  status: 'active' | 'pending' | 'completed';
  notes: string;
};

export const statusOptions = [
  { value: 'active', label: 'Активный' },
  { value: 'pending', label: 'В ожидании' },
  { value: 'completed', label: 'Завершен' }
];

const columnHelper = createColumnHelper<EditableRow>();

export const createColumns = (
  onCellChange: (rowId: string, columnId: string, value: any) => void
): ColumnDef<EditableRow, any>[] => [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
    size: 80,
    enableSorting: false,
    meta: {
      title: 'Идентификатор'
    }
  }),
  columnHelper.accessor('product', {
    header: 'Товар',
    cell: info => {
      const rowId = info.row.original.id;
      const value = info.getValue();

      return (
        <Input
          value={value}
          onChange={(e: any) => onCellChange(rowId, 'product', e.target.value)}
          size="s"
          style={{ width: '100%' }}
        />
      );
    },
    size: 200,
    meta: {
      title: 'Название товара',
      isEditable: true
    }
  }),
  columnHelper.accessor('quantity', {
    header: 'Количество',
    cell: info => {
      const rowId = info.row.original.id;
      const value = info.getValue();

      return (
        <Input
          type="number"
          value={value.toString()}
          onChange={(e: any) => {
            onCellChange(rowId, 'quantity', parseInt(e.target.value) || 0);
          }}
          size="s"
          style={{ width: '100%' }}
        />
      );
    },
    size: 120,
    meta: {
      title: 'Количество единиц',
      isNumeric: true,
      isEditable: true
    }
  }),
  columnHelper.accessor('price', {
    header: 'Цена',
    cell: info => {
      const rowId = info.row.original.id;
      const value = info.getValue();

      return (
        <Input
          type="number"
          value={value.toString()}
          onChange={(e: any) => onCellChange(rowId, 'price', parseFloat(e.target.value) || 0)}
          size="s"
          style={{ width: '100%' }}
        />
      );
    },
    size: 120,
    meta: {
      title: 'Цена за единицу',
      isNumeric: true,
      isEditable: true
    }
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: info => {
      const rowId = info.row.original.id;
      const value = info.getValue();

      return (
        <SimpleSelect
          value={value}
          onChange={(newValue: string | number) => onCellChange(rowId, 'status', newValue)}
          size="s"
          style={{ width: '100%' }}
        >
          {statusOptions.map(option => (
            <OptionItem key={option.value} value={option.value} label={option.label}>
              {option.label}
            </OptionItem>
          ))}
        </SimpleSelect>
      );
    },
    size: 150,
    meta: {
      title: 'Статус заказа',
      isEditable: true
    }
  }),
  columnHelper.accessor('notes', {
    header: 'Примечания',
    cell: info => {
      const rowId = info.row.original.id;
      const value = info.getValue();

      return (
        <Input
          value={value}
          onChange={(e: any) => onCellChange(rowId, 'notes', e.target.value)}
          size="s"
          style={{ width: '100%' }}
          placeholder="Добавить примечание..."
        />
      );
    },
    size: 250,
    meta: {
      title: 'Дополнительная информация',
      isEditable: true
    }
  }),
  columnHelper.display({
    id: 'total',
    header: 'Сумма (₽)',
    cell: info => {
      const quantity = info.row.original.quantity;
      const price = info.row.original.price;
      const total = quantity * price;

      return total;
    },
    size: 120,
    meta: {
      title: 'Общая сумма',
      isNumeric: true
    }
  })
];

export const initialData: EditableRow[] = [
  {
    id: '1',
    product: 'Арматура А500С 12мм',
    quantity: 15,
    price: 52000,
    status: 'active',
    notes: 'Срочная доставка на объект'
  },
  {
    id: '2',
    product: 'Лист холоднокатаный 1.5мм',
    quantity: 8,
    price: 65000,
    status: 'pending',
    notes: ''
  },
  {
    id: '3',
    product: 'Труба бесшовная 159x8мм',
    quantity: 20,
    price: 78000,
    status: 'active',
    notes: 'Требуется сертификат качества'
  },
  {
    id: '4',
    product: 'Балка двутавровая №20',
    quantity: 12,
    price: 58000,
    status: 'completed',
    notes: 'Отгружено со склада А'
  },
  {
    id: '5',
    product: 'Уголок 50x50x5мм',
    quantity: 25,
    price: 54000,
    status: 'active',
    notes: ''
  }
];
