import React, { Children, cloneElement, CSSProperties, FC, isValidElement, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { ClickAwayListener, List } from '@components/index';

import { IOptionsProps } from './types';

import styles from './Options.module.scss';

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

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles: popperStyles, attributes } = usePopper(selectRef.current, popperElement, {
    placement: 'bottom-start', // Позиционируем список под инпутом, выравнивая по левому краю
    modifiers: [
      {
        name: 'flip', // Автоматически переворачивает меню наверх, если внизу нет места
        options: {
          fallbackPlacements: ['top'],
          rootBoundary: 'viewport',
          flipVariations: true,
          padding: 8
        }
      },
      {
        name: 'preventOverflow', // Предотвращает выход за пределы viewport
        options: {
          boundary: 'clippingParents',
          padding: 8
        }
      },
      {
        name: 'offset', // Добавляет отступ от инпута
        options: {
          offset: [0, 8] // [горизонтальный, вертикальный] отступ в пикселях
        }
      }
    ]
  });

  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

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

  const getMenuStyles = () => {
    const baseStyles = {
      width: withPortal ? menuWidth || selectRef.current?.offsetWidth : '100%',
      maxHeight: `calc((var(--40-size) * ${scrollingItems}) + var(--16-space))`,
      marginTop: 0,
      ...popperStyles.popper
    };

    if (withPortal) {
      return baseStyles
    }

    return {
      ...baseStyles,
      zIndex: 1000
    }
  };

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={selectRef}>
      <List
        ref={el => {
          if (el) {
            if (menuRef && typeof menuRef === 'object') {
              (menuRef as React.MutableRefObject<HTMLElement | null>).current = el;
            }
            
            setPopperElement(el);

          }
        }}
        style={getMenuStyles() as CSSProperties}
        className={styles.options}
        {...(withPortal ? attributes.popper : {})}
      >
        {childrenWithProps}
      </List>
    </ClickAwayListener>
  );

  return withPortal ? createPortal(menu, portalContainer) : menu;
};

export default Options;
