import { MouseEventHandler } from 'react';

import { customInputColors } from '@components/declaration';
import { IconColor } from '@components/Icon/types';

export interface IArrowButtonProps {
  /** Флаг, указывающий открыт ли выпадающий список */
  isOpen: boolean;

  /** Цвет кнопки */
  color?: IconColor | customInputColors;

  /** Флаг блокировки кнопки */
  disabled?: boolean;

  /** Обработчик клика по кнопке */
  toggleDropdown: MouseEventHandler<HTMLButtonElement>;
}
