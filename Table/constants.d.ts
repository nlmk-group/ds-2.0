import { default as React } from '../../../node_modules/react';
import { FilterFn } from '@tanstack/react-table';
import { TData } from './examples/FilteringTable/types';

export declare const tableFilterOperations: ({
    value: string;
    label: string;
    icon: React.JSX.Element;
    disabled?: undefined;
} | {
    value: string;
    label: string;
    icon: React.JSX.Element;
    disabled: boolean;
})[];
export declare const basicFilterFunctions: Record<string, FilterFn<TData>>;
export declare const tableCustomFilterFn: FilterFn<TData>;
//# sourceMappingURL=constants.d.ts.map