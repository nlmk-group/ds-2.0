import { Dispatch, SetStateAction } from 'react';

export interface IPaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  elementsPerPage?: number;
  setElementsPerPage?: Dispatch<SetStateAction<number>>;
  maxPageCount: number;
  className?: string;
  withSelect?: boolean;
  pageSizes?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
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
