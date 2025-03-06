import { ESegmentButtonGroupSizes } from '../enums';

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
  disabled: {
    description:
      'Необязательный свойство. Флаг-условие добавление атрибута disabled всем кнопкам компонента (можно блокировать выборочно внутри дочернего компонента)',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  size: {
    description: 'Размеры SegmentButton. Необязательное свойство, по умолчанию - m',
    table: {
      defaultValue: {
        summary: 'm'
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ESegmentButtonGroupSizes),
    control: { type: 'select' }
  }
};
