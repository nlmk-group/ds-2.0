import { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';

/**
 * Интерфейс свойств компонента Header.
 */
export interface IHeaderProps {
  /** Заголовок страницы */
  title: string;

  /** Флаг, указывающий, должна ли отображаться кнопка "Назад" */
  hasBack?: boolean;
  /** Обработчик клика на кнопку "Назад" */
  onBackClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг, указывающий, должна ли отображаться кнопка "Избранное" */
  hasFavorite?: boolean;
  /** Обработчик клика на кнопку "Избранное" */
  onFavoriteClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг, указывающий, должна ли отображаться кнопка "Уведомления" */
  hasNotification?: boolean;
  /** Обработчик клика на кнопку "Уведомления" */
  onNotificationClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг, указывающий, должна ли отображаться кнопка "Видео" */
  hasVideo?: boolean;
  /** Обработчик клика на кнопку "Видео" */
  onVideoClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг, указывающий, должна ли отображаться кнопка "Печать" */
  hasPrint?: boolean;
  /** Обработчик клика на кнопку "Печать" */
  onPrintClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг, указывающий, должна ли отображаться кнопка "Сообщения" */
  hasMessage?: boolean;
  /** Обработчик клика на кнопку "Сообщения" */
  onMessageClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг, указывающий, должна ли отображаться текущая дата */
  hasDate?: boolean;

  /** Количество непрочитанных уведомлений */
  notificationAmount?: number;

  /** Компонент хлебных крошек, который будет отображаться в заголовке */
  breadcrumbs?: ReactNode;

  /** Дополнительные CSS-классы для стилизации компонента */
  className?: string;

  /** Дополнительный контент, который будет отображаться справа от заголовка */
  children?: ReactNode;

  /** Inline-стили для кастомизации компонента */
  style?: CSSProperties;
}

/**
 * Компонент `Header` отображает заголовок страницы с возможностью добавления кнопок управления,
 * хлебных крошек, даты и других элементов.
 */
declare const Header: FC<IHeaderProps>;

export default Header;
