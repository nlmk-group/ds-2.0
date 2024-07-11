import { RefObject } from 'react';
interface SelectContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    selectedOption: string | number | undefined;
    setSelectedOption: (option: string | number) => void;
    onChange?: (value: string | number) => void;
    selectRef: RefObject<HTMLDivElement>;
    menuRef: RefObject<HTMLDivElement>;
    menuWidth?: string;
    withPortal?: boolean;
    portalContainerId: string;
    scrollingItems: number;
    selectedLabel: string;
    setSelectedLabel: (label: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    focusedIndex: number;
    setFocusedIndex: (index: number) => void;
}
export declare const SelectContext: import("react").Context<SelectContextProps>;
export {};
//# sourceMappingURL=context.d.ts.map