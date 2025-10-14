import React, { Children, cloneElement, CSSProperties, FC, isValidElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { ClickAwayListener, List } from '@components/index';
import { IOptionItemProps } from '@components/OptionItem/types';

import { IOptionsProps } from './types';

import styles from './Options.module.scss';

import { MENU_OFFSET } from '../../constants';
import { useSelectContext } from '../../context';

const OPTION_ITEM_HEIGHT_MAP = {
  m: 40,
  s: 32,
  xs: 32
};
const MENU_PADDING = 16;

const Options: FC<IOptionsProps> = ({ children }) => {
  const {
    isOpen,
    inputRef,
    arrowButtonRef,
    menuWidth,
    withPortal,
    menuRef,
    portalContainerId,
    scrollingItems,
    setIsOpen,
    setFocusedIndex,
    focusedIndex,
    selectedOption,
    setSelectedOption,
    setSelectedLabel,
    size,
    clearSearchOnSelect,
    setSearchTerm
  } = useSelectContext();

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles: popperStyles, attributes } = usePopper(inputRef.current, popperElement, {
    placement: 'bottom-start', // Позиционируем список под инпутом, выравнивая по левому краю
    modifiers: [
      {
        name: 'flip', // Автоматически переворачивает меню наверх, если внизу нет места
        options: {
          fallbackPlacements: ['top-start'],
          rootBoundary: 'viewport',
          flipVariations: true
        }
      },
      {
        name: 'preventOverflow', // Предотвращает выход за пределы viewport
        options: {
          boundary: 'clippingParents',
          padding: MENU_OFFSET
        }
      },
      {
        name: 'offset', // Добавляет отступ от инпута
        options: {
          offset: [0, MENU_OFFSET] // [горизонтальный, вертикальный] отступ в пикселях
        }
      }
    ]
  });

  const portalContainer = document.getElementById(portalContainerId) as HTMLElement;

  if (!isOpen) return null;

  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement<IOptionItemProps>(child)) {
      const label = child.props.label || (typeof child.props.children === 'string' ? child.props.children : '');
      const isSelected = selectedOption === child.props.value;

      return cloneElement(child, {
        isFocused: index === focusedIndex,
        isSelected,
        size,
        onSelect: () => {
          setSelectedOption(child.props.value);
          setSelectedLabel(label);
          if (clearSearchOnSelect) {
            setSearchTerm('');
          }
          setIsOpen(false);
        }
      });
    }
    return child;
  });

  const getMenuStyles = () => {
    const optionHeight = OPTION_ITEM_HEIGHT_MAP[size as keyof typeof OPTION_ITEM_HEIGHT_MAP] || 40;
    const baseStyles = {
      width: withPortal ? menuWidth || inputRef.current?.offsetWidth : '100%',
      maxHeight: `${optionHeight * scrollingItems + MENU_PADDING}px`,
      ...popperStyles.popper
    };
    return baseStyles;
  };

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={[inputRef, arrowButtonRef]}>
      <List
        ref={el => {
          if (!el) return;
          if (menuRef && typeof menuRef === 'object') {
            (menuRef as React.MutableRefObject<HTMLElement | null>).current = el;
          }
          setPopperElement(el);
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
