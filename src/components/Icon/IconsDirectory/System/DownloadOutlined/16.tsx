import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDownloadOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.333 8a.667.667 0 0 0-.666.667v3a1 1 0 0 1-1 1H4.333a1 1 0 0 1-1-1v-3a.667.667 0 1 0-1.333 0v4C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667v-4A.667.667 0 0 0 13.333 8Zm-4.666.447 1.256-1.252a.665.665 0 0 1 .94.942l-2.156 2.156a1 1 0 0 1-1.414 0L5.137 8.137a.665.665 0 0 1 .94-.942l1.256 1.252v-5.78a.667.667 0 0 1 1.334 0v5.78Z"
      />
    </svg>
  );
};

export default IconDownloadOutlined16;
