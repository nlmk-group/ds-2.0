import { colorsMapping, sizesMapping, variantsMapping } from '@components/declaration/enums';

export const argsTypes = {
  children: {
    description: 'Содержание компонента',
    control: { type: 'text' }
  },
  size: {
    description: `Размер чипа <b>${Object.values(sizesMapping)
      .filter(i => i !== 'l')
      .join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: sizesMapping.m
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(sizesMapping).filter(item => item !== sizesMapping.l),
    control: { type: 'select' }
  },
  color: {
    description: `Тип чипа – <b>${Object.values(colorsMapping)
      .filter(i => ['warning', 'primary', 'success', 'error'].includes(i))
      .join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: colorsMapping.primary
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(colorsMapping).filter(
      item =>
        item !== colorsMapping.disabled &&
        item !== colorsMapping.inherit &&
        item !== colorsMapping.info &&
        item !== colorsMapping.secondary &&
        item !== colorsMapping.grey
    ),
    control: { type: 'select' }
  },
  label: {
    description: 'Текст лейбла компонента',
    control: { type: 'text' }
  },
  suffix: {
    description: 'Текст суффикса компонента',
    control: { type: 'text' }
  },
  variant: {
    description: `Вид компонента – <b>${Object.values(variantsMapping).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: variantsMapping.solid
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(variantsMapping),
    control: { type: 'select' }
  }
};
