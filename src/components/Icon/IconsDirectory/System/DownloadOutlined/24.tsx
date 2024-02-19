import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDownloadOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20 12a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 1 0-2 0v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6a1 1 0 0 0-1-1Zm-7 .67 1.884-1.877a.998.998 0 0 1 1.41 1.413l-3.587 3.587a1 1 0 0 1-1.414 0l-3.587-3.587a.998.998 0 0 1 1.41-1.413L11 12.67V4a1 1 0 1 1 2 0v8.67Z"
      />
    </svg>
  );
};

export default IconDownloadOutlined24;
