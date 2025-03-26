import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export interface IHeaderProps {
  /* Заголовок страницы */
  title: string;
  /* Кнопка назад */
  back?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка добавления в избранное */
  favorite?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка уведомлений */
  notification?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка воспроизведения видео */
  video?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка печати документа */
  print?: MouseEventHandler<HTMLButtonElement>;
  /* Кнопка сообщений (например, для чата или поддержки) */
  message?: MouseEventHandler<HTMLButtonElement>;
  /* Флаг для отображения текущей даты */
  date?: boolean;
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
