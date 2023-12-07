import {sizes, variant} from '../types';

export const argsTypes = {
  children: {
    description: 'Текст лейбла кнопки.',
    control: { type: 'text' }
  },
  size: {
    description: `Размер кнопки – <b>${Object.values(sizes).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'm'
      },
      type: {
        summary: 'string'
      }
    },
    options: ['m', 's', 'xs'],
    control: { type: 'select' }
  },
  variant: {
    description: `Тип кнопки – <b>${Object.values(variant).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: 'string'
      }
    },
    options: [
      'primary',
      'secondary',
      'grey',
      'outline',
      'greyOutline',
      'text',
      'bar'
    ],
    control: { type: 'select' }
  },
  disabled: {
    description: 'Условие блокировки доступа к копке и применению стилей.',
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
  startIcon: {
    description:
      'Элемент с иконкой, который располагается с левой стороны кнопки.',
    control: { type: 'string' }
  },
  endIcon: {
    description:
      'Элемент с иконкой, который располагается с правой стороны кнопки.',
    control: { type: 'string' }
  },
  iconButton: {
    description: 'Свойство, позволяющее использовать кнопку-иконку без лейбла.',
    control: { type: 'string' }
  },
  badge: {
    description: 'Свойство, позволяющее использовать бэйдж справа от лэйбла или справа от иконки (startIcon).',
    control: { type: 'string' }
  }
};
