import icons from '@components/Icon/IconsDirectory';
import { EStatusColor, EStatusFill, EStatusSize } from '@components/Status/enums';
import type { ArgTypes } from '@storybook/react';

import { IStatusProps } from '../types';

export const argsTypes = {
  children: {
    description: 'Текст статуса',
    control: { type: 'text' }
  },
  icon: {
    description: 'Иконка статуса',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    },
    options: [...Object.keys({ ...icons[16], ...icons[24], ...icons[32] })],
    control: { type: 'select' }
  },
  size: {
    description: `Размер статуса – <b>${Object.values(EStatusSize).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: EStatusSize.m
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EStatusSize),
    control: { type: 'select' }
  },
  color: {
    description: `Тип статуса – <b>${Object.values(EStatusColor).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: EStatusColor.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EStatusColor),
    control: { type: 'select' }
  },
  fill: {
    description: `Заливка статуса – <b>${Object.values(EStatusFill).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: EStatusFill.solid
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EStatusFill),
    control: { type: 'select' }
  },
  className: {
    description: 'Дополнительный класс статуса',
    control: { type: 'text' }
  }
} satisfies Partial<ArgTypes<IStatusProps>>;
