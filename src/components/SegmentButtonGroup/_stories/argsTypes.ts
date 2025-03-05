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
