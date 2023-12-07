import { iconsMapping, sizesMapping, variantsMapping } from '../enums';

export const argsTypes = {

  size: {
    description: `Размер: ${Object.values(sizesMapping).join(' | ')}`,
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
  variant: {
    description: `Тип аккордеона: ${Object.values(variantsMapping).join(' | ')}`,
    table: {
      defaultValue: {
        summary: variantsMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(variantsMapping),
    control: { type: 'select' }
  },
  multipleExpanded: {
    description: 'Возможноть ракрывать несколько элементов одновременно',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  startIcon: {
    description: `Иконка слева от заголовка: ${Object.values(iconsMapping).join(' | ')}` ,
    table: {
      defaultValue: {
        summary: iconsMapping.arrow
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(iconsMapping),
    control: { type: 'select' }
  },
  endIcon: {
    description: `Иконка справа от заголовка: ${Object.values(iconsMapping).join(' | ')}` ,
    table: {
      defaultValue: {
        summary: 'null'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(iconsMapping),
    control: { type: 'select' }
  },
  disabled: {
    description: 'Условие блокировки доступа к элементам компонента',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  }
};
