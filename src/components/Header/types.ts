import { MouseEventHandler, ReactNode } from 'react';

export interface IHeader {
  title: string;
  type?: string;
  bg?: boolean;
  back?: MouseEventHandler<HTMLButtonElement>;
  favorite?: MouseEventHandler<HTMLButtonElement>;
  notification?: MouseEventHandler<HTMLButtonElement>;
  date?: boolean;
  notificationAmount?: number;
  breadcrumbs?: JSX.Element | ReactNode;
  className?: string;
}

export interface INotification {
  notification: MouseEventHandler<HTMLButtonElement>;
  notificationAmount?: number;
}
