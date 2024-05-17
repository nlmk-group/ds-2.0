import { MouseEventHandler, ReactNode } from 'react';

import { ISelectOption } from '@components/Select/types';

import { OrientationType } from '../types';

interface ICheckable {
  checked?: boolean;
  checkAction?: (v: boolean) => void;
}

export interface IContentExample extends ICheckable {
  orientation?: OrientationType;
  imageURL?: string;
  href?: string;
}

export interface IButton {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactNode;
}

export interface ITitle extends ICheckable {
  title: string;
  href?: string;
}

export interface ISelector {
  label?: string;
  options: ISelectOption[];
  selected?: string | string[];
  onSelectionChange: (selected: string | string[]) => void;
}

export interface IImageHelper {
  imageURL: string;
  badges: string[];
}

export interface IBtnGroup {
  primaryButton: IButton | null;
  secondaryButton: IButton | null;
}
