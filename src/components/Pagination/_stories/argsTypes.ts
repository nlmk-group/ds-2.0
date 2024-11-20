export const argsTypes = {
  currentPage: {
    description: 'Текущая выбранная страница.',
    table: {
      type: {
        summary: 'number'
      },
      defaultValue: {
        summary: 0
      }
    },
    control: {
      type: 'number'
    }
  },
  setCurrentPage: {
    description: 'Callback, вызываемый при изменении страницы.'
  },
  elementsPerPage: {
    description: 'Количество записей на странице.',
    table: {
      type: {
        summary: 'number'
      },
      defaultValue: {
        summary: 0
      }
    },
    control: {
      type: 'number'
    }
  },
  setElementsPerPage: {
    description: 'Callback, вызываемый при изменении количества записей на странице.'
  },
  withSelect: {
    description: 'Boolean-флаг, который включает/выключает возможность выбора количества записей на странице.',
    table: {
      type: {
        summary: 'string'
      }
    }
  },
  maxPageCount: {
    description: 'Максимальное количество страниц.',
    table: {
      type: {
        summary: 'number'
      },
      defaultValue: {
        summary: 0
      }
    },
    control: {
      type: 'number'
    }
  },
  className: {
    description: 'Стили для компонента.',
    table: {
      type: {
        summary: 'string'
      }
    }
  }
};
