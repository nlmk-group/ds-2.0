import React from 'react';

import { Checkbox } from '@components/index';
import { ECellStatus } from '@components/Table/Cell/types';
import { ColumnDef } from '@tanstack/react-table';

import { ISelectionWithPagination } from './types';

import styles from '../Example.module.scss';

export const columns: ColumnDef<ISelectionWithPagination>[] = [
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
    size: 80,
    meta: {
      className: styles.notSortable,
      isNumeric: true
    }
  },
  {
    header: 'Наименование руды',
    accessorKey: 'name',
    size: 200,
    meta: {
      className: styles.notSortable
    }
  },
  {
    header: 'Тип',
    accessorKey: 'category',
    size: 150,
    meta: {
      className: styles.notSortable
    }
  },
  {
    header: 'Содержание Fe, %',
    accessorKey: 'ironContent',
    cell: info => `${Number(info.getValue<number>()).toFixed(1)}%`,
    size: 250,
    meta: {
      className: styles.notSortable,
      isNumeric: true
    }
  },
  {
    header: 'Статус добычи',
    accessorKey: 'status',
    size: 250,
    meta: {
      className: styles.notSortable
    }
  },
  {
    header: 'Дата анализа',
    accessorKey: 'lastUpdated',
    cell: info =>
      info.getValue<Date>().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
    size: 180,
    meta: {
      className: styles.notSortable
    }
  }
];

export const data: ISelectionWithPagination[] = [
  {
    id: 1,
    name: 'Магнетитовая руда',
    category: 'Магнетитовые',
    ironContent: 65,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-02-15')
  },
  {
    id: 2,
    name: 'Гематитовая руда',
    category: 'Гематитовые',
    ironContent: 58,
    status: ECellStatus.DEFAULT,
    lastUpdated: new Date('2024-02-14')
  },
  {
    id: 3,
    name: 'Сидеритовая руда',
    category: 'Карбонатные',
    ironContent: 35,
    status: ECellStatus.ERROR,
    lastUpdated: new Date('2024-02-13')
  },
  {
    id: 4,
    name: 'Лимонитовая руда',
    category: 'Бурые железняки',
    ironContent: 55,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-02-12')
  },
  {
    id: 5,
    name: 'Титаномагнетит',
    category: 'Комплексные',
    ironContent: 50,
    status: ECellStatus.DEFAULT,
    lastUpdated: new Date('2024-02-11')
  },
  {
    id: 6,
    name: 'Мартитовая руда',
    category: 'Магнетитовые',
    ironContent: 63,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-02-10')
  },
  {
    id: 7,
    name: 'Гётитовая руда',
    category: 'Бурые железняки',
    ironContent: 48,
    status: ECellStatus.ERROR,
    lastUpdated: new Date('2024-02-09')
  },
  {
    id: 8,
    name: 'Железистые кварциты',
    category: 'Метаморфические',
    ironContent: 40,
    status: ECellStatus.DEFAULT,
    lastUpdated: new Date('2024-02-08')
  },
  {
    id: 9,
    name: 'Магномагнетит',
    category: 'Комплексные',
    ironContent: 52,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-02-07')
  },
  {
    id: 10,
    name: 'Красный железняк',
    category: 'Гематитовые',
    ironContent: 60,
    status: ECellStatus.DEFAULT,
    lastUpdated: new Date('2024-02-06')
  },
  {
    id: 11,
    name: 'Бурый железняк',
    category: 'Бурые железняки',
    ironContent: 45,
    status: ECellStatus.ERROR,
    lastUpdated: new Date('2024-02-05')
  },
  {
    id: 12,
    name: 'Шпатовый железняк',
    category: 'Карбонатные',
    ironContent: 38,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-02-04')
  },

  // -- восемь новых элементов:
  {
    id: 13,
    name: 'Богословская руда',
    category: 'Гематитовые',
    ironContent: 62,
    status: ECellStatus.WARNING,
    lastUpdated: new Date('2024-02-03')
  },
  {
    id: 14,
    name: 'Оолитовый железняк',
    category: 'Бурые железняки',
    ironContent: 42,
    status: ECellStatus.WARNING,
    lastUpdated: new Date('2024-02-02')
  },
  {
    id: 15,
    name: 'Текитовая руда',
    category: 'Метаморфические',
    ironContent: 54,
    status: ECellStatus.ERROR,
    lastUpdated: new Date('2024-02-01')
  },
  {
    id: 16,
    name: 'Элменитовая руда',
    category: 'Комплексные',
    ironContent: 47,
    status: ECellStatus.DEFAULT,
    lastUpdated: new Date('2024-01-31')
  },
  {
    id: 17,
    name: 'Хромистый железняк',
    category: 'Комплексные',
    ironContent: 58,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-01-30')
  },
  {
    id: 18,
    name: 'Гематитовый песчаник',
    category: 'Гематитовые',
    ironContent: 61,
    status: ECellStatus.WARNING,
    lastUpdated: new Date('2024-01-29')
  },
  {
    id: 19,
    name: 'Сидеритовый сланец',
    category: 'Карбонатные',
    ironContent: 36,
    status: ECellStatus.ERROR,
    lastUpdated: new Date('2024-01-28')
  },
  {
    id: 20,
    name: 'Железная штейн',
    category: 'Магнетитовые',
    ironContent: 64,
    status: ECellStatus.SUCCESS,
    lastUpdated: new Date('2024-01-27')
  }
];
