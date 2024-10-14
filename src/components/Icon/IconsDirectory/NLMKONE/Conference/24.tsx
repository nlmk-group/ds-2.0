import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconConference24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v1.5l3.867-2.9a3 3 0 0 1 1.8-.6H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4ZM1 5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-7.333a1 1 0 0 0-.6.2L7.4 22.7c-.989.742-2.4.036-2.4-1.2V19H4a3 3 0 0 1-3-3V5Zm4 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v.734l3.486-2.092a1 1 0 0 1 1.515.858v6a1 1 0 0 1-1.515.858L14 12.266V13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8Zm7 2.5V9H7v3h5v-1.5Zm2.944 0L17 9.266v2.468L14.944 10.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconConference24;
