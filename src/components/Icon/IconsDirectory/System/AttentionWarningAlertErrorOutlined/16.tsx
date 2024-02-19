import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertErrorOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.993 1A6.997 6.997 0 0 0 1 8c0 3.864 3.129 7 6.993 7A7.004 7.004 0 0 0 15 8c0-3.864-3.136-7-7.007-7ZM8.7 4.5H7.3v4.2h1.4V4.5Zm0 5.6H7.3v1.4h1.4v-1.4ZM2.4 8c0 3.093 2.506 5.6 5.6 5.6s5.6-2.507 5.6-5.6c0-3.095-2.506-5.6-5.6-5.6A5.598 5.598 0 0 0 2.4 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertErrorOutlined16;
