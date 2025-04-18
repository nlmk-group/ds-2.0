import { ECheckboxColors } from '../enums';

export const argsTypes = {
  id: {
    description: 'Уникальный идентификатор чекбокса',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  label: {
    description: 'Текст метки чекбокса',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  onChange: {
    description: 'Функция обработки изменения состояния чекбокса',
    table: {
      type: {
        summary: '(event: ChangeEvent<HTMLInputElement>) => void'
      }
    },
    action: 'изменено состояние чекбокса'
  },
  value: {
    description: 'Значение чекбокса',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  checked: {
    description: 'Флаг, указывающий, выбран ли чекбокс',
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
  disabled: {
    description: 'Флаг, указывающий, отключен ли чекбокс',
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
  multiple: {
    description: 'Флаг множественного выбора (показывает минус вместо галочки)',
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
  color: {
    description: 'Цветовой вариант компонента',
    table: {
      defaultValue: {
        summary: ECheckboxColors.brand
      },
      type: {
        summary: 'ECheckboxColors'
      }
    },
    options: Object.values(ECheckboxColors),
    control: { type: 'select' }
  },
  className: {
    description: 'Дополнительный CSS класс',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  style: {
    description: 'Inline стили для кастомизации компонента',
    table: {
      type: {
        summary: 'CSSProperties'
      }
    },
    control: { type: 'object' }
  },
  colored: {
    description: 'Флаг для цветовой индикации (например, показать изменилось ли значение)',
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
