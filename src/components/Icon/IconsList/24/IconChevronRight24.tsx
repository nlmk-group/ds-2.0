import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronRight24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M9.08984 7.41L13.6698 12L9.08984 16.59L10.4998 18L16.4998 12L10.4998 6L9.08984 7.41Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChevronRight24;
