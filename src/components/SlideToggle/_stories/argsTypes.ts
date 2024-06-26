import { ESizeMapping } from '../enum';

const argsTypes = {
  isShow: {
    description: 'Флаг-условие отображение текстового окна',
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
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
  toggleContainerShadow: {
    description: 'Необязательное свойство. Флаг-условие отображение тени текстового окна',
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  children: {
    description: 'Компонент отображаемый при раскрытии компонента',
    control: { type: 'object' }
  },
  title: {
    description: 'Заголовок компонента, может быть строкой или JSX элементом',
    control: { type: 'text' }
  },
  after: {
    description: 'Дополнительный блок справа от заголовка, может быть любым ReactNode',
    control: { type: 'object' }
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
