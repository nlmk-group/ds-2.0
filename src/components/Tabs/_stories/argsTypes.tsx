import { EBadgeColors } from '@components/Badge/enums';

import { ETabsIndicatorPosition, ETabsOrientation, ETabsTabPosition } from '../enums';

const argsTypes = {
  children: {
    description: 'Вложенные элементы, которые будут отображаться в табах',
    control: { type: 'object' }
  },
  className: {
    description: 'CSS класс для настройки стилей компонента',
    control: { type: 'text' }
  },
  scrollable: {
    description:
      'Принудительное включение прокрутки со стрелками. По умолчанию поведение работает автоматически через ResizeObserver — стрелки появляются когда табы не помещаются в контейнер.',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  orientation: {
    description: `Ориентация табов – <b>${Object.values(ETabsOrientation).join(' | ')}</b>`,
    options: Object.values(ETabsOrientation),
    control: { type: 'select' },
    table: {
      defaultValue: {
        summary: ETabsOrientation.horizontal
      }
    }
  },
  tabPosition: {
    description: `Позиция панели табов (для вертикального режима) – <b>${Object.values(ETabsTabPosition).join(' | ')}</b>`,
    options: Object.values(ETabsTabPosition),
    control: { type: 'select' },
    table: {
      defaultValue: {
        summary: ETabsTabPosition.left
      }
    }
  },
  indicatorPosition: {
    description: `Позиция активного индикатора – <b>${Object.values(ETabsIndicatorPosition).join(' | ')}</b>`,
    options: Object.values(ETabsIndicatorPosition),
    control: { type: 'select' },
    table: {
      defaultValue: {
        summary: ETabsIndicatorPosition.bottom
      }
    }
  },
  maxTabWidth: {
    description: 'Максимальная ширина таба в вертикальном режиме (px)',
    control: { type: 'number' },
    table: {
      defaultValue: {
        summary: 200
      }
    }
  },
  label: {
    description: 'Текст метки для таба',
    control: { type: 'text' }
  },
  active: {
    description: 'Флаг, указывающий, активен ли текущий таб',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  hasBadge: {
    description: 'Флаг, указывающий, должен ли таб отображать бейдж',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  badgeChildren: {
    description: 'Содержимое Badge',
    control: { type: 'text' }
  },
  badgeColor: {
    description: 'Заливка бейджа',
    options: Object.values(EBadgeColors),
    control: { type: 'select' }
  },
  hasIcon: {
    description: 'Флаг, указывающий, должен ли таб отображать иконку',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};

export default argsTypes;
