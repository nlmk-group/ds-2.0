import { ChangeEventHandler, InputHTMLAttributes } from 'react';

import { customInputColors } from '@components/declaration';

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
