import { ReactNode } from 'react';

import { EButtonSizes } from '@components/Button/enums';

/**
 * Интерфейс пропсов для компонента Dropdown
 */
export interface IDropdownProps {
  /** Элементы, которые будут отображаться в меню */
  children: ReactNode;
  /** Отключает кнопку и возможность открытия меню */
  disabled?: boolean;
  /** Дополнительный класс для кнопки */
  className?: string;
  /** Текст, отображаемый в кнопке */
  buttonText: string;
  /** Размер кнопки и меню */
  size?: EButtonSizes;
  /** Иконка в начале кнопки Dropdown */
  startIcon?: ReactNode;
}
