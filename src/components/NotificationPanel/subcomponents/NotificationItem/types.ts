import { HTMLAttributes } from 'react';

import { EBadgeColors } from '@components/Badge/enums';

export interface INotificationItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Текст категории уведомлений
   */
  label: string;

  /**
   * Количество уведомлений
   * @default 0
   */
  count?: number;

  /**
   * Цвет бейджа
   * @default EBadgeColors.error
   */
  badgeColor?: `${EBadgeColors}`;

  /**
   * Активный элемент (подсветка)
   * @default false
   */
  active?: boolean;

  /**
   * Уникальное значение элемента (по умолчанию используется label)
   */
  value?: string;

  /**
   * Обработчик клика по элементу
   */
  onClick?: (value: string) => void;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}
