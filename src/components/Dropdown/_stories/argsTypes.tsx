import { EButtonSizes } from '@components/Button/enums';

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
    description: `Размер кнопки – <b>${Object.values(EButtonSizes).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'm'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EButtonSizes),
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
  }
};
