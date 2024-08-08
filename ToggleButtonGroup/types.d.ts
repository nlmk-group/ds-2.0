import { MouseEventHandler, ReactNode } from '../../../node_modules/react';
import { sizeMapping, statusMapping } from './enums';

export type SizeType = `${sizeMapping}`;
export type StatusType = `${statusMapping}`;
export interface IToggleButtonGroup {
    className?: string;
    status?: StatusType;
    size?: SizeType;
    disabled?: boolean;
    children: ReactNode;
}
export interface IToggleButtonGroupItemWithProps {
    className?: string;
    status?: StatusType;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement> | null;
    active?: boolean;
    toggleButton?: () => void;
    isLast?: boolean;
    children: ReactNode;
}
export interface IButtonGroupProperties {
    size: SizeType;
    status: StatusType;
    disabled: boolean;
}
export interface IButtonProperties {
    status: StatusType;
    active: boolean;
}
export interface IWithIcon {
    htmlColor?: string;
    children?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map