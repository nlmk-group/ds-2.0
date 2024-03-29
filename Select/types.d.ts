import { ReactNode } from 'react';
import { customInputColors, sizesMappingInput } from '../declaration';
export type ISelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
    [key: string]: any;
};
export type TSelected = string | string[];
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
    selected: TSelected;
    onSelectionChange: (selected: TSelected) => void;
    withPortal?: boolean;
    onEnterPress?: (item: string) => void | string[];
    onBlur?: () => void;
    onFocus?: () => void;
    isClearSearchOnBlur?: boolean;
    className?: string;
    enableScrollToActiveOption?: boolean;
}
//# sourceMappingURL=types.d.ts.map