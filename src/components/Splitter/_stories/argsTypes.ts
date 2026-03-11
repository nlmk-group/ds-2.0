const argsTypes = {
  topComponent: {
    description: 'Верхний компонент',
    type: {
      summary: 'ReactNode'
    }
  },
  bottomComponent: {
    description: 'Нижний компонент',
    type: {
      summary: 'ReactNode'
    }
  },
  orientation: {
    description: 'Ориентация разделителя',
    type: {
      summary: 'ESplitterOrientation'
    }
  },
  topComponentSize: {
    description: 'Размер верхней панели',
    type: {
      summary: 'number'
    }
  },
  bottomComponentSize: {
    description: 'Размер нижней панели',
    type: {
      summary: 'number'
    }
  },
  isShowBottomComponent: {
    description: 'Показ нижней панели',
    type: {
      summary: 'boolean'
    }
  }
};

export default argsTypes;
