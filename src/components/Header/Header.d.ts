import { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';

/**
 * Интерфейс свойств компонента Header.
 */
export interface IHeaderProps {
  /** Заголовок страницы */
  title: string;

  /** Флаг для отображения кнопки "Назад" */
  showBack?: boolean;
  /** Обработчик клика на кнопку "Назад" */
  onBackClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг для отображения кнопки "Избранное" */
  showFavorite?: boolean;
  /** Обработчик клика на кнопку "Избранное" */
  onFavoriteClick?: MouseEventHandler<HTMLButtonElement>;
  /** Флаг, указывающий, находится ли элемент в избранном */
  isFavorite?: boolean;

  /** Флаг для отображения кнопки "Уведомления" */
  showNotification?: boolean;
  /** Обработчик клика на кнопку "Уведомления" */
  onNotificationClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг для отображения кнопки "Видео" */
  showVideo?: boolean;
  /** Обработчик клика на кнопку "Видео" */
  onVideoClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг для отображения кнопки "Печать" */
  showPrint?: boolean;
  /** Обработчик клика на кнопку "Печать" */
  onPrintClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг для отображения кнопки "Сообщения" */
  showMessage?: boolean;
  /** Обработчик клика на кнопку "Сообщения" */
  onMessageClick?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг для отображения текущей даты */
  showDate?: boolean;

  /** Количество непрочитанных уведомлений */
  notificationAmount?: number;

  /** Компонент хлебных крошек */
  breadcrumbs?: ReactNode;

  /** Дополнительные CSS-классы */
  className?: string;

  /** Дополнительный контент */
  children?: ReactNode;

  /** Inline-стили */
  style?: CSSProperties;
}

/**
 * Компонент `Header` отображает заголовок страницы с возможностью добавления кнопок управления,
 * хлебных крошек, даты и других элементов.
 */
declare const Header: FC<IHeaderProps>;

export default Header;
