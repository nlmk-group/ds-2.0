import React, { FC, useCallback } from 'react';

import {
  Button,
  IconChevronArrowLeftOutlined24,
  IconChevronArrowRightOutlined24,
  OptionItem,
  SimpleSelect,
  Typography
} from '@components/index';
import clsx from 'clsx';

import { IPaginationProps } from './types';

import styles from './Pagination.module.scss';

import { ComplexButtons, PlainButtons } from './subcomponents';

const DEFAULT_PAGE_SIZES = [10, 20, 30, 50, 100];

/**
 * Компонент Pagination для постраничной навигации.
 * Поддерживает два режима отображения: простой (до 5 страниц) и сложный (более 5 страниц).
 * Может включать селектор для выбора количества элементов на странице.
 *
 * @param {object} props - Свойства компонента Pagination.
 * @param {number} props.currentPage - Текущая активная страница.
 * @param {Dispatch<SetStateAction<number>>} props.setCurrentPage - Функция для изменения текущей страницы.
 * @param {number} [props.elementsPerPage=10] - Количество элементов, отображаемых на одной странице.
 * @param {Dispatch<SetStateAction<number>>} [props.setElementsPerPage] - Функция для изменения количества элементов на странице.
 * @param {number} props.maxPageCount - Общее количество страниц.
 * @param {string} [props.className] - Дополнительный CSS-класс для стилизации компонента.
 * @param {boolean} [props.withSelect=false] - Флаг для отображения селектора количества элементов на странице.
 * @param {number[]} [props.pageSizes=[10,20,30,50,100]] - Массив доступных значений для выбора количества элементов на странице.
 * @param {(page: number) => void} [props.onPageChange] - Колбэк, вызываемый при изменении страницы.
 * @param {(pageSize: number) => void} [props.onPageSizeChange] - Колбэк, вызываемый при изменении количества элементов на странице.
 * @returns {JSX.Element} Компонент пагинации.
 *
 */
const Pagination: FC<IPaginationProps> = ({
  currentPage,
  setCurrentPage,
  elementsPerPage = 10,
  setElementsPerPage,
  maxPageCount,
  className,
  withSelect = false,
  pageSizes = DEFAULT_PAGE_SIZES,
  onPageChange,
  onPageSizeChange
}) => {
  const isPlainButtons = maxPageCount <= 5;

  const handlePageChange = useCallback(
    (newPage: number) => {
      setCurrentPage(prev => {
        if (typeof prev === 'function') {
          return newPage;
        }
        return newPage;
      });
      onPageChange?.(newPage);
    },
    [setCurrentPage, onPageChange]
  );

  const handlePageSizeChange = useCallback(
    (selectedValue: string | number) => {
      const newSize = Number(selectedValue);
      setElementsPerPage?.(prev => {
        if (typeof prev === 'function') {
          return newSize;
        }
        return newSize;
      });
      onPageSizeChange?.(newSize);
      handlePageChange(1);
    },
    [setElementsPerPage, onPageSizeChange, handlePageChange]
  );

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  }, [currentPage, handlePageChange]);

  const handleNextPage = useCallback(() => {
    if (currentPage < maxPageCount) {
      handlePageChange(currentPage + 1);
    }
  }, [currentPage, maxPageCount, handlePageChange]);

  const setPageWrapper = useCallback(
    (page: number) => {
      handlePageChange(page);
    },
    [handlePageChange]
  );

  return (
    <div className={clsx(styles.pagination, className)}>
      <div className={styles.panel}>
        {withSelect && (
          <div className={styles.show}>
            <div className={styles.showTitle}>Отображать</div>
            <SimpleSelect value={elementsPerPage?.toString()} onChange={handlePageSizeChange} withPortal className={styles.select}>
              {pageSizes.map(pageSize => (
                <OptionItem key={pageSize} value={pageSize.toString()} label={pageSize.toString()}>
                  <Typography variant="Body1-Medium">{pageSize} записей</Typography>
                </OptionItem>
              ))}
            </SimpleSelect>
          </div>
        )}
        <div className={styles.controls}>
          <div className={styles.chevronWrapper}>
            <Button
              className={clsx(styles.chevron, styles.left)}
              startIcon={<IconChevronArrowLeftOutlined24 />}
              variant="grey"
              fill="clear"
              size="xs"
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
            />
          </div>
          {isPlainButtons ? (
            <PlainButtons
              maxPageCount={maxPageCount}
              currentPage={currentPage}
              setCurrentPage={setPageWrapper}
              start={0}
            />
          ) : (
            <ComplexButtons maxPageCount={maxPageCount} currentPage={currentPage} setCurrentPage={setPageWrapper} />
          )}
          <div className={styles.chevronWrapper}>
            <Button
              className={clsx(styles.chevron, styles.right)}
              endIcon={<IconChevronArrowRightOutlined24 />}
              variant="grey"
              fill="clear"
              size="xs"
              onClick={handleNextPage}
              disabled={currentPage >= maxPageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
