import React from 'react';

import { Badge } from '@components/index';

import icons from '../IconsDirectory';

const argsTypes = {
  name: {
    description: 'Имя иконки из каталога, включая размер. Например, IconSearchOutlined24.',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'TIconName',
        catalog: { href: './?path=/story/components-icon-stories--all-icons', label: 'Открыть каталог' }
      }
    },
    options: Object.values(icons).flatMap(group => Object.keys(group)),
    control: { type: 'select' }
  },
  color: {
    description: 'Цвет иконки',
    table: {
      defaultValue: {
        summary: 'inherit'
      },
      type: {
        summary:
          '"action" | "disabled" | "error" | "primary" | "secondary" | "inherit" | "success" | "warning" | "default"'
      }
    },
    options: ['action', 'disabled', 'error', 'primary', 'secondary', 'inherit', 'success', 'warning', 'default'],
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
