import { ButtonHTMLAttributes, CSSProperties, ReactNode } from '../../../node_modules/react';
import { EButtonColor, EButtonSize, EButtonVariant } from './enums';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startBadge?: string | number;
    endBadge?: string | number;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    iconButton?: ReactNode;
    size?: `${EButtonSize}`;
    variant?: `${EButtonVariant}`;
    color?: `${EButtonColor}`;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map