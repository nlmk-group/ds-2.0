import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCyberSecurity24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.005 4.871c.16 1.648.677 5.76 2.083 9.453C6.548 18.157 8.742 21 11.995 21s5.448-2.843 6.907-6.676c1.406-3.693 1.924-7.805 2.083-9.453C19.468 4.285 15.707 3 11.995 3c-3.712 0-7.473 1.285-8.99 1.871Zm-.778-1.843C3.767 2.428 7.857 1 11.995 1c4.139 0 8.228 1.429 9.768 2.028a1.916 1.916 0 0 1 1.218 1.975c-.157 1.66-.69 6.04-2.21 10.032C19.288 18.931 16.642 23 11.995 23s-7.293-4.069-8.776-7.965c-1.52-3.992-2.053-8.372-2.21-10.032a1.916 1.916 0 0 1 1.218-1.975ZM6.977 11a1 1 0 0 1 1-1h1.009V8c0-1.663 1.358-3 3.01-3a3.008 3.008 0 0 1 3.009 3v1.05h-2V8c0-.546-.451-1-1.01-1-.558 0-1.01.454-1.01 1v2h5.03a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8.04a1 1 0 0 1-1-1v-5Zm2 1v3h6.037v-3H8.976Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCyberSecurity24;
