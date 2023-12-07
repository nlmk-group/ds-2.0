import {
  colorsMapping,
  sizesMapping,
  variantsMapping
} from '@components/declaration/enums';

export const argsTypes = {
  children: {
    description: 'Текст лейбла бэйджа',
    control: { type: 'text' }
  },
  size: {
    description: `Размер бэйджа – <b>${Object.values(sizesMapping).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: sizesMapping.m
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(sizesMapping),
    control: { type: 'select' }
  },
  color: {
    description: `Цвет бэйджа – <b>${Object.values(colorsMapping).join(' | ')}</b>`,
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
        item !== colorsMapping.info
    ),
    control: { type: 'select' }
  },
  variant: {
    description: `Вариант бэйджа <b>${Object.values(variantsMapping).join(' | ')}</b>`,
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
