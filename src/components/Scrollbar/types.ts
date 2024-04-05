import { CSSProperties, ReactNode } from 'react';

export enum EOverflow {
  visible = 'visible',
  hidden = 'hidden',
  scroll = 'scroll',
  auto = 'auto'
}

export type TOverflow = `${EOverflow}`;

export interface IScrollbarProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  overflowX?: TOverflow;
  overflowY?: TOverflow;
  overflow?: TOverflow;
}
