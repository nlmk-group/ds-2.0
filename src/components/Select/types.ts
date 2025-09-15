import { CSSProperties, MouseEvent, ReactElement, ReactNode } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';

/**
 * @interface {ISelectOption}
 * Тип для опции выбора.
 */
export type ISelectOption = {
  /**
   * Уникальное значение опции.
   */
  value: string;

  /**
   * Отображаемый текст опции.
   */
  label: string | ReactElement;

  /**
   * Описание опции.
   */
  subLabel?: string;

  /**
   * Отключена ли опция.
   */
  disabled?: boolean;

  /**
   * Иконки для опции.
   */
  iconLeft?: ReactNode;
  iconRight?: ReactNode;

  /**
   * Отключена ли опция.
   */
  options?: ISelectOption[];

  /**
   * Дополнительные свойства опции.
   */
  [key: string]: any;
};

type TSize = `${sizesMappingInput}`;
export type TSelected = string | string[];

/**
 * @interface {ISelectProps}
 * Интерфейс для пропсов компонента Select.
 */
export interface ISelectProps {
  /**
   * Элемент представляющий собой селект
   */
  children?: ReactNode;
  /**
   * Минимальная ширина меню опций
   */
  listMinWidth?: number;
  /**
   * Идентификатор компонента.
   */
  id?: string;

  /**
   * Опции для выбора.
   */
  options: ISelectOption[] | null;

  /**
   * Метка для компонента.
   */
  label?: string;

  /**
   * Множественный выбор.
   */
  multiple?: boolean;

  /**
   * Размер компонента.
   */
  size?: TSize;

  /**
   * Количество элементов после которого включается прокрутка.
   */
  scrollingItems?: number;

  /**
   * Отключен ли компонент.
   */
  disabled?: boolean;

  /**
   * Цвет компонента.
   */
  color?: `${customInputColors}`;

  /**
   * Текст для выбора всех опций.
   */
  allSelectText?: string;

  /**
   * Показывать ли выбор всех опций.
   */
  isAllSelectView?: boolean;

  /**
   * Поиск по опциям.
   */
  isSearchable?: boolean;

  /**
   * Выбор значения по Enter, при найденной опции по isSearchable
   */
  autoSelectSingleOnEnter?: boolean;

  /**
   * Выбранные значения.
   */
  selected: TSelected;

  /**
   * Обработчик изменения выбора.
   */
  onSelectionChange: (selected: TSelected) => void;

  /**
   * Использовать ли портал для отображения.
   */
  withPortal?: boolean;

  /**
   * Обработчик нажатия Enter.
   */
  onEnterPress?: (item: string) => void | string[];

  /**
   * Обработчик закрытия меню options.
   */
  onBlur?: () => void;

  /**
   * Обработчик открытия меню options.
   */
  onFocus?: () => void;

  /**
   * Условие удаление поискового запроса при отработке onBlur на Input
   */
  isClearSearchOnBlur?: boolean;
  /**
   * Добавление самостоятельного CSS класса
   */
  className?: string;

  /**
   * Условие для незаметного инпута
   */
  stealthy?: boolean;

  /**
   * Отображать выбранные элементы иконкой
   */
  highlightSelected?: boolean;

  /**
   * Отображать без чекбоксов
   */
  withoutCheckbox?: boolean;

  /**
   * Отображать badge с количеством выбранных опций
   */
  badgeAmount?: number;

  /**
   * Выделять значение синим цветом, доступно в stealthy
   */
  activeSelectedValue?: boolean;

  /**
   * Условие фокуса на опциях компонента при раскрытии списка
   */
  enableScrollToActiveOption?: boolean;

  /**
   * id рутового контейнера для создания портала
   */
  portalContainerId?: string;

  /**
   * name определяет имя элемента, используется для ссылки на элемент
   */
  name?: string;

  /**
   * Кастомные стили для компонента.
   */
  style?: CSSProperties;

  /**
   * Перенос текста опции на следующую строку
   */
  multilineOption?: boolean;

  /**
   * Удалить содержимое Input после выбора
   */
  isClearInputOnSelect?: boolean;

  /**
   * Функция для загрузки опций при открытии селекта
   */
  onOpen?: () => Promise<ISelectOption[]>;

  /**
   * Функция для поиска опций при вводе значения
   */
  onSearch?: (searchValue: string) => Promise<ISelectOption[]>;

  /**
   * Состояние загрузки опций
   */
  isLoading?: boolean;

  /**
   * HTML атрибут required
   */
  required?: boolean;

  /**
   * Флаг наличия кнопки сброса
   */
  reset?: boolean;

  /**
   * Обработчик сброса значений
   */
  onReset?: () => void;
}

export interface IStealthyItem {
  option?: ISelectOption;
  size: TSize;
  displayValue: string;
  multiple: boolean;
  label?: string | ReactElement;
  activeSelectedValue: boolean;
}

export interface IMenu {
  availableOptionsCount: number;
  filteredOptions: ISelectOption[];
  multilineOption?: boolean;
  isLoading?: boolean;
}

export interface ISelectSharedProperties {
  multiple: boolean;
  listMinWidth?: number;
  withoutCheckbox: boolean;
  highlightSelected: boolean;
  allSelectText: string;
  isAllSelectView: boolean;
  scrollingItems: number;
  selectedValues: TSelected;
  handleSelect: (option: string, includes: boolean) => void;
  handleTypographyClick: (option: string, event: MouseEvent<HTMLSpanElement>) => void;
  handleSelectAllClick: () => void;
  withPortal?: boolean;
}

export interface IMenuItem extends ISelectOption {
  multilineOption?: boolean;
}

export interface IBadgeAmount {
  children: number;
}

export interface ISelectButton {
  isOpen: boolean;
  disabled: boolean;
  color: `${customInputColors}`;
  toggleDropdown: React.MouseEventHandler;
}
