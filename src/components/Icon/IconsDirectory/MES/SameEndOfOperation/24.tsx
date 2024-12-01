import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSameEndOfOperation24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M14.083 1.5 18.75 6l-4.667 4.5V7.125H3.006v-2.25h11.077V1.5Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.757 10.5v-9h2.25v9h-2.25Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M14.083 13.5 18.75 18l-4.667 4.5v-3.375H3.006v-2.25h11.077V13.5Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.757 22.5v-9h2.25v9h-2.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSameEndOfOperation24;
