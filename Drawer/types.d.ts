import { default as React, CSSProperties } from '../../../node_modules/react';
import { EDrawerPosition } from './enums';

export interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position?: `${EDrawerPosition}`;
    className?: string;
    overlayClassName?: string;
    children: React.ReactNode;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    disableBackdropClick?: boolean;
    isViewCloseButton?: boolean;
    overlay?: boolean;
}
//# sourceMappingURL=types.d.ts.map