import { CSSProperties, FC } from 'react';

export interface INotificationCardProps {
  /**
   * Заголовок уведомления
   */
  title: string;

  /**
   * Текст уведомления
   */
  body: string;

  /**
   * Временная метка
   */
  timestamp: string;

  /**
   * Флаг непрочитанного уведомления (показывает красную точку-индикатор)
   * @default false
   */
  unread?: boolean;

  /**
   * Стартовое состояние раскрытия (uncontrolled режим)
   * @default false
   */
  defaultExpanded?: boolean;

  /**
   * Состояние раскрытия (controlled режим)
   */
  expanded?: boolean;

  /**
   * Коллбек при смене состояния раскрытия
   */
  onExpandedChange?: (expanded: boolean) => void;

  /**
   * Лейбл кнопки раскрытия
   * @default 'Показать больше'
   */
  showMoreLabel?: string;

  /**
   * Лейбл кнопки сворачивания
   * @default 'Свернуть'
   */
  hideLabel?: string;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили
   */
  style?: CSSProperties;
}

declare const NotificationCard: FC<INotificationCardProps>;

export default NotificationCard;
