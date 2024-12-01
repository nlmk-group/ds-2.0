import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRCMSequentialOperation16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.889 2 15 5l-3.111 3V5.75H1v-1.5h10.889V2ZM6.884 8.999l3.111 3-3.11 3v-2.25H1v-1.5h5.884v-2.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRCMSequentialOperation16;
