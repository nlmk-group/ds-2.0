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
 *   label="Select an option"
 *   placeholder="Choose..."
 * >
 *   <OptionItem value="option1" label="Option 1" />
 *   <OptionItem value="option2" label="Option 2" />
 * </SimpleSelect>
 *
 * @param {Object} props - Свойства компонента SimpleSelect
 * @param {string|number} [props.value] - Значение селекта
 * @param {function} [props.onChange] - Обработчик изменения значения селекта
 * @param {string} [props.id] - Идентификатор компонента
 * @param {string} [props.portalContainerId='root'] - id рутового контейнера для создания портала
 * @param {ReactNode} props.children - Дочерние элементы селекта (опции меню)
 * @param {string} [props.menuWidth] - Ширина меню селекта
 * @param {string} [props.placeholder] - Плейсхолдер для инпута селекта
 * @param {string} [props.label] - Лейбл инпута в селекте
 * @param {boolean} [props.withPortal=false] - Флаг, указывающий, должно ли меню рендериться в портале
 * @param {boolean} [props.disabled=false] - Флаг доступности селекта
 * @param {function} [props.onBlur] - Обработчик закрытия меню options
 * @param {function} [props.onFocus] - Обработчик открытия меню options
 * @param {customInputColors} [props.color=customInputColors.default] - Цвет компонента
 * @param {TSize} [props.size=sizesMappingInput.m] - Размер компонента
 * @param {number} [props.scrollingItems=SCROLLING_ITEMS_DEFAULT] - Количество элементов после которого включается прокрутка
 * @param {string} [props.noOptionsText='Ничего не найдено'] - Текст, отображаемый когда нет доступных опций
 * @param {boolean} [props.searchable=false] - Флаг, указывающий, доступен ли поиск
 * @param {string} [props.name] - name определяет имя элемента, используется для ссылки на элемент
 * @param {function} [props.onEnterPress] - Обработчик нажатия клавиши Enter
 * @param {CSSProperties} [props.style] - Кастомные стили для компонента
 * @param {string} [props.className] - Добавление самостоятельного CSS класса
 * @param {boolean} [props.colored=false] - Флаг применения цветовых стилей
 * @param {boolean} [props.reset=false] - Флаг наличия кнопки сброса
 * @param {function} [props.onReset] - Обработчик сброса значения
 *
 * @returns {JSX.Element} Компонент SimpleSelect
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
  style
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);
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
        helperText,
        selectedOption: value,
        setSelectedOption: handleOptionChange,
        selectedLabel,
        setSelectedLabel,
        selectRef,
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
      <div className={clsx(styles.select, className)} ref={selectRef} style={style} data-ui-select>
        <Input
          id={id}
          helperText={helperText}
          name={name}
          size={size}
          inputRef={inputRef}
          value={searchable && isOpen ? searchTerm : selectedLabel}
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
          className={clsx(styles.select__input, styles['input-helper'])}
          reset={reset}
          onReset={onReset}
          data-ui-select-input
          data-testid="select-input"
        />
        <Options menuStyle={{ maxWidth: selectRef.current?.offsetWidth }} data-ui-select-options>
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
