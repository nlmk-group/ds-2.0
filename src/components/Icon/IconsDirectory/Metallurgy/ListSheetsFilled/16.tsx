import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListSheetsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m2.546 6.885.209-.21.41-.272a4.979 4.979 0 0 1 6.287.619l.008-.008.473.473 3.963-3.964a5 5 0 0 1-.339 6.492l.003.003-4.025 4.018a5 5 0 1 1-6.99-7.151Zm3.386 4.957a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.547 4.294a6.278 6.278 0 0 0-1.43.023l1.195-1.194a5 5 0 0 1 6.664-.519L9.902 5.678a6.279 6.279 0 0 0-3.355-1.384Z"
      />
    </svg>
  );
};

export default IconListSheetsFilled16;
