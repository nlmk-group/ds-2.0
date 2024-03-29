import { ReactNode } from 'react';

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
  label: string;

  /**
   * Отключена ли опция.
   */
  disabled?: boolean;

  /**
   * Иконка для опции.
   */
  icon?: ReactNode;

  /**
   * Дополнительные свойства опции.
   */
  [key: string]: any;
};

export type TSelected = string | string[];


/**
 * @interface {ISelectProps}
 * Интерфейс для пропсов компонента Select.
 */
export interface ISelectProps {
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
  size?: sizesMappingInput;

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
  color?: customInputColors;

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
   * Условие фокуса на опциях компонента при раскрытии списка
   */
  enableScrollToActiveOption?: boolean;
}
