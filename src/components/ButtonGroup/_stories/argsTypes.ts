import { sizesMappingInput } from '@components/declaration';

import { gradientMapping, orientationMapping } from '../enums';

const argsTypes = {
  children: {
    description: 'Содержимое внутри ButtonGroup. Здесь далжны быть кнопки объединенные в группу',
    control: { type: 'ReactNode' }
  },
  className: {
    description: 'Пользовательский класс для настройки стилей ButtonGroup.',
    control: { type: 'string' }
  },
  disabled: {
    description: 'Условие блокировки доступа к копкам и применению стилей',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  size: {
    description: 'Необязательный атрибут. Определяет размер кнопок в группе.',
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
  variant: {
    description: 'Необязательный атрибут. Определяет тип кнопок в группе.',
    table: {
      defaultValue: {
        summary: gradientMapping.primary
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(gradientMapping),
    control: { type: 'select' }
  },
  orientation: {
    description: 'Необязательный атрибут. Определяет положение группы кнопок в пространстве.',
    table: {
      defaultValue: {
        summary: orientationMapping.horizontal
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(orientationMapping),
    control: { type: 'select' }
  }
};

export default argsTypes;
