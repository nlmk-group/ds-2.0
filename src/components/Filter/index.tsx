import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { ClickAwayListener, IconSelectionContains24, List, ListItem, Typography } from '@components/index';
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
  ...inputProps
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [filterType, setFilterType] = useState(defaultFilterType || filterTypeOptions[0]?.value || '');

  const [openedMenu, setOpenedMenu] = useState<TMenuState>(null);

  const iconRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const referenceElement = useMemo(() => {
    if (openedMenu === 'type') return iconRef.current;
    if (openedMenu === 'value') return inputRef.current;
    return null;
  }, [openedMenu]);

  const {
    styles: popperStyles,
    attributes,
    update
  } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      { name: 'flip', options: { fallbackPlacements: ['top-start'] } },
      { name: 'preventOverflow', options: { boundary: 'clippingParents', padding: 8 } },
      {
        name: 'offset',
        options: {
          offset: openedMenu === 'type' ? [0, 16] : [0, 8]
        }
      }
    ]
  });

  // update() после первого же рендера меню чтобы открывалось сразу в правильном месте
  useEffect(() => {
    if (openedMenu && update) {
      requestAnimationFrame(() => {
        update();
      });
    }
  }, [openedMenu, update]);

  const portalContainer = useMemo(() => {
    if (!withPortal) return null;
    return document.getElementById(portalContainerId) as HTMLElement;
  }, [withPortal, portalContainerId]);

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

  // --- Открытие/закрытие меню «тип» ---
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
    if (!opt.disabled) {
      setFilterType(opt.value);
      setOpenedMenu(null);
      onFilterChange?.(inputValue || undefined, opt.value);
    }
  };

  // --- Открытие/закрытие меню «значение» ---
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
    if (!opt.disabled) {
      setInputValue(opt.label);
      setOpenedMenu(null);
      onFilterChange?.(opt.label, filterType);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onFilterChange?.(inputValue || undefined, filterType);
      setOpenedMenu(null);
    }
  };

  const handleReset = () => {
    setInputValue('');
    onFilterChange?.(undefined, filterType);
  };

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
        return filteredValueOptions.map(opt => (
          <ListItem
            key={opt.value}
            onClick={() => handleSelectValueOption(opt)}
            className={clsx({ [styles.disabled]: opt.disabled })}
            data-ui-list-item
          >
            <Typography variant="Body1-Medium">{opt.label}</Typography>
          </ListItem>
        ));
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
      // Исключаем ref иконки и инпута
      excludeRef={openedMenu === 'type' ? iconRef : inputRef}
    >
      <List
        // Это единый popperElement
        ref={setPopperElement}
        style={{
          ...popperStyles.popper,
          minWidth: openedMenu === 'type' ? 200 : inputRef.current?.offsetWidth,
          zIndex: 1100,
          ...(withPortal && { marginTop: '0px' })
        }}
        className={styles.menu}
        {...attributes.popper}
      >
        {renderMenuContent()}
      </List>
    </ClickAwayListener>
  );

  const portalTarget = withPortal ? portalContainer : null;
  const renderedMenu = portalTarget ? createPortal(menu, portalTarget) : menu;

  return (
    <div className={clsx(styles.filter, className)} ref={inputRef} onClick={e => e.stopPropagation()}>
      <FilterInput
        {...inputProps}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        reset
        onReset={handleReset}
        onFocus={handleFocusInput}
        icon={
          <div ref={iconRef} onClick={handleIconClick} style={{ display: 'flex', alignItems: 'center' }}>
            {currentFilterOption.icon}
          </div>
        }
      />

      {renderedMenu}
    </div>
  );
};

export default Filter;
