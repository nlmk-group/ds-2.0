import { colorsMapping, variantsMapping } from '@components/declaration/enums';

import { ESizesBadgeMapping } from '../types';

export const argsTypes = {
  children: {
    description: 'Текст лейбла бэйджа',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'number' }
  },
  size: {
    description: 'Размер бэйджа',
    table: {
      defaultValue: {
        summary: ESizesBadgeMapping.m
      },
      type: {
        summary: Object.values(ESizesBadgeMapping).join(' | ')
      }
    },
    options: Object.values(ESizesBadgeMapping),
    control: { type: 'select' }
  },
  color: {
    description: 'Цвет бэйджа',
    table: {
      defaultValue: {
        summary: colorsMapping.primary
      },
      type: {
        summary: Object.values(colorsMapping).join(' | ')
      }
    },
    options: Object.values(colorsMapping).filter(
      item => item !== colorsMapping.disabled && item !== colorsMapping.inherit && item !== colorsMapping.info
    ),
    control: { type: 'select' }
  },
  variant: {
    description: 'Вариант бэйджа',
    table: {
      defaultValue: {
        summary: variantsMapping.solid
      },
      type: {
        summary: Object.values(variantsMapping).join(' | ')
      }
    },
    options: Object.values(variantsMapping),
    control: { type: 'select' }
  }
};
