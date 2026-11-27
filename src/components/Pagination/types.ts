import { Dispatch, SetStateAction } from 'react';

export interface IPaginationProps {
  currentPage: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
  elementsPerPage?: number;
  setElementsPerPage?: Dispatch<SetStateAction<number>>;
  maxPageCount: number;
  className?: string;
  withSelect?: boolean;
  /** Варианты количества записей на странице в списке выбора. */
  pageSizes?: number[];
  onPageChange?: (page: number) => void;
  /** Вызывается при выборе другого количества записей на странице. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Подпись после числа в списке размеров страницы. */
  itemsLabel?: string;
}

export interface IPlainButtonsProps {
  maxPageCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  start: number;
  zoomOut?: boolean;
}

export interface IComplexButtonsProps {
  maxPageCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  zoomOut?: boolean;
}
