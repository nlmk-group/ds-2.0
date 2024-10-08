import { sizeMapping, targetMapping } from '../enums';

export const argsTypes = {
  children: {
    description: 'Содержимое внутри ссылки, например, текст.',
    control: { type: 'ReactNode' }
  },
  className: {
    description: 'Пользовательский класс для настройки стилей Link.',
    control: { type: 'string' }
  },
  href: {
    description: 'URL, на который ссылается компонент.',
    control: { type: 'string' }
  },
  preventRedirect: {
    description:
      'Необязательный атрибут. Если установлено значение true, перехода по ссылке не будет, по умолчанию false.',
    control: { type: 'boolean' }
  },
  disabled: {
    description:
      'Необязательный атрибут. Если установлено значение true, ссылка будет некликабельной, по умолчанию false.',
    control: { type: 'boolean' }
  },
  size: {
    description: 'Определяет размер текста.',
    table: {
      defaultValue: {
        summary: sizeMapping.body
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(sizeMapping),
    control: { type: 'select' }
  },
  target: {
    description:
      'Необязательный атрибут. Определяет, как ссылка будет открываться, по умолчанию _parent. Примеры: _self, _blank, _top.',
    table: {
      defaultValue: {
        summary: targetMapping.parent
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(targetMapping),
    control: { type: 'select' }
  },
  iconLeft: {
    description: 'Необязательное свойство. Иконка или элемент, который будет отображаться слева от текста ссылки',
    control: { type: 'boolean' }
  },
  iconRight: {
    description: 'Необязательное свойство. Иконка или элемент, который будет отображаться справа от текста ссылки.',
    control: { type: 'boolean' }
  },
  onClick: {
    description: 'Callback при клике на ссылку',
    action: 'клик по ссылке'
  }
};
