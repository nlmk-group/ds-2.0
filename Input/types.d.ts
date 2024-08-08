import { ChangeEventHandler, ComponentPropsWithoutRef, ReactNode, Ref } from '../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../declaration';

type TSize = `${sizesMappingInput}`;
export interface IInputAdditionalProps {
    id?: string;
    value?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    multiline?: boolean;
    pseudo?: boolean;
    icon?: ReactNode;
    helperText?: string | ReactNode;
    resize?: boolean;
    reset?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onReset?: () => void;
    onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    size?: TSize;
    color?: customInputColors;
    colored?: boolean;
}
export type TInputProps = IInputAdditionalProps & Omit<ComponentPropsWithoutRef<'input'>, 'size'> & Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> & {
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
};
export {};
//# sourceMappingURL=types.d.ts.map