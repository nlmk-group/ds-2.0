import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewReloadOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 9V6c-3.31 0-6 2.69-6 6 0 1.01.25 1.97.7 2.8l-1.46 1.46A7.93 7.93 0 0 1 4 12c0-4.42 3.58-8 8-8V1l4 4-4 4Zm5.3.2 1.46-1.46A7.93 7.93 0 0 1 20 12c0 4.42-3.58 8-8 8v3l-4-4 4-4v3c3.31 0 6-2.69 6-6 0-1.01-.26-1.96-.7-2.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAutoRenewReloadOutlined24;
