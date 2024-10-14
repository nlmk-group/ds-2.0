import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconIsReady16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m3.99 7.093.973-.972 2.57 2.57 6.38-6.381.972.972-7.353 7.353L3.99 7.093ZM10 3.125H2.125v9.75h11.75V7H15v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8v1.125Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIsReady16;
