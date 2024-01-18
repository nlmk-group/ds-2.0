import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterNotEqualSign16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.00017 12.9528L12.953 1.00001L14.1089 2.15597L11.6019 4.66295H15V6.29772H9.96717L7.02451 9.24038H15V10.8751H5.38975L2.15613 14.1088L1.00017 12.9528ZM4.22227 9.24038H1.92183V10.8751H2.58751L4.22227 9.24038ZM1.92183 4.66295H8.79966L7.1649 6.29772H1.92183V4.66295Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterNotEqualSign16;
