import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowForwardFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21.105 9.1h-6.579c-4.36 0-7.894 3.627-7.894 8.1 0 4.474 3.534 8.1 7.894 8.1h11.842V28H14.526C8.713 28 4 23.165 4 17.2 4 11.235 8.713 6.4 14.526 6.4h6.58V1L29 7.75l-7.895 6.75V9.1Z"
      />
    </svg>
  );
};

export default IconRoundedArrowForwardFilled32;
