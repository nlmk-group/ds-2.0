import { EAutocompleteSize } from '../enums';

export const argsTypes = {
  selected: {
    description: 'Выбранный элемент (объект IAutocompleteValue)',
    control: { type: 'object' }
  },
  items: {
    description: 'Массив опций для автозаполнения (IAutocompleteValue[]). Может быть null.',
    control: { type: 'array' }
  },
  isLoading: {
    description: 'Состояние загрузки (true/false)',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  nameGetter: {
    description: 'Функция, возвращающая строку для отображения в списке опций.',
    control: { type: 'function' }
  },
  renderLabel: {
    description: 'Функция для кастомного рендера содержимого опции.',
    control: { type: 'function' }
  },
  onChange: {
    description: 'Вызывается при изменении выбранного элемента.',
    action: 'onChange'
  },
  onFullItemSelect: {
    description: 'Вызывается при выборе опции для возвращения её полного объекта.',
    action: 'onFullItemSelect'
  },
  onDebouncedInputChange: {
    description: 'Вызывается после окончания ввода (debounce). Можно использовать для загрузки данных.'
  },
  disabled: {
    description: 'Отключает ввод и выбор',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  helperText: {
    description: 'Сообщение об ошибке или подсказка',
    control: { type: 'text' }
  },
  error: {
    description: 'Флаг ошибки',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  noSelectionItem: {
    description: 'Объект, который будет считаться "пустым" значением',
    control: { type: 'object' }
  },
  showTooltip: {
    description: 'Показывать ли tooltip при наведении на опции',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  readOnly: {
    description: 'Режим только для чтения',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  isFullWidth: {
    description: 'Растягивать компонент на всю ширину',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  placeholder: {
    description: 'Текст-плейсхолдер для поля ввода',
    control: { type: 'text' }
  },
  label: {
    description: 'Метка для поля ввода',
    control: { type: 'text' }
  },
  withPortal: {
    description: 'Рендерить ли список через портал',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  portalContainerId: {
    description: 'ID контейнера для портала',
    control: { type: 'text' }
  },
  size: {
    description: 'Размер компонента: s, m, xs',
    table: {
      defaultValue: {
        summary: 'm'
      }
    },
    options: Object.values(EAutocompleteSize),
    control: { type: 'select' }
  },
  onLoadOptions: {
    description: 'Колбэк для загрузки данных при вводе текста (после debounce)'
  },
  canLoadMore: {
    description: 'Можно ли догружать данные при скролле',
    table: {
      defaultValue: {
        summary: 'false'
      }
    },
    control: { type: 'boolean' }
  },
  onLoadMore: {
    description: 'Колбэк для догрузки данных при достижении конца списка',
    action: 'onLoadMore'
  },
  onCreateItem: {
    description: 'Колбэк для создания нового элемента, если нет результатов',
    table: {
      defaultValue: {
        summary: undefined
      }
    }
  },
  noResultsText: {
    description: 'Текст при отсутствии результатов',
    table: {
      defaultValue: {
        summary: 'No results for your request'
      }
    },
    control: { type: 'text' }
  },
  createItemText: {
    description: 'Функция, возвращающая текст для опции создания нового элемента',
    control: { type: 'function' }
  },
  totalText: {
    description: 'Текст для отображения общего количества элементов',
    table: {
      defaultValue: {
        summary: 'Всего:'
      }
    },
    control: { type: 'text' }
  },
  debounceDelay: {
    description: 'Задержка в миллисекундах для debounce при вводе',
    table: {
      defaultValue: {
        summary: '500'
      }
    },
    control: { type: 'number' }
  },
  showTotalCount: {
    description: 'Показывать ли общее количество элементов',
    table: {
      defaultValue: {
        summary: 'true'
      }
    },
    control: { type: 'boolean' }
  },
  showEmptyDropdown: {
    description: 'Показывать ли дропдаун при отсутствии результатов',
    table: {
      defaultValue: {
        summary: 'true'
      }
    },
    control: { type: 'boolean' }
  },
  className: {
    description: 'Дополнительный CSS-класс для контейнера',
    control: { type: 'text' }
  },
  style: {
    description: 'Inline-стили для кастомизации контейнера',
    control: { type: 'object' }
  }
};
