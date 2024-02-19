import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDragIndicatorDotsOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.6 2C4.72 2 4 2.675 4 3.5S4.72 5 5.6 5c.88 0 1.6-.675 1.6-1.5S6.48 2 5.6 2ZM4 8c0-.825.72-1.5 1.6-1.5.88 0 1.6.675 1.6 1.5s-.72 1.5-1.6 1.5C4.72 9.5 4 8.825 4 8Zm1.6 6c.88 0 1.6-.675 1.6-1.5S6.48 11 5.6 11c-.88 0-1.6.675-1.6 1.5S4.72 14 5.6 14ZM12 3.5c0 .825-.72 1.5-1.6 1.5-.88 0-1.6-.675-1.6-1.5S9.52 2 10.4 2c.88 0 1.6.675 1.6 1.5Zm-1.6 3c-.88 0-1.6.675-1.6 1.5s.72 1.5 1.6 1.5c.88 0 1.6-.675 1.6-1.5s-.72-1.5-1.6-1.5Zm-1.6 6c0-.825.72-1.5 1.6-1.5.88 0 1.6.675 1.6 1.5s-.72 1.5-1.6 1.5c-.88 0-1.6-.675-1.6-1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDragIndicatorDotsOutlined16;
