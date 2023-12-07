import { ISelectOption } from '@components/Select/types';
import { MouseEventHandler, ReactNode, ChangeEventHandler } from 'react';
import { OrientationType } from '../types'

export interface IButton {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactNode;
}

export interface ITitle {
  title: string,
  href?: string;
  checked?: boolean;
  checkAction?: ChangeEventHandler<HTMLInputElement>;
}

export interface ISelector {
  label?: string;
  options: ISelectOption[];
  selected?: string | string[];
  onSelectionChange: (selected: string | string[]) => void;
}

export interface IImageHelper {
  orientation: OrientationType;
  imageURL: string;
  badges: string[];
}

export interface IBtnGroup {
  primaryButton: IButton | null;
  secondaryButton: IButton | null;
}