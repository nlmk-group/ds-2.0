import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAdaptationOne24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17.084 11.033a1 1 0 0 1 0 1.732l-7 3.897a1 1 0 0 1-1.5-.866V8a1 1 0 0 1 1.5-.866l7 3.898Zm-6.5-1.3 4.25 2.166-4.25 2.165v-4.33Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1.084 12c0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11-11-4.93-11-11Zm2 0c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9-9 4.04-9 9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAdaptationOne24;
