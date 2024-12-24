import React from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { IconSearchOutlined16, IconSearchOutlined24, IconSearchOutlined32 } from '@root/src/components';

const iconOptions = {
  IconSearchOutlined32: <IconSearchOutlined32 />,
  IconSearchOutlined24: <IconSearchOutlined24 />,
  IconSearchOutlined16: <IconSearchOutlined16 />
};

const argsTypes = {
  onBlur: {
    description:
      'Callback, который будет вызван при изменении значения внутри input, используйте для логики валидации или других действий при потере фокуса',
    action: 'изменено value'
  },
  onChange: {
    description: 'Callback, который будет вызван при изменении значения внутри input',
    action: 'изменено value'
  },
  onReset: {
    description: 'Callback, который будет вызван при клике по иконке сброса',
    action: 'изменено value'
  },
  reset: {
    description: 'Булевое значение для показа иконки сброса',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  value: {
    description: 'Значение поля input',
    control: { type: 'text' },
    table: {
      type: {
        summary: 'string'
      }
    }
  },
  helperText: {
    description: 'Строка для вспомогательно текста под инпутом. Может быть как текстом, так и элементом ReactNode',
    control: { type: 'text' }
  },
  icon: {
    description: 'Элемент с иконкой, который располагается с правой стороны инпута.',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'ReactNode'
      }
    },
    options: Object.keys(iconOptions),
    control: { type: 'select' },
    mapping: iconOptions
  },
  size: {
    description: 'Свойство, позволяющее регулировать высоту инпута',
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
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
  color: {
    description: 'Цвет компонента, отображающий разные состояния',
    table: {
      defaultValue: {
        summary: customInputColors.default
      }
    },
    options: Object.values(customInputColors),
    control: { type: 'select' }
  },
  multiline: {
    description: 'Свойство, позволяющее сделать компонент многострочным (как TextArea)',
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
  resize: {
    description:
      'Свойство, позволяющее изменять размер многострочного компонента (TextArea). Работает только со свойством multiline.',
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
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  colored: {
    description: 'Свойство, позволяющее изменить цвет фона инпута на светло-желтый',
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
  inputRef: {
    description: 'Ref для доступа к DOM-элементу инпута',
    table: {
      type: {
        summary: 'Ref<HTMLInputElement | HTMLTextAreaElement>'
      }
    }
  },
  name: {
    description: 'Имя инпута, используется для идентификации в формах',
    control: { type: 'text' }
  },
  label: {
    description: 'Текст метки (label) инпута',
    control: { type: 'text' }
  },
  className: {
    description: 'Дополнительный CSS класс для обертки инпута',
    control: { type: 'text' }
  },
  pseudo: {
    description: 'Свойство, позволяющее отображать компонент как PseudoInput (не редактируемое поле)',
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
