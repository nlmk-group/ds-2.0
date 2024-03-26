import { EFill, ESizes, EVariant } from '../enums';

export const argsTypes = {
  children: {
    description: 'Текст лейбла кнопки.',
    control: { type: 'text' }
  },
  size: {
    description: `Размер кнопки – <b>${Object.values(ESizes).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'm'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ESizes),
    control: { type: 'select' }
  },
  variant: {
    description: `Тип кнопки – <b>${Object.values(EVariant).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EVariant),
    control: { type: 'select' }
  },
  fill: {
    description: `Тип кнопки заливки – <b>${Object.values(EFill).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EFill),
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
    description: 'Элемент с иконкой, который располагается с левой стороны кнопки.',
    control: { type: 'string' }
  },
  endIcon: {
    description: 'Элемент с иконкой, который располагается с правой стороны кнопки.',
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
