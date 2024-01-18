import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconExpand32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.2025 28C11.546 28 11.8367 27.8619 12.0613 27.6272L22.5399 16.9252C22.7909 16.6628 22.9231 16.3452 22.9231 16C22.9231 15.641 22.7909 15.3096 22.5399 15.0748L12.0746 4.38665C11.8367 4.13809 11.546 4 11.2025 4C10.5153 4 10 4.55236 10 5.27043C10 5.60184 10.1321 5.93326 10.3436 6.16801L19.9632 16L10.3436 25.832C10.1321 26.0667 10 26.3843 10 26.7296C10 27.4476 10.5153 28 11.2025 28Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconExpand32;
