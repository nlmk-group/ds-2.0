export const argsTypes = {
  isOpen: {
    description: 'Определяет, открыто ли модальное окно',
    control: { type: 'boolean' },
    defaultValue: false
  },
  onClose: {
    description: 'Функция, вызываемая при закрытии модального окна',
    action: 'modalClosed'
  },
  children: {
    description: 'Содержимое модального окна',
    control: { type: 'text' }
  },
  isDraggable: {
    description: 'Указывает, можно ли перетаскивать модальное окно',
    control: { type: 'boolean' },
    defaultValue: false
  },
  isResizable: {
    description: 'Указывает, можно ли изменять размер модального окна',
    control: { type: 'boolean' },
    defaultValue: false
  },
  disableBackdropClick: {
    description: 'Указывает, можно ли закрыть модальное окно только по клику на крестик',
    control: { type: 'boolean' },
    defaultValue: false
  },
  disablePageScroll: {
    description: 'Блокирует скролл на странице при открытом модальном окне',
    control: { type: 'boolean' }
  },
  onEscapeDown: {
    description: 'Функция, вызываемая при нажатии клавиши Escape',
    action: 'escapePressed'
  },
  className: {
    description: 'Дополнительный класс для стилизации',
    control: { type: 'text' }
  }
};
