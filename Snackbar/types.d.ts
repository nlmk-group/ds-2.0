import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { variantsMapping } from '../declaration';
import { ESnackbarColors } from './enums';

export interface ISnackbarProps {
    color?: ESnackbarColors;
    variant?: keyof typeof variantsMapping;
    close?: () => void;
    actionButton?: () => void;
    actionText?: string;
    children: ReactNode;
    autoHideDuration?: number;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map