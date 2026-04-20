import { CSSProperties, FC, HTMLAttributes } from 'react';

import { EBadgeColors } from '../Badge/enums';

export interface INotificationItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'style'> {
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

  /**
   * Inline стили
   */
  style?: CSSProperties;
}

declare const NotificationItem: FC<INotificationItemProps>;

export default NotificationItem;
