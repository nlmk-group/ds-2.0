export const argsTypes = {
  container: {
    description: 'Создаёт строку сетки для вложенных колонок.',
    control: { type: 'boolean' }
  },
  size: {
    description: 'Количество колонок из 12. Для адаптивной ширины передайте объект с ключами xs, sm, md, lg или xl.',
    table: { type: { summary: 'TGridSize | IGridSize' } }
  },
  children: {
    description: 'Содержимое ячейки или вложенные колонки сетки.',
    control: { type: 'text' }
  },
  className: {
    description: 'В компонент можно передать альтернативные стили',
    control: { type: 'string' }
  },
  background: {
    description: 'В компонент можно передать цвет заднего фона',
    control: { type: 'color' }
  },
  color: {
    description: 'В компонент можно передать цвет',
    control: { type: 'color' }
  },
  height: {
    description: 'В компонент можно передать кастомное значение высоты в пикселях.',
    control: { type: 'text' }
  },
  width: {
    description: 'В компонент можно передать кастомное значение ширины в пикселях.',
    control: { type: 'text' }
  },
  maxWidth: {
    description: 'В компонент можно передать кастомное значение максимальной ширины контейнера.',
    control: { type: 'text' }
  },
  gap: {
    description: 'Расстояние между ячейками. В режиме container по умолчанию 0, в обычном Grid — 24 px.',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'container ? 0 : 24px'
      },
      type: {
        summary: 'string'
      }
    }
  },
  border: {
    description: 'Граница.',
    control: { type: 'text' }
  },
  borderRadius: {
    description: 'Радиус границ компонента.',
    control: { type: 'range' }
  },
  display: {
    description: 'Тип display для flex контейнера.',
    table: {
      defaultValue: {
        summary: 'flex'
      },
      type: {
        summary: 'string'
      }
    },
    options: ['flex', 'block', 'inline-block', 'grid', 'none'],
    control: { type: 'select' }
  },
  flexDirection: {
    description: 'Определяет направление элементов внутри flex контейнера.',
    table: {
      type: {
        summary: 'string'
      }
    },
    options: ['row', 'column', 'row-reverse', 'column-reverse'],
    control: { type: 'select' }
  },
  justifyContent: {
    description: 'Определяет выравнивание элементов вдоль главной оси контейнера.',
    table: {
      type: {
        summary: 'string'
      }
    },
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    control: { type: 'select' }
  },
  alignItems: {
    description: 'Определяет выравнивание элементов вдоль поперечной оси контейнера.',
    table: {
      type: {
        summary: 'string'
      }
    },
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    control: { type: 'select' }
  },
  flexWrap: {
    description: 'Определяет, могут ли элементы обертываться на новую строку.',
    table: {
      type: {
        summary: 'string'
      }
    },
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    control: { type: 'select' }
  }
};
