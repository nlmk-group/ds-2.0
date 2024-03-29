import { ReactNode } from 'react';

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
