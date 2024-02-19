import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowBackFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.895 9.1v5.4L3 7.75 10.895 1v5.4h6.579C23.287 6.4 28 11.235 28 17.2 28 23.165 23.287 28 17.474 28H5.632v-2.7h11.842c4.36 0 7.894-3.627 7.894-8.1s-3.534-8.1-7.894-8.1h-6.58Z"
      />
    </svg>
  );
};

export default IconRoundedArrowBackFilled32;
