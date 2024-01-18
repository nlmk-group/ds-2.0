import { typeMapping } from '../enums';

const argsTypes = {
  title: {
    description: 'Cтрока, представляющая текст, отображаемый в качестве заголовка.',
    control: { type: 'string' }
  },
  type: {
    description: 'Строка, которая задает тип заголовка, "default" (по умолчанию) или "compact" (компактный).',
    table: {
      defaultValue: {
        summary: typeMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(typeMapping),
    control: { type: 'select' }
  },
  bg: {
    description: 'Булево значение, которое переключает цвет фона заголовка.',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  back: {
    description: 'Функция обратного вызова, которая выполняется при нажатии на кнопку "Назад".',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  favorite: {
    description: 'Функция обратного вызова, которая выполняется при нажатии на кнопку "Избранное".',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  date: {
    description: 'Булево значение, которое переключает отображение текущей даты и времени',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  notification: {
    description: 'Функция обратного вызова, которая выполняется при нажатии кнопки уведомления.',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  notificationAmount: {
    description: 'Число, представляющее количество уведомлений, которые будут отображаться.',
    control: { type: 'number' },
    table: {
      defaultValue: {
        summary: '0'
      }
    }
  },
  breadcrumbs: {
    description:
      'Свойство, в которое можно добавить отдельный компонент Breadcrumbs, при этом он будет отображаться как часть Header',
    control: { type: 'string' }
  }
};

export default argsTypes;
