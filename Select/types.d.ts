import { ReactNode } from 'react';
import { customInputColors, sizesMappingInput } from '../declaration';
export type ISelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
    [key: string]: any;
};
export interface ISelectProps {
    id?: string;
    options: ISelectOption[] | null;
    label?: string;
    multiple?: boolean;
    size?: sizesMappingInput;
    scrollingItems?: number;
    disabled?: boolean;
    color?: customInputColors;
    allSelectText?: string;
    isAllSelectView?: boolean;
    isSearchable?: boolean;
    selected?: string | string[];
    onSelectionChange?: (selected: string | string[]) => void;
    withPortal?: boolean;
    onEnterPress?: (item: string) => void | string[];
    onBlur?: () => void;
    onFocus?: () => void;
    isClearSearchOnBlur?: boolean;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map