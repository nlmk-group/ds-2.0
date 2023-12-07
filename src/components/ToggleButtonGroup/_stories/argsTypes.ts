import { sizeMapping, statusMapping } from '../enums';

export const buttonGroupItemsArgsTypes = {
  label: {
    description: 'Строка, которая будет отображаться на кнопке-переключателе.',
    table: {
      defaultValue: {
        summary: 'Type<string>, required'
      }
    }
  },
  active: {
    description: 'Необязательный свойство. Булево значение, указывающее, является ли кнопка-переключатель активной по умолчанию',
    table: {
      defaultValue: {
        summary: 'boolean'
      }
    }
  },
  disabled: {
    description: 'Необязательный свойство. Флаг-условие блокировки доступа к копке',
    table: {
      defaultValue: {
        summary: 'boolean'
      }
    }
  },
  status: {
    description: 'Строка, указывающая статус кнопки-переключателя. Это свойство необязательно, и если оно не указано, будет использоваться значение по умолчанию из statusMapping.',
    table: {
      defaultValue: {
        summary: statusMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(statusMapping),
    control: { type: 'select' }
  },
  withIcon: {
    description: 'Необязательное свойство. Флаг, указывающий, следует ли отображать иконку слева от названия кнопки. Если значение равно true, иконка будет отображаться, если false - иконка не будет отображаться. Значение по умолчанию - false.',
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  customIcon: {
    description: 'Необязательное свойство. Пользовательская иконка для отображения слева от названия кнопки.',
    control: { type: 'string' }
  },
  action: {
    description: 'Необязательное свойство. Функция, которая будет вызываться при клике на кнопку.',
    control: { type: 'boolean' }
  },
  actionNumber: {
    description: 'Необязательное свойство. Число, представляющее количество уведомлений, которые будут отображаться.',
    control: { type: 'number' }
  }
};

export const argsTypes = {
  className: {
    description: 'В компонент можно передать альтернативные стили',
    control: { type: 'string' }
  },
  btnGroup: {
    description: 'Массив объектов, каждый из которых представляет отдельную кнопку-переключатель. Каждый объект должен соответствовать типу IToggleButtonGroupItem и содержать следующие свойства: label, active, status, action, disabled, withIcon, customIcon, actionNumber.',
    table: {
      defaultValue: {
        summary: 'Type<ToggleButtonGroup[]>, required'
      }
    },
    control: {
      type: 'object'
    }
  },
  status: {
    description: 'Необязательный атрибут. Строка, указывающая статус кнопкок-переключателей. Это свойство необязательно, и если оно не указано, будет использоваться значение по умолчанию из statusMapping. В btnGroup могут быть переданы кнопки с собственными значениями status.',
    table: {
      defaultValue: {
        summary: statusMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(statusMapping),
    control: { type: 'select' }
  },
  size: {
    description: 'Необязательный атрибут. Cтрока, указывающая размер кнопок-переключателей в группе. Это свойство необязательно, и если оно не указано, будет использоваться значение по умолчанию из sizeMapping.',
    table: {
      defaultValue: {
        summary: sizeMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(sizeMapping),
    control: { type: 'select' }
  }
};