import React, {
  FC,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import ReactDOM from 'react-dom';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { IconColor } from '@components/Icon/types';
import {
  Button,
  Checkbox,
  IconChevronArrowDownOutlined24,
  Input,
  Scrollbar,
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
  selected = '',
  onSelectionChange,
  withPortal = false,
  onEnterPress,
  onBlur,
  onFocus,
  enableScrollToActiveOption = false,
  className
}) => {
  const generateDisplayValue = (): string => {
    return options?.filter((option: ISelectOption) => selected.includes(option.value))
      .map((option: ISelectOption) => option.label).join(', ') || ''
  }
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0)

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
    window.scrollTo({ top: currentScrollPosition, behavior: 'smooth' })
  }, [isOpen, enableScrollToActiveOption]);

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


  const availableOptionsCount = useMemo(() => {
    return options ? options.filter(option => !option.disabled).length : 0;
  }, [options]);

  const handleSelect = (value: string, checked: boolean) => {
    if (options) {
      if (multiple) {
        if (Array.isArray(selected)) {
          const newSelectedValues = checked
            ? selected.filter(selectedValue => selectedValue !== value)
            : [...selected, value];
          if (onSelectionChange) {
            onSelectionChange(newSelectedValues);
          }
        } else {
          onSelectionChange([selected, value])
        }
      } else {
        setIsOpen(false);
        if (onSelectionChange) {
          onSelectionChange(value);
        }
      }
    }
  };

  const handleSelectAllClick = () => {
    if (options) {
      if (selected.length === availableOptionsCount) {

        if (onSelectionChange) {
          onSelectionChange([]);
        }
      } else {
        const filteredOptions = options.filter(option => !option.disabled);
        const returnValueWithMap = (key: string) => filteredOptions.map(option => option[key]);
        const [allValues] = [returnValueWithMap('value')];
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
      handleSelect(option.value, selected.includes(option.value));
    }
  };

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
        value={isSearchable && isOpen ? searchTerm : generateDisplayValue()}
        onChange={e => isSearchable && setSearchTerm(e.target.value)}
        readOnly={!isSearchable}
        onFocus={handleFocusClick}
        onKeyDown={handleKeyDown}
        icon={
          <Button
            iconButton={(
              <div
                className={clsx(
                  styles['toggle-list-btn'],
                  isOpen && styles['toggle-list-btn-open']
                )}
              >
                <IconChevronArrowDownOutlined24 color={colorIconHelper()} />
              </div>
            )}
            variant='primary'
            fill='clear'
            size='s'  
            onClick={toggleDropdown}
            className={clsx(styles.select__arrow, {
              [styles.disabled]: disabled
            })}
            disabled={disabled}
          />
        }
        color={color}
        className={clsx(
          styles.select__input,
          !isSearchable && styles['not-searchable']
        )}
        data-testid="select-input"
      />
      {isOpen && (
        <Scrollbar>
          <div ref={listRef}>
            <List
              style={{ maxHeight: `calc((var(--40-size) * ${scrollingItems}) + var(--16-space))` }}
            >
              {multiple && isAllSelectView && (
                <ListItem
                  className={clsx(styles.item, {
                    [styles.selected]: selected.length === availableOptionsCount
                  })}
                  title={allSelectText}
                >
                  <Checkbox
                    className={styles.checkbox}
                    checked={selected.length === availableOptionsCount}
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
                      [styles.selected]: selected.includes(option.value),
                      [styles.disabled]: option.disabled
                    })}
                    key={option.value}
                    onClick={() => {
                      if (!multiple && !option.disabled) {
                        handleSelect(option.value, selected.includes(option.value));
                      }
                    }}
                    style={{ cursor: !multiple && !option.disabled ? 'pointer' : 'default' }}
                    title={option.label}
                  >
                    {multiple && (
                      <Checkbox
                        className={styles.checkbox}
                        checked={selected.includes(option.value)}
                        disabled={option.disabled}
                        onChange={() => handleSelect(option.value, selected.includes(option.value))}
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
          </div>
        </Scrollbar>
      )}
    </div>
  );

  return withPortal
    ? ReactDOM.createPortal(renderContent(), document.getElementById('root') as HTMLElement)
    : renderContent();
};

export default Select;
