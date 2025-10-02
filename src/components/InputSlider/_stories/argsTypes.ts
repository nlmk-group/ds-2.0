import { EInputSliderValuePosition } from '../enums';

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
  },
  showValue: {
    description: 'Условие показывания процентов справа или сверху от Slider',
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
  valuePosition: {
    description: 'Позиция Value для InputSlider при влкюченном showValue',
    table: {
      defaultValue: {
        summary: 'top'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EInputSliderValuePosition),
    control: { type: 'select' }
  },
  valueSuffix: {
    description: 'Суффикс для отображаемого значения. По умолчанию "%". Передайте пустую строку для скрытия суффикса',
    table: {
      defaultValue: {
        summary: "'%'"
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  }
};
