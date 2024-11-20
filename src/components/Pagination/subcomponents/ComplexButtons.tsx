import React, { memo, useMemo } from 'react';

import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import styles from '../Pagination.module.scss';

import { IComplexButtonsProps } from '../types';
import EmptyButton from './EmptyButton';
import PlainButtons from './PlainButtons';

const ComplexButtons = memo(({ maxPageCount, currentPage, setCurrentPage }: IComplexButtonsProps) => {
  const { firstSpread, lastSpread, noSpread, zoomOut } = useMemo(
    () => ({
      // если индекс текущего значения меньше 4, то не показываем первый spread
      firstSpread: currentPage < 4,
      // если индекс текущего значения приблизился к последнему значению менее, чем на 5 пунктов, то показываем второй spread
      lastSpread: currentPage > maxPageCount - 4,
      // вообще не показываем spread'ы, если страниц <= 6
      noSpread: maxPageCount <= 6,
      // максимальное колечиство страниц
      zoomOut: maxPageCount > 9999
    }),
    [currentPage, maxPageCount]
  );

  const renderPageButton = (page: number, isSelected: boolean) => (
    <div
      onClick={() => setCurrentPage(page)}
      className={clsx(styles.btn, isSelected && styles.selected)}
      role="button"
    >
      <Typography
        variant={ETypographyVariants['Body1Mono-Medium']}
        color="var(--steel-90)"
        className={clsx(styles.btnTitle, zoomOut && styles.zoomOut)}
      >
        {page}
      </Typography>
    </div>
  );

  if (noSpread) {
    return (
      <PlainButtons
        maxPageCount={maxPageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        start={0}
        zoomOut={zoomOut}
      />
    );
  }

  return (
    <>
      {firstSpread ? (
        <PlainButtons
          maxPageCount={5}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          start={0}
          zoomOut={zoomOut}
        />
      ) : (
        renderPageButton(1, currentPage === 1)
      )}

      {!firstSpread && !lastSpread ? (
        <>
          <EmptyButton />
          <PlainButtons
            maxPageCount={3}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            start={currentPage - 2}
            zoomOut={zoomOut}
          />
          <EmptyButton />
        </>
      ) : (
        <EmptyButton />
      )}

      {lastSpread ? (
        <PlainButtons
          maxPageCount={5}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          start={maxPageCount - 5}
          zoomOut={zoomOut}
        />
      ) : (
        renderPageButton(maxPageCount, currentPage === maxPageCount)
      )}
    </>
  );
});

ComplexButtons.displayName = 'ComplexButtons';

export default ComplexButtons;
