import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

export const IconCombineOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.5 11.5H2.4A1.4 1.4 0 0 1 1 10.1V2.4A1.4 1.4 0 0 1 2.4 1h7.7a1.4 1.4 0 0 1 1.4 1.4v2.1h2.1A1.4 1.4 0 0 1 15 5.9v7.7a1.4 1.4 0 0 1-1.4 1.4H5.9a1.4 1.4 0 0 1-1.4-1.4v-2.1ZM2.4 2.4h7.7v2.1H5.9a1.4 1.4 0 0 0-1.4 1.4v4.2H2.4V2.4Zm9.1 3.5h2.1v7.7H5.9v-2.1h4.2a1.4 1.4 0 0 0 1.4-1.4V5.9Zm-1.4 0v4.2H5.9V5.9h4.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCombineOutlined16;
