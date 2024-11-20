import { Dispatch, FC, SetStateAction } from 'react';

export interface IPaginationProps {
  /** Текущая страница */
  currentPage: number;
  /** Функция для установки текущей страницы */
  setCurrentPage: Dispatch<SetStateAction<number>>;
  /** Количество элементов на странице */
  elementsPerPage?: number;
  /** Функция для установки количества элементов на странице */
  setElementsPerPage?: Dispatch<SetStateAction<number>>;
  /** Максимальное количество страниц */
  maxPageCount: number;
  /** Дополнительный CSS-класс */
  className?: string;
  /** Флаг для отображения селекта с выбором количества элементов на странице */
  withSelect?: boolean;
  /** Массив возможных значений для количества элементов на странице */
  pageSizes?: number[];
  /** Колбэк, вызываемый при изменении страницы */
  onPageChange?: (page: number) => void;
  /** Колбэк, вызываемый при изменении количества элементов на странице */
  onPageSizeChange?: (pageSize: number) => void;
}

export interface IPlainButtonsProps {
  /** Максимальное количество страниц */
  maxPageCount: number;
  /** Текущая страница */
  currentPage: number;
  /** Функция для установки страницы */
  setCurrentPage: (page: number) => void;
  /** Начальная страница для отображения */
  start: number;
  /** Флаг для уменьшения размера текста при большом количестве страниц */
  zoomOut?: boolean;
}

export interface IComplexButtonsProps {
  /** Максимальное количество страниц */
  maxPageCount: number;
  /** Текущая страница */
  currentPage: number;
  /** Функция для установки страницы */
  setCurrentPage: (page: number) => void;
  /** Флаг для уменьшения размера текста при большом количестве страниц */
  zoomOut?: boolean;
}

declare const Pagination: FC<IPaginationProps>;

export default Pagination;
