import { CSSProperties, ReactNode, RefObject } from 'react';

export interface IComboBoxOption {
  id: string;
  idMdm?: string;
  label: string;
  name?: string;
  shortName?: string;
  hasLineBreak?: boolean;
  disabled?: boolean;
  tooltipDescription?: string;
}

export interface IComboBoxGroupOption extends IComboBoxOption {
  groupId?: string;
  groupLabel?: string;
  areaId?: string;
}

export interface IGroupDraggableOption extends IComboBoxGroupOption {
  isGroupLabel?: boolean;
  items?: IComboBoxOption[];
}

export interface IComboBoxTree {
  id: string;
  label: string;
  children?: IComboBoxTree[];
}

export interface IComboBoxTreeOption extends IComboBoxOption {
  parentId?: string | null;
  level?: number;
  children?: IComboBoxTreeOption[];
}

export type IdToOrderMap = Record<string | number, number>;

export interface IComboBoxProps {
  label?: string;
  isDisabled?: boolean;
  isResize?: boolean;
  dropdownWidth?: string | number;
  dropdownHeight?: string | number;
  dropdownMinHeight?: number;
  dropdownMinWidth?: number;
  inputMinWidth?: number;
  initialValue?: IComboBoxOption[];
  children?: ReactNode;
  displayEnumerated?: boolean;
  displayChildCount?: boolean;
  tooltipDescription?: IComboBoxOption[] | string;
  countOnlyLevel?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  dropdownClassName?: string;
  dropdownStyle?: CSSProperties;
  inputClassName?: string;
  inputStyle?: CSSProperties;
  withPortal?: boolean;
  portalContainerId?: string;
}

export interface IComboBoxInputProps {
  inputRef: RefObject<HTMLInputElement>;
  color?: string;
  isDisabled: boolean;
  isOpen: boolean;
  label?: string;
  initialValue?: IComboBoxOption[];
  value?: IComboBoxOption[];
  onFocusSearchInput: () => void;
  onOpenClick: () => void;
  onCloseClick: () => void;
  displayEnumerated?: boolean;
  displayChildCount?: boolean;
  countOnlyLevel?: number;
  className?: string;
  style?: CSSProperties;
}

export interface IListItem {
  id: string;
  idMdm?: string;
  label: string;
  name?: string;
  shortName?: string;
  isGroupLabel: boolean;
  _key: string;
}

export interface IContextProviderProps {
  children?: ReactNode;
}

export interface IGroupedItem {
  id: string;
  label: string;
  isGroupLabel?: boolean;
  items?: Array<{ id: string; label: string }>;
}
