export const argsTypes = {
  title: {
    description: 'Заголовок',
    control: { type: 'text' }
  },
  description: {
    description: 'Обычный текст внутри тултипа',
    control: { type: 'text' }
  },
  behavior: {
    description: 'Поведение тултипа',
    table: {
      defaultValue: {
        summary: 'hover'
      }
    },
    options: ['hover', 'click', 'focus'],
    control: { type: 'select' }
  },
  placement: {
    description: 'Расположение тултипа',
    table: {
      defaultValue: {
        summary: 'top'
      }
    },
    options: ['top', 'bottom', 'left', 'right'],
    control: { type: 'select' }
  },
  list: {
    description: 'Элементы маркированного списка'
  },
  render: {
    description: 'Кастомный ReactNode элемент внутри тултипа'
  },
  className: {
    description: 'Дополнительные классы для стилизации компонента'
  }
};

export default argsTypes;
