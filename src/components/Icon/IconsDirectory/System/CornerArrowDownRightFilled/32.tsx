import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownRightFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6 5a1 1 0 1 0-2 0v1.883c0 2.167 0 3.854.11 5.208.113 1.375.344 2.494.857 3.5a8.875 8.875 0 0 0 3.879 3.88c1.007.512 2.125.744 3.5.856 1.354.11 3.042.11 5.209.11h.883V26a1 1 0 0 0 1.707.707l6.562-6.562a1 1 0 0 0 0-1.415l-6.562-6.562a1 1 0 0 0-1.707.707v5.563H17.6c-2.222 0-3.828-.001-5.09-.104-1.252-.103-2.078-.3-2.756-.646a6.875 6.875 0 0 1-3.005-3.004c-.345-.678-.543-1.504-.645-2.756C6.001 10.665 6 9.06 6 6.838V5Z"
      />
    </svg>
  );
};

export default IconCornerArrowDownRightFilled32;
