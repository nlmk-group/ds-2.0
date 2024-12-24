import { ESliderThumbValuePosition } from '@components/Slider/subcomponents/Control/enums';

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
  },
  thumbValuePosition: {
    description: 'Отображение процентного значения у кнопки Thumb',
    table: {
      defaultValue: {
        summary: 'none'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ESliderThumbValuePosition),
    control: { type: 'select' }
  }
};

export default argsTypes;
