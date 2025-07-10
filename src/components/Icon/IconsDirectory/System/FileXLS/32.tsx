import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileXLS32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M30 9.91v18.454C30 29.814 28.785 31 27.3 31H5.687C4.202 31 3 29.814 3 28.364l.013-23.728C3.013 3.186 4.215 2 5.7 2h16.2L30 9.91ZM5.7 28.363h21.6V11.227h-4.725c-1.118 0-2.025-.885-2.025-1.977V4.636H5.7v23.728Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.286 25.727c.532 0 .964-.42.964-.936V14.8a.95.95 0 0 0-.964-.937H10.714c-.532 0-.964.419-.964.936v9.99a.95.95 0 0 0 .964.937h11.572Zm-10.607-9.99h9.642v1.457H11.68v-1.457Zm0 3.33h9.642v1.456H11.68v-1.456Zm0 3.33h9.642v1.457H11.68v-1.457Z"
      />
    </svg>
  );
};

export default IconFileXLS32;
