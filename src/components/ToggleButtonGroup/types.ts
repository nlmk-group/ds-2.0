import { MouseEventHandler } from 'react';
import { sizeMapping, statusMapping } from './enums';

export type SizeType = `${sizeMapping}`;
export type StatusType =`${statusMapping}`;

export interface IBaseToggleButtonGroupItem {
  label: string;
  active?: boolean;
  status?: StatusType;
  withIcon?: boolean;
  customIcon?: JSX.Element;
  disabled?: boolean;
  action?: MouseEventHandler<HTMLDivElement>;
  actionNumber?: string;
}

export interface IToggleButtonGroup {
  className?: string;
  btnGroup: IBaseToggleButtonGroupItem[];
  status?: StatusType;
  size?: SizeType;
}

export interface IToggleButtonGroupItem extends IBaseToggleButtonGroupItem {
  id: number;
  onBtnClick: (id: number, isActive: boolean)=>void;
}

export interface IToggleButtonGroupItemWithProps extends IToggleButtonGroupItem {
  size: SizeType;
  status: StatusType;
}

interface IHelper {
  size: SizeType;
}

export interface IBadgeHelper extends IHelper {
  status: StatusType;
  actionNumber: string;
}

export interface IIconHelper extends IHelper {
  customIcon: JSX.Element | null;
}

export interface IActiveHelper {
  id: number;
  active: boolean;
}
