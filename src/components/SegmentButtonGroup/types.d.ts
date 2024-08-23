import { ReactNode, SyntheticEvent } from 'react';

import { buttonColor } from './enums';

export type colorType = `${buttonColor}`;

export interface ISegmentButtonGroup {
  className?: string;
  compact?: boolean;
  color?: colorType;
  disabled?: boolean;
  children: ReactNode;
}

export interface ISegmentButtonProps {
  className?: string;
  disabled?: boolean;
  active?: boolean;
  color?: colorType;
  children: string | number | ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  toggleButton?: () => void;
}

export interface ISegmentButtonProperties {
  compact: boolean;
  color: colorType;
  disabled: boolean;
}
