import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconArrowBottom24: FC<IIconsProps> = ({
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
        d="M13.0285 16.172L18.5456 10.808L20 12.222L12 20L4 12.222L5.45436 10.808L10.9715 16.172V4H13.0285V16.172Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M2 19H22V21H2V19Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconArrowBottom24;
