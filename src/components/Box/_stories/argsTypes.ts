import { sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  children: {
    description: 'Элементы и компоненты внутри Box',
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
  paddingSpace: {
    description: `Размер отступов - <b>${Object.values(sizesMappingInput).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
  },
  height: {
    description: 'В компонент можно передать кастомное значение высоты в пикселях.',
    control: { type: 'text' }
  },
  width: {
    description: 'В компонент можно передать кастомное значение ширины в пикселях.',
    control: { type: 'text' }
  },
  gap: {
    description: 'В компонент можно передать кастомное значение отступов по умолчанию <b>var(--24-size)</b>.',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'var(--24-size)'
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
