import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOutOfZone24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m21.964 15.714-2.536 2.536 2.536 2.536-1.178 1.178-2.536-2.536-2.536 2.536-1.178-1.178 2.536-2.536-2.536-2.536 1.178-1.178 2.536 2.536 2.536-2.536 1.178 1.178ZM3.667 12a8.333 8.333 0 1 1 16.624.833h1.666A9.85 9.85 0 0 0 22 12a10 10 0 1 0-10 10c.282 0 .557-.02.833-.043v-1.666A8.327 8.327 0 0 1 3.667 12Zm7.5-5v3.822L8.91 13.078l1.178 1.178 2.744-2.744V7h-1.666Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOutOfZone24;
