const argsTypes = {
  data: {
    description: 'Массив данных для построения дерева',
    table: {
      type: {
        summary: 'TNodeItem[]'
      }
    }
  },
  onSelectedNode: {
    description: 'Callback, вызываемый при выборе узла. Возвращает информацию о выбранном узле и всех выбранных узлах',
    action: 'выбран узел',
    table: {
      type: {
        summary: '(e: TSelectedNodeEvent) => void'
      }
    }
  },
  onDataAfterDrag: {
    description: 'Callback, вызываемый после перетаскивания узла. Возвращает обновленный массив данных',
    action: 'перемещен узел',
    table: {
      type: {
        summary: '(e: TNodeItem[]) => void'
      }
    }
  },
  checkable: {
    description: 'Включает отображение чекбоксов с каскадным выделением',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  draggable: {
    description: 'Включает возможность перетаскивания узлов',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  checkableSimple: {
    description: 'Включает отображение простых чекбоксов без каскадного выделения',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  rowHeight: {
    description: 'Определяет высоту строки узла',
    table: {
      defaultValue: {
        summary: 's'
      },
      type: {
        summary: 'ERowHeight'
      }
    },
    options: ['m', 's', 'xs'],
    control: { type: 'select' }
  },
  initialCheckedKeys: {
    description: 'Массив ключей элементов, которые должны быть отмечены (выбраны) при первом рендере',
    table: {
      type: {
        summary: 'Key[]'
      }
    }
  },
  initialExpandedKeys: {
    description: 'Массив ключей элементов, которые должны быть развернуты при первом рендере',
    table: {
      type: {
        summary: 'Key[]'
      }
    }
  }
};

export default argsTypes;
