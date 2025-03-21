import { MouseEventHandler } from 'react';

export interface INotification {
  notification: MouseEventHandler<HTMLButtonElement>;
  notificationAmount?: number;
}
