import { MouseEvent } from '../../../../../node_modules/react';
import { TLevel } from '../../types';

export interface IDayProps {
    id?: string;
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
    date?: Date;
    infiniteTimeScroll?: boolean;
}
//# sourceMappingURL=types.d.ts.map