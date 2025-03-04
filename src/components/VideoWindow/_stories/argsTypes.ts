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
    }
  },
  id: {
    description: 'Id элемента',
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
  onClose: {
    description: 'Callback, вызываемый для закрытия окна с видео',
    action: 'окно закрыто',
    table: {
      type: {
        summary: '() => void'
      }
    }
  }
};

export default argsTypes;
