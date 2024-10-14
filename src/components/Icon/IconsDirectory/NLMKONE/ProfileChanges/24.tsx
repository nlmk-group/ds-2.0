import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProfileChanges24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.4 8a3 3 0 0 0-1.984 5.25A4.502 4.502 0 0 0 7.4 17.5V19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.5a4.502 4.502 0 0 0-3.016-4.25A3 3 0 0 0 12.4 8Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2 6.5a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 0 1 2.5 2.5v.5h-6v-.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.593 21.736a2.2 2.2 0 0 0 2.199 2.2H19.09a2.199 2.199 0 0 0 2.199-2.2V7.2a2.199 2.199 0 0 0-2.2-2.199H6.6a1.101 1.101 0 0 1 0-2.202h14.799V.801h-14.8a3.099 3.099 0 0 0-3.006 3.854v17.081ZM19.09 7H6.599c-.353 0-.692-.059-1.008-.168v14.905a.2.2 0 0 0 .2.201h13.3a.2.2 0 0 0 .2-.2V7.2a.201.201 0 0 0-.2-.2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconProfileChanges24;
