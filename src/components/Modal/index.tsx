import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Button, ClickAwayListener, IconCloseOutlined32 } from '@components/index';
import clsx from 'clsx';

import { IModalProps } from './types';

import styles from './Modal.module.scss';

const Modal: FC<IModalProps> = ({
  children,
  isOpen,
  onClose,
  onEscapeDown,
  isDraggable = false,
  isResizable = false,
  className
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const position = useRef({ left: 0, top: 0, dragStartX: 0, dragStartY: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Обработчик перемещения мыши для перетаскивания
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

  // Обработчик отпускания кнопки мыши после перетаскивания
  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  // Обработчик нажатия на элемент, за который можно тащить
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isDraggable || e.target !== dragHandleRef.current) return;
      setIsDragging(true);
      position.current.dragStartX = e.clientX;
      position.current.dragStartY = e.clientY;
    },
    [isDraggable]
  );

  useEffect(() => {
    if (isDraggable) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    // Обработчик нажатия клавиши Escape
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

  const modalClasses = `${styles.modal} ${isResizable ? styles.resizable : ''} ${
    !isDraggable ? styles.topPadding : ''
  }`;
  const dragHandleClasses = `${styles.dragHandle} ${isDraggable ? styles.draggable : ''}`;

  return (
    <div className={clsx(styles.modalOverlay, className)}>
      <ClickAwayListener onClickAway={onClose}>
        <div className={modalClasses} ref={modalRef} onMouseDown={handleMouseDown}>
          {isDraggable && <div ref={dragHandleRef} className={dragHandleClasses} />}
          {children}
        </div>
      </ClickAwayListener>
      <Button
        iconButton={<IconCloseOutlined32 />}
        variant="text"
        className={styles.modalClose}
        onClick={onClose}
        aria-label="Close"
      />
    </div>
  );
};

export default Modal;
