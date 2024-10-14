import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttach32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5.05 25.584c-5.362-5.36 0-10.9 0-10.9l9.104-9.105a1.285 1.285 0 0 1 1.817 1.817L6.866 16.5a5.139 5.139 0 1 0 7.268 7.267l11.81-11.81c1.254-1.254 1.028-3.06-.227-4.315-1.255-1.254-3.061-1.481-4.315-.227l-9.993 9.993a1.284 1.284 0 1 0 1.817 1.817l6.373-6.373a1.285 1.285 0 1 1 1.816 1.817l-6.372 6.373c-1.512 1.393-3.984 1.467-5.451 0-2.625-2.625 0-5.45 0-5.45l9.993-9.994s4.038-3.683 7.95.228c3.91 3.91.226 7.949.226 7.949l-11.81 11.81s-5.54 5.36-10.902 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAttach32;
