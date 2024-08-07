import { CSSProperties, ReactNode } from 'react';

export interface IOptionsProps {
  children: ReactNode;
  menuStyle?: CSSProperties;
  menuWidth?: CSSProperties['width'];
}
