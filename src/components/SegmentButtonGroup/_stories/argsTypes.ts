import { buttonColor } from '../enums';

export const buttonGroupItemsArgsTypes = {
  className: {
    description: 'В компонент можно передать альтернативные стили',
    control: { type: 'string' }
  },
  active: {
    description:
      'Необязательный свойство. Булево значение, указывающее, является ли кнопка-переключатель активной по умолчанию',
    table: {
      defaultValue: {
        summary: 'boolean'
      }
    }
  },
  color: {
    description: 'Необязательный атрибут который задает цвет кнопке.',
    table: {
      defaultValue: {
        summary: buttonColor.default
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(buttonColor),
    control: { type: 'select' }
  },
  disabled: {
    description: 'Необязательный свойство. добавление кнопке атрибута disabled',
    table: {
      defaultValue: {
        summary: 'boolean'
      }
    }
  }
};

export const argsTypes = {
  className: {
    description: 'В компонент можно передать альтернативные стили',
    control: { type: 'string' }
  },
  compact: {
    description: 'Необязательное свойство которое задает компактную высоту компоненту.',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  color: {
    description:
      'Необязательный атрибут который задает цвет кнопок (можно задавать индидуально каждой дочерней кнопке).',
    table: {
      defaultValue: {
        summary: buttonColor.default
      },
      type: {
        summary: Object.values(buttonColor).join(' | ')
      }
    },
    options: Object.values(buttonColor),
    control: { type: 'select' }
  },
  disabled: {
    description:
      'Необязательный свойство. Флаг-условие добавление атрибута disabled всем кнопкам компонента (можно блокировать выборочно внутри дочернего компонента)',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  }
};
