import { customInputColors } from '@components/declaration';

import { EPseudoInputSizes } from '../enums';

export const argsTypes = {
  label: {
    description: 'Строка вспомогательного текста над компонентом',
    control: { type: 'text' }
  },
  children: {
    description: 'Содержимое компонента, любой JSX фрагмент или текст',
    control: { type: 'boolean' }
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
  variant: {
    description: 'Вариант бейджа',
    table: { type: { summary: 'string' } }
  },
  color: {
    description: 'Цвет бейджа',
    table: { type: { summary: 'string' } }
  },
  className: {
    description: 'Классы для бейджа',
    table: { type: { summary: 'string' } }
  },
  suffix: {
    description: 'Суффикс компонента',
    table: { type: { summary: 'ReactNode' } }
  },
  style: {
    description: 'Стили бейджа',
    table: { type: { summary: 'CSSProperties' } }
  },
  badgeChildren: {
    description: 'Содержимое бейджа',
    table: { type: { summary: 'ReactNode' } }
  }
};
