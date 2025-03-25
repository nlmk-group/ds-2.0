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
    description: 'Функция для изменения текущей страницы. Опциональна при использовании onPageChange.'
  },
  onPageChange: {
    description: 'Колбэк, вызываемый при изменении страницы. Может использоваться вместо setCurrentPage.',
    table: {
      type: {
        summary: '(page: number) => void'
      }
    }
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
