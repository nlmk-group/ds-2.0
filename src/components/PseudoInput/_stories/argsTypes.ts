import { customInputColors } from '@components/declaration';

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
    options: ['m', 'l'],
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
  }
};
