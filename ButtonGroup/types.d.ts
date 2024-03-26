import { PropsWithChildren } from 'react';
import { orientationMapping } from './enums';
import { TFill, TSize, TVariant } from '../Button/types';
export type OrientationType = `${orientationMapping}`;
export interface IButtonGroup extends PropsWithChildren {
    className?: string;
    disabled?: boolean;
    size?: TSize;
    variant?: TVariant;
    fill?: TFill;
    orientation?: OrientationType;
}
//# sourceMappingURL=types.d.ts.map