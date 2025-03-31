import React, { createContext, FC, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { ClickAwayListener } from '@components/index';
import { InputWithRef } from '@components/Select/subcomponents/SelectInput';
import clsx from 'clsx';

import { ISelectOption, ISelectProps, ISelectSharedProperties } from './types';

import styles from './Select.module.scss';

import { getLabel } from './helpers';
import BadgeAmount from './subcomponents/BadgeAmount';
import Menu from './subcomponents/Menu';
import SelectButton from './subcomponents/SelectButton';
import StealthyItem from './subcomponents/StealthyItem';

export const SelectSharedProperties = createContext<ISelectSharedProperties>({
  multiple: false,
  withoutCheckbox: false,
  highlightSelected: false,
  allSelectText: '',
  isAllSelectView: true,
  scrollingItems: 6,
  selectedValues: [],
  handleSelect: () => {},
  handleSelectAllClick: () => {},
  handleTypographyClick: () => {},
  withPortal: false
});

const Select: FC<ISelectProps> = ({
  id,
  name,
  options,
  label = '',
  multiple = false,
  size = sizesMappingInput.m,
  scrollingItems = 6,
  disabled = false,
  color = customInputColors.default,
  isAllSelectView = true,
  allSelectText = 'Выбрать все',
  isSearchable = false,
  isClearSearchOnBlur = false,
  autoSelectSingleOnEnter = false,
  selected = '',
  withPortal = false,
  portalContainerId = 'root',
  stealthy = false,
  highlightSelected = false,
  withoutCheckbox = false,
  badgeAmount = null,
  activeSelectedValue = false,
  enableScrollToActiveOption = false,
  multilineOption = false,
  className,
  children,
  listMinWidth,
  onSelectionChange,
  onEnterPress,
  onBlur,
  onFocus,
  style,
  isClearInputOnSelect = false,
  onOpen,
  onSearch,
  isLoading = false
}) => {
  const [loading, setLoading] = useState(isLoading);
  const [asyncOptions, setAsyncOptions] = useState<ISelectOption[] | null>(null);
  const [hasLoadedOptions, setHasLoadedOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<ISelectOption[] | null>(null);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [inputRef, setInputRef] = useState<null | HTMLInputElement>(null);
  const [menuRef, setMenuRef] = useState<null | HTMLDivElement>(null);
  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

  const { styles: popperStyles, attributes } = usePopper(inputRef, menuRef, {
    placement: 'bottom-start'
  });

  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (!enableScrollToActiveOption) return;

    if (isOpen) {
      setCurrentScrollPosition(document.documentElement.scrollTop || document.body.scrollTop);
      listRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      return;
    }
    window.scrollTo({ top: currentScrollPosition, behavior: 'smooth' });
  }, [isOpen, enableScrollToActiveOption, currentScrollPosition]);

  id = useMemo(() => `Select-${(id && id.toString()) || generateUUID()}`, [id]);

  const generateDisplayValue = (): string => {
    if (!asyncOptions) return '';
    
    if (multiple) {
      return asyncOptions
        .filter((option: ISelectOption) => selected?.includes(option.value))
        .map((option: ISelectOption) => getLabel(option.label))
        .join(', ');
    }

    return getLabel(asyncOptions?.find((option: ISelectOption) => option.value === selected)?.label || '');
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
    if (isClearSearchOnBlur) {
      setSearchTerm('');
    }
    if (onBlur) {
      onBlur();
    }
  };

  const handleFocusClick = async () => {
    setIsOpen(true);
    if (onFocus) {
      onFocus();
    }

    if (onOpen && !hasLoadedOptions) {
      setLoading(true);
      try {
        const fetchedOptions = await onOpen();
        setAsyncOptions(fetchedOptions);
        setFilteredOptions(fetchedOptions);
        setHasLoadedOptions(true);
      } catch (error) {
        console.error('Ошибка при загрузке опций:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearch = async (inputValue: string) => {
    setSearchTerm(inputValue);

    if (onSearch) {
      setLoading(true);
      try {
        const searchResults = await onSearch(inputValue);
        setAsyncOptions(searchResults);
        setFilteredOptions(searchResults);
      } catch (error) {
        console.error('Ошибка при поиске опций:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!onOpen) {
      setAsyncOptions(options);
      setFilteredOptions(options);
    }
  }, [options, onOpen]);

  useEffect(() => {
    if (isSearchable && !onSearch && asyncOptions) {
      setFilteredOptions(
        asyncOptions.filter(option => 
          getLabel(option.label).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, asyncOptions, isSearchable, onSearch]);

  const availableOptionsCount = useMemo(() => {
    return asyncOptions ? asyncOptions.filter(option => !option.disabled).length : 0;
  }, [asyncOptions]);

  const handleSelect = (value: string, checked: boolean) => {
    if (multiple) {
      const newSelected = checked 
        ? (selected as string[]).filter(selectedValue => selectedValue !== value)
        : [...(selected as string[]), value];
        
      onSelectionChange(newSelected);
    } else {
      setIsOpen(false);
      onSelectionChange(value);
    }
  
    if (isClearInputOnSelect) {
      setSearchTerm('');
    }
  };

  const handleSelectAllClick = () => {
    if (!asyncOptions) return;

    if (multiple) {
      const allValues = asyncOptions
        .filter(option => !option.disabled)
        .map(option => option.value);

      if (selected?.length === availableOptionsCount) {
        onSelectionChange([]);
      } else {
        onSelectionChange(allValues);
      }
    }
  };

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen && onBlur) {
      onBlur();
    }
    if (!isOpen && onFocus) {
      onFocus();
    }
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      if (!autoSelectSingleOnEnter) return onEnterPress?.(searchTerm);

      const option = filteredOptions?.[0];
      if (filteredOptions?.length !== 1) return;
      if (!option || option.disabled) return;
      handleSelect(option.value, selected?.includes(option.value));
      onEnterPress?.(option.value);
    }
  };

  const handleTypographyClick = (value: string, event: React.MouseEvent<HTMLElement>) => {
    if (multiple) {
      event.stopPropagation();
      handleSelect(value, selected?.includes(value));
    }
  };

  const sharedProps = {
    multiple,
    withoutCheckbox,
    highlightSelected,
    allSelectText,
    isAllSelectView,
    scrollingItems,
    selectedValues: selected,
    listMinWidth,
    handleSelect,
    handleTypographyClick,
    handleSelectAllClick,
    withPortal
  };

  const renderItems = () => {
    return (
      <>
        {isOpen && (
          <SelectSharedProperties.Provider value={sharedProps}>
            <div ref={listRef}>
              <Menu
                availableOptionsCount={availableOptionsCount}
                filteredOptions={filteredOptions || []}
                multilineOption={multilineOption}
                isLoading={loading}
              />
            </div>
          </SelectSharedProperties.Provider>
        )}
      </>
    );
  };

  const renderMenu = () => (
    <div
      className={clsx(withPortal ? styles.wrapper : null)}
      ref={setMenuRef}
      style={popperStyles.popper}
      {...attributes.popper}
    >
      {renderItems()}
    </div>
  );

  return (
    <ClickAwayListener onClickAway={handleOutsideClick} excludeRef={listRef}>
      <div className={clsx(styles.select, className)} ref={containerRef} style={style}>
        {children === undefined && stealthy && (
          <div
            className={clsx(
              styles.inconspicuous,
              styles[`inconspicuous-${size}`],
              disabled && [styles['inconspicuous-disabled']]
            )}
            onClick={handleFocusClick}
            data-testid="select-inconspicuous"
          >
            <StealthyItem
              option={!multiple ? asyncOptions?.filter(item => item.value === selected)[0] : undefined}
              size={size}
              displayValue={isSearchable && isOpen ? searchTerm : generateDisplayValue()}
              multiple={multiple}
              label={label}
              activeSelectedValue={activeSelectedValue}
            />
          </div>
        )}
        {children === undefined && !stealthy && (
          <InputWithRef
            id={id}
            name={name}
            size={size}
            label={label}
            ref={setInputRef}
            disabled={disabled}
            value={isSearchable && isOpen ? searchTerm : generateDisplayValue()}
            onChange={e => isSearchable && (onSearch ? handleSearch(e.target.value) : setSearchTerm(e.target.value))}
            readOnly={!isSearchable}
            onFocus={handleFocusClick}
            onKeyDown={handleKeyDown}
            icon={<SelectButton isOpen={isOpen} disabled={disabled} color={color} toggleDropdown={toggleDropdown} />}
            color={color}
            className={clsx(styles.select__input, styles['input-helper'])}
            data-testid="select-input"
          />
        )}
        {children !== undefined && (
          <div onClick={handleFocusClick} data-testid="select-children">
            {children}
          </div>
        )}
        {withPortal ? ReactDOM.createPortal(<>{renderMenu()}</>, portalContainer) : <>{renderItems()}</>}
        {badgeAmount && <BadgeAmount>{badgeAmount}</BadgeAmount>}
      </div>
    </ClickAwayListener>
  );
};

export default Select;