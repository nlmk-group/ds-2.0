import {
  CSSProperties,
  FC,
  MouseEvent,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  TouchEvent
} from 'react';

import { FilterFn } from '@tanstack/react-table';

/**
 * Пропсы для основного компонента таблицы
 */
export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Контент таблицы */
  children: ReactNode;
  
  /** Флаг, включающий горизонтальные линии между строками (по умолчанию true) */
  horizontalBorders?: boolean;
  
  /** Флаг, включающий вертикальные линии между колонками (по умолчанию false) */
  verticalBorders?: boolean;
  
  /** Дополнительный CSS класс */
  className?: string;
  
  /** Инлайн стили */
  style?: CSSProperties;
}

/**
 * Размеры ячейки таблицы
 */
export declare enum ECellSize {
  /** Средний размер */
  M = 'm',
  /** Маленький размер */
  S = 's',
  /** Очень маленький размер */
  XS = 'xs'
}

/**
 * Статусы ячейки таблицы
 */
export declare enum ECellStatus {
  /** Обычное состояние */
  DEFAULT = 'default',
  /** Состояние ошибки */
  ERROR = 'error',
  /** Состояние успеха */
  SUCCESS = 'success',
  /** Состояние предупреждения */
  WARNING = 'warning'
}

/**
 * Состояния ячейки таблицы
 */
export declare enum ECellState {
  /** Обычное состояние */
  DEFAULT = 'default',
  /** Активное состояние */
  ACTIVE = 'active',
  /** Заблокированное состояние */
  DISABLED = 'disabled',
  /** Выбранное состояние */
  SELECTED = 'selected'
}

/**
 * Пропсы для компонента ячейки таблицы
 */
export interface ICellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  /** Размер ячейки */
  size?: `${ECellSize}`;
  
  /** Цветовое оформление ячейки */
  color?: `${ECellStatus}`;
  
  /** Состояние ячейки */
  state?: `${ECellState}`;
  
  /** Текстовое содержимое ячейки */
  text?: string | number;
  
  /** Числовое содержимое ячейки */
  number?: string | number;
  
  /** Отключает эффект hover */
  disableHover?: boolean;
  
  /** Выравнивание содержимого */
  align?: 'left' | 'center' | 'right';
  
  /** Обработчик клика */
  onClick?: (e: MouseEvent) => void;
  
  /** Дополнительный CSS класс */
  className?: string;
  
  /** Инлайн стили */
  style?: CSSProperties;
  
  /** Дочерние элементы */
  children?: ReactNode;
}

/**
 * Пропсы для компонента строки таблицы
 */
export interface IRowProps {
  /** Дочерние элементы */
  children: ReactNode;
  
  /** Дополнительный CSS класс */
  className?: string;
  
  /** Инлайн стили */
  style?: CSSProperties;
}

/**
 * Размеры заголовка колонки
 */
export declare enum ETopSize {
  /** Средний размер */
  M = 'm',
  /** Маленький размер */
  S = 's',
  /** Очень маленький размер */
  XS = 'xs'
}

/**
 * Направление сортировки
 */
export type TSortDirection = 'asc' | 'desc' | false;

/**
 * Пропсы для компонента заголовка колонки
 */
export interface ITopProps extends Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, 'title'> {
  /** Размер ячейки заголовка */
  size?: `${ETopSize}`;
  
  /** Содержимое заголовка */
  title?: ReactNode;
  
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
  
  /** Флаг наличия границы справа */
  lastInGroup?: boolean;
  
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

/**
 * Пропсы для компонента тела таблицы
 */
export interface ITbodyProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  /** Дочерние элементы */
  children: ReactNode;
}

/**
 * Пропсы для компонента заголовка таблицы
 */
export interface ITheadProps {
  /** Дочерние элементы */
  children: ReactNode;
  
  /** Дополнительный CSS класс */
  className?: string;
  
  /** Инлайн стили */
  style?: CSSProperties;
}

/**
 * Пропсы для компонента подвала таблицы
 */
export interface ITfooterProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  /** Дочерние элементы */
  children: ReactNode;
}

/**
 * Пропсы для компонента настроек колонки
 */
export interface IColumnSettingProps {
  /**
   * Уникальный идентификатор колонки
   */
  id: string;

  /**
   * Заголовок колонки, отображаемый в списке
   */
  title: string;

  /**
   * Флаг видимости колонки
   */
  visible: boolean;

  /**
   * Позиция закрепления колонки (left - слева, right - справа, false - не закреплена)
   */
  pinned: 'left' | 'right' | false;

  /**
   * Флаг, указывающий, является ли колонка родительской с подколонками
   */
  hasChildren?: boolean;

  /**
   * Флаг, указывающий, раскрыта ли группа колонок
   */
  expanded?: boolean;

  /**
   * Флаг, указывающий, можно ли перемещать колонку
   */
  draggable?: boolean;

  /**
   * Флаг, указывающий, можно ли изменять настройки колонки
   */
  disabled?: boolean;

  /**
   * Флаг, указывающий, что колонка подсвечена
   */
  highlighted?: boolean;

  /**
   * Обработчик изменения видимости колонки
   */
  onVisibilityChange: (visible: boolean) => void;

  /**
   * Обработчик изменения закрепления колонки
   */
  onPinChange?: (pinned: 'left' | 'right' | false) => void;

  /**
   * Обработчик разворачивания/сворачивания группы колонок
   */
  onExpandChange?: () => void;

  /**
   * Пропсы для drag-and-drop
   */
  dragHandleProps?: React.DOMAttributes<HTMLDivElement>;

  /**
   * Флаг для предотвращения всплытия событий клика от кнопок компонента.
   * Если установлен в true, вызывает e.stopPropagation() в обработчиках
   * событий кнопок, что предотвращает закрытие родительских компонентов
   * (например, Drawer) при взаимодействии с кнопками настроек колонок.
   * @default true
   */
  preventEventBubbling?: boolean;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}

/**
 * Значение фильтра
 */
export interface IFilterValue {
  /** Тип фильтра */
  type: string;
  /** Значение фильтра */
  value: any;
}

/**
 * Тип данных таблицы
 */
export type TData = Record<string, any>;

/**
 * Операция фильтрации таблицы
 */
export interface ITableFilterOperation {
  /** Значение операции */
  value: string;
  /** Название операции */
  label: string;
  /** Иконка операции */
  icon: ReactNode;
  /** Флаг отключения операции */
  disabled?: boolean;
}

/**
 * Основной компонент таблицы
 */
declare const Table: FC<ITableProps>;

/**
 * Компонент ячейки таблицы
 */
declare const Cell: FC<ICellProps>;

/**
 * Компонент строки таблицы
 */
declare const Row: FC<IRowProps>;

/**
 * Компонент заголовка колонки
 */
declare const Top: FC<ITopProps>;

/**
 * Компонент тела таблицы
 */
declare const Tbody: FC<ITbodyProps>;

/**
 * Компонент заголовка таблицы
 */
declare const Thead: FC<ITheadProps>;

/**
 * Компонент подвала таблицы
 */
declare const Tfooter: FC<ITfooterProps>;

/**
 * Компонент настроек колонки таблицы
 */
declare const ColumnSetting: FC<IColumnSettingProps>;

/**
 * Доступные операции фильтрации таблицы
 */
export declare const tableFilterOperations: ITableFilterOperation[];

/**
 * Базовые функции фильтрации
 */
export declare const basicFilterFunctions: Record<string, FilterFn<TData>>;

/**
 * Кастомная функция фильтрации таблицы
 */
export declare const tableCustomFilterFn: FilterFn<TData>;

export {
  Table,
  Cell,
  Row,
  Top,
  Tbody,
  Thead,
  Tfooter,
  ColumnSetting
};

export default Table;