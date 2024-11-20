import React from 'react';

import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import styles from '../Pagination.module.scss';

import { IPlainButtonsProps } from '../types';

const PlainButtons = ({ maxPageCount, currentPage, setCurrentPage, start, zoomOut }: IPlainButtonsProps) => {
  return (
    <>
      {Array.from({ length: maxPageCount }).map((_, i) => {
        const pageNumber = start + i + 1;
        return (
          <div
            key={i}
            onClick={() => setCurrentPage(pageNumber)}
            className={clsx(styles.btn, styles.withHover, currentPage === pageNumber && styles.selected)}
            role="button"
          >
            <Typography
              variant={ETypographyVariants['Body1Mono-Medium']}
              color="var(--steel-90)"
              className={clsx(styles.btnTitle, zoomOut && styles.zoomOut)}
            >
              {pageNumber}
            </Typography>
          </div>
        );
      })}
    </>
  );
};

export default PlainButtons;
