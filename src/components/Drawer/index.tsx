import React, { FC, useEffect, useRef, useState } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { EClickAwayEvent } from '@components/ClickAwayListener/types';
import { Button, ClickAwayListener, IconCloseOutlined24 } from '@components/index';
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
  eventType = EClickAwayEvent.mousedown
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  const isHorizontal = position === EDrawerPosition.left || position === EDrawerPosition.right;

  const dynamicStyleForCloseButton = {
    right: position === EDrawerPosition.right ? `calc(${width} + 16px)` : 'auto',
    left: position === EDrawerPosition.left ? `calc(${width} + 16px)` : 'auto',
    top: position === EDrawerPosition.top ? `calc(${height} + 16px)` : 'auto',
    bottom: position === EDrawerPosition.bottom ? `calc(${height} + 16px)` : 'auto'
  };

  return (
    <div
      className={clsx(styles.drawerOverlay, styles[position], overlayClassName, {
        [styles.fadeOut]: isClosing,
        [styles.drawerOverlayBackdrop]: !overlay
      })}
      data-ui-drawer
      data-testid="DRAWER"
    >
      <ClickAwayListener
        eventType={eventType}
        className={clsx(styles.wrapper, styles[position], {
          [styles.slideOutLeft]: isClosing && position === EDrawerPosition.left,
          [styles.slideOutRight]: isClosing && position === EDrawerPosition.right,
          [styles.slideOutTop]: isClosing && position === EDrawerPosition.top,
          [styles.slideOutBottom]: isClosing && position === EDrawerPosition.bottom
        })}
        onClickAway={() => (disableBackdropClick ? undefined : handleClose())}
      >
        <div
          ref={drawerRef}
          className={clsx(styles.drawer, styles[position], className)}
          style={isHorizontal ? { width } : { height }}
        >
          <div className={clsx(styles.drawerContent, styles[position])} data-ui-drawer-content>
            {children}
          </div>
        </div>
        {!isClosing && isViewCloseButton && (
          <div className={clsx(styles.close, styles[position])}>
            <Button
              type="button"
              iconButton={
                <IconCloseOutlined24
                  htmlColor={overlay ? 'var(--ac-overlay-button)' : 'var(--ac-button-black-outline-default-text)'}
                />
              }
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
      </ClickAwayListener>
    </div>
  );
};

export default Drawer;
