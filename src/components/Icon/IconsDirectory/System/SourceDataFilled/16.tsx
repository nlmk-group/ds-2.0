import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDataFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.994 3.197A4.501 4.501 0 0 0 5.292 4.53H2V3.197h4.994ZM4.393 6.651c.065-.472.204-.92.406-1.333H2V6.65h2.393ZM2 7.428h2.353c.007.501.044.952.107 1.356H2V7.428Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.182 7.258c0-2.014 1.644-3.637 3.66-3.637 2.017 0 3.66 1.623 3.66 3.637 0 .873-.308 1.672-.823 2.298l2.124 2.107a.667.667 0 0 1-.94.947l-2.209-2.192a3.663 3.663 0 0 1-1.812.476c-2.016 0-3.66-1.623-3.66-3.636Zm1.886-1.492h1.757v1.283H6.507c.106-.531.212-.816.56-1.283ZM6.637 7.89h2.188v1.283H7.567c-.502-.46-.696-.742-.93-1.283Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSourceDataFilled16;
