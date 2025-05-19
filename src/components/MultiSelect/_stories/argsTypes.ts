import { customInputColors, sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  value: {
    description: 'Массив выбранных значений',
    control: { type: 'object' },
    table: {
      type: { summary: 'Array<string | number>' },
      defaultValue: { summary: '[]' }
    }
  },
  onChange: {
    description: 'Callback функция, вызываемая при изменении выбранных значений',
    action: 'onChange',
    table: {
      type: { summary: '(values: Array<string | number>) => void' }
    }
  },
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  portalContainerId: {
    description: 'ID контейнера для портала',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'root' }
    }
  },
  children: {
    description: 'Дочерние элементы селекта (опции меню)',
    control: { type: 'text' }
  },
  menuWidth: {
    description: 'Ширина выпадающего меню',
    control: { type: 'text' },
    table: {
      type: { summary: 'string | number' }
    }
  },
  placeholder: {
    description: 'Плейсхолдер для поля ввода',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' }
    }
  },
  label: {
    description: 'Метка для поля ввода',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' }
    }
  },
  withPortal: {
    description: 'Рендерит выпадающий список в портале',
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  disabled: {
    description: 'Отключает компонент',
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  onBlur: {
    description: 'Обработчик закрытия меню options',
    action: 'onBlur'
  },
  onFocus: {
    description: 'Обработчик открытия меню options',
    action: 'onFocus'
  },
  color: {
    description: 'Цвет компонента',
    table: {
      defaultValue: {
        summary: customInputColors.default
      }
    },
    options: Object.values(customInputColors),
    control: { type: 'select' }
  },
  size: {
    description: 'Размер компонента',
    control: { type: 'select' },
    options: ['xs', 's', 'm', 'l', 'xl'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'm' }
    }
  },
  scrollingItems: {
    description: 'Количество элементов, отображаемых в выпадающем списке без скролла',
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
  },
  noOptionsText: {
    description: 'Текст, отображаемый когда нет доступных опций',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Ничего не найдено' }
    }
  },
  searchable: {
    description: 'Включает возможность поиска по опциям',
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  name: {
    description: 'Name элемента, используется для ссылки на элемент',
    control: { type: 'text' }
  },
  onEnterPress: {
    description: 'Обработчик нажатия клавиши Enter',
    action: 'onEnterPress'
  },
  style: {
    description: 'Дополнительные CSS стили',
    control: { type: 'object' },
    table: {
      type: { summary: 'CSSProperties' }
    }
  },
  className: {
    description: 'Дополнительный CSS класс',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' }
    }
  },
  colored: {
    description: 'Условие применения стилей подсветки',
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
  },
  helperText: {
    description: 'Вспомогательный текст под полем ввода',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' }
    }
  },
  valueSeparator: {
    description: 'Разделитель между выбранными значениями',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ', ' }
    }
  },
  allSelectedText: {
    description: 'Текст, отображаемый когда выбраны все опции',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Все' }
    }
  },
  selectAllLabel: {
    description: 'Текст для опции "Выбрать все"',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Выбрать все' }
    }
  },
  showSelectAll: {
    description: 'Показывает опцию "Выбрать все"',
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
};
