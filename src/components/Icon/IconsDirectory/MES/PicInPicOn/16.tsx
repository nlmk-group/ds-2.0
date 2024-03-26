import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPicOn16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.444 2.556H9.037V1H15v14H1V9.037h1.556v4.407h5.703V8.26h5.185V2.556Zm0 10.888h-3.63v-3.63h3.63v3.63Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.772 7.772V1.778H6.217v3.339l-3.92-3.92-1.1 1.1 3.92 3.92h-3.34v1.555h5.995Z"
      />
    </svg>
  );
};

export default IconPicInPicOn16;
