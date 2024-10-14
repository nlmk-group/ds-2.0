import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommittee24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14.064 7.25A2.996 2.996 0 0 0 12.084 2c-1.66 0-3 1.34-3 3 0 .9.39 1.7 1.02 2.25a4.48 4.48 0 0 0-1.186.623s1.166.627 1.309 1.527c.39-.253.857-.4 1.357-.4h1c.5 0 .966.147 1.357.4.143-.4.643-1.4 1.309-1.527a4.48 4.48 0 0 0-1.186-.623ZM12.084 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M7.064 8.25A2.996 2.996 0 0 0 5.084 3c-1.66 0-3 1.34-3 3 0 .9.39 1.7 1.02 2.25a4.493 4.493 0 0 0-3.02 4.25V14c0 1.5 2 1.5 2 0v-1.5a2.5 2.5 0 0 1 2.5-2.5h1c1.025 0 1.906.617 2.292 1.5H5.188a2 2 0 0 0-1.952 1.566l-1.111 5A2 2 0 0 0 4.077 20.5h1.007v2a1 1 0 1 0 2 0v-2h10v2a1 1 0 1 0 2 0v-2h1.007a2 2 0 0 0 1.952-2.434l-1.111-5A2 2 0 0 0 18.98 11.5h-2.688a2.502 2.502 0 0 1 2.292-1.5h1a2.5 2.5 0 0 1 2.5 2.5V14c0 1.5 2 1.5 2 0v-1.5c0-1.97-1.26-3.64-3.02-4.25A2.996 2.996 0 0 0 19.084 3c-1.66 0-3 1.34-3 3 0 .9.39 1.7 1.02 2.25a4.497 4.497 0 0 0-2.909 3.25H9.973a4.497 4.497 0 0 0-2.909-3.25ZM5.084 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm15 1c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm.007 12.5-1.111-5H5.188l-1.111 5h16.014Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCommittee24;
