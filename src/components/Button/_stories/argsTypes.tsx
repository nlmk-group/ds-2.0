import React from 'react';

import { IconArticleOutlined16, IconArticleOutlined24, IconArticleOutlined32 } from '@components/index';

import { EButtonColor, EButtonSize, EButtonVariant } from '../enums';

const iconOptions = {
  IconArticleOutlined32: <IconArticleOutlined32 />,
  IconArticleOutlined24: <IconArticleOutlined24 />,
  IconArticleOutlined16: <IconArticleOutlined16 />
};

const argsTypes = {
  children: {
    description: 'Текстовое содержимое кнопки',
    control: { type: 'text' },
    defaultValue: 'Button'
  },
  color: {
    description: `Цветовая схема кнопки – <b>${Object.values(EButtonColor).join(' | ')}</b>`,
    table: {
      defaultValue: { summary: 'brand' },
      type: { summary: 'string' }
    },
    options: Object.values(EButtonColor),
    control: { type: 'select' }
  },
  size: {
    description: `Размер кнопки – <b>${Object.values(EButtonSize).join(' | ')}</b>`,
    table: {
      defaultValue: { summary: 'm' },
      type: { summary: 'string' }
    },
    options: Object.values(EButtonSize),
    control: { type: 'select' }
  },
  variant: {
    description: `Вариант отображения – <b>${Object.values(EButtonVariant).join(' | ')}</b>`,
    table: {
      defaultValue: { summary: 'primary' },
      type: { summary: 'string' }
    },
    options: Object.values(EButtonVariant),
    control: { type: 'select' }
  },
  disabled: {
    description: 'Делает кнопку неактивной',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' }
    },
    control: { type: 'boolean' }
  },
  startIcon: {
    description: 'Иконка в начале кнопки',
    table: {
      type: { summary: 'ReactNode' }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  endIcon: {
    description: 'Иконка в конце кнопки',
    table: {
      type: { summary: 'ReactNode' }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  startBadge: {
    description: 'Бейдж в начале кнопки',
    control: { type: 'text' }
  },
  endBadge: {
    description: 'Бейдж в конце кнопки',
    control: { type: 'text' }
  }
};

export default argsTypes;
