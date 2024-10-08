import { ESizesSpinner } from '../enums';

const argsTypes = {
  size: {
    description: 'Размер спиннера',
    control: { type: 'select', options: Object.values(ESizesSpinner) },
    table: {
      defaultValue: {
        summary: ESizesSpinner.l
      }
    }
  },
  color: {
    description: 'Цвет основного элемента спиннера',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'var(--brand-sapphire-60)'
      }
    }
  },
  bgColor: {
    description: 'Цвет подложки элемента спиннера',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'var(--steel-40)'
      }
    }
  },
  children: {
    description: 'React children элемент, может быть только компонентом Icon',
    control: { type: 'object' }
  },
  percent: {
    description: 'Показывает процент загрузки Icon',
    control: {
      type: 'number'
    }
  },
  progressPercentage: {
    description: 'Процент заполнения круга спиннера. Значение от 0 до 0.9',
    control: {
      type: 'number'
    }
  }
};

export default argsTypes;
