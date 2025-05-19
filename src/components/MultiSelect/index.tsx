import React, {
  Children,
  FC,
  isValidElement,
  KeyboardEvent,
  MouseEventHandler,
  ReactElement,
  useMemo,
  useRef,
  useState
} from 'react';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { Box, Input, Typography } from '@components/index';
import OptionItem from '@components/SimpleSelect/subcomponents/OptionItem';
import { IOptionItemProps } from '@components/SimpleSelect/subcomponents/OptionItem/types';
import clsx from 'clsx';

import { IMultiSelectProps } from './types';

import styles from './MultiSelect.module.scss';

import { MAX_VISIBLE_TAGS_DEFAULT, SCROLLING_ITEMS_DEFAULT } from './constants';
import { MultiSelectContext } from './context';
import ArrowButton from './subcomponents/ArrowButton';
import MultiTag from './subcomponents/MultiTag';
import Options from './subcomponents/Options';

/**
 * Компонент MultiSelect представляет собой кастомизируемый выпадающий список с возможностью выбора нескольких значений.
 *
 * @component
 * @example
 * <MultiSelect
 *   value={['option1', 'option2']}
 *   onChange={(values) => console.log(values)}
 *   label="Select multiple options"
 *   placeholder="Choose..."
 * >
 *   <OptionItem value="option1" label="Option 1" />
 *   <OptionItem value="option2" label="Option 2" />
 *   <OptionItem value="option3" label="Option 3" />
 * </MultiSelect>
 */
const MultiSelect: FC<IMultiSelectProps> = ({
  value = [],
  onChange,
  id,
  name,
  portalContainerId = 'root',
  children,
  menuWidth,
  placeholder,
  label,
  withPortal = false,
  disabled = false,
  helperText,
  pseudo,
  onFocus,
  onBlur,
  color = customInputColors.default,
  size = sizesMappingInput.m,
  scrollingItems = SCROLLING_ITEMS_DEFAULT,
  noOptionsText = 'Ничего не найдено',
  searchable = false,
  colored = false,
  onEnterPress,
  reset,
  onReset,
  className,
  style,
  valueSeparator = ', ',
  maxVisibleTags = MAX_VISIBLE_TAGS_DEFAULT,
  showCounter = true,
  allSelectedText = 'Все',
  selectAllLabel = 'Выбрать все',
  showSelectAll = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  id = useMemo(() => `MultiSelect-${(id && id.toString()) || generateUUID()}`, [id]);

  if (scrollingItems < 1) {
    scrollingItems = 1;
    console.error('Scrolling items option should be at least 1, to show options dropdown correctly');
  }

  const options = Children.toArray(children).filter((child): child is ReactElement<IOptionItemProps> =>
    isValidElement(child)
  );

  // Извлечем все доступные опции для функциональности "Выбрать все"
  const allOptions = useMemo(() => {
    return options.map(option => ({
      label: option.props.label || (typeof option.props.children === 'string' ? option.props.children : ''),
      value: option.props.value
    }));
  }, [options]);

  // Получаем метки для выбранных значений
  const selectedOptionsWithLabels = useMemo(() => {
    return value.map(val => {
      const option = allOptions.find(opt => opt.value === val);
      return option || { value: val, label: String(val) };
    });
  }, [value, allOptions]);

  const handleFocus = () => {
    setIsOpen(true);
    onFocus?.();
  };

  const handleBlur = () => {
    onBlur?.();
  };

  const toggleDropdown: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      handleBlur();
    } else {
      onFocus?.();
    }
    setIsOpen(!isOpen);
  };

  const toggleOption = (optionValue: string | number, _optionLabel: string) => {
    console.log('toggleOption вызван с:', optionValue);
    if (disabled) return;

    let newValue: Array<string | number>;

    if (value.includes(optionValue)) {
      // Удаляем опцию, если она уже выбрана
      newValue = value.filter(val => val !== optionValue);
    } else {
      // Добавляем опцию, если она не выбрана
      newValue = [...value, optionValue];
    }

    console.log('toggleOption: новое значение', newValue);
    onChange?.(newValue);
    if (onEnterPress && isOpen) {
      onEnterPress(newValue);
    }

    // Оставляем фокус на инпуте и не закрываем меню
    inputRef.current?.focus();
  };

  const selectAll = () => {
    if (disabled) return;

    let newValue: Array<string | number>;

    // Если уже все выбраны - очищаем выбор
    if (allOptions.length > 0 && value.length === allOptions.length) {
      newValue = [];
    } else {
      // Иначе выбираем все
      newValue = allOptions.map(opt => opt.value);
    }

    onChange?.(newValue);

    // Оставляем фокус на инпуте и не закрываем меню
    inputRef.current?.focus();
  };

  const clearAll = () => {
    if (disabled) return;

    onChange?.([]);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleRemoveTag = (optionValue: string | number) => {
    if (disabled) return;

    const newValue = value.filter(val => val !== optionValue);
    onChange?.(newValue);
  };

  const filteredChildren = useMemo(() => {
    if (!searchable || !searchTerm) return options;
    return options.filter(child => {
      const optionLabel = (child.props.label || child.props.children || '').toString().toLowerCase();
      return optionLabel.includes(searchTerm.toLowerCase());
    });
  }, [options, searchTerm, searchable]);

  const optionsCount = filteredChildren.length;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        setIsOpen(true);
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        setFocusedIndex(prevIndex => {
          const newIndex = prevIndex + 1;
          return newIndex >= optionsCount ? 0 : newIndex;
        });
        event.preventDefault();
        break;
      case 'ArrowUp':
        setFocusedIndex(prevIndex => {
          const newIndex = prevIndex - 1;
          return newIndex < 0 ? optionsCount - 1 : newIndex;
        });
        event.preventDefault();
        break;
      case 'Enter':
        if (focusedIndex !== -1 && focusedIndex < optionsCount) {
          const selectedChild = filteredChildren[focusedIndex];
          if (selectedChild && !selectedChild.props.disabled) {
            toggleOption(
              selectedChild.props.value,
              selectedChild.props.label ||
                (typeof selectedChild.props.children === 'string' ? selectedChild.props.children : '')
            );
          }
        }
        event.preventDefault();
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        event.preventDefault();
        break;
    }
  };

  // Формируем отображаемый текст для инпута
  const inputDisplayValue = useMemo(() => {
    if (searchable && isOpen) {
      return searchTerm;
    }

    if (selectedOptionsWithLabels.length === 0) {
      return '';
    }

    if (allOptions.length > 0 && selectedOptionsWithLabels.length === allOptions.length && allSelectedText) {
      return allSelectedText;
    }

    return selectedOptionsWithLabels.map(opt => opt.label).join(valueSeparator);
  }, [selectedOptionsWithLabels, searchable, isOpen, searchTerm, allOptions.length, allSelectedText, valueSeparator]);

  // Компонент для отображения выбранных тегов
  const renderTags = () => {
    if (selectedOptionsWithLabels.length === 0) return null;

    // Все выбраны - показываем общий текст
    if (allOptions.length > 0 && selectedOptionsWithLabels.length === allOptions.length && allSelectedText) {
      return (
        <Box className={styles.tagsContainer} data-ui-multi-select-tags>
          <MultiTag label={allSelectedText} onRemove={clearAll} disabled={disabled} />
        </Box>
      );
    }

    // Показываем видимые теги
    const visibleTags = selectedOptionsWithLabels.slice(0, maxVisibleTags);
    const hiddenCount = selectedOptionsWithLabels.length - visibleTags.length;

    return (
      <Box className={styles.tagsContainer} data-ui-multi-select-tags>
        {visibleTags.map(option => (
          <MultiTag
            key={option.value}
            label={option.label}
            onRemove={() => handleRemoveTag(option.value)}
            disabled={disabled}
          />
        ))}

        {hiddenCount > 0 && (
          <div className={styles.moreTag} data-ui-multi-select-more-tag>
            +{hiddenCount}
          </div>
        )}

        {showCounter && selectedOptionsWithLabels.length > 0 && (
          <Typography variant="Caption-Medium" className={styles.counter} data-ui-multi-select-counter>
            {selectedOptionsWithLabels.length}
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <MultiSelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOptions: value,
        toggleOption,
        selectedOptionsWithLabels,
        setSelectedOptionsWithLabels: onChange,
        inputRef,
        menuRef,
        menuWidth,
        withPortal,
        portalContainerId,
        scrollingItems,
        searchTerm,
        setSearchTerm,
        focusedIndex,
        setFocusedIndex,
        onChange,
        valueSeparator,
        maxVisibleTags,
        selectAll,
        clearAll,
        showSelectAll,
        selectAllLabel,
        allOptions
      }}
    >
      <div className={clsx(styles.multiSelect, className)} style={style} data-ui-multi-select>
        {renderTags()}
        <Input
          id={id}
          helperText={helperText}
          name={name}
          size={size}
          inputRef={inputRef}
          value={inputDisplayValue}
          onChange={e => searchable && setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!searchable || !isOpen}
          pseudo={pseudo}
          color={color}
          onFocus={handleFocus}
          onBlur={handleBlur}
          colored={colored}
          icon={<ArrowButton isOpen={isOpen} color={color} disabled={disabled} toggleDropdown={toggleDropdown} />}
          className={clsx(styles.input, selectedOptionsWithLabels.length > 0 && styles.hasSelection)}
          reset={reset || selectedOptionsWithLabels.length > 0}
          onReset={onReset || clearAll}
          data-ui-multi-select-input
          {...props}
        />
        <Options data-ui-multi-select-options>
          {filteredChildren.length > 0 ? (
            filteredChildren
          ) : (
            <OptionItem value="" label={noOptionsText} disabled data-ui-multi-select-no-options>
              {noOptionsText}
            </OptionItem>
          )}
        </Options>
      </div>
    </MultiSelectContext.Provider>
  );
};

export default MultiSelect;
