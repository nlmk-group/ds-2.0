import { CSSProperties, MouseEvent, ReactNode, TdHTMLAttributes } from 'react';

export enum ECellSize {
  M = 'm',
  S = 's',
  XS = 'xs'
}

export enum ECellStatus {
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export enum ECellState {
  DEFAULT = 'default',
  ACTIVE = 'active',
  DISABLED = 'disabled',
  SELECTED = 'selected'
}

export interface ICellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  size?: `${ECellSize}`;
  color?: `${ECellStatus}`;
  state?: `${ECellState}`;

  text?: string | number;
  number?: string | number;
  disableHover?: boolean;

  align?: 'left' | 'center' | 'right';

  onClick?: (e: MouseEvent) => void;

  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
