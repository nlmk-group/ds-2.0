import { iconsMapping, sizesMapping, variantsMapping } from '../enums';

export const argsTypes = {
  size: {
    description: 'Размер',
    table: {
      defaultValue: {
        summary: sizesMapping.m
      },
      type: {
        summary: Object.values(sizesMapping).join(' | ')
      }
    },
    options: Object.values(sizesMapping),
    control: { type: 'select' }
  },
  variant: {
    description: 'Тип аккордеона',
    table: {
      defaultValue: {
        summary: variantsMapping.default
      },
      type: {
        summary: Object.values(variantsMapping).join(' | ')
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
    description: 'Иконка слева от заголовка',
    table: {
      defaultValue: {
        summary: iconsMapping.arrow
      },
      type: {
        summary: Object.values(iconsMapping).join(' | ')
      }
    },
    options: Object.values(iconsMapping),
    control: { type: 'select' }
  },
  endIcon: {
    description: 'Иконка справа от заголовка',
    table: {
      defaultValue: {
        summary: 'null'
      },
      type: {
        summary: Object.values(iconsMapping).join(' | ')
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
