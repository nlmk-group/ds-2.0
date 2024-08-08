import React from 'react';

import { IconArticleOutlined16, IconArticleOutlined24, IconArticleOutlined32 } from '@components/index';

import { EButtonFill, EButtonSizes, EButtonVariant } from '../enums';

const iconOptions = {
  IconArticleOutlined32: <IconArticleOutlined32 />,
  IconArticleOutlined24: <IconArticleOutlined24 />,
  IconArticleOutlined16: <IconArticleOutlined16 />
};

const argsTypes = {
  children: {
    description: 'Текст лейбла кнопки.',
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
  variant: {
    description: `Тип кнопки – <b>${Object.values(EButtonVariant).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EButtonVariant),
    control: { type: 'select' }
  },
  fill: {
    description: `Тип кнопки заливки – <b>${Object.values(EButtonFill).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EButtonFill),
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
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'ReactNode'
      }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  endIcon: {
    description: 'Элемент с иконкой, который располагается с правой стороны кнопки.',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'ReactNode'
      }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  iconButton: {
    description: 'Свойство, позволяющее использовать кнопку-иконку без лейбла.',
    control: { type: 'string' }
  },
  startBadge: {
    description: 'Свойство, позволяющее разместить бейдж слева.',
    control: { type: 'text' }
  },
  endBadge: {
    description: 'Свойство, позволяющее разместить бейдж справа.',
    control: { type: 'text' }
  }
};

export default argsTypes;
