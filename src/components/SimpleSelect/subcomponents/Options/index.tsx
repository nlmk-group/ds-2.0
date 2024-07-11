import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { createPortal } from 'react-dom';

import { ClickAwayListener, List } from '@components/index';

import { IOptionsProps } from './types';

import styles from './Options.module.scss';

import { MenuMarginBottom } from '../../constants';
import { SelectContext } from '../../context';
import { IOptionItemProps } from '../OptionItem/types';

const Options: FC<IOptionsProps> = ({ children }) => {
  const {
    isOpen,
    selectRef,
    menuWidth,
    withPortal,
    menuRef,
    portalContainerId,
    scrollingItems,
    setIsOpen,
    setFocusedIndex,
    focusedIndex
  } = useContext(SelectContext);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

  const updateMenuPosition = useCallback(() => {
    if (!isOpen || !withPortal) return;

    const inputRect = selectRef.current?.getBoundingClientRect();
    const menuHeight = menuRef.current?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    if (!inputRect) return;

    const isMenuOverflowing = inputRect.bottom + menuHeight > windowHeight;
    const newMenuStyle: CSSProperties = {
      width: menuWidth || selectRef.current?.offsetWidth || 0,
      left: inputRect.left || 0,
      top: isMenuOverflowing ? 'auto' : inputRect.bottom,
      bottom: isMenuOverflowing ? windowHeight - inputRect.top + MenuMarginBottom : 'auto'
    };

    setMenuStyle(newMenuStyle);
  }, [isOpen, withPortal, selectRef, menuRef, menuWidth]);

  useEffect(() => {
    updateMenuPosition();

    const handleResize = () => {
      updateMenuPosition();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateMenuPosition]);

  if (!isOpen) return null;

  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement<IOptionItemProps>(child)) {
      return cloneElement(child, {
        isFocused: index === focusedIndex
      });
    }
    return child;
  });

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={selectRef}>
      <List
        ref={menuRef}
        style={{
          ...menuStyle,
          maxHeight: `calc((var(--40-size) * ${scrollingItems}) + var(--16-space))`
        }}
        className={styles.options}
      >
        {childrenWithProps}
      </List>
    </ClickAwayListener>
  );

  return withPortal ? createPortal(menu, portalContainer) : menu;
};

export default Options;
