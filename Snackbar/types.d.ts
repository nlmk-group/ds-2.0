import { MouseEventHandler, PropsWithChildren } from 'react';
import { indicatorMapping } from './enums';
export interface ISnackbar extends PropsWithChildren<any> {
    className?: string;
    color?: string;
    indicator?: `${indicatorMapping}`;
    bgOpacity?: number;
    withIcon?: boolean;
    customIcon?: JSX.Element;
    close?: MouseEventHandler<HTMLButtonElement>;
    actionButton?: MouseEventHandler<HTMLButtonElement>;
    actionButtonText?: string;
}
export interface IActionBtn {
    actionButton: MouseEventHandler<HTMLButtonElement>;
    actionButtonText: string;
    color: string;
}
export interface ICloseBtn {
    close: MouseEventHandler<HTMLButtonElement>;
    color: string;
}
//# sourceMappingURL=types.d.ts.map