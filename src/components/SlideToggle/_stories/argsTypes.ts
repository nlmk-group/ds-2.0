import { ESizeMapping } from '../enum';

const argsTypes = {
  onToggle: {
    description: 'Функция раскрытия / закрытия текстового окна'
  },
  size: {
    description: 'Размер компонента',
    table: {
      defaultValue: {
        summary: ESizeMapping.default
      }
    },
    options: Object.values(ESizeMapping),
    control: { type: 'select' }
  },
  children: {
    description: 'Компонент отображаемый при раскрытии компонента',
    control: { type: 'object' }
  },
  title: {
    description: 'Заголовок компонента, может быть строкой или JSX элементом',
    table: {
      defaultValue: {
        summary: 'Заголовок'
      }
    },
    control: { type: 'text' }
  },
  after: {
    description: 'Дополнительный блок справа от заголовка, может быть любым ReactNode',
    control: { type: 'array' }
  },
  iconWrapperId: {
    description: 'ID для элемента обёртки иконки',
    control: { type: 'text' }
  },
  titleWrapperId: {
    description: 'ID для элемента обёртки заголовка',
    control: { type: 'text' }
  },
  afterWrapperId: {
    description: 'ID для элемента обёртки дополнительного блока действий',
    control: { type: 'text' }
  },
  contentWrapperId: {
    description: 'ID для элемента обёртки контента',
    control: { type: 'text' }
  },
  className: {
    description: 'CSS класс для настройки стилей компонента',
    control: { type: 'text' }
  }
};

export default argsTypes;
