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
    description: 'HTML цвет иконки',
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
  size: {
    description: 'Физический размер иконки',
    table: {
      defaultValue: {
        summary: '24'
      },
      type: {
        summary: 'number'
      }
    },
    options: [16, 24, 32],
    control: { type: 'select' }
  }
};

export default argsTypes;
