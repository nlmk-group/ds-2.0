const argsTypes = {
  videoUrl: {
    description: 'Ссылка на видеофайл или поток',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    },
    required: true
  },
  id: {
    description: 'Уникальный идентификатор видео элемента',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    }
  },
  title: {
    description: 'Заголовок видео',
    table: {
      defaultValue: {
        summary: ''
      },
      type: {
        summary: 'string'
      }
    }
  },
  autoPlay: {
    description: 'Включает автоматическое воспроизведение видео при открытии',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  resizable: {
    description: 'Включает возможность изменения размера окна',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  draggable: {
    description: 'Включает возможность перетаскивания окна',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  draggableStartPosition: {
    description: 'Начальная позиция окна при перетаскивании',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: '{ x: number; y: number }'
      }
    }
  },
  onClose: {
    description: 'Callback, вызываемый для закрытия окна с видео',
    action: 'окно закрыто',
    table: {
      type: {
        summary: '() => void'
      }
    },
    required: true
  },
  className: {
    description: 'Дополнительный CSS класс',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  style: {
    description: 'Дополнительные CSS стили',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'CSSProperties'
      }
    }
  }
};

export default argsTypes;
