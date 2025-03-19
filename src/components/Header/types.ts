import { MouseEventHandler, ReactNode } from 'react';

export interface IHeader {
  title: string;
  type?: string;
  bg?: boolean;
  /* Кнопка назад */
  back?: MouseEventHandler<HTMLButtonElement>;
  favorite?: MouseEventHandler<HTMLButtonElement>;
  notification?: MouseEventHandler<HTMLButtonElement>;
  date?: boolean;
  notificationAmount?: number;
  breadcrumbs?: ReactNode;
  className?: string;
  children?: ReactNode;
}
