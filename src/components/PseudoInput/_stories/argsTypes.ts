import { customInputColors, variantsMapping } from '@components/declaration';

import { EPseudoInputSizes } from '../enums';
import { EBadgeColors } from '@components/Badge/enums';

export const argsTypes = {
  label: {
    description: 'Строка вспомогательного текста над компонентом',
    control: { type: 'text' }
  },
  children: {
    description: 'Содержимое компонента, любой JSX фрагмент или текст',
    control: { type: 'text' }
  },
  size: {
    description: 'Размер шрифта компонента',
    table: {
      defaultValue: {
        summary: 'm'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EPseudoInputSizes),
    control: { type: 'select' }
  },
  labelColor: {
    description: 'Цвет лейбла, отображающий разные состояния компонента',
    table: {
      defaultValue: {
        summary: customInputColors.default
      }
    },
    options: Object.values(customInputColors),
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
  },
  className: {
    description: 'Дополнительный CSS класс',
    control: { type: 'text' }
  },
  suffix: {
    description: 'Суффикс компонента',
    control: { type: 'text' }
  },
  style: {
    description: 'Inline стили для кастомизации компонента',
    control: { type: 'object' }
  },
  badgeChildren: {
    description: 'Содержимое бейджа',
    control: { type: 'text' }
  },
  fullWidth: {
    description: 'Флаг, добавляющий ширину в 100%',
    control: { type: 'boolean' }
  }
};