import React, { CSSProperties, FC, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { Box, ClickAwayListener, Icon, Spinner, Typography } from '@components/index';
import MenuItem from '@components/Select/subcomponents/MenuItem';
import clsx from 'clsx';

import { IAutocompleteDropdownProps } from './types';

import styles from './AutocompleteDropdown.module.scss';

import { AutocompleteContext } from '../../context';
import { EAutocompleteSize } from '../../enums';
import { boldReactElement, boldString } from '../../helpers';
import AutocompleteItem from '../AutocompleteItem';

const AutocompleteDropdown: FC<IAutocompleteDropdownProps> = ({ className, style }) => {
  const {
    portalContainerId,
    isOpen,
    withPortal,
    inputRef,
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
    renderLabel,
    totalText,
    showTotalCount,
    showEmptyDropdown,
    handleClickAway
  } = useContext(AutocompleteContext);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

  useEffect(() => {
    if (highlightedIndex < 0) return;

    const menuItems = wrapperRef.current?.querySelectorAll(`.${styles['menu-item']}`);

    if (menuItems && menuItems[highlightedIndex]) {
      menuItems[highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  if (!isOpen) return null;

  const { styles: popperStyles, attributes } = usePopper(inputRef.current, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          padding: 8,
          boundary: 'clippingParents'
        }
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start']
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, 0]
        }
      }
    ]
  });

  const rect = inputRef?.current?.getBoundingClientRect();
  const getMenuStyles = () => {
    const baseStyles = {
      width: rect?.width,
      left: rect?.left,
      top: rect ? rect.top + rect.height : undefined
    };

    if (withPortal) {
      return {
        ...baseStyles,
        ...popperStyles.popper
      };
    }

    return {
      ...baseStyles,
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 1000
    };
  };

  const hasItems = (currentItems ?? []).length > 0;

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={inputRef}>
      <div
        ref={el => {
          if (!el) return;

          if (withPortal) {
            setPopperElement(el);
          } else {
            (wrapperRef as React.MutableRefObject<HTMLElement | null>).current = el;
          }
        }}
        className={clsx(
          styles['card'],
          {
            [styles['card-small']]: size === EAutocompleteSize.s,
            [styles['card-extra-small']]: size === EAutocompleteSize.xs
          },
          className
        )}
        style={withPortal ? (getMenuStyles() as CSSProperties) : { ...style }}
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
                {showTotalCount && (
                  <Typography
                    className={styles.total}
                    variant="Caption-Medium"
                    color="var(--steel-90)"
                    data-ui-autocomplete-total
                  >
                    {totalText} {currentItems?.length}
                  </Typography>
                )}

                {currentItems?.map((item, index) => {
                  if (!item.label) return null;
                  const trimmedSubstr = inputValue.trim();
                  const label = renderLabel
                    ? boldReactElement(renderLabel(item), trimmedSubstr)
                    : boldString(item.label || '', trimmedSubstr);

                  const isDisabled =
                    item.disabled || Boolean(selectedItems?.some(selectedItem => selectedItem.value === item.value));

                  return (
                    <AutocompleteItem
                      key={item.id}
                      disabled={isDisabled}
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
              showEmptyDropdown && (
                <Box flexDirection="column" data-ui-autocomplete-empty>
                  <Box gap={8} flexDirection="row" className={styles['not-found-item']} data-ui-autocomplete-no-results>
                    <Icon color="error" name="IconCancelOutlined16" containerSize={16} />
                    <Typography variant="Caption-Medium" color="var(--steel-90)">
                      {noResultsText ?? 'Ничего не найдено'}
                    </Typography>
                  </Box>
                </Box>
              )
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
    </ClickAwayListener>
  );

  return withPortal ? createPortal(menu, portalContainer) : menu;
};

export default AutocompleteDropdown;
