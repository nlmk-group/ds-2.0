export const argsTypes = {
  children: {
    description: 'Карточки уведомлений (обычно NotificationCard)',
    table: { type: { summary: 'ReactNode' } },
    control: { type: null }
  },
  open: {
    description: 'Состояние раскрытия группы',
    table: {
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    control: { type: 'boolean' }
  },
  onOpenChange: {
    description: 'Коллбек при смене состояния раскрытия',
    table: { type: { summary: '(open: boolean) => void' } },
    action: 'onOpenChange'
  },
  className: {
    description: 'Дополнительный CSS класс',
    table: { type: { summary: 'string' } },
    control: { type: 'text' }
  },
  style: {
    description: 'Inline стили',
    table: { type: { summary: 'CSSProperties' } },
    control: { type: 'object' }
  }
};
