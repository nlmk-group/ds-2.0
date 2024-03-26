import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { EFill, ESizes, EVariant } from './enums';
import { colorsMapping, variantsMapping } from '../declaration';
export type TSize = `${ESizes}`;
export type TVariant = `${EVariant}`;
export type TFill = `${EFill}`;
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren<any> {
    badge?: string | number;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    iconButton?: ReactNode;
    size?: TSize;
    variant?: TVariant;
    fill?: TFill;
    className?: string;
}
interface IbadgeProps {
    color: colorsMapping;
    variant: variantsMapping;
}
export type TbadgeTypes = {
    [key: string | EVariant]: IbadgeProps;
};
export interface IBadgeHelper {
    size: TSize;
    variant: TVariant;
    fill: TFill;
    badge: string | number;
}
export {};
//# sourceMappingURL=types.d.ts.map