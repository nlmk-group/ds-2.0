import { ReactNode } from 'react';

/**
 * Интерфейс пропсов для компонента DropdownMenuItem
 */
export interface IDropdownMenuItemProps {
  /** Функция, вызываемая при клике по элементу */
  onClick?: (value: string) => void;
  /** Значение, ассоциированное с элементом меню */
  value: string;
  /** Определяет, отключён ли элемент */
  disabled?: boolean;
  /** Содержимое элемента меню */
  children?: ReactNode;
  /** Текст-подсказка для элемента меню */
  hint?: string;
  /** Дополнительный CSS класс для элемента */
  className?: string;
}
