import { MouseEventHandler, RefObject } from 'react';

import { EArrowButtonColor } from './enums';

export interface IArrowButtonProps {
  isOpen: boolean;
  disabled: boolean;
  color: `${EArrowButtonColor}`;
  toggleDropdown: MouseEventHandler;
  buttonRef?: RefObject<HTMLButtonElement | null>;
}
