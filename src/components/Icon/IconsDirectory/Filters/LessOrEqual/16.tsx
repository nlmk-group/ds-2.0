import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLessOrEqual16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14.442H3.22v-1.688H14v1.688ZM14 12 3 6.5 14 1v2.02L7.04 6.5 14 9.98V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLessOrEqual16;
