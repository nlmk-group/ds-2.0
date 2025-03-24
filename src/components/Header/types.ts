import { MouseEventHandler, ReactNode } from 'react';

export interface IHeaderProps {
  title: string;
  /* Кнопка назад */
  back?: MouseEventHandler<HTMLButtonElement>;
  favorite?: MouseEventHandler<HTMLButtonElement>;
  notification?: MouseEventHandler<HTMLButtonElement>;
  video?: MouseEventHandler<HTMLButtonElement>;
  print?: MouseEventHandler<HTMLButtonElement>;
  date?: boolean;
  notificationAmount?: number;
  breadcrumbs?: ReactNode;
  className?: string;
  children?: ReactNode;
}
