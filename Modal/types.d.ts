import { ReactNode } from '../../../node_modules/react';

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    isDraggable?: boolean;
    isResizable?: boolean;
    onEscapeDown?: () => void;
    className?: string;
    disableBackdropClick?: boolean;
}
//# sourceMappingURL=types.d.ts.map