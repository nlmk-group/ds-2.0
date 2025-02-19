import { default as React } from '../../../../../node_modules/react';
import { ColumnDef, FilterFn } from '@tanstack/react-table';
import { TData } from './types';

export declare const generateData: (count: number) => {
    id: number;
    name: string;
    amount: number;
    status: string;
    category: string;
    price: number;
    lastUpdate: Date;
    supplier: string;
    quality: number;
}[];
export declare const data: TData[];
export declare const dropdownOptions: ({
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
export declare const filterFunctions: Record<string, FilterFn<TData>>;
export declare const columns: Array<ColumnDef<TData, any>>;
//# sourceMappingURL=constants.d.ts.map