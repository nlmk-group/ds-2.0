import { EAlertSeverity } from '../enums';

export const argsTypes = {
  title: {
    description: 'Заголовок компонента',
    control: { type: 'text' }
  },
  severity: {
    description: `Тип сообщения, влияющий на его фоновый цвет - <b>${Object.values(EAlertSeverity).join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: EAlertSeverity.success
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EAlertSeverity),
    control: { type: 'select' }
  },
  className: {
    description: 'Дополнительные CSS классы',
    control: { type: 'string' }
  },
  action: {
    description: 'Дополнительный элемент действия',
    control: { type: null }
  },
  close: {
    description: 'Функция обратного вызова для закрытия Alert',
    action: 'close',
    control: { type: null }
  }
};

export default argsTypes;
