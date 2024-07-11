import { MouseEventHandler } from 'react';

export enum ECustomInputColors {
  error = 'error',
  success = 'success',
  warning = 'warning',
  primary = 'primary',
  default = 'default'
}

export interface IArrowButtonProps {
  isOpen: boolean;
  disabled: boolean;
  color: `${ECustomInputColors}`;
  toggleDropdown: MouseEventHandler;
}
