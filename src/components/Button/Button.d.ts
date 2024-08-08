import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export enum EButtonSizes {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum EButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  grey = 'grey',
  black = 'black',
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info'
}

export enum EButtonFill {
  solid = 'solid',
  outline = 'outline',
  clear = 'clear'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startBadge?: string | number;
  endBadge?: string | number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconButton?: ReactNode;
  size?: `${EButtonSizes}`;
  variant?: `${EButtonVariant}`;
  fill?: `${EButtonFill}`;
  className?: string;
  children?: ReactNode;
}

declare const Button: FC<IButtonProps>;

export default Button;
