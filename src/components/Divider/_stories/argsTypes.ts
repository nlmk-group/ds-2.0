import { EDividerOrientation, EDividerType } from '../enums';

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
        summary: EDividerOrientation.center
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EDividerOrientation),
    control: { type: 'select' }
  },
  orientationSpace: {
    description: `Пользовательское значение для ширины пространства слева или справа от содержимого перед границей. Для правильной работы свойства, orientation должен быть ${EDividerOrientation.left} или ${EDividerOrientation.right}. Значение в пикселях.`,
    control: { type: 'number' }
  },
  type: {
    description:
      'Тип разделителя, определяет, будет ли разделитель горизонтальным или вертикальным. Вертикальный разделитель нельзя использовать в контейнере блочного стиля, иначе сам разделитель отображаться не будет. Приемлимые стили для вертикального контейнера: inline, inline-block, flex и т.д.',
    table: {
      defaultValue: {
        summary: EDividerType.horizontal
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EDividerType),
    control: { type: 'select' }
  }
};

export default argsTypes;
