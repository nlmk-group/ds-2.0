import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '../enums';

export const argsTypes = {
  size: {
    description: 'Размер',
    table: {
      defaultValue: {
        summary: ESizesAccordion.m
      },
      type: {
        summary: Object.values(ESizesAccordion).join(' | ')
      }
    },
    options: Object.values(ESizesAccordion),
    control: { type: 'select' }
  },
  variant: {
    description: 'Тип аккордеона',
    table: {
      defaultValue: {
        summary: EVariantsAccordion.default
      },
      type: {
        summary: Object.values(EVariantsAccordion).join(' | ')
      }
    },
    options: Object.values(EVariantsAccordion),
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
        summary: EIconsAccordion.arrow
      },
      type: {
        summary: Object.values(EIconsAccordion).join(' | ')
      }
    },
    options: Object.values(EIconsAccordion),
    control: { type: 'select' }
  },
  endIcon: {
    description: 'Иконка справа от заголовка',
    table: {
      defaultValue: {
        summary: 'null'
      },
      type: {
        summary: Object.values(EIconsAccordion).join(' | ')
      }
    },
    options: Object.values(EIconsAccordion),
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
