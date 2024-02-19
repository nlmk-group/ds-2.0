import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowDownFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.143 2.5H6.857v7.601L3.91 6.948 2.315 8.653 8 14.733l5.684-6.08-1.593-1.705-2.948 3.153V2.5Z"
      />
    </svg>
  );
};

export default IconArrowDownFilled16;
