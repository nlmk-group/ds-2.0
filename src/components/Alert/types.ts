import { PropsWithChildren, ReactNode } from 'react';

import { EAlertSeverity } from './enums';

/**
 * Интерфейс свойств компонента Alert.
 * @interface
 * @extends {PropsWithChildren<{}>}
 */
export interface IAlertProps extends PropsWithChildren {
  /** Заголовок сообщения Alert. */
  title: string;
  /** Тип сообщения Alert. */
  severity?: `${EAlertSeverity}`;
  /** Дополнительные CSS классы. */
  className?: string;
  /** Дополнительный элемент действия. */
  action?: ReactNode;
  /** Функция обратного вызова для закрытия Alert. */
  close?: () => void;
}
