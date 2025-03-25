import { FC, MouseEventHandler, ReactNode } from 'react';

/**
 * Интерфейс свойств компонента Header.
 */
export interface IHeaderProps {
  /** Заголовок страницы */
  title: string;

  /** Кнопка назад */
  back?: MouseEventHandler<HTMLButtonElement>;

  /** Кнопка добавления в избранное */
  favorite?: MouseEventHandler<HTMLButtonElement>;

  /** Кнопка уведомлений */
  notification?: MouseEventHandler<HTMLButtonElement>;

  /** Кнопка воспроизведения видео */
  video?: MouseEventHandler<HTMLButtonElement>;

  /** Кнопка печати документа */
  print?: MouseEventHandler<HTMLButtonElement>;

  /** Кнопка сообщений (например, для чата или поддержки) */
  message?: MouseEventHandler<HTMLButtonElement>;

  /** Флаг для отображения текущей даты */
  date?: boolean;

  /** Количество непрочитанных уведомлений */
  notificationAmount?: number;

  /** Компонент хлебных крошек */
  breadcrumbs?: ReactNode;

  /** Дополнительные CSS-классы для стилизации */
  className?: string;

  /** Дополнительный контент справа от заголовка */
  children?: ReactNode;
}

/**
 * Компонент `Header` отображает заголовок страницы с возможностью добавления кнопок управления,
 * хлебных крошек и других элементов управления.
 */
declare const Header: FC<IHeaderProps>;

export default Header;
