import { CSSProperties, ReactNode } from 'react';

export interface INotificationGroupProps {
  /**
   * Карточки уведомлений (обычно NotificationCard)
   */
  children: ReactNode;

  /**
   * Стартовое состояние раскрытия (uncontrolled режим)
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Состояние раскрытия (controlled режим)
   */
  open?: boolean;

  /**
   * Коллбек при смене состояния раскрытия
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили
   */
  style?: CSSProperties;
}
