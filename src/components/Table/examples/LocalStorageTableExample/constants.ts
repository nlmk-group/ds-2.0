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
  email: string;
  phone: string;
  city: string;
  country: string;
  salary: number;
  experience: number;
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
        size: 100,
        minSize: 80,
        maxSize: 150,
        meta: {
          isNumeric: true,
          title: 'Возраст сотрудника'
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
        size: 110,
        minSize: 90,
        maxSize: 150,
        meta: {
          isNumeric: true,
          title: 'Процент выполнения'
        }
      })
    ]
  },
  {
    header: 'Контактная информация',
    id: 'contactInfo',
    meta: {
      rowSpan: 1
    },
    columns: [
      columnHelper.accessor('email', {
        header: 'Email',
        cell: info => info.getValue(),
        size: 250,
        minSize: 220,
        maxSize: 400,
        meta: {
          title: 'Электронная почта'
        }
      }),
      columnHelper.accessor('phone', {
        header: 'Телефон',
        cell: info => info.getValue(),
        size: 200,
        minSize: 180,
        maxSize: 300,
        meta: {
          title: 'Номер телефона'
        }
      }),
      columnHelper.accessor('city', {
        header: 'Город',
        cell: info => info.getValue(),
        meta: {
          title: 'Город проживания',
          size: 130
        }
      }),
      columnHelper.accessor('country', {
        header: 'Страна',
        cell: info => info.getValue(),
        meta: {
          title: 'Страна проживания',
          size: 130
        }
      })
    ]
  },
  {
    header: 'Финансовая информация',
    id: 'financialInfo',
    meta: {
      rowSpan: 1
    },
    columns: [
      columnHelper.accessor('salary', {
        header: 'Зарплата',
        cell: info => `${info.getValue().toLocaleString('ru-RU')} ₽`,
        meta: {
          isNumeric: true,
          title: 'Заработная плата',
          size: 120
        }
      }),
      columnHelper.accessor('experience', {
        header: 'Опыт',
        cell: info => `${info.getValue()} лет`,
        meta: {
          isNumeric: true,
          title: 'Опыт работы (лет)',
          size: 100
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
    position: 'Разработчик',
    email: 'aleksey.ivanov@company.ru',
    phone: '+7 (912) 345-67-89',
    city: 'Москва',
    country: 'Россия',
    salary: 150000,
    experience: 8
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
    position: 'Менеджер',
    email: 'elena.petrova@company.ru',
    phone: '+7 (912) 456-78-90',
    city: 'Санкт-Петербург',
    country: 'Россия',
    salary: 95000,
    experience: 5
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
    position: 'Директор',
    email: 'dmitry.smirnov@company.ru',
    phone: '+7 (912) 567-89-01',
    city: 'Москва',
    country: 'Россия',
    salary: 280000,
    experience: 15
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
    position: 'Менеджер',
    email: 'olga.kozlova@company.ru',
    phone: '+7 (912) 678-90-12',
    city: 'Новосибирск',
    country: 'Россия',
    salary: 110000,
    experience: 6
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
    position: 'Архитектор',
    email: 'nikolay.morozov@company.ru',
    phone: '+7 (912) 789-01-23',
    city: 'Екатеринбург',
    country: 'Россия',
    salary: 185000,
    experience: 12
  }
];
