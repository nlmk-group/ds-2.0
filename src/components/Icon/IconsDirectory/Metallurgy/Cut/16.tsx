import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCut16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.43 1.513a.65.65 0 0 1 .058.917L8.867 7.667l1.801 2.041a2.65 2.65 0 1 1-.93.91L8 8.65l-1.738 1.97a2.65 2.65 0 1 1-.93-.91l1.801-2.042-4.62-5.237a.65.65 0 0 1 .974-.86L8 6.684l4.513-5.114a.65.65 0 0 1 .917-.057ZM2.65 12a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0Zm8 0a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCut16;
