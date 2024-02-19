import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetallalomScrapFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.25 5.25H9v-1.5h6v1.5h-2.25v3h4.06l4.25 4.25-3.53 3.53-1.06-1.06 2.47-2.47-2.75-2.75H7.81L5.06 12.5l2.47 2.47-1.06 1.06-3.53-3.53 4.25-4.25h4.06v-3Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 21.25H2v-1.5h2.674l5.6-6h3.452l5.6 6H22v1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetallalomScrapFilled24;
