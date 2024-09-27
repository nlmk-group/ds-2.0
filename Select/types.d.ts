import { CSSProperties, MouseEvent, ReactElement, ReactNode } from '../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../declaration';

export type ISelectOption = {
    value: string;
    label: string | ReactElement;
    subLabel?: string;
    disabled?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    options?: ISelectOption[];
    [key: string]: any;
};
type TSize = `${sizesMappingInput}`;
export type TSelected = string | string[];
export interface ISelectProps {
    children?: ReactNode;
    listMinWidth?: number;
    id?: string;
    options: ISelectOption[] | null;
    label?: string;
    multiple?: boolean;
    size?: TSize;
    scrollingItems?: number;
    disabled?: boolean;
    color?: customInputColors;
    allSelectText?: string;
    isAllSelectView?: boolean;
    isSearchable?: boolean;
    autoSelectSingleOnEnter?: boolean;
    selected: TSelected;
    onSelectionChange: (selected: TSelected) => void;
    withPortal?: boolean;
    onEnterPress?: (item: string) => void | string[];
    onBlur?: () => void;
    onFocus?: () => void;
    isClearSearchOnBlur?: boolean;
    className?: string;
    stealthy?: boolean;
    highlightSelected?: boolean;
    withoutCheckbox?: boolean;
    badgeAmount?: number;
    activeSelectedValue?: boolean;
    enableScrollToActiveOption?: boolean;
    portalContainerId?: string;
    name?: string;
    style?: CSSProperties;
    multilineOption?: boolean;
    isClearInputOnSelect?: boolean;
}
export interface IStealthyItem {
    option?: ISelectOption;
    size: TSize;
    displayValue: string;
    multiple: boolean;
    label?: string | ReactElement;
    activeSelectedValue: boolean;
}
export interface IMenu {
    availableOptionsCount: number;
    filteredOptions: ISelectOption[];
    multilineOption?: boolean;
}
export interface ISelectSharedProperties {
    multiple: boolean;
    listMinWidth?: number;
    withoutCheckbox: boolean;
    highlightSelected: boolean;
    allSelectText: string;
    isAllSelectView: boolean;
    scrollingItems: number;
    selectedValues: TSelected;
    handleSelect: (option: string, includes: boolean) => void;
    handleTypographyClick: (option: string, event: MouseEvent<HTMLSpanElement>) => void;
    handleSelectAllClick: () => void;
    withPortal?: boolean;
}
export interface IMenuItem extends ISelectOption {
    multilineOption?: boolean;
}
export interface IBadgeAmount {
    children: number;
}
export interface ISelectButton {
    isOpen: boolean;
    disabled: boolean;
    color: `${customInputColors}`;
    toggleDropdown: React.MouseEventHandler;
}
export {};
//# sourceMappingURL=types.d.ts.map