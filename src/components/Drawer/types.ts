import React, { CSSProperties } from 'react';

import { TClickAwayEvent } from '@components/ClickAwayListener/types';

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
  eventType?: TClickAwayEvent;
}
