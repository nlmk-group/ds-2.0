import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVacancyFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m14.876 13.933-2.856-2.855a6.002 6.002 0 0 0-4.687-9.745c-3.312 0-6 2.688-6 6a6.002 6.002 0 0 0 9.745 4.688l2.854 2.855.944-.943ZM5.288 5.738a2.037 2.037 0 1 1 4.074-.001 2.037 2.037 0 0 1-4.074 0ZM4.74 9.93a3.668 3.668 0 0 1-.615-.816c.914-.553 2.333-.83 3.2-.83.871 0 2.298.28 3.212.837a3.667 3.667 0 0 1-5.797.809Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVacancyFilled16;
