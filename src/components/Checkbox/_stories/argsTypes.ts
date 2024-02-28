import { ECheckboxColors } from '../types';

export const argsTypes = {
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  label: {
    description: 'Строка для вспомогательно текста справа от чекбокса',
    control: { type: 'text' }
  },
  onChange: {
    description: 'Callback, который будет вызван при изменении состояния чекбокса',
    action: 'изменено состояние чекбокса'
  },
  value: {
    description: 'Текущее значение чекбокса'
  },
  checked: {
    description: 'Условие отображения чекбокса',
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
    description: 'Пропc, позволяющий заблокировать чекбокс',
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
    description: 'Пропc, позволяющий отобразить промежуточное состояние чекбокса в списке чекбоксов',
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
    description: `Цвет компонента, отображающий разные состояния – <b>${Object.values(ECheckboxColors).join(
      ' | '
    )}</b>`,
    table: {
      defaultValue: {
        summary: ECheckboxColors.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ECheckboxColors),
    control: { type: 'select' }
  }
};
