import { CSSProperties, MouseEventHandler, ReactNode } from '../../../node_modules/react';
import { EToggleButtonGroupSizeMapping } from './enums';

export interface IToggleButtonGroupProps {
    className?: string;
    size?: `${EToggleButtonGroupSizeMapping}`;
    disabled?: boolean;
    children: ReactNode;
    style?: CSSProperties;
}
export interface IToggleButtonGroupItemWithProps {
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement> | null;
    active?: boolean;
    onToggle?: () => void;
    isLast?: boolean;
    children: ReactNode;
}
export interface IButtonGroupPropertiesProps {
    size: `${EToggleButtonGroupSizeMapping}`;
    disabled: boolean;
}
export interface IButtonPropertiesProps {
    active: boolean;
}
export interface IToggleButtonIconProps {
    htmlColor?: string;
    children?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map