import React from 'react';

import { IconArticleOutlined16, IconArticleOutlined24, IconArticleOutlined32 } from '@components/index';

import { EButtonColor, EButtonSize, EButtonVariant } from '../enums';

export const iconOptions = {
  'Без иконки': undefined,
  'IconArticleOutlined32': <IconArticleOutlined32 />,
  'IconArticleOutlined24': <IconArticleOutlined24 />,
  'IconArticleOutlined16': <IconArticleOutlined16 />
};

const argsTypes = {
  loading: {
    description: 'Индикатор загрузки 16 px. Блокирует повторное нажатие и сохраняет размер кнопки.',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  children: {
    description: 'Содержимое кнопки, обычно текст действия.',
    control: { type: 'text' }
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
    description:
      'Иконка перед текстом. Передайте JSX-элемент иконки ДС или свою SVG-иконку, например <code>&lt;IconArrowLeftOutlined24 /&gt;</code>.',
    table: {
      type: { summary: 'ReactNode' }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  endIcon: {
    description: 'Иконка после текста, например <code>&lt;IconArrowRightOutlined24 /&gt;</code>.',
    table: {
      type: { summary: 'ReactNode' }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  iconButton: {
    description: 'Показывает только переданную иконку. Задайте кнопке доступное имя через <code>aria-label</code>.',
    table: { type: { summary: 'ReactNode' } },
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
