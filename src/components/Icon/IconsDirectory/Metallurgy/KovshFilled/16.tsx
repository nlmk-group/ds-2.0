import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.15 9.297V4.116H5v-1.3H2v1.3h.85v8.39a2.65 2.65 0 0 0 2.65 2.65h5a2.65 2.65 0 0 0 2.65-2.65v-8.39H14v-1.3H8.65v-.85h-1.3v5.517c.198-.086.411-.131.627-.135v.002a1.649 1.649 0 1 1-1.599 1.946H4.15Zm4.5-5.181v2.006a2.949 2.949 0 0 1 2.284 3.175h.916V4.116h-3.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKovshFilled16;
