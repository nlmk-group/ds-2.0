import { FC, ReactNode } from 'react';

import { customInputColors } from '@components/declaration';

export interface IPseudoInputProps {
  label: JSX.Element | string;
  children: ReactNode;
  size?: 'm' | 's';
  labelColor?: customInputColors;
  className?: string;
}

declare const PseudoInput: FC<IPseudoInputProps>;

export default PseudoInput;
