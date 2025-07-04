export const argsTypes = {
  children: {
    description: 'Элементы и компоненты внутри Box',
    control: { type: 'text' }
  },
  className: {
    description: 'Дополнительные CSS классы',
    control: { type: 'text' }
  },
  background: {
    description: 'Цвет заднего фона',
    control: { type: 'color' }
  },
  color: {
    description: 'Цвет текста',
    control: { type: 'color' },
    table: {
      defaultValue: {
        summary: 'var(--steel-90)'
      }
    }
  },
  p: {
    description: 'Базовый padding для всех сторон (px или строка)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  px: {
    description: 'Горизонтальный padding (перезаписывает p для left/right)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  py: {
    description: 'Вертикальный padding (перезаписывает p для top/bottom)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  pt: {
    description: 'Padding сверху (наивысший приоритет)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  pb: {
    description: 'Padding снизу (наивысший приоритет)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  pl: {
    description: 'Padding слева (наивысший приоритет)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  pr: {
    description: 'Padding справа (наивысший приоритет)',
    control: { type: 'number', min: 0, max: 100, step: 1 }
  },
  height: {
    description: 'Высота контейнера',
    control: { type: 'number', min: 0, max: 500, step: 1 }
  },
  width: {
    description: 'Ширина контейнера',
    control: { type: 'number', min: 0, max: 500, step: 1 }
  },
  maxWidth: {
    description: 'Максимальная ширина контейнера',
    control: { type: 'number', min: 0, max: 1000, step: 1 }
  },
  gap: {
    description: 'Промежуток между дочерними элементами',
    control: { type: 'number', min: 0, max: 50, step: 1 },
    table: {
      defaultValue: {
        summary: '24px'
      }
    }
  },
  border: {
    description: 'CSS свойство border',
    control: { type: 'text' }
  },
  borderRadius: {
    description: 'Радиус скругления углов',
    control: { type: 'range', min: 0, max: 50, step: 1 }
  },
  display: {
    description: 'CSS свойство display',
    table: {
      defaultValue: {
        summary: 'flex'
      }
    },
    options: ['flex', 'block', 'inline-block', 'inline-flex', 'grid', 'inline-grid', 'none'],
    control: { type: 'select' }
  },
  flexDirection: {
    description: 'Направление flex контейнера',
    options: ['row', 'column', 'row-reverse', 'column-reverse'],
    control: { type: 'select' }
  },
  justifyContent: {
    description: 'Выравнивание по главной оси',
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    control: { type: 'select' }
  },
  alignItems: {
    description: 'Выравнивание по поперечной оси',
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    control: { type: 'select' }
  },
  flexWrap: {
    description: 'Перенос flex элементов',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    control: { type: 'select' }
  },
  st: {
    description: 'Дополнительные inline стили (объект)',
    control: { type: 'object' }
  }
};