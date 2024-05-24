import { CSSProperties, FC, ReactNode } from 'react';
import { TIconName } from './IconsDirectory/unionType';
export type IconColor = 'action' | 'disabled' | 'error' | 'primary' | 'secondary' | 'inherit' | 'success' | 'warning' | 'default';
export type TContainerSize = 32 | 24 | 16;
export interface TIconProps {
    name: TIconName;
    color?: IconColor;
    htmlColor?: string;
    containerSize?: TContainerSize;
    className?: string;
    style?: CSSProperties;
    badge?: ReactNode;
}
export interface IIconsProps {
    color?: IconColor;
    htmlColor?: string;
}
export interface ISvgProps {
    className?: string;
    onClick?: (e: any) => void;
    active?: boolean;
}
export type TIconComponent = FC<IIconsProps>;
export type TIconsObject = {
    [size: string]: {
        [key in TIconName]?: TIconComponent;
    };
};
//# sourceMappingURL=types.d.ts.map