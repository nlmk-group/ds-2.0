import { PropsWithChildren } from 'react';
import { sizesMappingInput } from '../declaration';
import { gradientMapping, orientationMapping } from './enums';
export type GradientType = `${gradientMapping}`;
export type OrientationType = `${orientationMapping}`;
export type SizeType = `${sizesMappingInput}`;
export interface IButtonGroup extends PropsWithChildren {
    className?: string;
    disabled?: boolean;
    size?: SizeType;
    variant?: GradientType;
    orientation?: OrientationType;
}
//# sourceMappingURL=types.d.ts.map