import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFactory24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.582.612a.7.7 0 0 1-.194.97l-.911.608a1.563 1.563 0 0 1-1.972-.195.163.163 0 0 0-.205-.02l-.912.607a.7.7 0 1 1-.776-1.165L6.523.81a1.563 1.563 0 0 1 1.972.195c.055.055.14.063.205.02l.912-.608a.7.7 0 0 1 .97.195Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.3 14.1a.8.8 0 0 1 .8-.8h2.8a.8.8 0 0 1 .8.8v5.3a.8.8 0 0 1-.8.8H5.1a.8.8 0 0 1-.8-.8v-5.3Zm1.4.6v4.1h1.6v-4.1H5.7Zm4.9-1.4a.8.8 0 0 0-.8.8v5.3a.8.8 0 0 0 .8.8h2.8a.8.8 0 0 0 .8-.8v-5.3a.8.8 0 0 0-.8-.8h-2.8Zm.6 5.5v-4.1h1.6v4.1h-1.6Zm4.9-5.5a.8.8 0 0 0-.8.8v5.3a.8.8 0 0 0 .8.8h2.8a.8.8 0 0 0 .8-.8v-5.3a.8.8 0 0 0-.8-.8h-2.8Zm.6 5.5v-4.1h1.6v4.1h-1.6Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m1.509 10.82 1.288-6.867a.8.8 0 0 1 .786-.653h2.834a.8.8 0 0 1 .786.653L8.487 10.8H22.3a.9.9 0 0 1 .9.9v10.1a.9.9 0 0 1-.9.9H1.7a.9.9 0 0 1-.9-.9V11.7a.9.9 0 0 1 .709-.88Zm1.428-.02 1.144-6.1h1.838l1.144 6.1H2.937ZM2.2 21.3v-9.1h19.6v9.1H2.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFactory24;
