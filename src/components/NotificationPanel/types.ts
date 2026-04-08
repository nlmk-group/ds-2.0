import { CSSProperties } from 'react';

import { INotificationItemProps } from './subcomponents/NotificationItem/types';

export type INotificationItemData = Pick<INotificationItemProps, 'label' | 'count' | 'badgeColor' | 'active' | 'value'>;

export interface INotificationPanelProps {
  /**
   * Список категорий уведомлений
   */
  items: INotificationItemData[];

  /**
   * Обработчик клика по элементу
   */
  onItemClick?: (value: string, index: number) => void;

  /**
   * Заголовок панели
   * @default 'Уведомления'
   */
  title?: string;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}
