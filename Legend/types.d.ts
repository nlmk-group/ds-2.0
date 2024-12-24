import { CSSProperties, FC, MouseEventHandler, RefObject } from '../../../node_modules/react';
import { ELegendType } from './enums';

export interface ILegendProps {
    color: ILegendColor;
    colorList?: ILegendColor[];
    type?: ELegendType;
    label?: string;
    withPortal?: boolean;
    portalContainerId?: string;
    menuStyle?: CSSProperties;
    menuLabel?: string;
    onColorChange?: (val: ILegendColor) => void;
    tooltipText?: string;
    isDisabled?: boolean;
}
export interface ILegendViewComponentProps extends Pick<ILegendProps, 'color' | 'onColorChange'> {
    isActive?: boolean;
    isSelectable?: boolean;
    className?: string;
}
export interface ILegendEditComponentProps extends Pick<ILegendProps, 'color'> {
    className?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
    isDisabled?: ILegendProps['isDisabled'];
}
export interface ILegendColor {
    default: CSSProperties['color'];
    hover?: CSSProperties['color'];
    active?: CSSProperties['color'];
    viewColor?: FC<ILegendViewComponentProps>;
    editColor?: FC<ILegendEditComponentProps & {
        ref: RefObject<HTMLDivElement>;
    }>;
}
//# sourceMappingURL=types.d.ts.map