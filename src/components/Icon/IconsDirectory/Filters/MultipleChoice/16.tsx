import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMultipleChoice16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15 5.149H8.7v1.4H15v-1.4Zm0 5.6H8.7v1.4H15v-1.4Zm-11.522-2.8L1 5.471l.987-.987 1.484 1.484L6.439 3l.987.987-3.948 3.962Zm0 5.6L1 11.071l.987-.987 1.484 1.484L6.439 8.6l.987.987-3.948 3.962Z"
      />
    </svg>
  );
};

export default IconMultipleChoice16;
