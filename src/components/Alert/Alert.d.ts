import { FC, ReactNode } from 'react';

/**
 * Перечисление типов сообщений Alert.
 */
export enum EAlertSeverity {
  /** Успешное сообщение */
  success = 'success',
  /** Сообщение об ошибке */
  error = 'error',
  /** Предупреждающее сообщение */
  warning = 'warning',
  /** Информационное сообщение */
  info = 'info'
}

/**
 * Интерфейс свойств компонента Alert.
 */
export interface IAlertProps {
  /** Заголовок сообщения Alert. */
  title: string;
  /** Тип сообщения Alert. */
  severity?: `${EAlertSeverity}`;
  /** Дочерние элементы компонента. */
  children?: ReactNode;
  /** Дополнительные CSS классы. */
  className?: string;
  /** Дополнительный элемент действия. */
  action?: ReactNode;
  /** Функция обратного вызова для закрытия Alert. */
  close?: () => void;
}

/**
 * Тип для определения цветов иконок в зависимости от типа сообщения.
 */
export type IIconSeverityColor = Record<EAlertSeverity, string>;

/**
 * Компонент Alert для отображения информационных сообщений различных типов.
 */
declare const Alert: FC<IAlertProps>;

export default Alert;
