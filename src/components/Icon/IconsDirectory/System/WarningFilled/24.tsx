import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWarningFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 21h20L12 3 2 21Zm10.91-2.842h-1.82v-1.895h1.82v1.895Zm0-3.79h-1.82v-3.79h1.82v3.79Z"
      />
    </svg>
  );
};

export default IconWarningFilled24;
