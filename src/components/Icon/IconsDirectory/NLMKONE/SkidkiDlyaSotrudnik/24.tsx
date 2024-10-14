import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSkidkiDlyaSotrudnik24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7.5 11a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 4 7.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 7.5 4c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 11 7.5c0 .967-.342 1.792-1.025 2.475A3.372 3.372 0 0 1 7.5 11Zm0-2c.417 0 .77-.146 1.062-.438C8.854 8.271 9 7.917 9 7.5c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 7.5 6c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 6 7.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Zm9 11a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 13 16.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 16.5 13c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 20 16.5c0 .967-.342 1.792-1.025 2.475A3.372 3.372 0 0 1 16.5 20Zm0-2c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 16.5 15c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 15 16.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438ZM5.4 20 4 18.6 18.6 4 20 5.4 5.4 20Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSkidkiDlyaSotrudnik24;
