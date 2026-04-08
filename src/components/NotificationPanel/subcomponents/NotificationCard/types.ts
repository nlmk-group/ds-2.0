import { ReactNode } from 'react';

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
   * Временная метка (например "сегодня, 14:13")
   */
  timestamp: string;

  /**
   * Флаг непрочитанного уведомления (показывает точку-индикатор)
   * @default false
   */
  unread?: boolean;

  /**
   * Обработчик "Развернуть"
   */
  onExpand?: () => void;

  /**
   * Развёрнуто ли уведомление
   * @default false
   */
  expanded?: boolean;

  /**
   * Дополнительный контент под текстом
   */
  children?: ReactNode;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}
