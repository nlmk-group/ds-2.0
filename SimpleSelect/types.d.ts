import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../declaration';

type TSize = `${sizesMappingInput}`;
export interface ISelectProps {
    value?: string | number;
    onChange?: (value: string | number) => void;
    id?: string;
    portalContainerId?: string;
    children: ReactNode;
    menuWidth?: string;
    placeholder?: string;
    label?: string;
    withPortal?: boolean;
    disabled?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    color?: customInputColors;
    size?: TSize;
    scrollingItems?: number;
    noOptionsText?: string;
    searchable?: boolean;
    name?: string;
    onEnterPress?: (item: string | number) => void;
    style?: CSSProperties;
    className?: string;
    colored?: boolean;
    reset?: boolean;
    onReset?: () => void;
}
export {};
//# sourceMappingURL=types.d.ts.map