import { PropsWithChildren } from '../../../node_modules/react';

export interface IDividerProps extends PropsWithChildren<any> {
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
export interface IVerticalBorder {
    className?: string;
    dashed?: boolean;
}
//# sourceMappingURL=types.d.ts.map