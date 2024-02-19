import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDragIndicatorDotsOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.6 2C8.62 2 7 3.575 7 5.5S8.62 9 10.6 9s3.6-1.575 3.6-3.5S12.58 2 10.6 2ZM7 16c0-1.925 1.62-3.5 3.6-3.5s3.6 1.575 3.6 3.5-1.62 3.5-3.6 3.5S7 17.925 7 16Zm3.6 14c1.98 0 3.6-1.575 3.6-3.5S12.58 23 10.6 23 7 24.575 7 26.5 8.62 30 10.6 30ZM25 5.5C25 7.425 23.38 9 21.4 9s-3.6-1.575-3.6-3.5S19.42 2 21.4 2 25 3.575 25 5.5Zm-3.6 7c-1.98 0-3.6 1.575-3.6 3.5s1.62 3.5 3.6 3.5S25 17.925 25 16s-1.62-3.5-3.6-3.5Zm-3.6 14c0-1.925 1.62-3.5 3.6-3.5s3.6 1.575 3.6 3.5-1.62 3.5-3.6 3.5-3.6-1.575-3.6-3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDragIndicatorDotsOutlined32;
