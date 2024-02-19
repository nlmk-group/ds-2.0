import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDocCopyOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22.6 26.833v-13l-6.6-6.5H7.2C5.99 7.333 5 8.308 5 9.5v17.333A2.18 2.18 0 0 0 7.189 29H20.4c1.21 0 2.2-.975 2.2-2.167Zm-2.2 0H7.189V9.5H14.9v5.416h5.5v11.917Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M27 22.503c-.001 1.19-.99 2.164-2.2 2.164V10.583l-5.5-5.416H9.4C9.4 3.975 10.39 3 11.6 3h8.8L27 9.5v13.003ZM9.4 18.166h8.8v2.167H9.4v-2.166Zm0 4.334h5.867v2.167H9.4V22.5Z"
      />
    </svg>
  );
};

export default IconSourceDocCopyOutlined32;
