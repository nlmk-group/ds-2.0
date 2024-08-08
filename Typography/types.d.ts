import { CSSProperties, HTMLAttributes, ReactNode } from '../../../node_modules/react';
import { ETypographyVariants } from './enums';

export interface ITypographyProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: `${ETypographyVariants}`;
    children: ReactNode;
    className?: string;
    color?: CSSProperties['color'];
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map