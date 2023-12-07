import { ReactNode } from 'react';

import { customInputColors } from '@components/declaration';

export interface IPseudoInputProps {
  readonly label: JSX.Element | string;
  readonly children: ReactNode;
  readonly size?: 'm' | 's';
  readonly labelColor?: customInputColors;
}
