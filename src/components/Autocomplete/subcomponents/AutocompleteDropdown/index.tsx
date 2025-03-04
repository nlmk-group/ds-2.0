import React, { CSSProperties, FC, useContext, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

import { AutocompleteContext } from '@components/Autocomplete/context';
import { boldReactElement, boldString } from '@components/Autocomplete/helpers';
import { EAutocompleteSize } from '@components/Autocomplete/types';
import { Box, Icon, Spinner, Typography } from '@components/index';
import MenuItem from '@components/Select/subcomponents/MenuItem';
import clsx from 'clsx';

import { IAutocompleteDropdownProps } from './types';

import styles from './AutocompleteDropdown.module.scss';

import AutocompleteItem from '../AutocompleteItem';

const AutocompleteDropdown: FC<IAutocompleteDropdownProps> = ({ className, style, withPortal = false }) => {
  const {
    isOpen,
    wrapperRef,
    isLoading,
    showCreateItem,
    onCreateItem,
    currentItems,
    inputValue,
    highlightedIndex,
    selectedItems = [],
    createItemText,
    onSelectMenuItem,
    noResultsText,
    targetRef,
    size,
    showTooltip,
    renderLabel
  } = useContext(AutocompleteContext);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (highlightedIndex < 0) return;

    const menuItems = wrapperRef.current?.querySelectorAll(`.${styles['menu-item']}`);

    if (menuItems && menuItems[highlightedIndex]) {
      menuItems[highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);
  const { styles: popperStyles, attributes } = usePopper(wrapperRef.current, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start']
        }
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: 'clippingParents',
          padding: 8
        }
      }
    ]
  });

  const hasItems = (currentItems ?? []).length > 0;
  const cardBoundingRect = withPortal ? wrapperRef.current?.getBoundingClientRect() : undefined;

  const getMenuStyles = (
    popperStyles: CSSProperties,
    withPortal: boolean,
    cardBoundingRect?: DOMRect,
    customStyles?: CSSProperties
  ): CSSProperties => {
    if (withPortal && cardBoundingRect) {
      return {
        width: cardBoundingRect.width,
        left: cardBoundingRect.left,
        top: cardBoundingRect.top + cardBoundingRect.height,
        position: 'absolute',
        ...customStyles
      };
    }
    return popperStyles;
  };

  const menu = (
    <div
      ref={withPortal ? setPopperElement : wrapperRef}
      className={clsx(
        styles['card'],
        {
          [styles['card-small']]: size === EAutocompleteSize.s,
          [styles['card-extra-small']]: size === EAutocompleteSize.xs
        },
        className
      )}
      style={withPortal ? getMenuStyles(popperStyles.popper, withPortal, cardBoundingRect, style) : popperStyles}
      {...(withPortal ? attributes.popper : {})}
      data-ui-autocomplete-dropdown
    >
      {!isLoading && (
        <Box flexDirection="column" gap={0} data-ui-autocomplete-content>
          {showCreateItem && inputValue && (
            <AutocompleteItem
              key="__create_item__"
              className={styles['menu-item']}
              onClick={() => onCreateItem?.(inputValue)}
              value={inputValue}
              highlighted={highlightedIndex === 0}
              data-ui-autocomplete-create-item
            >
              {createItemText?.(inputValue) ?? `Добавить: ${inputValue}`}
            </AutocompleteItem>
          )}

          {hasItems ? (
            <>
              <Typography
                className={styles.total}
                variant="Caption-Medium"
                color="var(--steel-90)"
                data-ui-autocomplete-total
              >
                Total: {currentItems?.length}
              </Typography>

              {currentItems?.map((item, index) => {
                if (!item.label) return null;
                const trimmedSubstr = inputValue.trim();
                const label = renderLabel
                  ? boldReactElement(renderLabel(item), trimmedSubstr)
                  : boldString(item.label || '', trimmedSubstr);
                return (
                  <AutocompleteItem
                    key={item.id}
                    disabled={item.disabled || selectedItems?.some(selectedItem => selectedItem.value === item.value)}
                    className={styles['menu-item']}
                    onClick={() => onSelectMenuItem?.(item)}
                    value={item.name || ''}
                    highlighted={index === highlightedIndex}
                    hint={showTooltip ? item.label : ''}
                    data-ui-autocomplete-item
                  >
                    {label}
                  </AutocompleteItem>
                );
              })}
            </>
          ) : (
            <Box flexDirection="column" data-ui-autocomplete-empty>
              <Box gap={8} flexDirection="row" className={styles['not-found-item']} data-ui-autocomplete-no-results>
                <Icon color="error" name="IconCancelOutlined16" containerSize={16} />
                <Typography variant="Caption-Medium" color="var(--steel-90)">
                  {noResultsText ?? 'Нет результатов'}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}

      {isLoading && (
        <MenuItem
          label={
            <Box data-testid="AUTOCOMPLETE_LOADING" justifyContent="center" data-ui-autocomplete-loading>
              <Spinner />
            </Box>
          }
          value=""
          disabled
        />
      )}
      <div
        ref={el => {
          if (el) {
            if (targetRef && typeof targetRef === 'object') {
              (targetRef as React.MutableRefObject<HTMLElement | null>).current = el;
            }
          }
        }}
      />
    </div>
  );
  return isOpen ? menu : null;
};

export default AutocompleteDropdown;
