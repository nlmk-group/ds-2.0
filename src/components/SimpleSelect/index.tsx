import React, {
  Children,
  FC,
  isValidElement,
  KeyboardEvent,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { Input } from '@components/index';
import clsx from 'clsx';

import { ISelectProps } from './types';

import styles from './SimpleSelect.module.scss';

import { SCROLLING_ITEMS_DEFAULT } from './constants';
import { SelectContext } from './context';
import { ArrowButton, OptionItem, Options } from './subcomponents';
import { IOptionItemProps } from './subcomponents/OptionItem/types';

/**
 * Компонент SimpleSelect представляет собой кастомизируемый выпадающий список с возможностью поиска.
 *
 * @component
 * @example
 * <SimpleSelect
 *   value="option1"
 *   onChange={(value) => console.log(value)}
 *   label="Выберите опцию"
 *   placeholder="Выберите..."
 *   searchable
 * >
 *   <OptionItem value="option1" label="Опция 1" />
 *   <OptionItem value="option2" label="Опция 2" />
 * </SimpleSelect>
 *
 * @param {string|number} [value] - Текущее значение селекта
 * @param {function} [onChange] - Обработчик изменения значения (value: string | number) => void
 * @param {ReactNode} children - Дочерние элементы селекта (OptionItem компоненты)
 * @param {string} [label] - Текст метки селекта
 * @param {string} [placeholder] - Плейсхолдер
 * @param {boolean} [disabled=false] - Флаг отключения селекта
 * @param {boolean} [searchable=false] - Включить поиск по опциям
 * @param {string} [noOptionsText='Ничего не найдено'] - Текст при отсутствии опций
 * @param {number} [scrollingItems=6] - Количество видимых опций до прокрутки
 * @param {boolean} [withPortal=false] - Рендерить меню в портале
 * @param {CSSProperties} [style] - Стили для контейнера селекта
 * @param {CSSProperties} [inputStyle] - Стили для внутреннего Input
 * @param {string} [className] - Дополнительный CSS класс
 *
 * Также принимает все пропсы от Input компонента: size, color, helperText, reset,
 * onReset, inputRef и стандартные HTML атрибуты.
 */

const SimpleSelect: FC<ISelectProps> = ({
  value,
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
  inputStyle,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  id = useMemo(() => `Select-${(id && id.toString()) || generateUUID()}`, [id]);

  if (scrollingItems < 1) {
    scrollingItems = 1;
    console.error('Scrollig items option shoud be at least 1, to show options dropdown correctly');
  }

  const options = Children.toArray(children).filter((child): child is ReactElement<IOptionItemProps> =>
    isValidElement(child)
  );

  useEffect(() => {
    setSelectedLabel(findOptionLabel(value));
  }, [value, children]);

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

  const handleOptionChange = (optionValue: string | number) => {
    setSelectedLabel(findOptionLabel(optionValue));
    setIsOpen(false);
    setFocusedIndex(-1);
    inputRef.current?.blur(); // Убираем фокус с инпута
    onChange?.(optionValue);
  };

  const findOptionLabel = (value: string | number | undefined): string => {
    if (value === undefined) return '';
    const selectedOption = options.find(child => child.props.value === value);
    return selectedOption
      ? selectedOption.props.label ||
          (typeof selectedOption.props.children === 'string' ? selectedOption.props.children : '')
      : '';
  };

  const filteredChildren = useMemo(() => {
    if (!searchable || !searchTerm) return options;
    return options.filter(child => {
      const optionLabel = child.props.label.toLowerCase();
      return optionLabel.includes(searchTerm.toLowerCase());
    });
  }, [options, searchTerm, searchable]);

  const optionsCount = filteredChildren.length;
  const noOptions = optionsCount === 0;

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
        setFocusedIndex(prevIndex => (prevIndex + 1) % optionsCount);
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
            handleOptionChange(selectedChild.props.value);
            if (onEnterPress) {
              onEnterPress(selectedChild.props.value);
            }
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

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption: value,
        setSelectedOption: handleOptionChange,
        selectedLabel,
        setSelectedLabel,
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
        onChange
      }}
    >
      <div className={clsx(styles.select, className)} style={style} data-ui-select>
        <Input
          {...inputProps}
          id={id}
          helperText={helperText}
          name={name}
          size={size}
          inputRef={inputRef}
          value={searchable && isOpen ? searchTerm : selectedLabel}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!searchable || !isOpen}
          pseudo={pseudo}
          color={color}
          colored={colored}
          reset={reset}
          onReset={onReset}
          icon={<ArrowButton isOpen={isOpen} color={color} disabled={disabled} toggleDropdown={toggleDropdown} />}
          onChange={e => searchable && setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={clsx(styles.select__input, styles['input-helper'])}
          style={inputStyle}
          data-ui-select-input
          data-testid="select-input"
        />
        <Options menuStyle={{ maxWidth: inputRef.current?.offsetWidth }} data-ui-select-options>
          {noOptions ? (
            <OptionItem value="" label={noOptionsText} disabled data-ui-select-option>
              {noOptionsText}
            </OptionItem>
          ) : (
            filteredChildren
          )}
        </Options>
      </div>
    </SelectContext.Provider>
  );
};

export default SimpleSelect;
