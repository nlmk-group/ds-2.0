import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightUpOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.667 2a1 1 0 0 1 .718.304l3.333 3.437a1 1 0 1 1-1.436 1.393l-1.615-1.666v1.974c0 1.12 0 2.019-.058 2.746-.06.748-.184 1.4-.482 2.003a5.064 5.064 0 0 1-2.18 2.245c-.594.312-1.238.443-1.97.504-.708.06-1.584.06-2.666.06H2a1 1 0 1 1 0-2h2.267c1.137 0 1.928 0 2.543-.053.603-.05.947-.145 1.207-.282a3.065 3.065 0 0 0 1.317-1.36c.138-.28.232-.646.281-1.275.05-.639.052-1.459.052-2.63V5.468L8.05 7.134A1 1 0 0 1 6.615 5.74L9.95 2.304A1 1 0 0 1 10.667 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowRightUpOutlined16;
