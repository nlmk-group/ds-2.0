import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBlockCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 1C4.15 1 1 4.15 1 8s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7ZM2.4 8c0-3.08 2.52-5.6 5.6-5.6 1.26 0 2.45.42 3.43 1.19l-7.84 7.84A5.517 5.517 0 0 1 2.4 8Zm2.17 4.41c.98.77 2.17 1.19 3.43 1.19 3.08 0 5.6-2.52 5.6-5.6 0-1.26-.42-2.45-1.19-3.43l-7.84 7.84Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBlockCloseOutlined16;
