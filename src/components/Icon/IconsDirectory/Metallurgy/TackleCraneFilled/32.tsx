import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTackleCraneFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="none" viewBox="0 0 33 33" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.65 8.35V2.5h1.7v4.212a5.85 5.85 0 0 1 2.1 10.84l3.106 7.098H30.5v5.7h-28v-5.7h7.944l3.106-7.098a5.85 5.85 0 0 1-2.9-5.052h1.7a4.15 4.15 0 1 0 4.15-4.15h-.85Zm1.991 9.888c.078-.016.155-.033.232-.051L20.7 24.65h-8.4l2.827-6.463a5.85 5.85 0 0 0 2.514.05Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTackleCraneFilled32;
