import React, { FC, useEffect, useRef, useState } from 'react';

import { EButtonSizes } from '@components/Button/enums';
import { Button, ClickAwayListener, IconCloseOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IDrawerProps } from './types';

import styles from './Drawer.module.scss';

const Drawer: FC<IDrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  className,
  overlayClassName,
  children,
  width = 'var(--drawer-default-width)',
  height = 'var(--drawer-default-height)',
  disableBackdropClick,
  isViewCloseButton = true,
  overlay = true
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

  const isHorizontal = position === 'left' || position === 'right';

  const dynamicStyleForCloseButton = {
    right: position === 'right' ? `calc(${width} + 16px)` : 'auto',
    left: position === 'left' ? `calc(${width} + 16px)` : 'auto',
    top: position === 'top' ? `calc(${height} + 16px)` : 'auto',
    bottom: position === 'bottom' ? `calc(${height} + 16px)` : 'auto'
  };

  return (
    <div
      data-testid="DRAWER"
      className={clsx(styles.drawerOverlay, styles[position], overlayClassName, {
        [styles.fadeOut]: isClosing,
        [styles.drawerOverlayBackdrop]: !overlay
      })}
    >
      <ClickAwayListener
        className={clsx(styles.wrapper, styles[position], {
          [styles.slideOutLeft]: isClosing && position === 'left',
          [styles.slideOutRight]: isClosing && position === 'right',
          [styles.slideOutTop]: isClosing && position === 'top',
          [styles.slideOutBottom]: isClosing && position === 'bottom'
        })}
        onClickAway={() => (disableBackdropClick ? undefined : handleClose())}
      >
        <div
          ref={drawerRef}
          className={clsx(styles.drawer, styles[position], className)}
          style={isHorizontal ? { width } : { height }}
        >
          <div className={styles.drawerContent}>{children}</div>
        </div>
        {!isClosing && isViewCloseButton && (
          <div className={clsx(styles.close, styles[position])}>
            <Button
              iconButton={
                <IconCloseOutlined24
                  htmlColor={overlay ? 'var(--ac-overlay-button)' : 'var(--ac-button-black-outline-default-text)'}
                />
              }
              variant="primary"
              fill="clear"
              className={clsx(styles.drawerClose, styles[position])}
              onClick={handleClose}
              aria-label="Close"
              size={EButtonSizes.s}
              style={dynamicStyleForCloseButton}
            />
          </div>
        )}
      </ClickAwayListener>
    </div>
  );
};

export default Drawer;
