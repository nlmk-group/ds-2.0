import { CSSProperties, MouseEvent, ReactNode, ThHTMLAttributes, TouchEvent } from '../../../../node_modules/react';

export declare enum ESize {
    M = "m",
    S = "s",
    XS = "xs"
}
export type TSortDirection = 'asc' | 'desc' | false;
export interface ITopProps extends Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, 'title'> {
    size?: `${ESize}`;
    title?: string;
    disable?: boolean;
    sort?: boolean;
    sortDirection?: TSortDirection;
    right?: boolean;
    number?: boolean;
    onClick?: () => void;
    drag?: boolean;
    filtered?: boolean;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onMouseDown?: (e: MouseEvent) => void;
    onTouchStart?: (e: TouchEvent) => void;
    onDoubleClick?: (e: MouseEvent) => void;
}
//# sourceMappingURL=types.d.ts.map