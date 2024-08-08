import { default as React, CSSProperties } from '../../../node_modules/react';

export interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position?: 'left' | 'right' | 'top' | 'bottom';
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