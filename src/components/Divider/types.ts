import { PropsWithChildren } from 'react';

export interface IDivider extends PropsWithChildren<any> {
  className?: string;
  dashed?: boolean;
  orientation?: string;
  orientationSpace?: number;
  type?: string;
}

export interface IHorizontalBorder {
  isSmall: boolean;
  dashed?: boolean;
  orientation?: string;
  orientationSpace?: number;
}

export interface IVertical {
  className?: string;
  dashed?: boolean;
}