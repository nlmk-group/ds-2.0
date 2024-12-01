import { variantsMapping } from '@components/declaration/enums';

import { EBadgeColors, EBadgeSizes } from '../enums';

export const argsTypes = {
  children: {
    description: 'Текст лейбла бэйджа',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  size: {
    description: 'Размер бэйджа',
    table: {
      defaultValue: {
        summary: EBadgeSizes.m
      },
      type: {
        summary: Object.values(EBadgeSizes).join(' | ')
      }
    },
    options: Object.values(EBadgeSizes),
    control: { type: 'select' }
  },
  color: {
    description: 'Цвет бэйджа',
    table: {
      defaultValue: {
        summary: EBadgeColors.brand
      },
      type: {
        summary: Object.values(EBadgeColors).join(' | ')
      }
    },
    options: Object.values(EBadgeColors),
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
