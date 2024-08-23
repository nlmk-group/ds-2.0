import { CSSProperties, FC, MouseEvent, MouseEventHandler, ReactElement, ReactNode } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';

export type TSize = `${sizesMappingInput}`;
export type TSelected = string | string[];

export interface ISelectOption {
  value: string;
  label: string | ReactElement;
  subLabel?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  options?: ISelectOption[];

  [key: string]: any;
}

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

export interface IMenuItem extends ISelectOption {}

export interface IBadgeAmount {
  children: number;
}

export interface ISelectButton {
  isOpen: boolean;
  disabled: boolean;
  color: `${customInputColors}`;
  toggleDropdown: MouseEventHandler;
}

declare const Select: FC<ISelectProps>;

export default Select;
