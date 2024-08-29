import {ReactNode, SyntheticEvent} from 'react';

export interface IModalProps {
  isOpen: boolean;
  onClose: (e?: SyntheticEvent) => void;
  children: ReactNode;
  isDraggable?: boolean;
  isResizable?: boolean;
  onEscapeDown?: () => void;
  className?: string;
  disableBackdropClick?: boolean;
  disablePageScroll?: boolean;
}
