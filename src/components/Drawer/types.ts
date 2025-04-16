import { CSSProperties, ReactNode } from 'react';

import { TClickAwayEvent } from '@components/ClickAwayListener/types';

import { EDrawerPosition } from './enums';

export interface IDrawerProps {
  /** Состояние открытия/закрытия панели */
  isOpen: boolean;
  /** Функция для закрытия панели */
  onClose: () => void;
  /** Позиция панели */
  position?: `${EDrawerPosition}`;
  /** Дополнительные CSS классы для панели */
  className?: string;
  /** Дополнительные CSS классы для оверлея */
  overlayClassName?: string;
  /** Содержимое панели */
  children: ReactNode;
  /** Ширина панели (если позиция 'left' или 'right') */
  width?: CSSProperties['width'];
  /** Высота панели (если позиция 'top' или 'bottom') */
  height?: CSSProperties['height'];
  /** Отключает закрытие панели по клику вне её области */
  disableBackdropClick?: boolean;
  /** Отображает кнопку закрытия */
  isViewCloseButton?: boolean;
  /** Отображает оверлей */
  overlay?: boolean;
  /** Тип события для закрытия панели при клике вне её области */
  clickAwayEventType?: TClickAwayEvent;
}