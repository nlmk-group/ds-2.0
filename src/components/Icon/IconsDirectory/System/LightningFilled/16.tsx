import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLightningFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeWidth=".762"
        d="M8.31 7.571h3.809l-5.214 6.774.643-4.488H4.5L6.905 3h3.428L8.31 7.571Z"
      />
    </svg>
  );
};

export default IconLightningFilled16;
