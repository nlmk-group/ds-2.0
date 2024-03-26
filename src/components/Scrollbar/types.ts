import { CSSProperties, ReactNode } from 'react';

export interface IScrollbarProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];
  overflow?: CSSProperties['overflow'];
}
