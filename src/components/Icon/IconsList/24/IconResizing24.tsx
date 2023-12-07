import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconResizing24: FC<IIconsProps> = ({ color = 'inherit' }) => {
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
      <path d="M12 22L22 12" stroke="currentColor" />
      <path d="M17.0234 21.9746L21.9727 17.0254" stroke="currentColor" />
    </svg>
  );
};

export default IconResizing24;
