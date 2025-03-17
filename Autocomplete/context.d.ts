import { ReactNode, RefObject } from '../../../node_modules/react';
import { IAutocompleteValue } from './types';
import { EAutocompleteSize } from './enums';

interface AutocompleteContextProps {
    isOpen: boolean;
    disabled: boolean;
    withPortal?: boolean;
    wrapperRef: RefObject<HTMLDivElement>;
    targetRef: RefObject<HTMLDivElement>;
    inputRef: RefObject<HTMLDivElement>;
    isLoading: boolean;
    showCreateItem?: boolean;
    onCreateItem?: (value: string) => void;
    currentItems: IAutocompleteValue[] | null;
    inputValue: string;
    highlightedIndex: number;
    selectedItems: IAutocompleteValue[] | null;
    createItemText: (value: string) => string;
    onSelectMenuItem: (item: IAutocompleteValue) => void;
    noResultsText: string;
    size?: `${EAutocompleteSize}`;
    showTooltip: boolean;
    renderLabel?: (item: IAutocompleteValue) => ReactNode;
    portalContainerId: string;
    totalText: string;
    showTotalCount: boolean;
    showEmptyDropdown: boolean;
    handleClickAway: () => void;
}
export declare const AutocompleteContext: import('../../../node_modules/react').Context<AutocompleteContextProps>;
export {};
//# sourceMappingURL=context.d.ts.map