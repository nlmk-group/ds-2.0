import { InputHTMLAttributes } from '../../../node_modules/react';

export interface IFilterTypeOption {
    value: string;
    label: string;
    icon: React.ReactNode;
    disabled?: boolean;
}
export interface IFilterValueOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export type TMenuState = 'type' | 'value' | null;
export interface IFilterProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
    filterTypeOptions: IFilterTypeOption[];
    filterValueOptions: IFilterValueOption[];
    onFilterChange?: (value: string | undefined, filterType: string) => void;
    defaultValue?: string;
    defaultFilterType?: string;
    withPortal?: boolean;
    portalContainerId?: string;
}
//# sourceMappingURL=types.d.ts.map