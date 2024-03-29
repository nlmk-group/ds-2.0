const argsTypes = {
  className: {
    description: 'Пользовательский класс для настройки стилей Switch.',
    control: { type: 'string' }
  },
  checked: {
    description: 'Отвечает за состояние переключателя (включен/выключен).',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  onChange: {
    description: 'Вызывается при изменении состояния переключателя.',
    control: { type: 'boolean' }
  },
  label: {
    description: 'Текст, отображающийся рядом с переключателем.',
    table: {
      defaultValue: {
        summary: 'Произвольный текст'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  disabled: {
    description: 'Отключает функциональность переключателя.',
    control: { type: 'boolean' }
  },
  inactiveIcon: {
    description: 'Иконка в не активном состоянии',
    control: { type: 'string' }
  },
  activeIcon: {
    description: 'Иконка в активном состоянии',
    control: { type: 'string' }
  }
};

export default argsTypes;
