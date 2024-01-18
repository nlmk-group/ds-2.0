export const argsTypes = {
  onChange: {
    description: 'Callback, который будет вызван при изменении значения внутри компонента InputSlider',
    action: 'изменено value'
  },
  value: {
    description: 'Значения компонента InputSlider'
  },
  step: {
    description: 'Шаг изменения значения в компоненте InputSlider',
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
    description: 'Минимальное значение компонента InputSlider',
    control: { type: 'number' }
  },
  max: {
    description: 'Максимальное значение компонента InputSlider',
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
