import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnterFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M7.33 2h5.33c.73 0 1.33.6 1.33 1.33v9.35c0 .73-.6 1.32-1.33 1.32H7.33C6.6 14 6 13.41 6 12.68V8.67h3.33v2L12 8 9.33 5.33v2H6v-4C6 2.59 6.6 2 7.33 2ZM2 7.33h4v1.33H2V7.33Z"
      />
    </svg>
  );
};

export default IconEnterFilled16;
