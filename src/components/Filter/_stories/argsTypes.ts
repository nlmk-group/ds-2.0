export const argsTypes = {
  filterTypeOptions: {
    description: 'Массив опций для "типов фильтра" (при клике на иконку)',
    control: { type: 'object' }
  },
  filterValueOptions: {
    description: 'Массив опций для "значений" (при фокусе на инпут)',
    control: { type: 'object' }
  },
  onFilterChange: {
    description:
      'Коллбэк, вызывается при изменении value или типа фильтра. В режиме multiselect параметр value всегда undefined.',
    action: 'onFilterChange'
  },
  defaultValue: {
    description: 'Значение в инпуте по умолчанию',
    control: { type: 'text' }
  },
  defaultFilterType: {
    description: 'Начальный тип фильтра (если не задан, берётся первый из filterTypeOptions)',
    control: { type: 'text' }
  },
  withPortal: {
    description: 'Нужно ли рендерить меню через портал',
    control: { type: 'boolean' }
  },
  portalContainerId: {
    description: 'ID DOM-элемента для портала',
    control: { type: 'text' }
  },
  mode: {
    description: 'Режим работы фильтра',
    options: ['autocomplete', 'multiselect'],
    control: { type: 'inline-radio' },
    table: {
      defaultValue: { summary: 'autocomplete' }
    }
  },
  selectedValues: {
    description: 'Controlled: массив выбранных значений (для multiselect)',
    control: { type: 'object' }
  },
  defaultSelectedValues: {
    description: 'Uncontrolled: начальный массив выбранных значений (для multiselect)',
    control: { type: 'object' }
  },
  onSelectedValuesChange: {
    description: 'Коллбэк, вызывается при изменении набора выбранных значений в режиме multiselect',
    action: 'onSelectedValuesChange'
  },
  placeholder: {
    description: 'Placeholder для инпута',
    control: { type: 'text' }
  },
  className: {
    description: 'Дополнительный CSS-класс для корневого элемента',
    control: { type: 'text' }
  }
};
