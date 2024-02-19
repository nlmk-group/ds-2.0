import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockCloseFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 5.667h1.333a.667.667 0 0 1 .667.666v8a.666.666 0 0 1-.667.667H2.667A.666.666 0 0 1 2 14.333v-8a.667.667 0 0 1 .667-.666H4V5a4 4 0 0 1 8 0v.667ZM7.333 10.82v1.512h1.334V10.82a1.333 1.333 0 1 0-1.334 0Zm3.334-5.154V5a2.667 2.667 0 0 0-5.334 0v.667h5.334Z"
      />
    </svg>
  );
};

export default IconLockCloseFilled16;
