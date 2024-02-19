import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.554 4.091a.755.755 0 0 1 .72 0l5.336 2.924-9.733 5.222-2.97-1.886v1.638l2.565 1.649a.7.7 0 0 0 .706.026L20 8.394v1.523L9.868 15.353 4 11.807V9.713c0-.251.14-.482.368-.606l9.186-5.016Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M4 13.442v2.925c0 .245.134.472.353.598L9.457 19.9a.755.755 0 0 0 .733.008l9.442-5.137a.693.693 0 0 0 .368-.607v-2.66l-9.822 5.27a.7.7 0 0 1-.693-.017L4 13.442Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabFilled24;
