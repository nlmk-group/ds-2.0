import { PropsWithChildren } from 'react';

import { EDividerOrientation, EDividerType } from './enums';

export interface IDividerProps extends PropsWithChildren<any> {
  className?: string;
  dashed?: boolean;
  orientation?: `${EDividerOrientation}`;
  orientationSpace?: number;
  type?: `${EDividerType}`;
}

export interface IHorizontalBorder {
  isSmall: boolean;
  dashed?: boolean;
  orientation?: string;
  orientationSpace?: number;
}

export interface IVerticalBorder {
  className?: string;
  dashed?: boolean;
}
