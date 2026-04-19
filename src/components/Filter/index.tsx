import React, { CSSProperties, FC, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  Box,
  Checkbox,
  ClickAwayListener,
  IconSelectionContains24,
  List,
  ListItem,
  Typography
} from '@components/index';
import { autoUpdate, flip, limitShift, offset, shift, useFloating } from '@floating-ui/react';
import { useFloatingReferenceSync } from '@components/declaration/hooks';
import clsx from 'clsx';

import { IFilterProps, IFilterTypeOption, IFilterValueOption, TMenuState } from './types';

import styles from './Filter.module.scss';

import { FilterInput } from './subcomponents';

const Filter: FC<IFilterProps> = ({
  filterTypeOptions,
  filterValueOptions,
  onFilterChange,
  defaultValue = '',
  defaultFilterType,
  withPortal = false,
  portalContainerId = 'root',
  className,
  mode = 'autocomplete',
  selectedValues,
  defaultSelectedValues,
  onSelectedValuesChange,
  ...inputProps
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [filterType, setFilterType] = useState(defaultFilterType || filterTypeOptions[0]?.value || '');

  const [internalSelected, setInternalSelected] = useState<string[]>(defaultSelectedValues ?? []);
  const isSelectedControlled = selectedValues !== undefined;
  const effectiveSelected = isSelectedControlled ? (selectedValues as string[]) : internalSelected;

  const updateSelected = (next: string[]) => {
    if (!isSelectedControlled) setInternalSelected(next);
    onSelectedValuesChange?.(next);
  };

  const isMulti = mode === 'multiselect';

  const [openedMenu, setOpenedMenu] = useState<TMenuState>(null);

  const iconRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [isPositioned, setIsPositioned] = useState(false);

  const referenceElement = useMemo(() => {
    if (openedMenu === 'type') return iconRef.current;
    if (openedMenu === 'value') return inputRef.current;
    return null;
  }, [openedMenu]);

  const offsetValue = openedMenu === 'type' ? 16 : 8;

  const { refs, floatingStyles, placement } = useFloating({
    placement: 'bottom-start',
    middleware: [
      offset(offsetValue),
      flip({ fallbackPlacements: ['top-start'] }),
      shift({ limiter: limitShift(), padding: 8 })
    ],
    whileElementsMounted: autoUpdate
  });

  useFloatingReferenceSync(referenceElement, popperElement, refs, setIsPositioned);

  const portalContainer = document.getElementById(portalContainerId) as HTMLElement;

  const currentFilterOption = useMemo(() => {
    return (
      filterTypeOptions.find(opt => opt.value === filterType) ||
      filterTypeOptions[0] || { value: '', label: '', icon: <IconSelectionContains24 /> }
    );
  }, [filterTypeOptions, filterType]);

  const filteredValueOptions = useMemo(() => {
    if (!inputValue) return filterValueOptions;
    return filterValueOptions.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  }, [filterValueOptions, inputValue]);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenedMenu(prev => (prev === 'type' ? null : 'type'));
  };
  const closeTypeMenu = () => {
    if (openedMenu === 'type') {
      setOpenedMenu(null);
    }
  };
  const handleSelectFilterType = (opt: IFilterTypeOption) => {
    if (opt.disabled) return;
    setFilterType(opt.value);
    setOpenedMenu(null);
    if (isMulti) {
      onFilterChange?.(undefined, opt.value);
    } else {
      onFilterChange?.(inputValue || undefined, opt.value);
    }
  };

  const handleFocusInput = (e: React.FocusEvent) => {
    e.stopPropagation();
    setOpenedMenu('value');
  };
  const closeValueMenu = () => {
    if (openedMenu === 'value') {
      setOpenedMenu(null);
    }
  };
  const handleSelectValueOption = (opt: IFilterValueOption) => {
    if (opt.disabled) return;
    if (isMulti) {
      const next = effectiveSelected.includes(opt.value)
        ? effectiveSelected.filter(v => v !== opt.value)
        : [...effectiveSelected, opt.value];
      updateSelected(next);
      return;
    }
    setInputValue(opt.label);
    setOpenedMenu(null);
    onFilterChange?.(opt.label, filterType);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isMulti) {
      onFilterChange?.(inputValue || undefined, filterType);
      setOpenedMenu(null);
    }
  };

  const handleReset = () => {
    setInputValue('');
    if (isMulti) {
      updateSelected([]);
      return;
    }
    onFilterChange?.(undefined, filterType);
  };

  const iconStyle: CSSProperties = { display: 'flex', alignItems: 'center' };

  const renderMenuContent = () => {
    if (openedMenu === 'type') {
      return filterTypeOptions.map(opt => (
        <ListItem
          key={opt.value}
          onClick={() => handleSelectFilterType(opt)}
          className={clsx({ [styles.disabled]: opt.disabled })}
          data-ui-list-item
        >
          <div className={styles.menuItem}>
            {opt.icon && <div className={styles.menuItemIcon}>{opt.icon}</div>}
            <Typography variant="Body1-Medium">{opt.label}</Typography>
          </div>
        </ListItem>
      ));
    }
    if (openedMenu === 'value') {
      if (filteredValueOptions.length) {
        return filteredValueOptions.map(opt => {
          const isSelected = isMulti && effectiveSelected.includes(opt.value);
          return (
            <ListItem
              key={opt.value}
              onClick={() => handleSelectValueOption(opt)}
              className={clsx({
                [styles.disabled]: opt.disabled,
                [styles.selected]: isSelected
              })}
              data-ui-list-item
            >
              {isMulti ? (
                <Box alignItems="center" gap="8px">
                  <Checkbox
                    checked={isSelected}
                    disabled={opt.disabled}
                    onChange={() => {}}
                    style={{ pointerEvents: 'none' }}
                  />
                  <Typography variant="Body1-Medium">{opt.label}</Typography>
                </Box>
              ) : (
                <Typography variant="Body1-Medium">{opt.label}</Typography>
              )}
            </ListItem>
          );
        });
      } else {
        return (
          <ListItem className={styles.noMatches} data-ui-list-item>
            <Typography variant="Body1-Medium">Нет совпадений</Typography>
          </ListItem>
        );
      }
    }
    return null;
  };

  const menu = openedMenu && (
    <ClickAwayListener
      onClickAway={() => {
        if (openedMenu === 'type') closeTypeMenu();
        if (openedMenu === 'value') closeValueMenu();
      }}
      excludeRef={openedMenu === 'type' ? iconRef : inputRef}
    >
      <List
        ref={setPopperElement}
        style={{
          ...floatingStyles,
          width: openedMenu === 'type' ? 'fit-content' : undefined,
          minWidth: openedMenu === 'type' ? 200 : Math.min(inputRef.current?.offsetWidth || 200, 400),
          maxWidth: openedMenu === 'value' ? 400 : undefined,
          zIndex: 1100,
          ...(withPortal && { marginTop: '0px' }),
          visibility: (isPositioned ? 'visible' : 'hidden') as CSSProperties['visibility']
        }}
        className={styles.menu}
        data-popper-placement={placement}
      >
        {renderMenuContent()}
      </List>
    </ClickAwayListener>
  );

  const portalTarget = withPortal ? portalContainer : null;
  const renderedMenu = portalTarget ? createPortal(menu, portalTarget) : menu;

  const showCounter = isMulti && effectiveSelected.length > 0 && !inputValue;

  return (
    <div className={clsx(styles.filter, className)} ref={inputRef} onClick={e => e.stopPropagation()}>
      <FilterInput
        {...inputProps}
        placeholder={showCounter ? '' : inputProps.placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        reset
        onReset={handleReset}
        forceReset={isMulti && effectiveSelected.length > 0}
        onFocus={handleFocusInput}
        icon={
          <div ref={iconRef} onClick={handleIconClick} style={iconStyle}>
            {currentFilterOption.icon}
          </div>
        }
      />
      {showCounter && (
        <div className={styles.counter}>
          <Typography variant="Body1-Medium">Выбрано: {effectiveSelected.length}</Typography>
        </div>
      )}

      {renderedMenu}
    </div>
  );
};

export default Filter;
