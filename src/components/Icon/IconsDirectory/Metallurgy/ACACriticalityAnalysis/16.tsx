import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconACACriticalityAnalysis16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14 2v12H2V2h12ZM5 3.125H3.125V6.5H5V3.125Zm7.875 6.75v-6.75h-6.75V6.5H9.5v3.375h3.375ZM9.5 11h3.375v1.875H9.5V11ZM8.375 9.875v-2.25h-2.25v2.25h2.25ZM5 7.625V11h3.375v1.875h-5.25v-5.25H5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconACACriticalityAnalysis16;
