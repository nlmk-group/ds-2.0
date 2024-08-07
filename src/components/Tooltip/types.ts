import { ReactNode } from 'react';

import { ETooltipBehaviorType, ETooltipPlacementType } from './enums';

export type TooltipBehaviorType = `${ETooltipBehaviorType}`;

export type TooltipPlacementType = `${ETooltipPlacementType}`;

export interface ITooltipProps {
  className?: string;
  popupClassName?: string;
  behavior?: TooltipBehaviorType;
  placement?: TooltipPlacementType;
  children: ReactNode;
  render?: ReactNode;
  title?: string;
  description?: string;
  clickable?: boolean;
}
