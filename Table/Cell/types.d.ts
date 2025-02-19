import { CSSProperties, MouseEvent, ReactNode, TdHTMLAttributes } from '../../../../node_modules/react';

export declare enum ECellSize {
    M = "m",
    S = "s",
    XS = "xs"
}
export declare enum ECellStatus {
    DEFAULT = "default",
    ERROR = "error",
    SUCCESS = "success",
    WARNING = "warning"
}
export declare enum ECellState {
    DEFAULT = "default",
    ACTIVE = "active",
    DISABLED = "disabled",
    SELECTED = "selected"
}
export interface ICellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
    size?: `${ECellSize}`;
    color?: `${ECellStatus}`;
    state?: `${ECellState}`;
    text?: string | number;
    number?: string | number;
    disableHover?: boolean;
    align?: 'left' | 'center' | 'right';
    onClick?: (e: MouseEvent) => void;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map