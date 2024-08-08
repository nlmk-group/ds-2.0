import { CSSProperties, ReactNode } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';

type TSize = `${sizesMappingInput}`;

export interface ISelectProps {
  /**
   * Значение селекта
   */
  value?: string | number;

  /**
   * Обработчик изменения значения селекта
   */
  onChange?: (value: string | number) => void;

  /**
   * Идентификатор компонента.
   */
  id?: string;

  /**
   * id рутового контейнера для создания портала
   */
  portalContainerId?: string;

  /**
   * Дочерние элементы селекта (опции меню)
   */
  children: ReactNode;

  /**
   * Ширина меню селекта
   */
  menuWidth?: string;

  /**
   * Плейсхолдер для инпута селекта
   */
  placeholder?: string;

  /**
   * Лейбл инпута в селекте.
   */
  label?: string;

  /**
   * Флаг, указывающий, должно ли меню рендериться в портале
   */
  withPortal?: boolean;

  /**
   * Флаг доступности селекта.
   */
  disabled?: boolean;

  /**
   * Обработчик закрытия меню options.
   */
  onBlur?: () => void;

  /**
   * Обработчик открытия меню options.
   */
  onFocus?: () => void;

  /**
   * Цвет компонента.
   */
  color?: customInputColors;

  /**
   * Размер компонента.
   */
  size?: TSize;

  /**
   * Количество элементов после которого включается прокрутка.
   */
  scrollingItems?: number;

  /**
   * Текст, отображаемый когда нет доступных опций
   */
  noOptionsText?: string;

  /**
   * Флаг, указывающий, доступен ли поиск
   */
  searchable?: boolean;

  /**
   * name определяет имя элемента, используется для ссылки на элемент
   */
  name?: string;

  /**
   * Обработчик нажатия клавиши Enter
   */
  onEnterPress?: (item: string | number) => void;

  /**
   * Кастомные стили для компонента.
   */
  style?: CSSProperties;

  /**
   * Добавление самостоятельного CSS класса
   */
  className?: string;
}
