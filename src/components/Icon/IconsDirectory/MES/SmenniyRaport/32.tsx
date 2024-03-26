import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSmenniyRaport32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.917 5.367h5.4c.746 0 1.35.604 1.35 1.35V14h-2.7v-3.233h-21.6v16.2H14v2.7H4.017a1.35 1.35 0 0 1-1.35-1.35v-21.6c0-.746.604-1.35 1.35-1.35h5.4v-2.7h2.7v2.7h8.1v-2.7h2.7v2.7Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M27.317 20.207v-1.778H18.43v1.778h8.889Zm-8.888 3.555v-1.778h8.889v1.778h-8.89Zm6.221 3.556h-6.22V25.54h6.222v1.778Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.778 15C15.8 15 15 15.8 15 16.778v12.445C15 30.2 15.8 31 16.778 31h12.444C30.2 31 31 30.2 31 29.223V16.777C31 15.8 30.2 15 29.222 15H16.778Zm12.444 1.778v12.445H16.778V16.777h12.444Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSmenniyRaport32;
