import { PropsWithChildren } from 'react';

import { sizesMapping } from '@components/declaration';

import { indicatorStatusMapping, orientationMapping } from './enums';

export type OrientationType = `${orientationMapping}`;
export type IndicatorSizeType = `${sizesMapping}`;
export type IndicatorStatusType = `${indicatorStatusMapping}`;

export interface ICard extends PropsWithChildren<any> {
  orientation?: OrientationType;
  indicatorSize?: IndicatorSizeType;
  indicatorStatus?: IndicatorStatusType;
  className?: string;
}
