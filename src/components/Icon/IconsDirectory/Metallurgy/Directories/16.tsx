import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectories16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M11.5 5.525h-7v-1.05h7v1.05Zm-1 2h-5v-1.05h5v1.05Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 2v12h12V2H2Zm10.945 1.055h-9.89v5.92h3.47v1.5h2.95v-1.5h3.47v-5.92Zm0 6.97h-2.42v1.5h-5.05v-1.5h-2.42v2.92h9.89v-2.92Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDirectories16;
