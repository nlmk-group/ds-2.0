import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { EClickAwayEvent } from '@components/ClickAwayListener/types';
import { Button, IconCloseOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IDrawerProps } from './types';

import styles from './Drawer.module.scss';

import { EDrawerPosition } from './enums';

/**
 * Компонент Drawer для отображения боковой панели.
 * @component
 * @param {Object} props - Свойства компонента Drawer.
 * @param {boolean} props.isOpen - Состояние открытия/закрытия панели.
 * @param {() => void} props.onClose - Функция для закрытия панели.
 * @param {EDrawerPosition} [props.position=EDrawerPosition.right] - Позиция панели.
 * @param {ReactNode} props.children - Содержимое панели.
 * @param {string} [props.className] - Дополнительные CSS классы для панели.
 * @param {string} [props.overlayClassName] - Дополнительные CSS классы для оверлея.
 * @param {string} [props.width='var(--drawer-default-width)'] - Ширина панели (если позиция 'left' или 'right').
 * @param {string} [props.height='var(--drawer-default-height)'] - Высота панели (если позиция 'top' или 'bottom').
 * @param {boolean} [props.disableBackdropClick=false] - Отключает закрытие панели по клику вне её области.
 * @param {boolean} [props.isViewCloseButton=true] - Отображает кнопку закрытия.
 * @param {boolean} [props.overlay=true] - Отображает оверлей.
 * @param {TClickAwayEvent} [props.clickAwayEventType=EClickAwayEvent.click] - Тип события для закрытия панели при клике вне её области.
 * @returns {ReactElement | null} Компонент Drawer.
 */

const Drawer: FC<IDrawerProps> = ({
  isOpen,
  onClose,
  position = EDrawerPosition.right,
  className,
  overlayClassName,
  children,
  width = 'var(--drawer-default-width)',
  height = 'var(--drawer-default-height)',
  disableBackdropClick,
  isViewCloseButton = true,
  overlay = true,
  clickAwayEventType = EClickAwayEvent.click
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const justOpenedRef = useRef(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      justOpenedRef.current = true;

      const timeoutId = setTimeout(() => {
        justOpenedRef.current = false;
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isClosing) {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isClosing, handleClose]);

  if (!isOpen && !isClosing) return null;

  const isHorizontal = position === EDrawerPosition.left || position === EDrawerPosition.right;

  const dynamicStyleForCloseButton = {
    right: position === EDrawerPosition.right ? `calc(${width} + 16px)` : 'auto',
    left: position === EDrawerPosition.left ? `calc(${width} + 16px)` : 'auto',
    top: position === EDrawerPosition.top ? `calc(${height} + 16px)` : 'auto',
    bottom: position === EDrawerPosition.bottom ? `calc(${height} + 16px)` : 'auto'
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (clickAwayEventType === EClickAwayEvent.click && justOpenedRef.current) {
        return;
      }
      if (disableBackdropClick) return;
      handleClose();
    }
  };

  return (
    <div
      className={clsx(styles.drawerOverlay, styles[position], overlayClassName, {
        [styles.fadeOut]: isClosing,
        [styles.drawerOverlayBackdrop]: !overlay
      })}
      onClick={handleBackdropClick}
      data-ui-drawer
      data-testid="DRAWER"
    >
      <div
        className={clsx(styles.wrapper, styles[position], {
          [styles.slideOutLeft]: isClosing && position === EDrawerPosition.left,
          [styles.slideOutRight]: isClosing && position === EDrawerPosition.right,
          [styles.slideOutTop]: isClosing && position === EDrawerPosition.top,
          [styles.slideOutBottom]: isClosing && position === EDrawerPosition.bottom
        })}
      >
        <div className={clsx(styles.drawer, styles[position], className)} style={isHorizontal ? { width } : { height }}>
          <div className={clsx(styles.drawerContent, styles[position])} data-ui-drawer-content>
            {children}
          </div>
        </div>
        {!isClosing && isViewCloseButton && (
          <div className={clsx(styles.close, styles[position])}>
            <Button
              type="button"
              iconButton={<IconCloseOutlined24 htmlColor={overlay ? 'var(--unique-white)' : 'var(--steel-90)'} />}
              color="ghost"
              variant="secondary"
              className={clsx(styles.drawerClose, styles[position])}
              onClick={handleClose}
              aria-label="Close"
              size={EButtonSize.s}
              style={dynamicStyleForCloseButton}
              data-ui-drawer-close-button
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
