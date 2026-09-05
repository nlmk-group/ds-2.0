import { ReactNode } from 'react';

export interface IMenuItem {
  /**
   * Содержимое строки.
   */
  label: ReactNode;

  /**
   * Значение строки.
   */
  value: string;

  /**
   * Флаг, определяющий, заблокирована ли строка для взаимодействия.
   */
  disabled?: boolean;
}
