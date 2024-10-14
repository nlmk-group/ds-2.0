import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEfficiencyTeam24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)" fill={htmlColor || 'currentColor'}>
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M9.876 4.5a3.5 3.5 0 1 0-6.272 2.137 6.28 6.28 0 0 0-3.52 5.643V14a1 1 0 0 0 1 1h3.007a1 1 0 1 0 0-2H2.084v-.72a4.28 4.28 0 0 1 4-4.271v-.021A3.5 3.5 0 0 0 9.876 4.5ZM6.376 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        />
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M8.084 10a4 4 0 1 1 6.982 2.665c.357.169.697.366 1.018.59 0 0-1.018 1.732-1 1.745a5 5 0 0 0-8 4v2h-1a1 1 0 0 1-1-1v-1A7 7 0 0 1 9.1 12.665 3.985 3.985 0 0 1 8.084 10Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M20.564 6.637a6.285 6.285 0 0 1 3.472 4.863h-2.023a4.282 4.282 0 0 0-3.929-3.491v-.021a3.5 3.5 0 1 1 2.48-1.35ZM16.29 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        />
        <path d="M23.65 14.075a1 1 0 0 0-1-1h-4.53l.001 2h2.04l-3.168 3.067-1.191-1.153a1 1 0 0 0-1.359-.03l-5.359 4.748 1.326 1.497 4.666-4.134 1.221 1.182a1 1 0 0 0 1.392 0l3.96-3.834v2.02h2v-4.363Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.084 0h24v24h-24z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconEfficiencyTeam24;
