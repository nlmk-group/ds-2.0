import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVerticalAlignTopFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M30 1H3v5.111h27V1Zm-4.828 14.444L16.5 6.811l-8.672 8.633h6.11V31h5.124V15.444h6.11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVerticalAlignTopFilled32;
