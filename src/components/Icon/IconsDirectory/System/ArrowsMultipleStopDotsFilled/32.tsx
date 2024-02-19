import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsMultipleStopDotsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Zm28 7-6.222-6v4.5h-6.222v3h6.222V16L30 10Zm-18.667 0c0-.825.7-1.5 1.556-1.5.855 0 1.555.675 1.555 1.5s-.7 1.5-1.555 1.5c-.856 0-1.556-.675-1.556-1.5Zm-6.222 0c0-.825.7-1.5 1.556-1.5.855 0 1.555.675 1.555 1.5s-.7 1.5-1.555 1.5c-.856 0-1.556-.675-1.556-1.5Zm3.111 6v4.5h6.222v3H8.222V28L2 22l6.222-6Zm12.445 6c0 .825-.7 1.5-1.556 1.5-.855 0-1.555-.675-1.555-1.5s.7-1.5 1.555-1.5c.856 0 1.556.675 1.556 1.5Zm6.222 0c0 .825-.7 1.5-1.556 1.5-.855 0-1.555-.675-1.555-1.5s.7-1.5 1.555-1.5c.856 0 1.556.675 1.556 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsMultipleStopDotsFilled32;
