const argsTypes = {
  id: {
    description: 'Индентификатор лоадера',
    control: { type: 'text' }
  },
  className: {
    description: 'Класс стиля лоадера',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'skeleton-loading'
      }
    }
  },
  count: {
    description: 'Количество лоадеров на странице',
    control: { type: 'number', default: 1 },
    table: {
      defaultValue: {
        summary: 1
      }
    }
  },
  width: {
    description: 'Ширина лоадера',
    control: { type: 'string' },
    table: {
      defaultValue: {
        summary: '200px'
      }
    }
  },
  height: {
    description: 'Длина лоадера',
    control: { type: 'string' },
    table: {
      defaultValue: {
        summary: '100px'
      }
    }
  }
};

export default argsTypes;
