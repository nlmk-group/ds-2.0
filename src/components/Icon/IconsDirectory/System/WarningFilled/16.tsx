import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWarningFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 14.09h14L8 2 1 14.09Zm7.636-1.908H7.364v-1.273h1.272v1.273Zm0-2.546H7.364V7.091h1.272v2.545Z"
      />
    </svg>
  );
};

export default IconWarningFilled16;
