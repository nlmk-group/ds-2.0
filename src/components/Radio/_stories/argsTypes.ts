export const argsTypes = {
  disabled: {
    description: 'Условие блокировки доступа к компоненту',
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
    description: 'Значение для однозначной идентификации какой из компонентов Radio был выбран пользователем',
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
  label: {
    description: 'Необязательное свойство. Текст справа от radio button',
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
    description: 'Состояние активного компонента',
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
  onChange: {
    description: 'Callback для обработчки события изменения состояния Radio'
  }
};
