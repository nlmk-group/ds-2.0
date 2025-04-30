import React from 'react';

import { Badge } from '@components/index';

import icons from '../IconsDirectory';

const argsTypes = {
  name: {
    description: 'Имя иконки',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    },
    options: [...Object.keys({ ...icons[16], ...icons[24], ...icons[32] })],
    control: { type: 'select' }
  },
  color: {
    description: 'Цвет иконки',
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: '"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning"'
      }
    },
    options: ['action', 'disabled', 'error', 'primary', 'secondary', 'inherit', 'success', 'warning'],
    control: { type: 'select' }
  },
  htmlColor: {
    description: 'HTML цвет иконки. Чтобы его включить нужно в опциях цвета выбрать inherit.',
    table: {
      defaultValue: {
        summary: undefined
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'color' }
  },
  containerSize: {
    description: 'Размер контейнера иконки',
    table: {
      defaultValue: {
        summary: '24'
      },
      type: {
        summary: '"16" | "24" | "32"'
      }
    },
    options: [16, 24, 32],
    control: { type: 'select' }
  },
  badge: {
    description: 'JSX код компонента Badge',
    table: {
      defaultValue: {
        summary: "<Badge size='s' color='error'>1</Badge>"
      },
      type: {
        summary: 'ReactNode'
      }
    },
    control: { type: 'boolean' },
    mapping: {
      false: '',
      true: (
        <Badge size="s" color="error">
          1
        </Badge>
      )
    }
  }
};

const iconUnitArgsTypes = {
  unit: {
    description: 'Строковое значение, отображаемое в иконке. Например, кг, см и тд',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  className: {
    description: 'Дополнительный CSS класс',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  style: {
    description: 'Inline CSS стили',
    table: {
      type: {
        summary: 'CSSProperties'
      }
    },
    control: { type: 'object' }
  }
};

export { argsTypes, iconUnitArgsTypes };
