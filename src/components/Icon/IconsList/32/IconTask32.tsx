import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTask32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M28 7.816L14.308 21.52L9.22 16.432L10.912 14.74L14.308 18.136L26.308 6.136L28 7.816ZM25.348 13.864C25.504 14.548 25.6 15.268 25.6 16C25.6 21.304 21.304 25.6 16 25.6C10.696 25.6 6.4 21.304 6.4 16C6.4 10.696 10.696 6.4 16 6.4C17.896 6.4 19.648 6.952 21.136 7.9L22.864 6.172C20.92 4.804 18.556 4 16 4C9.376 4 4 9.376 4 16C4 22.624 9.376 28 16 28C22.624 28 28 22.624 28 16C28 14.572 27.736 13.204 27.28 11.932L25.348 13.864Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTask32;
