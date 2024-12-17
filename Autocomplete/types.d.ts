import { CSSProperties, MutableRefObject, ReactNode } from '../../../node_modules/react';
import { TInputProps } from '../Input/types';

export interface IAutocompleteValue {
    id?: number;
    name?: string;
    label?: string;
    value?: any;
    disabled?: boolean;
}
export declare enum EAutocompleteSize {
    s = "s",
    m = "m",
    xs = "xs"
}
export interface IAutocompleteProps extends Omit<TInputProps, 'onChange'> {
    selected?: IAutocompleteValue;
    items?: Array<IAutocompleteValue> | null;
    isLoading?: boolean;
    nameGetter: (item: IAutocompleteValue, fullDataItem?: any) => string;
    renderLabel?: (item: IAutocompleteValue) => ReactNode;
    onChange: (item?: IAutocompleteValue) => void;
    onFullItemSelect?: (item?: any) => void;
    onDebouncedInputChange?: (value: string) => void;
    disabled?: boolean;
    helperText?: string;
    error?: boolean;
    noSelectionItem?: IAutocompleteValue;
    showTooltip?: boolean;
    readOnly?: boolean;
    isFullWidth?: boolean;
    placeholder?: string;
    label?: string;
    withPortal?: boolean;
    portalContainerId?: string;
    size?: `${EAutocompleteSize}`;
    onLoadOptions?: (query: string) => void;
    canLoadMore?: boolean;
    onLoadMore?: () => void;
    onCreateItem?: (value: string) => void;
    noResultsText?: string;
    createItemText?: (value: string) => string;
    className?: string;
    style?: CSSProperties;
}
export interface IUseScrollProps {
    wrapperRef: MutableRefObject<HTMLDivElement | null>;
    targetRef: MutableRefObject<HTMLDivElement | null>;
    callback: (t?: unknown) => void;
    canLoadMore: boolean;
    isPortalMounted: boolean;
}
//# sourceMappingURL=types.d.ts.map