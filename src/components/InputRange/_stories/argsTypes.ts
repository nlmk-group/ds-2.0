export const argsTypes = {
  onChange: {
    description: 'Callback, который будет вызван при изменении значения внутри компонента InputRange',
    action: 'изменено value'
  },
  value: {
    description: 'Значения компонента InputRange'
  },
  step: {
    description: 'Шаг изменения значения в компоненте InputRange',
    table: {
      defaultValue: {
        summary: 1
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  },
  min: {
    description: 'Минимальное значение компонента InputRange',
    control: { type: 'number' }
  },
  max: {
    description: 'Максимальное значение компонента InputRange',
    control: { type: 'number' }
  },
  disabled: {
    description: 'Условие блокировки input для ввода/изменений',
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

export default argsTypes;
