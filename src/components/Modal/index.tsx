import React, { FC, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { Button, IconCloseOutlined24 } from '@components/index';
import { useDialogFocus } from '@components/utils/useDialogFocus';
import { FloatingFocusManager } from '@floating-ui/react';
import clsx from 'clsx';

import { IModalProps } from './types';

import styles from './Modal.module.scss';

let scrollLocks = 0;

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
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  onClose,
  onEscapeDown,
  isDraggable = false,
  isResizable = false,
  disableBackdropClick = false,
  disablePageScroll = false,
  className
}) => {
  const {
    panel: modalRef,
    setPanel,
    context,
    opener
  } = useDialogFocus(isOpen, () => {
    onEscapeDown?.();
    onClose();
  });
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const panel = modalRef.current;
      if (!isDragging || !panel) return;
      const bounds = panel.getBoundingClientRect();
      const close = panel.lastElementChild!.getBoundingClientRect();
      const dx = Math.max(
        -bounds.left,
        Math.min(e.clientX - pointer.current.x, window.innerWidth - Math.max(bounds.right, close.right))
      );
      const dy = Math.max(
        -Math.min(bounds.top, close.top),
        Math.min(e.clientY - pointer.current.y, window.innerHeight - bounds.bottom)
      );
      panel.style.left = `${(parseFloat(panel.style.left) || 0) + dx}px`;
      panel.style.top = `${(parseFloat(panel.style.top) || 0) + dy}px`;
      pointer.current = { x: e.clientX, y: e.clientY };
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isDraggable || e.target !== dragHandleRef.current) return;
      setIsDragging(true);
      pointer.current = { x: e.clientX, y: e.clientY };
    },
    [isDraggable]
  );

  const handleBackdropClick = (e: SyntheticEvent) => {
    if (!disableBackdropClick) {
      onClose(e);
    }
  };

  useEffect(() => {
    if (!isOpen || !disablePageScroll) return;
    scrollLocks += 1;
    document.body.classList.add(styles['no-scroll']);

    return () => {
      scrollLocks -= 1;
      if (scrollLocks === 0) document.body.classList.remove(styles['no-scroll']);
    };
  }, [isOpen, disablePageScroll]);

  useEffect(() => {
    if (!isOpen) return;
    if (isDraggable) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isOpen, isDraggable, handleMouseMove, handleMouseUp]);

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
        <FloatingFocusManager context={context} returnFocus={opener} initialFocus={modalRef}>
          <div
            role="dialog"
            tabIndex={-1}
            aria-modal="true"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            className={styles.modalInner}
            ref={setPanel}
            onMouseDown={handleMouseDown}
          >
            <div className={modalClasses}>
              {isDraggable && <div ref={dragHandleRef} className={dragHandleClasses} />}
              {children}
            </div>
            <Button
              type="button"
              iconButton={<IconCloseOutlined24 htmlColor="var(--unique-white)" />}
              color="ghost"
              variant="secondary"
              className={styles.modalClose}
              aria-label="Close"
              onClick={e => onClose(e)}
              size={EButtonSize.s}
              data-ui-modal-button
            />
          </div>
        </FloatingFocusManager>
      </div>
    </>
  );
};

export default Modal;
