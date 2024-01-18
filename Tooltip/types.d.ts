import { ReactNode } from 'react';
export type TooltipBehaviorType = 'hover' | 'click' | 'focus';
export type TooltipPlacementType = 'top' | 'bottom' | 'left' | 'right';
export interface ITooltipProps {
    className?: string;
    behavior?: TooltipBehaviorType;
    placement?: TooltipPlacementType;
    children: ReactNode;
    title?: string;
    list?: string[];
    description?: string;
    render?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map