import { ReactNode } from '../../../../../node_modules/react';

export interface IAutocompleteItemProps {
    children: ReactNode;
    onClick?: (value: string) => void;
    value: string;
    disabled?: boolean;
    hint?: string;
    className?: string;
    highlighted?: boolean;
}
//# sourceMappingURL=types.d.ts.map