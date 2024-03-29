import { MouseEvent } from 'react';

export interface ISwitch {
  className?: string;
  checked: boolean;
  onChange: (event: MouseEvent<Element>, checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  activeIcon?: JSX.Element;
  inactiveIcon?: JSX.Element;
}
