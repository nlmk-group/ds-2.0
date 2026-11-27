import { ERadioColors } from '../enums';

export const argsTypes = {
  disabled: {
    description: 'Запрещает выбирать этот вариант мышью и с клавиатуры.',
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
  value: {
    description: 'Значение варианта. После выбора оно доступно в event.target.value.',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  label: {
    description: 'Подпись рядом с переключателем. Нажатие на подпись выбирает вариант.',
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
  checked: {
    description: 'Отмечает вариант как выбранный. В управляемой группе сравните value с текущим значением.',
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
    description: 'Цвет индикатора выбранного варианта.',
    table: {
      defaultValue: {
        summary: 'brand'
      },
      type: {
        summary: 'ERadioColors'
      }
    },
    options: Object.values(ERadioColors),
    control: {
      type: 'select'
    }
  },
  onChange: {
    description: 'Вызывается при выборе варианта. Запишите event.target.value в состояние группы.'
  }
};
