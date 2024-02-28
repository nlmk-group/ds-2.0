import React, { FC, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { IconColor } from '@components/Icon/types';
import {
  Button,
  Checkbox,
  IconChevronArrowDownOutlined24,
  IconChevronArrowUpOutlined24,
  Input,
  Typography
} from '@components/index';
import List from '@components/List';
import ListItem from '@components/ListItem';
import clsx from 'clsx';

import { ISelectOption, ISelectProps } from './types';

import styles from './Select.module.scss';

const Select: FC<ISelectProps> = ({
  id,
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
  selected,
  onSelectionChange,
  withPortal = false,
  onEnterPress,
  onBlur,
  onFocus,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>(() => {
    if (multiple && Array.isArray(selected)) {
      return selected;
    } else if (!multiple && typeof selected === 'string') {
      return [selected];
    }
    return [];
  });
  const [displayLabels, setDisplayLabels] = useState<string[]>(() => {
    if (options && multiple && Array.isArray(selected)) {
      return options.filter(option => selected.includes(option.value)).map(option => option.label);
    } else if (options && !multiple && typeof selected === 'string') {
      const selectedOption = options.find(option => option.value === selected);
      return selectedOption ? [selectedOption.label] : [];
    }
    return [];
  });

  id = useMemo(() => `Select-${(id && id.toString()) || generateUUID()}`, [id]);

  const handleOutsideClick = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      if (isClearSearchOnBlur) {
        setSearchTerm('');
      }
      if (onBlur) {
        onBlur();
      }
    }
  };

  const handleFocusClick = () => {
    setIsOpen(true);
    if (onFocus) {
      onFocus();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isSearchable && options) {
      setFilteredOptions(options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setFilteredOptions(options);
    }
  }, [searchTerm, options, isSearchable]);

  useEffect(() => {
    if (multiple && Array.isArray(selected)) {
      setSelectedValues(selected);
      setDisplayLabels(
        selected.map(selectedValue => options?.find(option => option.value === selectedValue)?.label || '')
      );
    } else if (!multiple && typeof selected === 'string') {
      setSelectedValues([selected]);
      const selectedOption = options?.find(option => option.value === selected);
      setDisplayLabels(selectedOption ? [selectedOption.label] : []);
    }
  }, [selected, options, multiple]);

  const availableOptionsCount = useMemo(() => {
    return options ? options.filter(option => !option.disabled).length : 0;
  }, [options]);

  const handleSelect = (value: string, checked: boolean) => {
    if (options) {
      if (multiple) {
        const newSelectedValues = checked
          ? selectedValues.filter(selectedValue => selectedValue !== value)
          : [...selectedValues, value];
        const newDisplayLabels = checked
          ? displayLabels.filter(label => label !== options.find(option => option.value === value)?.label)
          : [...displayLabels, options.find(option => option.value === value)?.label || ''];
        setSelectedValues(newSelectedValues);
        setDisplayLabels(newDisplayLabels);
        if (onSelectionChange) {
          onSelectionChange(newSelectedValues);
        }
      } else {
        setSelectedValues([value]);
        const selectedOption = options.find(option => option.value === value);
        setDisplayLabels(selectedOption ? [selectedOption.label] : []);
        setIsOpen(false);
        if (onSelectionChange) {
          onSelectionChange(value);
        }
      }
    }
  };

  const handleSelectAllClick = () => {
    if (options) {
      if (selectedValues.length === availableOptionsCount) {
        setSelectedValues([]);
        setDisplayLabels([]);
        if (onSelectionChange) {
          onSelectionChange([]);
        }
      } else {
        const filteredOptions = options.filter(option => !option.disabled);
        const returnValueWithMap = (key: string) => filteredOptions.map(option => option[key]);
        const [allValues, allLabels] = [returnValueWithMap('value'), returnValueWithMap('label')];
        setSelectedValues(allValues);
        setDisplayLabels(allLabels);
        if (onSelectionChange) {
          onSelectionChange(allValues);
        }
      }
    }
  };

  const toggleDropdown = () => {
    if (isOpen && onBlur) {
      onBlur();
    }
    if (!isOpen && onFocus) {
      onFocus();
    }
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && onEnterPress) {
      onEnterPress(searchTerm);
    }
  };

  const handleTypographyClick = (option: ISelectOption, event: React.MouseEvent<HTMLElement>) => {
    if (multiple && !option.disabled) {
      event.stopPropagation();
      handleSelect(option.value, selectedValues.includes(option.value));
    }
  };

  let displayValue = '';

  if (isSearchable && isOpen) {
    displayValue = searchTerm;
  } else if (multiple) {
    displayValue = displayLabels.join(', ');
  } else {
    displayValue = displayLabels[0] || '';
  }

  const colorIconHelper = (): IconColor => {
    switch (color) {
      case customInputColors.error:
        return customInputColors.error;
      case customInputColors.success:
        return customInputColors.success;
      case customInputColors.warning:
        return customInputColors.warning;
      default:
        return 'primary';
    }
  };

  const renderContent = () => (
    <div className={clsx(styles.select, className)} ref={containerRef}>
      <Input
        id={id}
        size={size}
        label={label}
        disabled={disabled}
        value={displayValue}
        onChange={e => isSearchable && setSearchTerm(e.target.value)}
        readOnly={!isSearchable}
        onFocus={handleFocusClick}
        onKeyDown={handleKeyDown}
        icon={
          <Button
            iconButton={
              isOpen ? (
                <IconChevronArrowUpOutlined24 color={colorIconHelper()} />
              ) : (
                <IconChevronArrowDownOutlined24 color={colorIconHelper()} />
              )
            }
            variant="text"
            size="s"
            onClick={toggleDropdown}
            className={clsx(styles.select__arrow, {
              [styles.disabled]: disabled
            })}
            disabled={disabled}
          />
        }
        color={color}
        className={styles.select__input}
        data-testid="select-input"
      />
      {isOpen && (
        <List style={{ maxHeight: `${scrollingItems * 40 + 16}px` }}>
          {multiple && isAllSelectView && (
            <ListItem
              className={clsx(styles.item, {
                [styles.selected]: selectedValues.length === availableOptionsCount
              })}
              title={allSelectText}
            >
              <Checkbox
                className={styles.checkbox}
                checked={selectedValues.length === availableOptionsCount}
                onChange={handleSelectAllClick}
              />
              <div onClick={handleSelectAllClick} className={styles.label}>
                <Typography variant="Body1-Medium">{allSelectText}</Typography>
              </div>
            </ListItem>
          )}
          {filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map(option => (
              <ListItem
                className={clsx(styles.item, {
                  [styles.selected]: selectedValues.includes(option.value),
                  [styles.disabled]: option.disabled
                })}
                key={option.value}
                onClick={() => {
                  if (!multiple && !option.disabled) {
                    handleSelect(option.value, selectedValues.includes(option.value));
                  }
                }}
                style={{ cursor: !multiple && !option.disabled ? 'pointer' : 'default' }}
                title={option.label}
              >
                {multiple && (
                  <Checkbox
                    className={styles.checkbox}
                    checked={selectedValues.includes(option.value)}
                    disabled={option.disabled}
                    onChange={() => handleSelect(option.value, selectedValues.includes(option.value))}
                  />
                )}
                <div className={styles.content}>
                  <Typography
                    variant="Body1-Medium"
                    onClick={event => handleTypographyClick(option, event)}
                    className={clsx(styles.label, {
                      [styles['label__disabled']]: option.disabled
                    })}
                  >
                    {option.label}
                  </Typography>
                  {option.icon && <div className={styles.icon}>{option.icon}</div>}
                </div>
              </ListItem>
            ))
          ) : (
            <ListItem className={styles.disabled}>
              <Typography variant="Body1-Medium">Ничего не найдено</Typography>
            </ListItem>
          )}
        </List>
      )}
    </div>
  );

  return withPortal
    ? ReactDOM.createPortal(renderContent(), document.getElementById('root') as HTMLElement)
    : renderContent();
};

export default Select;
