import React, { CSSProperties } from 'react';

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
