import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRightColumnArrowFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M31 30V3h-5.111v27H31Zm-14.444-4.828 8.633-8.672-8.633-8.672v6.11H1v5.124h15.556v6.11Z"
      />
    </svg>
  );
};

export default IconRightColumnArrowFilled32;
