import { MouseEventHandler } from 'react';

export interface IButtonNotification {
  notification: MouseEventHandler<HTMLButtonElement>;
  notificationAmount?: number;
}
