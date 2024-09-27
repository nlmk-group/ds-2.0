import { sizesMapping } from '@components/declaration';

import { EIndicatorStatusMapping, EOrientationMapping } from '../enums';

const argsTypes = {
  children: {
    description:
      'Свойство компонента Card, которое позволяет передавать элементы JSX или ReactNode для отображения в Card',
    control: { type: 'text' }
  },
  className: {
    description: 'Пользовательский класс для настройки стилей Card.',
    control: { type: 'string' }
  },
  orientation: {
    description: 'Определяет позиции элементов для компонента Card. По умолчанию vertical',
    table: {
      defaultValue: {
        summary: EOrientationMapping.vertical
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EOrientationMapping),
    control: { type: 'select' }
  },
  indicatorSize: {
    description: 'Необязательный атрибут. Ширина индикатора.',
    table: {
      defaultValue: {
        summary: sizesMapping.s
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(sizesMapping),
    control: { type: 'select' }
  },
  indicatorStatus: {
    description: 'Необязательный атрибут. Цвет индикатора.',
    table: {
      defaultValue: {
        summary: EIndicatorStatusMapping.success
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EIndicatorStatusMapping),
    control: { type: 'select' }
  }
};

export default argsTypes;
