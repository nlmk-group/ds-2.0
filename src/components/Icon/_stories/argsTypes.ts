export const argsTypes = {
  color: {
    description: 'Цвет иконки',
    table: {
      defaultValue: {
        summary: 'primary'
      },
      type: {
        summary: 'string'
      }
    },
    options: [
      'action',
      'disabled',
      'error',
      'primary',
      'secondary',
      'inherit',
      'success',
      'warning'
    ],
    control: { type: 'select' }
  },
  size: {
    description: 'Размер иконки',
    table: {
      defaultValue: {
        summary: 24
      },
      type: {
        summary: 'number'
      }
    },
    options: [16, 24, 32],
    control: { type: 'select' }
  },
  containerSize: {
    description: 'Размер контейнера иконки',
    table: {
      defaultValue: {
        summary: 24
      },
      type: {
        summary: 'number'
      }
    },
    options: [16, 24, 32],
    control: { type: 'select' }
  }
};
