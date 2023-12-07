import { PropsWithChildren } from 'react';
import {
  orientationMapping,
  indicatorStatusMapping
} from './enums';
import { sizesMapping } from '@components/declaration';

export type OrientationType = `${orientationMapping}`;
export type IndicatorSizeType = `${sizesMapping}`;
export type IndicatorStatusType = `${indicatorStatusMapping}`;

export interface ICard extends PropsWithChildren<any> {
  className?: string;
  orientation?: OrientationType;
  indicatorSize?: IndicatorSizeType;
  indicatorStatus?: IndicatorStatusType;
}
