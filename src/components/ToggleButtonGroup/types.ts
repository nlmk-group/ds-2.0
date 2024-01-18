import { MouseEventHandler, ReactNode } from 'react';
import { sizeMapping, statusMapping } from './enums';
import { IconColor } from '@components/Icon/types';

export type SizeType = `${sizeMapping}`;
export type StatusType = `${statusMapping}`;

export interface IToggleButtonGroup {
  className?: string;
  status?: StatusType;
  size?: SizeType;
  children: ReactNode;
}

export interface IToggleButtonGroupItemWithProps {
  className?: string;
  status?: StatusType;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | null;
  active?: boolean;
  toggleButton?: ()=>void;
  isLast?: boolean;
  children: ReactNode;
}

export interface IButtonGroupProperties {
  size: SizeType;
  status: StatusType;
}

export interface IButtonProperties {
  status: StatusType;
}

export interface IWithIcon {
  name?: string;
  color?: IconColor;
  htmlColor?: string;
  containerSize?: 16 | 24 | 32;
}
