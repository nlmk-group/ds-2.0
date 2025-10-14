import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { customInputColors } from '@components/declaration';
import { Icon, Input } from '@components/index';
import clsx from 'clsx';

import { IAutocompleteProps, IAutocompleteValue } from './types';

import styles from './Autocomplete.module.scss';

import { AutocompleteContext } from './context';
import { useDebounce, useScrollPagination } from './hooks';
import { AutocompleteDropdown } from './subcomponents';

/**
 * Компонент Autocomplete предоставляет пользователю возможность ввода текста с поддержкой автозаполнения на основе предложенных элементов.
 *
 * @component
 * @param {IAutocompleteProps} props - Свойства компонента.
 *
 * @prop {IAutocompleteValue} [props.selected] - Изначально выбранный элемент.
 * @prop {IAutocompleteValue[] | null} [props.items=[]] - Массив элементов для автозаполнения.
 * @prop {boolean} [props.isLoading=false] - Состояние загрузки данных.
 * @prop {(item: IAutocompleteValue, fullDataItem?: any) => string} props.nameGetter - Функция для получения строки, которая будет отображаться пользователю.
 * @prop {(item: IAutocompleteValue) => React.ReactNode} [props.renderLabel] - Кастомный рендер label для опций. Если не задан, будет использован `nameGetter`.
 * @prop {(item?: IAutocompleteValue) => void} props.onChange - Колбэк, вызываемый при выборе/очистке элемента. Если нет выбранного элемента, будет вызвано `onChange(undefined)`.
 * @prop {(item?: any) => void} [props.onFullItemSelect] - Колбэк, в который передаётся "полный" объект выбранного элемента, если он есть в `items`. Можно использовать для получения исходных данных.
 * @prop {(value: string) => void} [props.onDebouncedInputChange] - Колбэк, вызываемый после завершения ввода (с задержкой debounce).
 * @prop {boolean} [props.disabled=false] - Выключить ввод и выбор.
 * @prop {string} [props.helperText=''] - Сообщение об ошибке.
 * @prop {IAutocompleteValue} [props.noSelectionItem] - Значение, которое будет считаться "пустым". Если не задано, при очистке `onChange` будет вызвано с `undefined`.
 * @prop {boolean} [props.showTooltip=false] - Показывать ли tooltip при наведении на опции.
 * @prop {boolean} [props.readOnly=false] - Только для чтения, нельзя вводить или открывать список.
 * @prop {boolean} [props.isFullWidth=false] - Ширина 100%.
 * @prop {boolean} [props.withPortal=false] - Рендерить выпадающее меню через портал.
 * @prop {string} [props.portalContainerId='root'] - ID контейнера, в который будет создан портал. Если не указан, будет использоваться `root`.
 * @prop {boolean} [props.canLoadMore=false] Можно ли загрузить больше данных? Если `true`,
 * при прокрутке до конца списка будет вызван `onLoadMore`.
 * @prop {() => void} [props.onLoadMore] Колбэк для догрузки данных при прокрутке.
 * Вызывается, когда пользователь доходит до нижней границы списка, если `canLoadMore = true`.
 * @prop {() => void} [props.onLoadOptions] Колбэк для запроса новых данных при вводе.
 * @prop {(value: string) => void} [props.onCreateItem] Колбэк для создания нового элемента.
 * Если задан, при отсутствии результатов и непустом вводе отображается опция для создания.
 * @prop {string} [props.noResultsText='Ничего не найдено'] - Текст при отсутствии результатов.
 * @prop {(value: string) => string} [props.createItemText=(value) => `Добавить: ${value}`] - Функция для текста кнопки создания.
 * @prop {string} [props.totalText='Всего:'] - Текст для отображения общего количества элементов.
 * @prop {boolean} [props.showTotalCount=true] - Показывать ли общее количество элементов.
 * @prop {number} [props.debounceDelay=500] - Задержка в миллисекундах для debounce при вводе.
 * @prop {boolean} [props.showEmptyDropdown=true] - Показывать ли дропдаун при отсутствии результатов.
 *
 * Также принимаются любые пропсы для Input через `...inputProps`.
 *
 * @returns {JSX.Element} - Компонент Autocomplete.
 */

const Autocomplete = ({
  selected,
  items = [],
  isLoading = false,
  nameGetter,
  renderLabel,
  disabled = false,
  onChange,
  onFullItemSelect,
  noSelectionItem,
  onDebouncedInputChange,
  size,
  showTooltip = false,
  readOnly = false,
  helperText = '',
  error = false,
  isFullWidth = false,
  withPortal = false,
  onLoadOptions,
  portalContainerId = 'root',
  canLoadMore = false,
  onLoadMore,
  onCreateItem,
  noResultsText = 'Ничего не найдено',
  createItemText = (value: string) => `Добавить: ${value}`,
  totalText = 'Всего:',
  showTotalCount = true,
  debounceDelay = 500,
  showEmptyDropdown = true,
  className,
  style,
  ...inputProps
}: IAutocompleteProps): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState<IAutocompleteValue[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentItems, setCurrentItems] = useState<Array<IAutocompleteValue>>(items ?? []);
  const [realData, setRealData] = useState<Array<IAutocompleteValue> | null>(items);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [isSearching, setIsSearching] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedOnInputEnd = useDebounce(debounceDelay, (value: string) => {
    onDebouncedInputChange?.(value);
    if (onLoadOptions) {
      onLoadOptions(value);
    }
  });

  useEffect(() => {
    if (selected) {
      setSelectedItems([selected]);
      if (!isSearching) {
        setInputValue(nameGetter(selected));
      }
    } else {
      if (!isSearching) {
        setSelectedItems([]);
        setInputValue('');
      }
    }
  }, [selected, nameGetter, isSearching]);

  useEffect(() => {
    if (items && !isLoading) {
      const dataValues = items.filter(
        item => (item.id !== undefined && Number(item.id) >= 0) || Number.isNaN(Number(item.id))
      );
      setRealData(dataValues);

      if (!isSearching) {
        setCurrentItems(dataValues);
      } else {
        setCurrentItems(getFieldOptions(dataValues, inputValue, nameGetter));
      }

      setHighlightedIndex(-1);
    }
  }, [items, isLoading, inputValue, nameGetter, isSearching]);

  const nameGetterInside = useCallback(
    (item: IAutocompleteValue) => {
      if (!realData) return nameGetter(item);
      const fullDataItem = realData.find(value => value.id === item.value);
      return nameGetter(item, fullDataItem);
    },
    [realData, nameGetter]
  );

  const getFieldOptions = (
    optionsType: IAutocompleteValue[],
    searchValue: string,
    getter: (i: IAutocompleteValue) => string
  ) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    return optionsType
      .filter(option => {
        const rawLabel = option.label || getter(option) || '';
        const normalizedLabel = rawLabel.trim().toLowerCase();
        return normalizedLabel.includes(normalizedSearchValue);
      })
      .map(option => ({
        ...option,
        label: getter(option).trim()
      }));
  };

  const onChangeInput = ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (readOnly) return;

    setInputValue(value);
    setIsSearching(true);
    setIsOpen(true);

    if (!value.trim()) {
      setSelectedItems([]);
      const nextValue = noSelectionItem ?? undefined;
      onChange(nextValue);
      onFullItemSelect?.(undefined);

      if (onLoadOptions) {
        debouncedOnInputEnd.cancel();
        onLoadOptions('');
      }

      setCurrentItems([]);
    } else {
      setCurrentItems(getFieldOptions(realData ?? [], value, nameGetter));
      debouncedOnInputEnd(value);
    }
  };

  const onSelectMenuItem = (item: IAutocompleteValue) => {
    const name = nameGetterInside(item);
    if (onFullItemSelect) {
      const fullItem = realData?.find((value: any) => value.id === item.value);
      onFullItemSelect(fullItem ?? item);
    }
    setSelectedItems([item]);
    setInputValue(name);
    setIsSearching(false);
    onChange(item);
    inputRef.current?.focus();
    setIsOpen(false);
  };

  const clearSelect = () => {
    setInputValue('');
    setSelectedItems([]);
    setIsSearching(false);
    const nextValue = noSelectionItem ?? undefined;
    onChange(nextValue);
    onFullItemSelect?.(undefined);

    if (onLoadOptions) {
      debouncedOnInputEnd.cancel();
      onLoadOptions('');
    }

    setIsOpen(false);
    setCurrentItems([]);
  };

  const handleClickAway = () => {
    setIsOpen(false);

    if (isSearching) {
      if (selected) {
        setInputValue(nameGetter(selected));
        setIsSearching(false);
        setCurrentItems(realData ?? []);
      } else if (!inputValue.trim()) {
        clearSelect();
      } else {
        setIsSearching(false);
      }
    }
  };

  const handleInputClick = () => {
    if (!readOnly && !disabled) {
      setIsOpen(true);
      if (!isSearching) {
        setCurrentItems(realData ?? []);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (readOnly || disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(0);
        } else {
          setHighlightedIndex(prev => (prev < currentItems.length - 1 ? prev + 1 : prev));
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
        }
        break;

      case 'Enter':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0 && currentItems[highlightedIndex]) {
          onSelectMenuItem(currentItems[highlightedIndex]);
        }
        break;

      case 'Escape':
        e.preventDefault();
        if (isOpen) {
          setIsOpen(false);
          const selectedItem = selectedItems[0];
          if (selectedItem) {
            setInputValue(nameGetter(selectedItem));
            setIsSearching(false);
            setCurrentItems(realData ?? []);
          }
        }
        break;

      case 'Backspace':
        if (!inputValue && selectedItems.length > 0) {
          clearSelect();
        }
        break;

      default:
        break;
    }
  };

  useScrollPagination({
    wrapperRef,
    targetRef,
    callback: () => {
      if (onLoadMore && canLoadMore) {
        onLoadMore();
      }
    },
    canLoadMore,
    isPortalMounted: withPortal
  });

  const hasExactMatch = currentItems?.some(
    item => item.label?.trim().toLowerCase() === inputValue.trim().toLowerCase()
  );
  const showCreateItem = onCreateItem && inputValue.trim() !== '' && !hasExactMatch;

  const hasItems = (currentItems ?? []).length > 0;

  const shouldShowDropdown =
    isOpen && !disabled && !readOnly && (showEmptyDropdown || hasItems || showCreateItem || isLoading);

  const dropdownContent = <AutocompleteDropdown />;

  return (
    <AutocompleteContext.Provider
      value={{
        isOpen,
        disabled,
        portalContainerId,
        withPortal,
        inputRef,
        wrapperRef,
        targetRef,
        isLoading,
        showCreateItem,
        onCreateItem,
        currentItems,
        inputValue: inputValue,
        highlightedIndex,
        selectedItems,
        createItemText,
        onSelectMenuItem,
        noResultsText,
        showTooltip,
        renderLabel,
        totalText,
        showTotalCount,
        showEmptyDropdown,
        handleClickAway
      }}
    >
      <div
        className={clsx(styles.autocomplete, className)}
        style={{ width: isFullWidth ? '100%' : 'auto', ...style }}
        data-ui-autocomplete
      >
        <Input
          {...inputProps}
          inputRef={inputRef}
          value={inputValue}
          onKeyDown={handleKeyDown}
          icon={
            <Icon
              name="IconSearchOutlined24"
              color={(disabled && 'disabled') || (error && 'error') || 'primary'}
              data-ui-autocomplete-search
            />
          }
          reset={true}
          onReset={clearSelect}
          size={size}
          disabled={disabled}
          color={error ? customInputColors.error : undefined}
          helperText={helperText}
          onFocus={() => {
            if (!disabled && !readOnly) {
              setIsOpen(true);
            }
          }}
          onClick={handleInputClick}
          onChange={onChangeInput}
          data-ui-autocomplete-input
          data-testid="AUTOCOMPLETE_INPUT"
        />
        {shouldShowDropdown && dropdownContent}
      </div>
    </AutocompleteContext.Provider>
  );
};

export default Autocomplete;
