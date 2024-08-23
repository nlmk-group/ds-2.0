import React, { FC, MouseEvent } from 'react';

import { Typography } from '@components/index';
import clsx from 'clsx';

import { IMeasureUnitProps } from './types';

import styles from './MeasureUnit.module.scss';

const MeasureUnit: FC<IMeasureUnitProps> = ({ onHover, onClick, selected, disabled, children }) => {
  const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
    if (!disabled && onHover) {
      onHover(event);
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  const classNames = clsx(styles.root, {
    [styles.selected]: selected,
    [styles.disabled]: disabled
  });

  return (
    <div
      onClick={handleClick}
      className={classNames}
      onMouseOver={handleMouseOver}
      data-testid={selected ? 'selected' : undefined}
    >
      <div className={styles.wrapper}>
        <Typography variant="Body1-Medium">{children}</Typography>
      </div>
    </div>
  );
};

export default MeasureUnit;
