import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPinLeftFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22 17V7c0-.55-.45-1-1-1s-1 .45-1 1v1h-5c-1.66 0-3-1.34-3-3h-2v5.97H3l-1 1 1 1h7V19h2c0-1.66 1.34-3 3-3h5v1c0 .55.45 1 1 1s1-.45 1-1Z"
      />
    </svg>
  );
};

export default IconPinLeftFilled24;
