import { ReactNode } from '../../../node_modules/react';
import { ETooltipBehaviorType, ETooltipPlacementType, ETooltipSizes, ETooltipType } from './enums';

export interface ITooltipProps {
    className?: string;
    size?: `${ETooltipSizes}`;
    type?: `${ETooltipType}`;
    popupClassName?: string;
    behavior?: `${ETooltipBehaviorType}`;
    placement?: `${ETooltipPlacementType}`;
    children: ReactNode;
    render?: ReactNode;
    title?: string;
    description?: string;
    clickable?: boolean;
    isOpen?: boolean;
}
//# sourceMappingURL=types.d.ts.map