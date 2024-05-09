import { ChangeEventHandler, ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';

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
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: TSize;
  color?: customInputColors;
  colored?: boolean;
}

export type TInputProps = IInputAdditionalProps &
  Omit<ComponentPropsWithoutRef<'input'>, 'size'> &
  Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> & {
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
  };
