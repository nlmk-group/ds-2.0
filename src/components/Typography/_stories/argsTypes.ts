import { ETypographyVariants } from '../enums';

export const argsTypes = {
  children: { description: 'Текст или элементы для отображения внутри span.' },
  variant: {
    description: 'Стиль текста из шкалы типографики ДС.',
    options: Object.values(ETypographyVariants),
    control: { type: 'select' }
  },
  color: {
    description: 'Цвет текста',
    control: { type: 'color' }
  }
};
