import { orientationMapping } from '../enums';
import { EFill, ESizes, EVariant } from '@components/Button/enums'

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
        summary: ESizes.m
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ESizes),
    control: { type: 'select' }
  },
  variant: {
    description: 'Необязательный атрибут. Определяет тип кнопок в группе.',
    table: {
      defaultValue: {
        summary: EVariant.primary
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EVariant),
    control: { type: 'select' }
  },
  fill: {
    description: 'Необязательный атрибут. Определяет тип заливки кнопок в группе.',
    table: {
      defaultValue: {
        summary: EVariant.primary
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EFill),
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
