import { CSSProperties, MouseEvent, ReactNode, ThHTMLAttributes, TouchEvent } from 'react';

export enum ESize {
  M = 'm',
  S = 's',
  XS = 'xs'
}

export type TSortDirection = 'asc' | 'desc' | false;

export interface ITopProps extends Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, 'title'> {
  /** Размер ячейки заголовка */
  size?: `${ESize}`;
  /** Текстовое содержимое заголовка */
  title?: string;
  /** Флаг отключения ячейки */
  disable?: boolean;
  /** Флаг включения сортировки */
  sort?: boolean;
  /** Направление сортировки */
  sortDirection?: TSortDirection;
  /** Флаг выравнивания по правому краю */
  right?: boolean;
  /** Флаг числовой колонки */
  number?: boolean;
  /** Обработчик клика */
  onClick?: () => void;
  /** Флаг возможности изменения размера */
  drag?: boolean;
  /** Флаг наличия активного фильтра */
  filtered?: boolean;
  /** Дополнительный контент */
  children?: ReactNode;
  /** Дополнительный класс */
  className?: string;
  /** Инлайн стили */
  style?: CSSProperties;
  /** Обработчик начала перетаскивания мышью */
  onMouseDown?: (e: MouseEvent) => void;
  /** Обработчик начала перетаскивания на тачскрине */
  onTouchStart?: (e: TouchEvent) => void;
  /** Обработчик двойного клика */
  onDoubleClick?: (e: MouseEvent) => void;
}
