import { customInputColors, sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
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
    description: 'Выбранный(е) элемент(ы) (введите строку или массив строк, разделенный запятыми)',
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
  }
};
