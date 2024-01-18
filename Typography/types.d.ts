import { HTMLAttributes, PropsWithChildren } from 'react';
import { COLORS_MAPPING_ENUM, VARIANTS_MAPPING_ENUM } from '../Typography/constants';
export type TVariant = keyof typeof VARIANTS_MAPPING_ENUM;
export type TColor = keyof typeof COLORS_MAPPING_ENUM;
export interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: TVariant;
    color?: TColor;
}
export type ITypography = ITypographyProps & PropsWithChildren;
//# sourceMappingURL=types.d.ts.map