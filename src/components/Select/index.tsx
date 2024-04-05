import React, {
  FC,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
  createContext
} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import {
  customInputColors,
  generateUUID,
  sizesMappingInput
} from '@components/declaration';
import { Input, Scrollbar } from '@components/index';
import {
  ISelectOption,
  ISelectProps,
  ISelectSharedProperties
} from './types';
import styles from './Select.module.scss';
import StealthyItem from './subcomponents/StealthyItem';
import Menu from './subcomponents/Menu';
import BadgeAmount from './subcomponents/BadgeAmount';
import SelectButton from './subcomponents/SelectButton';
import { getLabel } from './helpers';

export const SelectSharedProperties = createContext<
  ISelectSharedProperties
>({
  multiple: false,
  withoutCheckbox: false,
  highlightSelected: false,
  allSelectText: '',
  isAllSelectView: true,
  scrollingItems: 6,
  selectedValues: [],
  handleSelect: ()=>{},
  handleSelectAllClick: ()=>{},
  handleTypographyClick: ()=>{}
});

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
  withPortal = false,
  stealthy = false,
  highlightSelected = false,
  withoutCheckbox = false,
  badgeAmount = null,
  activeSelectedValue = false,
  enableScrollToActiveOption = false,
  className,
  children,
  listMinWidth,
  onSelectionChange,
  onEnterPress,
  onBlur,
  onFocus
}) => {
  const generateDisplayValue = (): string => {
    if (multiple) {
      return options?.filter((option: ISelectOption) => selected?.includes(option.value))
        .map((option: ISelectOption) => getLabel(option.label)).join(', ') || '';
    }

    return getLabel(options?.find((option: ISelectOption) => option.value === selected)?.label || '');
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
      setFilteredOptions(options.filter(option => getLabel(option.label).toLowerCase().includes(searchTerm.toLowerCase())));
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
            ? selected?.filter(selectedValue => selectedValue !== value)
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
      if (selected?.length === availableOptionsCount) {

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
    handleSelectAllClick
  }

  const renderContent = () => (
    <div className={clsx(styles.select, className)} ref={containerRef}>
      {children === undefined && stealthy && (
        <div
          className={clsx(
            styles.inconspicuous,
            styles[`inconspicuous-${size}`],
            disabled && [styles['inconspicuous-disabled']]
          )}
          onClick={handleFocusClick}
          data-testid='select-inconspicuous'
        >
          <StealthyItem
            option={!multiple ? options?.filter(item => item.value === selected)[0] : undefined}
            size={size}
            displayValue={isSearchable && isOpen ? searchTerm : generateDisplayValue()}
            multiple={multiple}
            label={label}
            activeSelectedValue={activeSelectedValue}
          />
        </div>
      )}
      {children === undefined && !stealthy && (
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
            <SelectButton
              isOpen={isOpen}
              disabled={disabled}
              color={color}
              toggleDropdown={toggleDropdown}
            />
          }
          color={color}
          className={clsx(styles.select__input, styles['input-helper'])}
          data-testid="select-input"
        />
      )}
      {children !== undefined && (
        <div
          onClick={handleFocusClick}
          data-testid='select-children'
        >
          {children}
        </div>
      )}
      {isOpen && (
        <SelectSharedProperties.Provider value={sharedProps}>
          <Scrollbar>
            <div ref={listRef}>
              <Menu
                availableOptionsCount={availableOptionsCount}
                filteredOptions={filteredOptions || []}
              />
            </div>
          </Scrollbar>
        </SelectSharedProperties.Provider>
      )}
      {badgeAmount && (
        <BadgeAmount>
          {badgeAmount}
        </BadgeAmount>
      )}
    </div>
  );

  return withPortal
    ? ReactDOM.createPortal(renderContent(), document.getElementById('root') as HTMLElement)
    : renderContent();
};

export default Select;
