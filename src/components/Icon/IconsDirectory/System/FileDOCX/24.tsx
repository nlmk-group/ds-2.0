import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileDOCX24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 1h12l6 6v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2Zm0 2v18h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 11.844c0 .338.297.612.662.612.366 0 .663-.274.663-.612v-.62h5.35v.62c0 .338.297.612.662.612.366 0 .663-.274.663-.612v-1.232c0-.338-.297-.612-.662-.612H8.663c-.366 0-.663.274-.663.612v1.232Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.337 10.611v6.777c0 .338.297.612.663.612.366 0 .662-.274.662-.611V10.61c0-.337-.296-.611-.662-.611-.366 0-.663.274-.663.611Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.002 18 .067-.003c.334-.032.595-.292.595-.608 0-.317-.261-.578-.595-.609L13 16.777h-2.003c-.365 0-.662.274-.662.611 0 .338.296.612.662.612h2.004Z"
      />
    </svg>
  );
};

export default IconFileDOCX24;
