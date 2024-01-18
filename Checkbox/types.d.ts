import { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { customInputColors } from '../declaration';
export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?: customInputColors;
    disabled?: boolean;
    checked?: boolean;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string;
    multiple?: boolean;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map