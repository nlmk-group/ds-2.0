import { ETooltipBehaviorType, ETooltipPlacementType } from '../enums';

export const argsTypes = {
  title: {
    description: 'Заголовок',
    control: { type: 'text' }
  },
  description: {
    description: 'Обычный текст внутри тултипа',
    control: { type: 'text' }
  },
  behavior: {
    description: 'Поведение тултипа',
    table: {
      defaultValue: {
        summary: ETooltipBehaviorType.hover
      }
    },
    options: Object.values(ETooltipBehaviorType),
    control: { type: 'select' }
  },
  placement: {
    description: 'Расположение тултипа',
    table: {
      defaultValue: {
        summary: ETooltipPlacementType.top
      }
    },
    options: Object.values(ETooltipPlacementType),
    control: { type: 'select' }
  },
  clickable: {
    description: 'Отвечает за кликабельность тултипа.',
    control: { type: 'boolean' },
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  },
  render: {
    description: 'Кастомный ReactNode элемент внутри тултипа'
  },
  className: {
    description: 'Дополнительные классы для стилизации компонента'
  }
};

export default argsTypes;
