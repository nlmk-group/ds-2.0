import { colorMapping } from '../enums';

const argsTypes = {
  children: {
    description: 'Содержимое, которое будет отображаться на Snackbar, например текст.',
    control: { type: 'ReactNode' }
  },
  color: {
    description: 'Необязательное свойство. Цвет фона Snackbar. Значение по умолчанию - серый.',
    table: {
      defaultValue: {
        summary: colorMapping.grey
      },
      type: {
        summary: 'colorMapping'
      }
    },
    options: Object.values(colorMapping),
    control: { type: 'select' }
  },
  bgOpacity: {
    description:
      'Необязательное свойство. Процент прозрачности фона Snackbar. Значение по умолчанию равно 100%. Допустимый диапазон – от 0% до 100%.',
    table: {
      defaultValue: {
        summary: '100%'
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  },
  withIcon: {
    description:
      'Необязательное свойство. Флаг, указывающий, следует ли отображать иконку слева от контента Snackbar. Если значение равно true, иконка будет отображаться, если false - иконка не будет отображаться. Значение по умолчанию - false.',
    control: { type: 'boolean' }
  },
  customIcon: {
    description: 'Необязательное свойство. Пользовательская иконка для отображения слева от контента Snackbar.',
    control: { type: 'string' }
  },
  close: {
    description:
      'Необязательное свойство. Функция, которая будет вызываться при клике на кнопку закрытия. Если не предоставлено, кнопка закрытия не будет отображаться.',
    control: { type: 'boolean' }
  },
  actionButton: {
    description:
      'Необязательное свойство. Функция, которая будет вызываться при клике на кнопку действия. Если не предоставлено, кнопка действия не будет отображаться.',
    control: { type: 'boolean' }
  },
  actionButtonText: {
    description:
      'Необязательное свойство. Текст для кнопки действия. Если не предоставлено, по умолчанию будет использован текст "Посмотреть".',
    table: {
      defaultValue: {
        summary: 'Посмотреть'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  }
};

export default argsTypes;
