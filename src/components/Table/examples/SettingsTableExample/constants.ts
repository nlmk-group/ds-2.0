import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  department: string;
  position: string;
};

const columnHelper = createColumnHelper<Person>();

export const columns: ColumnDef<Person>[] = [
  {
    header: 'Личные данные',
    id: 'personalInfo',
    meta: {
      rowSpan: 1
    },
    columns: [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: info => info.getValue(),
        meta: {
          title: 'Идентификатор',
          size: 80
        }
      }),
      columnHelper.accessor('firstName', {
        header: 'Имя',
        cell: info => info.getValue(),
        meta: {
          title: 'Имя сотрудника',
          size: 120
        }
      }),
      columnHelper.accessor('lastName', {
        header: 'Фамилия',
        cell: info => info.getValue(),
        meta: {
          title: 'Фамилия сотрудника',
          size: 130
        }
      }),
      columnHelper.accessor('age', {
        header: 'Возраст',
        cell: info => info.getValue(),
        meta: {
          isNumeric: true,
          title: 'Возраст сотрудника',
          size: 80
        }
      })
    ]
  },
  {
    header: 'Рабочая информация',
    id: 'workInfo',
    meta: {
      rowSpan: 1
    },
    columns: [
      columnHelper.accessor('department', {
        header: 'Отдел',
        cell: info => info.getValue(),
        meta: {
          title: 'Отдел',
          size: 120
        }
      }),
      columnHelper.accessor('position', {
        header: 'Должность',
        cell: info => info.getValue(),
        meta: {
          title: 'Должность',
          size: 160
        }
      })
    ]
  },
  {
    header: 'Статистика',
    id: 'statistics',
    meta: {
      rowSpan: 1
    },
    columns: [
      columnHelper.accessor('visits', {
        header: 'Посещения',
        cell: info => info.getValue(),
        meta: {
          isNumeric: true,
          title: 'Количество посещений',
          size: 100
        }
      }),
      columnHelper.accessor('status', {
        header: 'Статус',
        cell: info => info.getValue(),
        meta: {
          title: 'Текущий статус',
          size: 120
        }
      }),
      columnHelper.accessor('progress', {
        header: 'Прогресс',
        cell: info => `${info.getValue()}%`,
        meta: {
          isNumeric: true,
          title: 'Процент выполнения',
          size: 90
        }
      })
    ]
  }
];

export const data: Person[] = [
  {
    id: '1',
    firstName: 'Алексей',
    lastName: 'Иванов',
    age: 35,
    visits: 12,
    status: 'Активен',
    progress: 78,
    department: 'ИТ',
    position: 'Разработчик'
  },
  {
    id: '2',
    firstName: 'Елена',
    lastName: 'Петрова',
    age: 28,
    visits: 8,
    status: 'Активен',
    progress: 62,
    department: 'Маркетинг',
    position: 'Менеджер'
  },
  {
    id: '3',
    firstName: 'Дмитрий',
    lastName: 'Смирнов',
    age: 42,
    visits: 5,
    status: 'Отпуск',
    progress: 91,
    department: 'Руководство',
    position: 'Директор'
  },
  {
    id: '4',
    firstName: 'Ольга',
    lastName: 'Козлова',
    age: 31,
    visits: 15,
    status: 'Активен',
    progress: 45,
    department: 'Продажи',
    position: 'Менеджер'
  },
  {
    id: '5',
    firstName: 'Николай',
    lastName: 'Морозов',
    age: 39,
    visits: 3,
    status: 'Больничный',
    progress: 27,
    department: 'ИТ',
    position: 'Архитектор'
  },
  {
    id: '6',
    firstName: 'Мария',
    lastName: 'Васильева',
    age: 25,
    visits: 18,
    status: 'Активен',
    progress: 84,
    department: 'HR',
    position: 'Специалист'
  },
  {
    id: '7',
    firstName: 'Андрей',
    lastName: 'Соколов',
    age: 33,
    visits: 9,
    status: 'Активен',
    progress: 53,
    department: 'Бухгалтерия',
    position: 'Главный бухгалтер'
  },
  {
    id: '8',
    firstName: 'Ирина',
    lastName: 'Новикова',
    age: 29,
    visits: 7,
    status: 'Активен',
    progress: 68,
    department: 'Маркетинг',
    position: 'Аналитик'
  },
  {
    id: '9',
    firstName: 'Сергей',
    lastName: 'Попов',
    age: 44,
    visits: 4,
    status: 'Командировка',
    progress: 96,
    department: 'Продажи',
    position: 'Руководитель отдела'
  },
  {
    id: '10',
    firstName: 'Анна',
    lastName: 'Кузнецова',
    age: 27,
    visits: 10,
    status: 'Активен',
    progress: 71,
    department: 'ИТ',
    position: 'Тестировщик'
  }
];
