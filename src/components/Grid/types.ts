import { IBox } from '@components/Box/types';

export type TGridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IGridSize {
  xs?: TGridSize;
  sm?: TGridSize;
  md?: TGridSize;
  lg?: TGridSize;
  xl?: TGridSize;
}
export interface IGrid extends IBox {
  container?: boolean;
  size?: TGridSize | IGridSize;
}
