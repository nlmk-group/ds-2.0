import { ChangeEventHandler, ComponentPropsWithoutRef, FC, ReactNode, Ref } from 'react';

export enum EInputSizes {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum EInputColors {
  default = 'default',
  error = 'error',
  warning = 'warning',
  success = 'success'
}

export interface IInputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> {
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
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onReset?: () => void;
  onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  size?: `${EInputSizes}`;
  color?: `${EInputColors}`;
  colored?: boolean;
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
}

declare const Input: FC<IInputProps>;

export default Input;
