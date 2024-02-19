import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGreaterOrEqual16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 14.442h10.127v-1.688H3v1.688ZM3 12l11-5.5L3 1v2.02L9.96 6.5 3 9.98V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconGreaterOrEqual16;
