import { EButtonSize, EButtonVariant } from '@components/Button/enums';

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
    description: 'Кастомная ширина меню',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'object' }
  },
  withPortal: {
    description: 'Открывает выпадающий список в портале',
    table: {
      defaultValue: {
        summary: 'true'
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
  }
};
