const argsTypes = {
  label: {
    description: 'Метка компонента ComboBox',
    control: { type: 'text' },
    defaultValue: 'Выберите опцию'
  },
  isDisabled: {
    description: 'Отключает возможность взаимодействия с компонентом',
    control: { type: 'boolean' },
    defaultValue: false
  },
  isResize: {
    description: 'Включает возможность изменения размера выпадающего списка',
    control: { type: 'boolean' },
    defaultValue: false
  },
  dropdownWidth: {
    description: 'Ширина выпадающего списка (в пикселях или %)',
    control: { type: 'text' },
    defaultValue: ''
  },
  dropdownHeight: {
    description: 'Высота выпадающего списка (в пикселях или %)',
    control: { type: 'text' },
    defaultValue: ''
  },
  dropdownMinHeight: {
    description: 'Минимальная высота выпадающего списка',
    control: { type: 'number' },
    defaultValue: 150
  },
  dropdownMinWidth: {
    description: 'Минимальная ширина выпадающего списка',
    control: { type: 'number' },
    defaultValue: 150
  },
  inputMinWidth: {
    description: 'Минимальная ширина поля ввода',
    control: { type: 'number' },
    defaultValue: 150
  },
  initialValue: {
    description: 'Начальное выбранное значение (массив объектов Option)',
    control: { type: 'object' },
    defaultValue: []
  },
  children: {
    description: 'Содержимое выпадающего списка (например, список опций)',
    control: { type: 'object' }
  },
  displayEnumerated: {
    description: 'Отображать выбранные элементы в виде перечисления',
    control: { type: 'boolean' },
    defaultValue: false
  },
  displayChildCount: {
    description: 'Отображать количество дочерних элементов (при множественном выборе)',
    control: { type: 'boolean' },
    defaultValue: false
  },
  tooltipDescription: {
    description: 'Описание для всплывающей подсказки, может быть строкой или массивом Option',
    control: { type: 'text' },
    defaultValue: ''
  },
  countOnlyLevel: {
    description: 'Уровень, для которого производится подсчет выбранных элементов',
    control: { type: 'number' },
    defaultValue: 0
  },
  color: {
    description: 'Цветовая схема компонента (например, primary, secondary и т.д.)',
    control: { type: 'text' },
    defaultValue: 'primary'
  },
  className: {
    description: 'Дополнительный CSS класс для корневого элемента',
    control: { type: 'text' },
    defaultValue: ''
  },
  style: {
    description: 'Дополнительные CSS стили для корневого элемента',
    control: { type: 'object' },
    defaultValue: {}
  },
  dropdownClassName: {
    description: 'Дополнительный CSS класс для выпадающего списка',
    control: { type: 'text' },
    defaultValue: ''
  },
  dropdownStyle: {
    description: 'Дополнительные CSS стили для выпадающего списка',
    control: { type: 'object' },
    defaultValue: {}
  },
  inputClassName: {
    description: 'Дополнительный CSS класс для поля ввода',
    control: { type: 'text' },
    defaultValue: ''
  },
  inputStyle: {
    description: 'Дополнительные CSS стили для поля ввода',
    control: { type: 'object' },
    defaultValue: {}
  },
  autoFocusSearch: {
    description: 'Автоматический фокус на поиске при открытии выпадающего списка',
    control: { type: 'boolean' },
    defaultValue: false
  },
  autoExpandOnSearch: {
    description: 'Автоматическое раскрытие дерева элементов при поиске',
    control: { type: 'boolean' },
    defaultValue: false
  }
};

export default argsTypes;
