import React, { FC, SyntheticEvent, useContext } from 'react';

import { Typography } from '@components/index';
import clsx from 'clsx';

import styles from '../SegmentButtonGroup.module.scss';

import { SegmentButtonGroupContext } from '../context';
import type { ISegmentButtonProps } from '../types';

const SegmentButton: FC<ISegmentButtonProps> = ({ active, children, className, onClick, toggleButton }) => {
  const { disabled /* size */ } = useContext(SegmentButtonGroupContext);

  // Обработчик клика
  const handleClick = (e: SyntheticEvent) => {
    if (disabled) return;

    toggleButton?.();
    onClick?.(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={clsx(styles.segmentButton, active && styles._active, className)}
      data-ui-segment-button
      data-testid="SEGMENT_BUTTON"
    >
      {/* Если `children` - примитив (строка/число), то оборачиваем в `Typography` */}
      {typeof children === 'string' || typeof children === 'number' ? (
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          {children}
        </Typography>
      ) : (
        children
      )}
    </button>
  );
};

export default SegmentButton;
