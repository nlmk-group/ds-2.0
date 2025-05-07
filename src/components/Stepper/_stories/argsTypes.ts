import { EStepColor, EStepState } from '../subcomponents/Step/enums';

export const argsTypes = {
  className: {
    description: 'Пользовательский класс для настройки стилей Stepper.',
    control: { type: 'string' }
  },
  state: {
    description: 'Отвечает за состояние Stepper.',
    table: {
      defaultValue: {
        summary: EStepState.filled
      },
      type: {
        summary: Object.values(EStepState).join(' | ')
      }
    },
    options: Object.keys(EStepState),
    control: { type: 'select' }
  },
  color: {
    description: 'Отвечает за цвет Stepper.',
    table: {
      defaultValue: {
        summary: EStepColor.brand
      },
      type: {
        summary: Object.values(EStepColor).join(' | ')
      }
    },
    options: Object.keys(EStepColor),
    control: { type: 'select' }
  },
  stepName: {
    description: 'Название шага',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  index: {
    description: 'Индекс шага (отображается + 1)',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  },
  showStep: {
    description: 'На последнем элементе выключается, чтобы не было лишнего Divider',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  onClick: {
    description: 'Вызывается при клике на Stepper. Возвращает состояние (state) и индекс элемента',
    control: { type: 'string' }
  }
};

export default argsTypes;
