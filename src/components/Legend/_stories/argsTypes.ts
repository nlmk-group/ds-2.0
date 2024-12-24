import { ELegendType } from '../enums';
import { DEFAULT_LABEL } from '../subcomponents/DropdownLegend/constants';

export const argsTypes = {
  type: {
    description: `Тип отображения элемента – <b>${Object.values(ELegendType).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: ELegendType.VIEW
      },
      type: {
        summary: Object.values(ELegendType).join(' | ')
      }
    },
    options: Object.values(ELegendType),
    control: { type: 'select' }
  },
  color: {
    description: 'Объект цвета элемента',
    table: { type: { summary: 'object' } },
    control: { type: 'object' }
  },
  colorList: {
    description: 'Массив объектов цвета для выбора',
    table: { type: { summary: 'object' } },
    control: { type: 'object' }
  },
  label: {
    description: 'Подпись элемента',
    table: {
      defaultValue: {
        summary: ''
      },
      type: { summary: 'string' }
    },
    control: { type: 'text' }
  },
  withPortal: {
    description: 'Отрисовывать Dropdown с выбором цвета через ReactPortal',
    table: { type: { summary: 'boolean' } },
    control: { type: 'boolean' }
  },
  portalContainerId: {
    description: 'ID рутового контейнера для создания портала',
    table: { type: { summary: 'string' } },
    control: { type: 'text' }
  },
  menuStyle: {
    description: 'Стили (CSSProperties) для Dropdown menu, который выводит цвета',
    table: { type: { summary: 'object' } },
    control: { type: 'object' }
  },
  menuLabel: {
    description: 'Подпись меню при выборе текста',
    table: {
      defaultValue: {
        summary: DEFAULT_LABEL
      },
      type: { summary: 'string' }
    },
    control: { type: 'text' }
  },
  onColorChange: {
    description: 'Callback при изменении выбранного цвета',
    action: 'Изменено color'
  },
  tooltipText: {
    description: 'Текста подскади при наведении на компонент',
    table: { type: { summary: 'string' } },
    control: { type: 'text' }
  },
  isDisabled: {
    description: 'Заблокировать выбор цвета',
    table: { type: { summary: 'boolean' } },
    control: { type: 'boolean' }
  }
};
