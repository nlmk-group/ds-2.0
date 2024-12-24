import { EFilterTipSize } from '../enums';

export const argsTypes = {
  id: {
    description: 'ID Компонента для изменения состояния',
    table: { type: { summary: 'string' } },
    control: { type: 'text' }
  },
  text: {
    description: 'Текст внутри компонента',
    table: { type: { summary: 'string' } },
    control: { type: 'text' }
  },
  isDisabled: {
    description: 'Блокировка компонента к изменению',
    table: { type: { summary: 'boolean' } },
    control: { type: 'boolean' }
  },
  onDelete: {
    description: 'Callback для удаления фильтра',
    action: 'Удалить фильтр'
  },
  isWithoutCancelIcon: {
    description: 'Не отображать кнопку удаления',
    table: { type: { summary: 'boolean' } },
    control: { type: 'boolean' }
  },
  isActive: {
    description: 'Активен ли текущий фильтр',
    table: { type: { summary: 'boolean' } },
    control: { type: 'boolean' }
  },
  onClick: {
    description: 'Callback нажатия на компонент',
    action: 'Нажатие на компонент'
  },
  size: {
    description: `Размер отображаемого компонента – <b>${Object.values(EFilterTipSize).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: EFilterTipSize.s
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(EFilterTipSize),
    control: { type: 'select' }
  }
};
