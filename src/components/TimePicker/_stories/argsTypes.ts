export const argsTypes = {
  onChange: {
    description: 'Callback, который будет вызван при выборе времени',
    action: 'изменено время',
    control: { type: 'action' }
  },
  onPeriodChange: {
    description: 'Callback, который будет вызван при выборе времени в периоде',
    action: 'изменено период времени',
    control: { type: 'action' }
  },
  value: {
    description: 'Значение выбранного времени',
    control: { type: 'date' }
  },
  valueFrom: {
    description: 'Первое значение выбранного времени в периоде',
    control: { type: 'date' }
  },
  valueTo: {
    description: 'Второе значение выбранного времени в периоде',
    control: { type: 'date' }
  },
  type: {
    description: 'Тип пикера. Возможные варианты: time | timeWithSeconds',
    table: {
      defaultValue: {
        summary: 'time'
      },
      type: {
        summary: 'string'
      }
    },
    options: ['time', 'timeWithSeconds', 'period', 'periodWithSeconds'],
    control: { type: 'select' }
  },
  enabledHourFrom: {
    description: 'Callback для установки начального часа, доступного к выбору',
    control: { type: 'action' }
  },
  enabledHourTo: {
    description: 'Callback для установки конечного часа, доступного к выбору',
    control: { type: 'action' }
  },
  enabledMinuteFrom: {
    description: 'Callback для установки начальной минуты, доступной к выбору',
    control: { type: 'action' }
  },
  enabledMinuteTo: {
    description: 'Callback для установки конечной минуты, доступной к выбору',
    control: { type: 'action' }
  },
  disabledPanel: {
    description: 'Заблокирована только панель для выбора',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  name: {
    description: 'Название поля(нужно для использования пикера как нативного - без value и onChange)',
    control: { type: 'text' }
  },
  withPortal: {
    description: 'Оборачивать ли компонент в react портал (например, для корректного отображения в модальных окнах)',
    control: { type: 'boolean' }
  },
  withIcon: {
    description: 'Пропс позволяет скрывать иконку в инпуте',
    control: { type: 'boolean' }
  },
  withPicker: {
    description:
      'Пропс убирает возможность открытия всплывающего пикера выбора времени, оставляя возможность пользователю вводить его только через инпут',
    control: { type: 'boolean' }
  },
  label: {
    description: 'Label для инпута и псевдоинпута. По умолчанию label отсутствует.',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  error: {
    description: 'С ошибкой или нет',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  disabled: {
    description: 'Заблокирован ли инпут',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  colored: {
    description: 'Условие применения стилей подсветки',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  pseudo: {
    description: 'Свойство, позволяющее переключать элемент с default на PseudoInput',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  onReset: {
    description: 'Callback, который будет вызван при клике по иконке сброса',
    action: 'изменено value'
  },
  reset: {
    description: 'Булевое значение для показа иконки сброса',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
