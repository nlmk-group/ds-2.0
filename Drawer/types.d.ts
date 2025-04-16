import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { TClickAwayEvent } from '../ClickAwayListener/types';
import { EDrawerPosition } from './enums';

export interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position?: `${EDrawerPosition}`;
    className?: string;
    overlayClassName?: string;
    children: ReactNode;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    disableBackdropClick?: boolean;
    isViewCloseButton?: boolean;
    overlay?: boolean;
    clickAwayEventType?: TClickAwayEvent;
}
//# sourceMappingURL=types.d.ts.map