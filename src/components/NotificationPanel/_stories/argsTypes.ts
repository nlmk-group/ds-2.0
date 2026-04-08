export const argsTypes = {
  title: {
    description: 'Заголовок панели уведомлений',
    table: {
      defaultValue: {
        summary: 'Уведомления'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  items: {
    description: 'Список категорий уведомлений',
    table: {
      type: {
        summary: 'INotificationItem[]'
      }
    },
    control: { type: 'object' }
  },
  onItemClick: {
    description: 'Обработчик клика по элементу',
    table: {
      type: {
        summary: '(value: string, index: number) => void'
      }
    },
    action: 'onItemClick'
  },
  className: {
    description: 'Дополнительный CSS класс',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  style: {
    description: 'Inline стили',
    table: {
      type: {
        summary: 'CSSProperties'
      }
    },
    control: { type: 'object' }
  }
};
