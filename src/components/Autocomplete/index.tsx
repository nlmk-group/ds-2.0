import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { customInputColors } from '@components/declaration';
import { ClickAwayListener, Icon, Input } from '@components/index';
import clsx from 'clsx';

import { IAutocompleteProps, IAutocompleteValue } from './types';

import styles from './Autocomplete.module.scss';

import { AutocompleteContext } from './context';
import { useDebounce, useScrollPagination } from './hooks';
import AutocompleteDropdown from './subcomponents/AutocompleteDropdown';

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
 * @prop {string} [props.noResultsText='No results for your request'] - Текст при отсутствии результатов.
 * @prop {(value: string) => string} [props.createItemText=(value) => `Create: ${value}`] - Функция для текста кнопки создания.
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
  noResultsText = 'No results for your request',
  createItemText = (value: string) => `Добавить: ${value}`,
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

  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const inputElementRef = useRef<HTMLInputElement>(null);

  const debouncedOnInputEnd = useDebounce(500, (value: string) => {
    onDebouncedInputChange?.(value);
    onLoadOptions?.(value);
  });

  useEffect(() => {
    if (selected) {
      setSelectedItems([selected]);
      setInputValue(nameGetter(selected));
    } else {
      setSelectedItems([]);
      setInputValue('');
    }
  }, [selected, nameGetter]);

  /**
   * При изменении списка элементов или ввода (inputValue), пересчитываем currentItems.
   * Это значит, что при каждом вводе текста фильтр обновляется.
   */
  useEffect(() => {
    if (items && !isLoading) {
      const dataValues = items.filter(
        item => (item.id !== undefined && Number(item.id) >= 0) || Number.isNaN(Number(item.id))
      );
      setRealData(dataValues);
      setCurrentItems(getFieldOptions(dataValues, inputValue, nameGetter));
      // Сброс highlightedIndex при обновлении списка
      setHighlightedIndex(-1);
    }
  }, [items, isLoading, inputValue, nameGetter]);

  /**
   * Функция, которая при выборе элемента пытается найти полный объект в realData и передать его в nameGetter.
   * Если не находит, просто вызывает nameGetter(item).
   * Это дает гибкость, чтобы nameGetter мог работать и с данными, и с их "полной" версией.
   */
  const nameGetterInside = useCallback(
    (item: IAutocompleteValue) => {
      if (!realData) return nameGetter(item);
      const fullDataItem = realData.find(value => value.id === item.value);
      return nameGetter(item, fullDataItem);
    },
    [realData, nameGetter]
  );

  /**
   * Утилитарная функция, которая фильтрует и преобразует каждый элемент optionsType
   * в объект с обновленным label. Фильтрация идет по label или nameGetter.
   */
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
    if (value) {
      setIsOpen(true);
    } else {
      clearSelect();
    }
    setInputValue(value);
    debouncedOnInputEnd(value);
    if (!value) {
      const nextValue = noSelectionItem ?? undefined;
      onChange(nextValue);
      onFullItemSelect?.(undefined);
    }
  };

  const onSelectMenuItem = (item: IAutocompleteValue) => {
    const name = nameGetterInside(item);
    onChangeSingleSelect(item, name);
    if (onFullItemSelect) {
      const fullItem = realData?.find((value: any) => value.id === item.value);
      onFullItemSelect(fullItem ?? item);
    }
  };

  const onChangeSingleSelect = (item: IAutocompleteValue, name: string) => {
    setSelectedItems([item]);
    setInputValue(name);
    onChange(item);
    inputElementRef.current?.focus();
    setIsOpen(false);
  };

  const clearSelect = () => {
    setInputValue('');
    setSelectedItems([]);
    const nextValue = noSelectionItem ?? undefined;
    onChange(nextValue);
    onFullItemSelect?.(undefined);
    inputElementRef.current?.focus();
    setIsOpen(false);
  };

  const handleClickAway = () => {
    setIsOpen(false);
    if (selectedItems.length === 0) {
      setInputValue('');
    } else {
      setInputValue(selectedItems.map(selectedItem => selectedItem.label).join(', '));
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;

    const hasItems = currentItems && currentItems.length > 0;
    const showCreateItem = onCreateItem && inputValue.trim() !== '';

    let totalCount = 0;
    if (hasItems) {
      totalCount = currentItems!.length;
    } else if (showCreateItem) {
      totalCount = 1;
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        if (totalCount === 0) return;
        e.preventDefault();
        let nextIndex = highlightedIndex;

        if (e.key === 'ArrowDown') {
          nextIndex = highlightedIndex + 1 >= totalCount ? 0 : highlightedIndex + 1;
        } else {
          nextIndex = highlightedIndex - 1 < 0 ? totalCount - 1 : highlightedIndex - 1;
        }

        setHighlightedIndex(nextIndex);

        if (hasItems) {
          const menuItems = wrapperRef.current?.querySelectorAll(`.${styles['menu-item']}`);
          if (menuItems && menuItems[nextIndex]) {
            menuItems[nextIndex].scrollIntoView({ block: 'nearest' });
          }
        }
        break;
      }
      case 'Enter':
        e.preventDefault();
        if (hasItems && highlightedIndex >= 0 && highlightedIndex < currentItems!.length) {
          onSelectMenuItem(currentItems![highlightedIndex]);
        } else if (showCreateItem && highlightedIndex === 0) {
          onCreateItem!(inputValue);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
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
  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

  const dropdownContent = <AutocompleteDropdown />;

  return (
    <AutocompleteContext.Provider
      value={{
        isOpen,
        disabled,
        wrapperRef,
        targetRef,
        isLoading,
        showCreateItem,
        onCreateItem,
        currentItems,
        inputValue,
        highlightedIndex,
        selectedItems,
        createItemText,
        onSelectMenuItem,
        noResultsText,
        size,
        showTooltip,
        renderLabel
      }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <div
          className={clsx(styles.autocomplete, className)}
          ref={inputRef}
          style={{ width: isFullWidth ? '100%' : 'auto', ...style }}
          data-ui-autocomplete
        >
          <Input
            {...inputProps}
            inputRef={inputElementRef}
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
            onChange={onChangeInput}
            data-ui-autocomplete-input
            data-testid="AUTOCOMPLETE_INPUT"
          />
          {isOpen &&
            !disabled &&
            !readOnly &&
            (withPortal && portalContainer ? createPortal(dropdownContent, portalContainer) : dropdownContent)}
        </div>
      </ClickAwayListener>
    </AutocompleteContext.Provider>
  );
};

export default Autocomplete;
