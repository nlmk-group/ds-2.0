import { PropsWithChildren } from 'react';

import { sizesMapping } from '@components/declaration';

import { EIndicatorStatusMapping, EOrientationMapping } from './enums';

export type OrientationType = `${EOrientationMapping}`;
export type IndicatorSizeType = `${sizesMapping}`;
export type IndicatorStatusType = `${EIndicatorStatusMapping}`;

export interface ICard extends PropsWithChildren<any> {
  orientation?: OrientationType;
  indicatorSize?: IndicatorSizeType;
  indicatorStatus?: IndicatorStatusType;
  className?: string;
}
