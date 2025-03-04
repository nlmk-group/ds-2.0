import { default as React } from '../../../node_modules/react';
import { IContextProviderProps } from './types';

export declare const Provider: ({ children }: IContextProviderProps) => JSX.Element;
export declare const useDropdownHeight: () => {
    minHeight: number;
    optimalHeight: number;
} | null, useSetDropdownHeight: () => React.Dispatch<React.SetStateAction<{
    minHeight: number;
    optimalHeight: number;
} | null>> | null;
export declare const useDropdownWidth: () => number | null, useSetDropdownWidth: () => React.Dispatch<React.SetStateAction<number | null>> | null;
export declare const useComboBoxValue: () => {
    [key: string]: any;
    id: string;
    label: string;
}[] | null, useSetComboBoxValue: () => React.Dispatch<React.SetStateAction<{
    [key: string]: any;
    id: string;
    label: string;
}[] | null>> | null;
export declare const useSearchValue: () => string | null, useSetSearchValue: () => React.Dispatch<React.SetStateAction<string | null>> | null;
//# sourceMappingURL=context.d.ts.map