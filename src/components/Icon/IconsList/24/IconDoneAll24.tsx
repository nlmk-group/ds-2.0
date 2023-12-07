import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDoneAll24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2052 5.29492L11.6252 15.8749L7.44516 11.7049L6.03516 13.1149L11.6252 18.7049L23.6252 6.70492L22.2052 5.29492ZM17.9648 6.70492L16.5548 5.29492L10.2148 11.6349L11.6248 13.0449L17.9648 6.70492ZM5.965 18.7051L0.375 13.1151L1.795 11.7051L7.375 17.2951L5.965 18.7051Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDoneAll24;
