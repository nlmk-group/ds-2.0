import React, { Children, cloneElement, CSSProperties, FC, isValidElement, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { Box, ClickAwayListener, Icon, List, OptionItem, Typography } from '@components/index';
import { IOptionItemProps } from '@components/OptionItem/types';
import { autoUpdate, flip, limitShift, offset, shift, useFloating } from '@floating-ui/react';

import { IOptionsProps } from './types';

import styles from './Options.module.scss';

import { useMultiSelectContext } from '../../context';

const OPTION_ITEM_HEIGHT_MAP = {
  m: 40,
  s: 32,
  xs: 32
};
const MENU_PADDING = 16;

const Options: FC<IOptionsProps> = ({ children, menuStyle }) => {
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
    selectedOptions,
    toggleOption,
    selectAll,
    showSelectAll,
    selectAllLabel,
    allOptions,
    noOptionsText,
    size
  } = useMultiSelectContext();

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [isPositioned, setIsPositioned] = useState(false);

  const { refs, floatingStyles, placement } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(4), flip({ fallbackPlacements: ['top-start'] }), shift({ limiter: limitShift(), padding: 8 })],
    whileElementsMounted: autoUpdate
  });

  useEffect(() => {
    if (inputRef.current) {
      refs.setReference(inputRef.current);
    }
  }, [inputRef, refs]);

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

  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

  if (!isOpen) return null;

  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  const childrenWithProps =
    Children.map(children, (child, index) => {
      if (isValidElement<IOptionItemProps>(child) && typeof child.type !== 'string') {
        const label = child.props.label || (typeof child.props.children === 'string' ? child.props.children : '');
        const isSelected = selectedOptions.includes(child.props.value);

        return cloneElement(child, {
          isFocused: index === focusedIndex,
          isSelected,
          size,
          onSelect: () => toggleOption(child.props.value, label)
        });
      }
      return child;
    }) || [];

  const getMenuStyles = () => {
    const optionHeight = OPTION_ITEM_HEIGHT_MAP[size as keyof typeof OPTION_ITEM_HEIGHT_MAP] || 40;
    const baseStyles = {
      width: withPortal ? menuWidth || inputRef.current?.offsetWidth : '100%',
      maxHeight: `${optionHeight * scrollingItems + MENU_PADDING}px`,
      ...floatingStyles,
      ...menuStyle,
      visibility: (isPositioned ? 'visible' : 'hidden') as CSSProperties['visibility']
    };

    return baseStyles as CSSProperties;
  };

  const isAllSelected = allOptions.length > 0 && selectedOptions.length === allOptions.length;

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
        style={getMenuStyles()}
        className={styles.options}
        data-popper-placement={placement}
        data-ui-multi-select-options
      >
        {showSelectAll && allOptions.length > 0 && (
          <OptionItem
            value="__select_all__"
            label={selectAllLabel}
            isSelected={isAllSelected}
            size={size}
            onSelect={selectAll}
            data-ui-multi-select-select-all
          >
            <Typography variant="Caption-Medium" color="var(--steel-70)">
              {selectAllLabel}
            </Typography>
          </OptionItem>
        )}

        {childrenWithProps.length > 0 ? (
          childrenWithProps
        ) : (
          <Box
            className={styles['not-found-item']}
            alignItems="center"
            gap={8}
            flexDirection="row"
            data-ui-multi-select-no-options
          >
            <Icon name="IconCancelOutlined16" containerSize={16} color="error" />
            <Typography variant="Body1-Medium" color="var(--steel-90)">
              {noOptionsText ?? 'Ничего не найдено'}
            </Typography>
          </Box>
        )}
      </List>
    </ClickAwayListener>
  );

  return withPortal ? createPortal(menu, portalContainer) : menu;
};

export default Options;
