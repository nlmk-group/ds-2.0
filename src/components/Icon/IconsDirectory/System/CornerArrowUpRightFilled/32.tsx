import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpRightFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.145 4.293A1 1 0 0 0 18.438 5v5.563h-.883c-2.167 0-3.855 0-5.209.11-1.375.113-2.493.344-3.5.857a8.875 8.875 0 0 0-3.879 3.878c-.513 1.007-.744 2.126-.856 3.5C4 20.264 4 21.95 4 24.119V26a1 1 0 1 0 2 0v-1.837c0-2.222 0-3.828.104-5.091.102-1.252.3-2.078.645-2.756a6.875 6.875 0 0 1 3.005-3.004c.678-.345 1.504-.543 2.755-.646 1.263-.103 2.87-.104 5.091-.104h.837v5.563a1 1 0 0 0 1.708.707l6.562-6.562a1 1 0 0 0 0-1.415l-6.562-6.562Z"
      />
    </svg>
  );
};

export default IconCornerArrowUpRightFilled32;
