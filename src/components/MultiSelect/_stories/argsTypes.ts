import { customInputColors, sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  value: {
    description: 'Массив выбранных значений',
    control: { type: 'array' }
  },
  onChange: {
    description: 'Обработчик изменения выбранных значений',
    action: 'onChange'
  },
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  portalContainerId: {
    description: 'id рутового контейнера для создания портала',
    control: { type: 'text' }
  },
  children: {
    description: 'Дочерние элементы селекта (опции меню)',
    control: { type: 'text' }
  },
  menuWidth: {
    description: 'Ширина меню селекта',
    control: { type: 'text' }
  },
  placeholder: {
    description: 'Плейсхолдер для инпута селекта',
    control: { type: 'text' }
  },
  label: {
    description: 'Лейбл инпута в селекте',
    control: { type: 'text' }
  },
  withPortal: {
    description: 'Флаг, указывающий, должно ли меню рендериться в портале',
    control: { type: 'boolean' }
  },
  disabled: {
    description: 'Флаг доступности селекта',
    control: { type: 'boolean' }
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
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
  },
  scrollingItems: {
    description: 'Количество элементов после которого включается прокрутка',
    control: { type: 'number' }
  },
  noOptionsText: {
    description: 'Текст, отображаемый когда нет доступных опций',
    control: { type: 'text' }
  },
  searchable: {
    description: 'Флаг, указывающий, доступен ли поиск',
    control: { type: 'boolean' }
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
    description: 'Кастомные стили для самого селекта (контейнера)',
    control: { type: 'object' }
  },
  inputStyle: {
    description: 'Кастомные стили для внутреннего Input компонента',
    control: { type: 'object' }
  },
  className: {
    description: 'Добавление самостоятельного CSS класса',
    control: { type: 'text' }
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
    description: 'Строка для вспомогательного текста под инпутом. Может быть как текстом, так и элементом ReactNode',
    control: { type: 'text' }
  },
  valueSeparator: {
    description: 'Разделитель для отображения выбранных значений',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: ', '
      }
    }
  },
  maxVisibleTags: {
    description: 'Максимальное количество отображаемых тегов (остальные будут под "+N")',
    control: { type: 'number' },
    table: {
      defaultValue: {
        summary: 3
      }
    }
  },
  showCounter: {
    description: 'Флаг для отображения счетчика выбранных элементов',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  allSelectedText: {
    description: 'Текст при выборе всех элементов',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'Все'
      }
    }
  },
  selectAllLabel: {
    description: 'Лейбл для кнопки "Выбрать все"',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'Выбрать все'
      }
    }
  },
  showSelectAll: {
    description: 'Флаг отображения кнопки "Выбрать все"',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  clearSearchOnSelect: {
    description: 'Очищать поле поиска при выборе значения',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
