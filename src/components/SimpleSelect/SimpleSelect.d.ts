import { CSSProperties, FC, ReactNode } from 'react';

export enum ESelectSizes {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum ESelectColors {
  default = 'default',
  error = 'error',
  warning = 'warning',
  success = 'success'
}

export interface ISelectProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  id?: string;
  name?: string;
  portalContainerId?: string;
  children: ReactNode;
  menuWidth?: string;
  placeholder?: string;
  label?: string;
  withPortal?: boolean;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  color?: `${ESelectColors}`;
  size?: `${ESelectSizes}`;
  scrollingItems?: number;
  noOptionsText?: string;
  searchable?: boolean;
  onEnterPress?: (item: string | number) => void;
  style?: CSSProperties;
  className?: string;
  colored?: boolean;
  reset?: boolean;
  onReset?: () => void;
}

declare const SimpleSelect: FC<ISelectProps>;

export default SimpleSelect;
