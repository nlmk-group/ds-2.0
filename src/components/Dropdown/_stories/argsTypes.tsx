import React from 'react';

import { EButtonSizes } from '@components/Button/enums';
import { IconArticleOutlined16, IconArticleOutlined24, IconArticleOutlined32 } from '@components/index';

const iconOptions = {
  IconArticleOutlined32: <IconArticleOutlined32 />,
  IconArticleOutlined24: <IconArticleOutlined24 />,
  IconArticleOutlined16: <IconArticleOutlined16 />
};

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
  buttonText: {
    description: 'Текст в кнопке Dropdown',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
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
  }
};
