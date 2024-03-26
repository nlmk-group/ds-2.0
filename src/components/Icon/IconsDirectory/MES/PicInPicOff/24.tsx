import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPicOff24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.5 3H21v18H3V3h7.5ZM5 11v8h12.586L14 15.414V17h-2v-5h5v2h-1.586L19 17.586V5h-8v6H5Zm0-6h4v4H5V5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPicInPicOff24;
