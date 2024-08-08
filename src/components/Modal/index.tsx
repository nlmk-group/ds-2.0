import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { EButtonSizes } from '@components/Button/enums';
import { Button, IconCloseOutlined24 } from '@components/index';
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
  disableBackdropClick = false,
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

  const handleBackdropClick = () => {
    if (!disableBackdropClick) {
      onClose();
    }
  };

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
      <div className={styles.backdrop} onClick={handleBackdropClick} />
      <div className={styles.modalWrapper}>
        <div className={modalClasses} ref={modalRef} onMouseDown={handleMouseDown}>
          {isDraggable && <div ref={dragHandleRef} className={dragHandleClasses} />}
          {children}
        </div>
        <Button
          iconButton={<IconCloseOutlined24 htmlColor="var(--ac-overlay-button)" />}
          variant="primary"
          fill="clear"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close"
          size={EButtonSizes.s}
        />
      </div>
    </>
  );
};

export default Modal;
