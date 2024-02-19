import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.166 2.069a.566.566 0 0 1 .54 0l3.955 2.166-7.27 3.972-2.214-1.41v1.187l1.927 1.225a.5.5 0 0 0 .508.017L14 5.19v1.214l-7.62 4.164L2 8.046V6.284a.52.52 0 0 1 .276-.454l6.89-3.761Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M6.612 11.58 14 7.544v2.08a.52.52 0 0 1-.276.455l-7.081 3.853a.566.566 0 0 1-.55-.007l-3.828-2.201A.519.519 0 0 1 2 11.275V9.2l4.123 2.375a.5.5 0 0 0 .49.005Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabFilled16;
