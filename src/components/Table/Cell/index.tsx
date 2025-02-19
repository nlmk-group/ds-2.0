import React, { FC, MouseEvent } from 'react';

import { Typography } from '@components/index';
import clsx from 'clsx';

import { ECellSize, ECellState, ECellStatus, ICellProps } from './types';

import styles from './Cell.module.scss';

const Cell: FC<ICellProps> = ({
  size = ECellSize.M,
  color = ECellStatus.DEFAULT,
  state = ECellState.DEFAULT,
  number,
  text,
  align,
  disableHover = false,
  onClick,
  className,
  children,
  style,
  ...props
}) => {
  const isDisabled = state === ECellState.DISABLED;

  const finalAlign = align || (number !== undefined ? 'right' : 'left');

  const handleClick = (e: MouseEvent) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  const renderContent = () => {
    if (children) {
      return <div className={styles.main}>{children}</div>;
    }

    if (text !== undefined || number !== undefined) {
      return (
        <Typography
          variant="Body1Table-Medium"
          color="var(--steel-90)"
          className={clsx(styles.text, styles[`align-${finalAlign}`])}
        >
          {text ?? number}
        </Typography>
      );
    }

    return null;
  };

  return (
    <td
      style={style}
      className={clsx(
        styles.cell,
        styles[size],
        styles[color],
        styles[state],
        disableHover && styles.disableHover,
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <div className={styles.content}>{renderContent()}</div>
    </td>
  );
};

export default Cell;
