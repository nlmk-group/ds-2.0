import { ChangeEventHandler, ComponentPropsWithoutRef, ReactNode, Ref } from '../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../declaration';

export interface IInputAdditionalProps {
    id?: string;
    value?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    multiline?: boolean;
    pseudo?: boolean;
    icon?: ReactNode;
    helperText?: ReactNode;
    resize?: boolean;
    reset?: boolean;
    onReset?: () => void;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    size?: `${sizesMappingInput}`;
    color?: customInputColors;
    colored?: boolean;
}
export type TInputProps = IInputAdditionalProps & Omit<ComponentPropsWithoutRef<'input'>, 'size'> & Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> & {
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
};
//# sourceMappingURL=types.d.ts.map