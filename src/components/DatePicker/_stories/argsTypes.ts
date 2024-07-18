import { sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  onPeriodChange: {
    description: 'Callback, который будет вызван при выборе периода(выборе 2 дат или нажатии "Применить")',
    action: 'изменен период'
  },
  onChange: {
    description: 'Callback, который будет вызван при выборе даты',
    action: 'изменена дата'
  },
  value: {
    description: 'Значение выбранной даты'
  },
  valueFrom: {
    description: 'Значение начала выбранного периода'
  },
  valueTo: {
    description: 'Значение конца выбранного периода'
  },
  shiftFrom: {
    description: 'Значение начала выбранной смены'
  },
  shiftTo: {
    description: 'Значение конца выбранной смены'
  },
  shiftLength: {
    description: 'Количество смен в датапикере типа shift'
  },
  type: {
    description: 'Тип пикера. Возможные варианты: date | time | seconds | period | shift',
    table: {
      defaultValue: {
        summary: 'date'
      },
      type: {
        summary: 'string'
      }
    },
    options: ['date', 'time', 'seconds', 'period', 'shift'],
    control: { type: 'select' }
  },
  enabledFrom: {
    description: 'Начальная дата, доступная к выбору',
    table: {
      defaultValue: {
        summary: '-'
      }
    }
  },
  enabledTo: {
    description: 'Конечная дата, доступная к выбору',
    table: {
      defaultValue: {
        summary: '-'
      }
    }
  },
  enabledHourFrom: {
    description: 'Начальный час, доступный к выбору'
  },
  enabledHourTo: {
    description: 'Конечный час, доступный к выбору'
  },
  enabledMinuteFrom: {
    description: 'Начальная минута, доступную к выбору'
  },
  enabledMinuteTo: {
    description: 'Конечная минута, доступную к выбору'
  },
  level: {
    description: 'Детализация даты(можно выбрать отдельно год, месяц с годом или полную дату)',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: '"day" | "month" | "year"'
      }
    },
    options: ['day', 'month', 'year'],
    control: { type: 'select' }
  },
  disableChange: {
    description: 'Заблокирована только панель для выбора',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  withoutWeekdays: {
    description: 'Убрать панель с отображением дней недели',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  name: {
    description: 'Название поля(нужно для использования пикера как нативного - без value и onChange)'
  },
  label: {
    description:
      'Label для инпута. Если не передан, то определяться будет по пропсу showTime, если он true, то выводится "Дата и время", иначе "Дата"'
  },
  size: {
    description: 'Свойство, позволяющее регулировать высоту DatePicker',
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
  },
  error: {
    description: 'С ошибкой или нет'
  },
  disabled: {
    description: 'Заблокирован ли инпут'
  },
  withPortal: {
    description: 'Оборачивать ли компонент в react портал (например, для корректного отображения в модальных окнах)'
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
  disableChangesOnBlur: {
    description: 'Условие применения даты из пикера при событии onBlur',
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
  pseudoChildren: {
    description: 'Данные, передаваемые в PseudoInput для отображения. Используется только со свойством `pseudo`'
  },
  isHideYear: {
    description: 'Свойство, позволяющее скрывать год в компоненте DatePicker с типами: date,time,seconds',
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
  portalContainerId: {
    description:
      'Идентификатор контейнера, в который будет рендериться календарь с помощью React Portal. По умолчанию используется "root".',
    table: {
      defaultValue: {
        summary: 'root'
      }
    },
    control: { type: 'text' }
  },
  onPanelChange: {
    description: 'Callback, который будет вызван при изменении панели дней, месяца, года, квартала в календаре',
    action: 'изменена панель дней, месяца, квартала или года'
  },
  onSelect: {
    description: 'Callback, который будет вызван при нажатии на любое значение дня/месяца/квартала/года в календаре',
    action: 'изменен день/месяц/квартал/год'
  },
  infiniteTimeScroll: {
    description: 'Включаем бесконечный скролл календаря',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }    
  }
};
