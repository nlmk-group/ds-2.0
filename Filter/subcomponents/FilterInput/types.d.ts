import { InputHTMLAttributes, Ref } from '../../../../../node_modules/react';

export interface IFilterInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> {
    value?: string;
    label?: string;
    icon?: React.ReactNode;
    reset?: boolean;
    onReset?: () => void;
    inputRef?: Ref<HTMLInputElement>;
}
//# sourceMappingURL=types.d.ts.map