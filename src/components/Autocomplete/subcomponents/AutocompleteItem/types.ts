import { ReactNode } from 'react';

export interface IAutocompleteItemProps {
  /**
   * Содержимое элемента меню
   */
  children: ReactNode;

  /**
   * Обработчик клика, вызываемый при выборе элемента
   */
  onClick?: (value: string) => void;

  /**
   * Значение, связанное с элементом меню
   */
  value: string;

  /**
   * Отключает возможность выбора элемента меню
   * @default false
   */
  disabled?: boolean;

  /**
   * Текст тултипа для элемента
   * @default ''
   */
  hint?: string;

  /**
   * Дополнительный CSS-класс
   */
  className?: string;

  /**
   * Внутренний проп для подсветки текущего элемента при фокусе или наведении с клавиатуры
   * @default false
   */
  highlighted?: boolean;
}
