import { ChangeEventHandler, CSSProperties, InputHTMLAttributes } from '../../../node_modules/react';
import { ECheckboxColors } from './enums';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?: `${ECheckboxColors}`;
    disabled?: boolean;
    checked?: boolean;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    multiple?: boolean;
    colored?: boolean;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map