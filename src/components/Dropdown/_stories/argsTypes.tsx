import { EButtonColor, EButtonSize, EButtonVariant } from '@components/Button/enums';

export const argsTypes = {
  children: {
    description: 'Содержимое выпадающего меню в компоненте Dropdown',
    table: {
      type: {
        summary: 'ReactNode'
      }
    },
    control: { type: 'text' }
  },
  size: {
    description: `Размер кнопки – <b>${Object.values(EButtonSize).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'm'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EButtonSize),
    control: { type: 'select' }
  },
  disabled: {
    description: 'Отключает кнопку Dropdown',
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
  className: {
    description: 'Класс для дополнительной стилизации Dropdown',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  buttonChildren: {
    description: 'Содержимое кнопки Dropdown',
    table: {
      type: {
        summary: 'ReactNode'
      }
    },
    control: { type: 'text' }
  },
  menuStyle: {
    description: 'Кастомные стили меню',
    table: {
      type: {
        summary: 'CSSProperties'
      }
    },
    control: { type: 'object' }
  },
  buttonStyle: {
    description: 'Кастомные стили кнопки',
    table: {
      type: {
        summary: 'CSSProperties'
      }
    },
    control: { type: 'object' }
  },
  withPortal: {
    description: 'Открывает выпадающий список в портале',
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
    description: 'Элемент для открытия портала',
    table: {
      defaultValue: {
        summary: 'root'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  variant: {
    description: `Вариант отображения – <b>${Object.values(EButtonVariant).join(' | ')}</b>`,
    table: {
      defaultValue: { summary: 'secondary' },
      type: { summary: 'string' }
    },
    options: Object.values(EButtonVariant),
    control: { type: 'select' }
  },
  color: {
    description: `Цвет кнопки – <b>${Object.values(EButtonColor).join(' | ')}</b>`,
    table: {
      type: { summary: 'string' }
    },
    options: Object.values(EButtonColor),
    control: { type: 'select' }
  },
  startIcon: {
    description: 'Иконка в начале кнопки',
    table: {
      type: {
        summary: 'ReactNode'
      }
    },
    control: { type: 'boolean' }
  },
  iconButton: {
    description: 'Иконка для кнопки-иконки (переопределяет стандартный шеврон)',
    table: {
      type: {
        summary: 'ReactNode'
      }
    },
    control: { type: 'boolean' }
  },
  startBadge: {
    description: 'Бейдж в начале кнопки',
    table: {
      type: {
        summary: 'string | number'
      }
    },
    control: { type: 'text' }
  },
  endBadge: {
    description: 'Бейдж в конце кнопки',
    table: {
      type: {
        summary: 'string | number'
      }
    },
    control: { type: 'text' }
  }
};