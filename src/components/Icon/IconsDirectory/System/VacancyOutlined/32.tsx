import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVacancyOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.575 11.475A4.074 4.074 0 0 1 14.65 7.4a4.074 4.074 0 0 1 4.075 4.075 4.074 4.074 0 0 1-4.075 4.075 4.074 4.074 0 0 1-4.075-4.075Zm-1.096 8.386a7.334 7.334 0 0 1-1.229-1.63c1.828-1.106 4.665-1.662 6.4-1.662 1.743 0 4.597.56 6.424 1.675a7.333 7.333 0 0 1-9.215 3.207 7.335 7.335 0 0 1-2.38-1.59Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m24.04 22.156 5.711 5.71-1.886 1.886-5.71-5.71a11.947 11.947 0 0 1-7.489 2.625c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12a11.947 11.947 0 0 1-2.625 7.49Zm-2.674-.989a9.302 9.302 0 0 0 2.633-6.5 9.33 9.33 0 0 0-9.333-9.333 9.33 9.33 0 0 0-9.333 9.333A9.33 9.33 0 0 0 14.666 24a9.303 9.303 0 0 0 6.5-2.633l.2-.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVacancyOutlined32;
