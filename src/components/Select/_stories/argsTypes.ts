import { customInputColors, sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  className: {
    description: 'Добавление кастомного CSS класса',
    control: { type: 'text' }
  },
  listMinWidth: {
    description: 'Минимальное значение ширины меню опций',
    control: { type: 'number' }
  },
  children: {
    description: 'Свойство которое позволяет передавать компонент (JSX.Element) для отображения в контейнер Select',
    control: { type: 'string' }
  },
  options: {
    description: 'Массив объектов, представляющих доступные опции для выбора',
    control: { type: 'object' }
  },
  label: {
    description: 'Строка для вспомогательного текста над Select',
    control: { type: 'text' }
  },
  multiple: {
    description: 'Условие, позволяющее выбирать несколько элементов',
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
  multilineOption: {
    description: 'Условие, позволяющее тексту опции переноситься на следующую строку',
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
    description: 'Количество элементов, отображаемых без скролла',
    control: { type: 'number' }
  },
  disabled: {
    description: 'Условие блокировки Select для выбора',
    control: { type: 'boolean' }
  },
  badgeAmount: {
    description: 'Номер для отображения в бадже вправом верхнем углу Select',
    control: { type: 'number' }
  },
  stealthy: {
    description: 'Условие для "незаметного" Select: без границ и бекграунда',
    control: { type: 'boolean' }
  },
  highlightSelected: {
    description: 'Условие для отображения иконки в выбраных опциях селекта',
    control: { type: 'boolean' }
  },
  activeSelectedValue: {
    description: 'Условие для выделения значения синим цветом, доступно только с опцией stealthy',
    control: { type: 'boolean' }
  },
  withoutCheckbox: {
    description: 'Условие для алтернативного отображения множественных опций. Работает только в случае множественного выбора',
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
  isAllSelectView: {
    description: 'Условие отображения опции "Выбрать все"',
    control: { type: 'boolean' }
  },
  allSelectText: {
    description: 'Текст для опции "Выбрать все"',
    control: { type: 'text' }
  },
  isSearchable: {
    description: 'Условие, позволяющее искать среди опций',
    control: { type: 'boolean' }
  },
  isClearSearchOnBlur: {
    description: 'Условие удаление поискового запроса при отработке onBlur на Input',
    control: { type: 'boolean' }
  },
  selected: {
    description: 'Выбранный(е) элемент(ы) (введите массив строк, разделенный запятыми)',
    control: { type: 'text' }
  },
  enableScrollToActiveOption: {
    description: 'Условие фокуса на опциях компонента при раскрытии списка',
    control: { type: 'text' }
  },
  onSelectionChange: {
    description: 'Callback при изменении выбранного элемента',
    action: 'изменено selection'
  },
  withPortal: {
    description: 'Условие оборачивания компонента в портал',
    control: { type: 'boolean' }
  },
  onEnterPress: {
    description: 'Callback при нажатии клавиши Enter',
    action: 'нажата клавиша Enter'
  },
  onBlur: {
    description: 'Callback при закрытии меню options',
    action: 'меню options закрылось'
  },
  onFocus: {
    description: 'Callback при открытии меню options',
    action: 'меню options открылось'
  },
  isClearInputOnSelect: {
    description: 'Удалить содержимое Input после выбора',
    control: { type: 'boolean' }
  },
  isLoading: {
    description: 'Состояние загрузки опций',
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
  onOpen: {
    description: 'Callback при открытии селекта для загрузки опций',
    action: 'загрузка опций при открытии'
  },
  onSearch: {
    description: 'Callback при вводе текста в поиск для асинхронной фильтрации',
    action: 'поиск опций'
  }
};
