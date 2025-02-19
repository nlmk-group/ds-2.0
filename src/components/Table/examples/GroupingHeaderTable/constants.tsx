import { ECellStatus } from '@components/Table/Cell/types';
import { ColumnDef } from '@tanstack/react-table';
import { createColumnHelper } from '@tanstack/react-table';

import { IGroupingData } from './types';

export const data: IGroupingData[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Петров',
    age: 25,
    visits: 10,
    status: ECellStatus.SUCCESS,
    progress: 80
  },
  {
    id: 2,
    firstName: 'Мария',
    lastName: 'Иванова',
    age: 32,
    visits: 15,
    status: ECellStatus.WARNING,
    progress: 65
  },
  {
    id: 3,
    firstName: 'Алексей',
    lastName: 'Смирнов',
    age: 28,
    visits: 20,
    status: ECellStatus.SUCCESS,
    progress: 90
  },
  {
    id: 4,
    firstName: 'Елена',
    lastName: 'Козлова',
    age: 41,
    visits: 8,
    status: ECellStatus.ERROR,
    progress: 45
  },
  {
    id: 5,
    firstName: 'Дмитрий',
    lastName: 'Соколов',
    age: 35,
    visits: 25,
    status: ECellStatus.SUCCESS,
    progress: 95
  },
  {
    id: 6,
    firstName: 'Анна',
    lastName: 'Морозова',
    age: 29,
    visits: 12,
    status: ECellStatus.WARNING,
    progress: 70
  },
  {
    id: 7,
    firstName: 'Сергей',
    lastName: 'Волков',
    age: 45,
    visits: 18,
    status: ECellStatus.SUCCESS,
    progress: 85
  },
  {
    id: 8,
    firstName: 'Ольга',
    lastName: 'Павлова',
    age: 33,
    visits: 22,
    status: ECellStatus.WARNING,
    progress: 75
  },
  {
    id: 9,
    firstName: 'Михаил',
    lastName: 'Новиков',
    age: 38,
    visits: 30,
    status: ECellStatus.SUCCESS,
    progress: 100
  },
  {
    id: 10,
    firstName: 'Татьяна',
    lastName: 'Федорова',
    age: 27,
    visits: 14,
    status: ECellStatus.ERROR,
    progress: 50
  },
  {
    id: 11,
    firstName: 'Андрей',
    lastName: 'Морозов',
    age: 31,
    visits: 16,
    status: ECellStatus.SUCCESS,
    progress: 88
  },
  {
    id: 12,
    firstName: 'Наталья',
    lastName: 'Кузнецова',
    age: 36,
    visits: 28,
    status: ECellStatus.WARNING,
    progress: 72
  },
  {
    id: 13,
    firstName: 'Павел',
    lastName: 'Семенов',
    age: 42,
    visits: 19,
    status: ECellStatus.SUCCESS,
    progress: 93
  },
  {
    id: 14,
    firstName: 'Екатерина',
    lastName: 'Андреева',
    age: 34,
    visits: 24,
    status: ECellStatus.ERROR,
    progress: 55
  },
  {
    id: 15,
    firstName: 'Виктор',
    lastName: 'Егоров',
    age: 39,
    visits: 21,
    status: ECellStatus.SUCCESS,
    progress: 82
  },
  {
    id: 16,
    firstName: 'Светлана',
    lastName: 'Орлова',
    age: 30,
    visits: 17,
    status: ECellStatus.WARNING,
    progress: 68
  },
  {
    id: 17,
    firstName: 'Роман',
    lastName: 'Макаров',
    age: 37,
    visits: 23,
    status: ECellStatus.SUCCESS,
    progress: 91
  }
];

const columnHelper = createColumnHelper<IGroupingData>();

export const columns: ColumnDef<IGroupingData>[] = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    meta: {
      rowSpan: 3,
      isNumeric: true
    }
  }),
  columnHelper.group({
    id: 'information',
    header: 'Информация',
    columns: [
      columnHelper.accessor('firstName', {
        header: 'Имя',
        meta: {
          rowSpan: 2
        }
      }),
      columnHelper.accessor('lastName', {
        header: 'Фамилия',
        meta: {
          rowSpan: 2
        }
      })
    ]
  }),
  columnHelper.group({
    id: 'metrics',
    header: 'Показатели',
    columns: [
      columnHelper.accessor('age', {
        header: 'Возраст',
        meta: {
          rowSpan: 2,
          isNumeric: true
        }
      }),
      columnHelper.group({
        id: 'additionalMetrics',
        header: 'Дополнительно',
        columns: [
          columnHelper.accessor('visits', {
            header: 'Посещения',
            meta: {
              isNumeric: true
            }
          }),
          columnHelper.accessor('status', {
            header: 'Статус'
          }),
          columnHelper.accessor('progress', {
            header: 'Прогресс',
            meta: {
              isNumeric: true
            }
          })
        ]
      })
    ]
  })
] as ColumnDef<IGroupingData>[];
