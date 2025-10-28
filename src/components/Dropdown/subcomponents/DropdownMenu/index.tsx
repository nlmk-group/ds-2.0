import React, { CSSProperties, FC, useContext, useState, useEffect } from 'react';
import { useFloating, offset, flip, shift, autoUpdate, limitShift } from '@floating-ui/react';

import { DropdownContext } from '@components/Dropdown/context';
import { ClickAwayListener, List } from '@components/index';
import clsx from 'clsx';

import { IDropdownMenuProps } from './types';

import styles from './DropdownMenu.module.scss';

/**
 * Компонент DropdownMenu отображает меню с элементами, которое закрывается при клике вне его границ.
 *
 * @component
 * @param {object} props - Пропсы компонента.
 * @param {ReactNode} props.children - Элементы, которые будут отображаться в меню.
 * @returns {ReactNode|null} Возвращает JSX элемент или null, если меню закрыто.
 */
const DropdownMenu: FC<IDropdownMenuProps> = ({ children, withPortal = false, ...props }) => {
  const { isOpen, setIsOpen, buttonRef, menuStyle } = useContext(DropdownContext);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [isPositioned, setIsPositioned] = useState(false);

  const rect = buttonRef?.current?.getBoundingClientRect();

  const { refs, floatingStyles, placement } = useFloating({
    placement: 'bottom-start',
    middleware: [
      offset(4),
      flip({ fallbackPlacements: ['top-start'] }),
      shift({ limiter: limitShift(), padding: 8 })
    ],
    whileElementsMounted: autoUpdate
  });

  useEffect(() => {
    if (buttonRef?.current) {
      refs.setReference(buttonRef.current);
    }
  }, [buttonRef, refs]);

  useEffect(() => {
    if (popperElement) {
      refs.setFloating(popperElement);
      requestAnimationFrame(() => {
        setIsPositioned(true);
      });
    } else {
      setIsPositioned(false);
    }
  }, [popperElement, refs]);

  const MIN_WIDTH = 130;

  const getMenuStyles = () => {
    const rect = buttonRef?.current?.getBoundingClientRect();
    const isSmallContent = (rect?.width || 48) < MIN_WIDTH;

    const baseStyles = {
      minWidth: isSmallContent ? `${MIN_WIDTH}px` : rect?.width,
      ...menuStyle,
      visibility: (isPositioned ? 'visible' : 'hidden') as CSSProperties['visibility']
    };

    return withPortal ? { ...baseStyles, ...floatingStyles } : baseStyles;
  };

  /**
   * Примерное значение ширины кнопки, при которой нужно задавать минимальную ширину в абсолютных значениях
   */
  const isSmallContent = (rect?.width || 48) < 130;

  /**
   * Обработчик клика вне меню, закрывающий его.
   */
  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={buttonRef || undefined}>
      <List
        ref={el => {
          if (withPortal) {
            setPopperElement(el);
          }
        }}
        className={clsx(styles.menu, { [styles['small-content']]: isSmallContent })}
        style={getMenuStyles() as CSSProperties}
        data-popper-placement={placement}
        {...props}
      >
        {children}
      </List>
    </ClickAwayListener>
  );

  return isOpen ? menu : null;
};

export default DropdownMenu;
