import { MouseEventHandler } from 'react';

import { EArrowButtonColor } from './enums';

export interface IArrowButtonProps {
  isOpen: boolean;
  disabled: boolean;
  color: `${EArrowButtonColor}`;
  toggleDropdown: MouseEventHandler;
}
