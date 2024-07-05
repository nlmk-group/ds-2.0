import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconACACriticalityAnalysis24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21 3v18H3V3h18ZM7.5 4.688H4.687V9.75H7.5V4.687Zm11.813 10.125V4.687H9.188V9.75h5.062v5.063h5.063ZM14.25 16.5h5.063v2.813H14.25V16.5Zm-1.688-1.688v-3.374H9.188v3.374h3.374ZM7.5 11.438V16.5h5.063v2.813H4.686v-7.875H7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconACACriticalityAnalysis24;
