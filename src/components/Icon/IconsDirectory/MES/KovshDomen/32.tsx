import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshDomen32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M24.4 4h2.267v11.27c0 1.986-.61 3.837-1.662 5.397h4.328V22.8h-6.256c-.323.27-.664.522-1.02.754A2.2 2.2 0 0 1 24.8 25.66a2.2 2.2 0 1 1 0 .056 2.2 2.2 0 1 1-3.77-1.568A11.13 11.13 0 0 1 16 25.334c-1.818 0-3.53-.429-5.028-1.186a2.2 2.2 0 1 1-1.029-.593 10.665 10.665 0 0 1-1.019-.754H2.667v-2.133h4.328a9.607 9.607 0 0 1-1.662-5.397V4H7.6v5.014l2.677.765a2 2 0 0 0 1.034.018l2.442-.61a4 4 0 0 1 2.069.034l1.903.544a2 2 0 0 0 1.099 0l1.852-.53a4 4 0 0 1 2.198 0l1.526.437V4Zm0 7.752-2.076-.594a2 2 0 0 0-1.099 0l-1.852.53a4 4 0 0 1-2.197 0l-1.904-.544a2 2 0 0 0-1.034-.018l-2.441.61a4 4 0 0 1-2.07-.034L7.6 11.095v4.175c0 4.184 3.634 7.797 8.4 7.797 4.765 0 8.4-3.613 8.4-7.797v-3.518Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M5 27.887a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
    </svg>
  );
};

export default IconKovshDomen32;
