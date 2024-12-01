import { ESnackbarColors, ESnackbarTypes } from '../enums';

const argsTypes = {
  children: {
    description: 'Содержимое, которое будет отображаться на Snackbar, например текст.',
    control: { type: 'text' }
  },
  color: {
    description: 'Необязательное свойство. Цвет фона Snackbar. Значение по умолчанию - небесный.',
    table: {
      defaultValue: {
        summary: ESnackbarColors.sky
      },
      type: {
        summary: Object.values(ESnackbarColors).join(' | ')
      }
    },
    options: Object.values(ESnackbarColors),
    control: { type: 'select' }
  },
  type: {
    description: 'Тип Snackbar',
    table: {
      defaultValue: {
        summary: ESnackbarTypes.fill
      },
      type: {
        summary: Object.values(ESnackbarTypes).join(' | ')
      }
    },
    options: Object.values(ESnackbarTypes),
    control: { type: 'select' }
  },
  onClose: {
    description:
      'Необязательное свойство. Функция, которая будет вызываться при клике на кнопку закрытия. Если не предоставлено, кнопка закрытия не будет отображаться.',
    control: { type: 'boolean' }
  },
  showCountdown: {
    description: 'Необязательное свойство. Показывает таймер с момента появления Snackbar',
    control: { type: 'boolean' }
  },
  startIcon: {
    description: 'Необязательное свойство. Включает и отключает иконку в начале',
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
