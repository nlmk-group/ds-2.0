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
