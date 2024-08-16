import { FC, ReactNode } from 'react';

/**
 * Интерфейс свойств компонента Modal.
 */
export interface IModalProps {
  /** Состояние открытия/закрытия модального окна */
  isOpen: boolean;
  /** Функция для закрытия модального окна */
  onClose: () => void;
  /** Содержимое модального окна */
  children: ReactNode;
  /** Возможность перетаскивания модального окна */
  isDraggable?: boolean;
  /** Возможность изменения размеров модального окна */
  isResizable?: boolean;
  /** Функция для обработки нажатия клавиши Escape */
  onEscapeDown?: () => void;
  /** Дополнительные CSS классы для модального окна */
  className?: string;
  /** Отключает закрытие модального окна по клику вне его области */
  disableBackdropClick?: boolean;
}

/**
 * Компонент Modal для отображения модального окна.
 */
declare const Modal: FC<IModalProps>;

export default Modal;
