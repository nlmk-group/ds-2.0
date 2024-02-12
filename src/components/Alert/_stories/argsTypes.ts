import { severityMapping } from '../enums';

export const argsTypes = {
  title: {
    description: 'Заголовок компонента',
    control: { type: 'text' }
  },
  severity: {
    description: `Тип сообщения, влияющий на его фоновый цвет - <b>${Object.values(severityMapping).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: severityMapping.success
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(severityMapping),
    control: { type: 'select' }
  },
  close: {
    description: 'Свойство добавления действия для закрытия компонента',
    control: { type: 'boolean' }
  },
  action: {
    description: 'Свойство добавления компонента альтернативного действия',
    control: { type: 'text' }
  },
  className: {
    description: 'В компонент можно передать альтернативные стили',
    control: { type: 'string' }
  },
  props: {
    description: 'В компонент можно передавать event handling onClick, onMouseEnter, onMouseLeave и т.д.'
  }
};

export default argsTypes;
