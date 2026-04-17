import { EClickAwayEvent } from '@components/ClickAwayListener/types';

export const argsTypes = {
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
  isViewCloseButton: {
    description: 'Отображает кнопку закрытия Drawer',
    table: {
      defaultValue: { summary: 'true' },
      type: { summary: 'boolean' }
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
  },
  clickAwayEventType: {
    description: `Тип события для закрытия панели при клике вне её области – <b>${Object.values(EClickAwayEvent).join(
      ' | '
    )}</b>`,
    table: {
      defaultValue: { summary: 'click' },
      type: { summary: 'string' }
    },
    options: Object.values(EClickAwayEvent),
    control: { type: 'select' }
  }
};
