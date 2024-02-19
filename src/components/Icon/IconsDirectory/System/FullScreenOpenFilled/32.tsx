import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenOpenFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13 1H1v12h6V7h6V1Zm18 0H19v6h6v6h6V1ZM7 19H1v12h12v-6H7v-6Zm24 0h-6v6h-6v6h12V19Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullScreenOpenFilled32;
