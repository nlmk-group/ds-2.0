import { variantsMapping } from '@components/declaration';

import { ESnackbarColors } from '../enums';

const argsTypes = {
  children: {
    description: 'Содержимое, которое будет отображаться на Snackbar, например текст.',
    control: { type: 'text' }
  },
  color: {
    description: 'Необязательное свойство. Цвет фона Snackbar. Значение по умолчанию - серый.',
    table: {
      defaultValue: {
        summary: ESnackbarColors.dark
      },
      type: {
        summary: Object.values(ESnackbarColors).join(' | ')
      }
    },
    options: Object.values(ESnackbarColors),
    control: { type: 'select' }
  },
  variant: {
    description: 'Вариант Snackbar',
    table: {
      defaultValue: {
        summary: variantsMapping.solid
      },
      type: {
        summary: Object.values(variantsMapping).join(' | ')
      }
    },
    options: Object.values(variantsMapping),
    control: { type: 'select' }
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
  actionText: {
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
  },
  autoHideDuration: {
    description:
      'Необязательное свойство. Время в миллисекундах, через которое Snackbar автоматически скроется. Если установлено в 0 или не указано, Snackbar не будет автоматически скрываться.',
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  }
};

export default argsTypes;
