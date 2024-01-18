import { orientationMapping, typeMapping } from '../enums';

const argsTypes = {
  children: {
    description: 'Содержимое, которое будет отображаться на разделителе, например текст или иконка.',
    control: { type: 'ReactNode' }
  },
  className: {
    description: 'Пользовательский класс для настройки стилей Divider.',
    control: { type: 'string' }
  },
  dashed: {
    description: 'Параметр, определяющий, будет ли граница пунктирной или сплошной.',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  orientation: {
    description: 'Определяет позицию текста или иконки относительно границы (left, center, right).',
    table: {
      defaultValue: {
        summary: orientationMapping.center
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(orientationMapping),
    control: { type: 'select' }
  },
  orientationSpace: {
    description: `Пользовательское значение для ширины пространства слева или справа от содержимого перед границей. Для правильной работы свойства, orientation должен быть ${orientationMapping.left} или ${orientationMapping.right}. Значение в пикселях.`,
    control: { type: 'number' }
  },
  type: {
    description:
      'Тип разделителя, определяет, будет ли разделитель горизонтальным или вертикальным. Вертикальный разделитель нельзя использовать в контейнере блочного стиля, иначе сам разделитель отображаться не будет. Приемлимые стили для вертикального контейнера: inline, inline-block, flex и т.д.',
    table: {
      defaultValue: {
        summary: typeMapping.horizontal
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(typeMapping),
    control: { type: 'select' }
  }
};

export default argsTypes;
