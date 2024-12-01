import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { ESnackbarColors, ESnackbarTypes } from './enums';

export interface ISnackbarProps {
    color?: `${ESnackbarColors}`;
    type?: `${ESnackbarTypes}`;
    onClose?: () => void;
    startIcon?: boolean;
    actionButton?: () => void;
    actionText?: string;
    children: ReactNode;
    autoHideDuration?: number;
    showCountdown?: boolean;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map