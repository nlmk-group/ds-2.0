import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMyGrowth24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20.044.687a1 1 0 0 1 1.212.593l1.958 4.97-1.861.733-1.164-2.954C16.721 11.394 9.734 14.617 2.41 14.617v-2c6.68 0 12.827-2.879 15.923-9.343l-3.118.915-.563-1.92L20.044.688ZM4.084 18v4.5h2V18h-2Zm7.001 4.5V16h2v6.5h-2Zm6.999-11v11h2v-11h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMyGrowth24;
