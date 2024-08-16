import { CSSProperties, FC, ReactNode } from 'react';

export enum EDrawerPosition {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom'
}

/**
 * Интерфейс свойств компонента Drawer.
 */
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
}

/**
 * Компонент Drawer для отображения боковой панели.
 */
declare const Drawer: FC<IDrawerProps>;

export default Drawer;
