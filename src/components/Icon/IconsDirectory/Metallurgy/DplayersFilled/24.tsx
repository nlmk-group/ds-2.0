import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDplayersFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.5 1.5a1 1 0 0 1 1 1v2.75l3 10.5H21a1.5 1.5 0 0 1 0 3h-1.5l-1.249 3.121a1 1 0 0 1-.928.629H6.677a1 1 0 0 1-.928-.629L4.5 18.75H3a1.5 1.5 0 0 1 0-3h1.5l3-10.5V2.5a1 1 0 0 1 1-1h7Zm-2 5.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-.875a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V7ZM9 12a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1Zm-.25 6.375a.5.5 0 0 1-.5-.5v-1.056a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 .5.5v1.056a.5.5 0 0 1-.5.5h-6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDplayersFilled24;
