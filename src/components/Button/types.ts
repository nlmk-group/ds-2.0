import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export enum sizes {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum variant {
  primary = 'primary',
  secondary = 'secondary',
  grey = 'grey',
  outline = 'outline',
  greyOutline = 'greyOutline',
  text = 'text'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren<any> {
  badge?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconButton?: ReactNode;
  size?: `${sizes}`;
  variant?: `${variant}`;
  className?: string;
}
