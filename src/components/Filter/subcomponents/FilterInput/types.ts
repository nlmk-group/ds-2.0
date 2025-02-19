import { InputHTMLAttributes, Ref } from 'react';

export interface IFilterInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  value?: string;
  label?: string;
  icon?: React.ReactNode;
  reset?: boolean;
  onReset?: () => void;
  inputRef?: Ref<HTMLInputElement>;
}
