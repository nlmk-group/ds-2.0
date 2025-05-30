import { CSSProperties, MutableRefObject, ReactNode } from 'react';

import { TInputProps } from '@components/Input/types';

import { EAutocompleteSize } from './enums';

export interface IAutocompleteValue {
  id?: number;
  name?: string;
  label?: string;
  value?: any;
  disabled?: boolean;
}

export interface IAutocompleteProps extends Omit<TInputProps, 'onChange'| 'color'> {
  /** Изначально выбранный элемент */
  selected?: IAutocompleteValue;

  /** Массив элементов для автозаполнения
   * @default []
   */
  items?: Array<IAutocompleteValue> | null;

  /** Состояние загрузки данных
   * @default false
   */
  isLoading?: boolean;

  /** Функция для получения строки, которая будет отображаться пользователю */
  nameGetter: (item: IAutocompleteValue, fullDataItem?: any) => string;

  /** Кастомный рендер label для опций */
  renderLabel?: (item: IAutocompleteValue) => ReactNode;

  /** Колбэк при выборе/очистке элемента */
  onChange: (item?: IAutocompleteValue) => void;

  /** Колбэк для получения полного объекта выбранного элемента */
  onFullItemSelect?: (item?: any) => void;

  /** Колбэк, вызываемый после завершения ввода (с задержкой debounce) */
  onDebouncedInputChange?: (value: string) => void;

  /** Отключить ввод и выбор
   * @default false
   */
  disabled?: boolean;

  /** Сообщение об ошибке
   * @default ''
   */
  helperText?: string;

  /** Флаг состояния ошибки
   * @default false
   */
  error?: boolean;

  /** Значение, которое будет считаться "пустым" */
  noSelectionItem?: IAutocompleteValue;

  /** Показывать ли tooltip при наведении на опции
   * @default false
   */
  showTooltip?: boolean;

  /** Только для чтения
   * @default false
   */
  readOnly?: boolean;

  /** Занимать полную ширину
   * @default false
   */
  isFullWidth?: boolean;

  /** Placeholder для поля ввода */
  placeholder?: string;

  /** Подпись для поля ввода */
  label?: string;

  /** Рендерить выпадающее меню через портал
   * @default false
   */
  withPortal?: boolean;

  /** ID контейнера для портала
   * @default 'root'
   */
  portalContainerId?: string;

  /** Размер компонента */
  size?: `${EAutocompleteSize}`;

  /** Колбэк для запроса новых данных при вводе */
  onLoadOptions?: (query: string) => void;

  /** Можно ли загрузить больше данных
   * @default false
   */
  canLoadMore?: boolean;

  /** Колбэк для догрузки данных при скролле */
  onLoadMore?: () => void;

  /** Колбэк для создания нового элемента */
  onCreateItem?: (value: string) => void;

  /** Текст при отсутствии результатов
   * @default 'No results for your request'
   */
  noResultsText?: string;

  /** Функция для генерации текста кнопки создания элемента
   * @default (value) => `Добавить: ${value}`
   */
  createItemText?: (value: string) => string;

  /** Текст для отображения общего количества элементов
   * @default 'Всего:'
   */
  totalText?: string;

  /** Задержка в миллисекундах для debounce при вводе
   * @default 500
   */
  debounceDelay?: number;

  /** Показывать ли общее количество элементов
   * @default true
   */
  showTotalCount?: boolean;

  /** Показывать ли дропдаун при отсутствии результатов
   * @default true
   */
  showEmptyDropdown?: boolean;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}

export interface IUseScrollProps {
  /**
   * Реф контейнера со скроллом
   */
  wrapperRef: MutableRefObject<HTMLDivElement | null>;

  /**
   * Реф целевого элемента для отслеживания пересечения
   */
  targetRef: MutableRefObject<HTMLDivElement | null>;

  /**
   * Колбэк, вызываемый при достижении целевого элемента
   */
  callback: (t?: unknown) => void;

  /**
   * Флаг возможности подгрузки дополнительных данных
   */
  canLoadMore: boolean;

  /**
   * Флаг, указывающий что компонент монтируется через портал
   */
  isPortalMounted: boolean;
}
