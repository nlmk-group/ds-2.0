import { ChangeEventHandler, ComponentPropsWithoutRef, ReactNode, Ref } from 'react';
import { customInputColors, sizesMappingInput } from '../declaration';
export interface IInputAdditionalProps {
    id?: string;
    value?: string;
    disabled?: boolean;
    label?: string;
    multiline?: boolean;
    pseudo?: boolean;
    icon?: ReactNode;
    helperText?: string | ReactNode;
    resize?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    size?: sizesMappingInput;
    color?: customInputColors;
}
export type TInputProps = IInputAdditionalProps & Omit<ComponentPropsWithoutRef<'input'>, 'size'> & Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> & {
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
};
//# sourceMappingURL=types.d.ts.map