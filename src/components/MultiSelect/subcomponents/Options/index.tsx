import React, { Children, cloneElement, CSSProperties, FC, isValidElement, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { Box, ClickAwayListener, List, Typography } from '@components/index';
import OptionItem from '@components/SimpleSelect/subcomponents/OptionItem';
import { IOptionItemProps } from '@components/SimpleSelect/subcomponents/OptionItem/types';

import { IOptionsProps } from './types';

import styles from './Options.module.scss';

import { MultiSelectContext } from '../../context';

const Options: FC<IOptionsProps> = ({ children, menuStyle }) => {
  const {
    isOpen,
    inputRef,
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
    noOptionsText
  } = useContext(MultiSelectContext);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles: popperStyles, attributes } = usePopper(inputRef.current, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start'],
          rootBoundary: 'viewport',
          flipVariations: true
        }
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: 'clippingParents',
          padding: 8
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, 4]
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

  const childrenWithProps =
    Children.map(children, (child, index) => {
      if (isValidElement<IOptionItemProps>(child)) {
        const label = child.props.label || (typeof child.props.children === 'string' ? child.props.children : '');
        return cloneElement(child, {
          isFocused: index === focusedIndex,
          isSelected: selectedOptions.includes(child.props.value),
          onSelect: () => toggleOption(child.props.value, label)
        });
      }
      return child;
    }) || [];

  const getMenuStyles = () => {
    const baseStyles = {
      width: withPortal ? menuWidth || inputRef.current?.offsetWidth : '100%',
      maxHeight: `calc((var(--40-size) * ${scrollingItems}) + var(--16-space))`,
      ...popperStyles.popper,
      ...menuStyle
    };

    return baseStyles as CSSProperties;
  };

  const isAllSelected = allOptions.length > 0 && selectedOptions.length === allOptions.length;

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={inputRef}>
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
        {...(withPortal ? attributes.popper : {})}
        data-ui-multi-select-options
      >
        {showSelectAll && allOptions.length > 0 && (
          <Box className={styles.selectAllContainer} data-ui-multi-select-select-all>
            <OptionItem
              value="__select_all__"
              label={selectAllLabel}
              isSelected={isAllSelected}
              onSelect={selectAll}
              className={styles.selectAllOption}
            >
              {selectAllLabel}
            </OptionItem>
          </Box>
        )}

        {showSelectAll && allOptions.length > 0 && <div className={styles.divider} />}

        {childrenWithProps.length > 0 ? (
          childrenWithProps
        ) : (
          <Box className={styles.noOptionsContainer} data-ui-multi-select-no-options>
            <Typography variant="Caption-Medium" color="var(--steel-70)">
              {noOptionsText}
            </Typography>
          </Box>
        )}
      </List>
    </ClickAwayListener>
  );

  return withPortal ? createPortal(menu, portalContainer) : menu;
};

export default Options;
