import React, { FC, SyntheticEvent, useContext } from 'react';

import { Typography } from '@components/index';
import clsx from 'clsx';

import styles from '../SegmentButtonGroup.module.scss';

import { SegmentButtonGroupContext } from '../context';
import { ESegmentButtonGroupSizes } from '../enums';
import type { ISegmentButtonProps } from '../types';

const SegmentButton: FC<ISegmentButtonProps> = ({ children, className, onClick, toggleButton, buttonIndex }) => {
  const { disabled, size, activeId } = useContext(SegmentButtonGroupContext);
  const active = activeId === buttonIndex;
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
      className={clsx(
        styles.segmentButton,
        active && styles._active,
        size === ESegmentButtonGroupSizes.s && styles['segmentButton-s'],
        className
      )}
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
