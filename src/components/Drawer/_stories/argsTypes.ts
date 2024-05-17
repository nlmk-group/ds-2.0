export const argsTypes = {
  isOpen: {
    description: 'Определяет, открыт ли Drawer',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  onClose: {
    description: 'Callback, вызываемый при закрытии Drawer',
    action: 'закрыт Drawer'
  },
  position: {
    description: 'Позиция отображения Drawer',
    table: {
      defaultValue: {
        summary: 'right'
      }
    },
    options: ['left', 'right', 'top', 'bottom'],
    control: { type: 'radio' }
  },
  className: {
    description: 'Дополнительный класс для Drawer',
    control: { type: 'text' }
  },
  overlayClassName: {
    description: 'Дополнительный класс для оверлея Drawer',
    control: { type: 'text' }
  },
  children: {
    description: 'Содержимое Drawer',
    control: { type: 'text' }
  },
  width: {
    description: 'Ширина Drawer',
    control: { type: 'text' }
  },
  height: {
    description: 'Высота Drawer',
    control: { type: 'text' }
  },
  disableBackdropClick: {
    description: 'Отключает закрытие Drawer при клике на оверлей',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  overlay: {
    description: 'Отключает подсветку оверлея',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  }
};
