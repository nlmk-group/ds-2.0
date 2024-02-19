import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDragIndicatorDotsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.8 1C6.26 1 5 2.237 5 3.75S6.26 6.5 7.8 6.5c1.54 0 2.8-1.237 2.8-2.75S9.34 1 7.8 1ZM5 12c0-1.512 1.26-2.75 2.8-2.75 1.54 0 2.8 1.238 2.8 2.75s-1.26 2.75-2.8 2.75C6.26 14.75 5 13.512 5 12Zm2.8 11c1.54 0 2.8-1.238 2.8-2.75S9.34 17.5 7.8 17.5c-1.54 0-2.8 1.238-2.8 2.75S6.26 23 7.8 23ZM19 3.75c0 1.513-1.26 2.75-2.8 2.75-1.54 0-2.8-1.237-2.8-2.75S14.66 1 16.2 1C17.74 1 19 2.237 19 3.75Zm-2.8 5.5c-1.54 0-2.8 1.238-2.8 2.75s1.26 2.75 2.8 2.75c1.54 0 2.8-1.238 2.8-2.75s-1.26-2.75-2.8-2.75Zm-2.8 11c0-1.512 1.26-2.75 2.8-2.75 1.54 0 2.8 1.238 2.8 2.75S17.74 23 16.2 23c-1.54 0-2.8-1.238-2.8-2.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDragIndicatorDotsOutlined24;
