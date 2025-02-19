import { ECellStatus } from '@components/Table/Cell/types';
import { ColumnDef } from '@tanstack/react-table';
import { createColumnHelper } from '@tanstack/react-table';

import { IGroupWithResizeData } from './types';

export const data: IGroupWithResizeData[] = [
  {
    id: 1,
    plantName: 'СтальПром',
    steel: 12500,
    iron: 11000,
    efficiency: 92,
    status: ECellStatus.SUCCESS
  },
  {
    id: 2,
    plantName: 'МеталлКомбинат',
    steel: 13200,
    iron: 12100,
    efficiency: 88,
    status: ECellStatus.WARNING
  },
  {
    id: 3,
    plantName: 'УралМеталл',
    steel: 11800,
    iron: 10500,
    efficiency: 95,
    status: ECellStatus.SUCCESS
  },
  {
    id: 4,
    plantName: 'ВостокСталь',
    steel: 8900,
    iron: 7800,
    efficiency: 85,
    status: ECellStatus.WARNING
  },
  {
    id: 5,
    plantName: 'МетПромКомплекс',
    steel: 7500,
    iron: 6900,
    efficiency: 78,
    status: ECellStatus.ERROR
  }
];

const columnHelper = createColumnHelper<IGroupWithResizeData>();

export const columns = [
  columnHelper.accessor('id', {
    header: '№',
    size: 80,
    meta: {
      rowSpan: 2,
      isNumeric: true
    }
  }),
  columnHelper.accessor('plantName', {
    header: 'Предприятие',
    size: 150,
    meta: {
      rowSpan: 2
    }
  }),
  columnHelper.group({
    header: 'Производство (тонн/месяц)',
    columns: [
      columnHelper.accessor(row => row.steel, {
        id: 'steel',
        header: 'Сталь',
        size: 120,
        meta: {
          isNumeric: true
        }
      }),
      columnHelper.accessor(row => row.iron, {
        id: 'iron',
        header: 'Чугун',
        size: 120,
        meta: {
          isNumeric: true
        }
      })
    ]
  }),
  columnHelper.group({
    header: 'Показатели',
    columns: [
      columnHelper.accessor('efficiency', {
        header: 'Эффективность (%)',
        cell: info => `${info.getValue()}%`,
        size: 150,
        meta: {
          isNumeric: true
        }
      }),
      columnHelper.accessor('status', {
        header: 'Статус',
        size: 120
      })
    ]
  })
] as ColumnDef<IGroupWithResizeData>[];
