import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVacancyFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m29.751 27.866-5.71-5.71a11.947 11.947 0 0 0 2.625-7.489c0-6.624-5.376-12-12-12s-12 5.376-12 12 5.376 12 12 12a11.947 11.947 0 0 0 7.49-2.625l5.709 5.71 1.886-1.886Zm-19.176-16.39A4.074 4.074 0 0 1 14.65 7.4a4.074 4.074 0 0 1 4.075 4.075 4.074 4.074 0 0 1-4.075 4.075 4.074 4.074 0 0 1-4.075-4.075ZM9.48 19.86a7.334 7.334 0 0 1-1.229-1.63c1.828-1.106 4.665-1.662 6.4-1.662 1.743 0 4.597.56 6.424 1.675a7.333 7.333 0 0 1-9.215 3.207 7.335 7.335 0 0 1-2.38-1.59Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVacancyFilled32;
