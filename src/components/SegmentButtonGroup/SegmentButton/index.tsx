import React, { SyntheticEvent, useContext } from 'react';

import { Typography } from '@components/index';
import { clsx } from 'clsx';

import styles from '../SegmentButtonGroup.module.scss';

import { SegmentButtonProperties } from '../index';
import type { ISegmentButtonProperties, ISegmentButtonProps } from '../types';

export const SegmentButton = ({
  className,
  disabled = false,
  active = false,
  color,
  children,
  onClick = () => void 0,
  toggleButton = () => void 0
}: ISegmentButtonProps) => {
  const defaultProps = useContext<ISegmentButtonProperties>(SegmentButtonProperties);
  const isDisabled = defaultProps.disabled || disabled;
  const isPrimitiveChildren = typeof children === 'string' || typeof children === 'number';
  const currentColor = `_${color || defaultProps.color}`;

  const handleClick = (e: SyntheticEvent) => {
    toggleButton();
    if (!onClick) return;

    onClick(e);
  };

  return (
    <button
      data-testid="SEGMENT_BUTTON"
      onClick={handleClick}
      disabled={isDisabled}
      className={clsx(
        styles.segmentButton,
        styles[currentColor],
        defaultProps.compact ? styles._compact : '',
        active ? styles._active : '',
        className
      )}
    >
      {isPrimitiveChildren ? <Typography variant="Body1-Bold" color='var(--steel-90)'>{children}</Typography> : children}
    </button>
  );
};

export default SegmentButton;
