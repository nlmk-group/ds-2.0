import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddPlusCircleFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M26.937 24.738A13.938 13.938 0 0 0 30 16c0-7.728-6.272-14-14-14S2 8.272 2 16s6.272 14 14 14a13.938 13.938 0 0 0 8.738-3.063l2.2-2.2ZM9.777 14.444h4.667V9.778h3.111v4.666h4.667v3.111h-4.667v4.667h-3.11v-4.667H9.777v-3.11Z"
      />
    </svg>
  );
};

export default IconAddPlusCircleFilled32;
