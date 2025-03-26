import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export interface IHeaderProps {
  /* Заголовок страницы */
  title: string;
  /* Кнопка назад */
  onBackClick?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка добавления в избранное */
  onFavoriteClick?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка уведомлений */
  onNotificationClick?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка воспроизведения видео */
  onVideoClick?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка печати документа */
  onPrintClick?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка сообщений (например, для чата или поддержки) */
  onMessageClick?: MouseEventHandler<HTMLButtonElement>;
  /* Флаг для отображения текущей даты */
  hasDate?: boolean;
  /* Количество непрочитанных уведомлений */
  notificationAmount?: number;
  /* Компонент хлебных крошек */
  breadcrumbs?: ReactNode;
  /* Дополнительные CSS-классы для стилизации */
  className?: string;
  /* Дополнительный контент справа от заголовка */
  children?: ReactNode;
  /* Inline стили для кастомизации компонента */
  style?: CSSProperties;
}
