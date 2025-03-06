import { ReactNode, SyntheticEvent } from 'react';

import { ESegmentButtonGroupSizes } from './enums';

export interface ISegmentButtonGroupProps {
  className?: string;
  size?: `${ESegmentButtonGroupSizes}`;
  disabled?: boolean;
  children: ReactNode;
}

export interface ISegmentButtonProps {
  className?: string;
  buttonIndex: number;
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  toggleButton?: () => void;
}
