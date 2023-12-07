import { MouseEvent } from 'react';

import { TLevel } from '@components/DatePicker/types';

export interface DayProps {
  selected?: boolean;
  disabled?: boolean;
  today?: boolean;
  start?: boolean;
  mid?: boolean;
  end?: boolean;
  isHoverState?: boolean;
  type?: TLevel;
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onHover?: () => void;
  disableTimeChange?: boolean;
}
