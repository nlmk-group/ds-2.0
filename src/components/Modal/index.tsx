import React, { FC, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { Button, IconCloseOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IModalProps } from './types';

import styles from './Modal.module.scss';

/**
 * Компонент Modal для отображения модального окна.
 * @component
 * @param {Object} props - Свойства компонента Modal.
 * @param {boolean} props.isOpen - Состояние открытия/закрытия модального окна.
 * @param {() => void} props.onClose - Функция для закрытия модального окна.
 * @param {ReactNode} props.children - Содержимое модального окна.
 * @param {boolean} [props.isDraggable=false] - Возможность перетаскивания модального окна.
 * @param {boolean} [props.isResizable=false] - Возможность изменения размеров модального окна.
 * @param {() => void} [props.onEscapeDown] - Функция для обработки нажатия клавиши Escape.
 * @param {string} [props.className] - Дополнительные CSS классы для модального окна.
 * @param {boolean} [props.disableBackdropClick=false] - Отключает закрытие модального окна по клику вне его области.
 * @returns {ReactElement | null} Компонент Modal.
 */

const Modal: FC<IModalProps> = ({
  children,
  isOpen,
  onClose,
  onEscapeDown,
  isDraggable = false,
  isResizable = false,
  disableBackdropClick = false,
  disablePageScroll = false,
  className
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const position = useRef({ left: 0, top: 0, dragStartX: 0, dragStartY: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const { dragStartX, dragStartY } = position.current;
      position.current.left += e.clientX - dragStartX;
      position.current.top += e.clientY - dragStartY;
      position.current.dragStartX = e.clientX;
      position.current.dragStartY = e.clientY;
      if (modalRef.current) {
        modalRef.current.style.left = `${position.current.left}px`;
        modalRef.current.style.top = `${position.current.top}px`;
      }
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isDraggable || e.target !== dragHandleRef.current) return;
      setIsDragging(true);
      position.current.dragStartX = e.clientX;
      position.current.dragStartY = e.clientY;
    },
    [isDraggable]
  );

  const handleBackdropClick = (e: SyntheticEvent) => {
    if (!disableBackdropClick) {
      onClose(e);
    }
  };

  useEffect(() => {
    if (isOpen && disablePageScroll) {
      document.body.classList.add(styles['no-scroll']);
    } else {
      document.body.classList.remove(styles['no-scroll']);
    }

    return () => {
      document.body.classList.remove(styles['no-scroll']);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isDraggable) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (onEscapeDown) {
          onEscapeDown();
        }
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDraggable, handleMouseMove, handleMouseUp, onClose, onEscapeDown]);

  if (!isOpen) return null;

  const modalClasses = clsx(
    styles.modal,
    {
      [styles.resizable]: isResizable,
      [styles.topPadding]: !isDraggable
    },
    className
  );
  const dragHandleClasses = clsx(styles.dragHandle, {
    [styles.draggable]: isDraggable
  });

  return (
    <>
      <div className={styles.backdrop} onClick={handleBackdropClick} data-ui-modal-backdrop />
      <div className={styles.modalWrapper} data-ui-modal>
        <div className={styles.modalInner} ref={modalRef} onMouseDown={handleMouseDown}>
          <div className={modalClasses}>
            {isDraggable && <div ref={dragHandleRef} className={dragHandleClasses} />}
            {children}
          </div>
          <Button
            iconButton={<IconCloseOutlined24 htmlColor="var(--ac-overlay-button)" />}
            color="ghost"
            variant="secondary"
            className={styles.modalClose}
            aria-label="Close"
            onClick={e => onClose(e)}
            size={EButtonSize.s}
            data-ui-modal-button
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
