import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEducationOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 6 4 12.667l4.364 2.422v6.667L16 26l7.636-4.244v-6.667l2.182-1.211v7.678H28v-8.89L16 6Zm7.44 6.667L16 16.8l-7.44-4.133L16 8.533l7.44 4.134Zm-1.986 7.766L16 23.467l-5.454-3.034V16.3L16 19.333l5.454-3.033v4.133Z"
      />
    </svg>
  );
};

export default IconEducationOutlined32;
