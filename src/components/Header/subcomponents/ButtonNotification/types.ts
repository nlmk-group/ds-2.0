import { MouseEventHandler } from 'react';

export interface IButtonNotificationProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  notificationAmount?: number;
}
