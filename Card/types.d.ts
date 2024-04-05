import { PropsWithChildren } from 'react';
import { sizesMapping } from '../declaration';
import { indicatorStatusMapping, orientationMapping } from './enums';
export type OrientationType = `${orientationMapping}`;
export type IndicatorSizeType = `${sizesMapping}`;
export type IndicatorStatusType = `${indicatorStatusMapping}`;
export interface ICard extends PropsWithChildren<any> {
    className?: string;
    orientation?: OrientationType;
    indicatorSize?: IndicatorSizeType;
    indicatorStatus?: IndicatorStatusType;
}
//# sourceMappingURL=types.d.ts.map