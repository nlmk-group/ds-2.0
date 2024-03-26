import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPicOn24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.778 4.222h-6.296V2H22v20H2v-8.518h2.222v6.296h8.148V12.37h7.408V4.222Zm0 15.556h-5.185v-5.185h5.185v5.185Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.675 11.675V3.11H9.452v4.77l-5.6-5.6L2.28 3.85l5.601 5.601h-4.77v2.223h8.564Z"
      />
    </svg>
  );
};

export default IconPicInPicOn24;
