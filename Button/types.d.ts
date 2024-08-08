import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { EButtonFill, EButtonSizes, EButtonVariant } from './enums';

export type TButtonSize = `${EButtonSizes}`;
export type TButtonVariant = `${EButtonVariant}`;
export type TButtonFill = `${EButtonFill}`;
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startBadge?: string | number;
    endBadge?: string | number;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    iconButton?: ReactNode;
    size?: `${EButtonSizes}`;
    variant?: `${EButtonVariant}`;
    fill?: `${EButtonFill}`;
    className?: string;
    children?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map