import { MouseEventHandler, PropsWithChildren } from 'react';

export interface ISnackbar extends PropsWithChildren<any> {
  className?: string;
  color?: string;
  bgOpacity?: number;
  withIcon?: boolean;
  customIcon?: JSX.Element;
  close?: MouseEventHandler<HTMLButtonElement>;
  actionButton?: MouseEventHandler<HTMLButtonElement>;
  actionButtonText?: string;
}

export interface IActionBtn {
  actionButton: MouseEventHandler<HTMLButtonElement>;
  actionButtonText: string;
  color: string;
}

export interface ICloseBtn {
  close: MouseEventHandler<HTMLButtonElement>;
  color: string;
}
