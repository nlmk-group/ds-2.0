import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBorder24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 7h20v2H2V7Zm20 10H2v-2h20v2Z"
        clipRule="evenodd"
      />
      <mask
        id="icon_border24"
        width="12"
        height="10"
        x="6"
        y="7"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <path fill={htmlColor || 'currentColor'} d="M6 7h12v10H6V7Z" />
      </mask>
      <g mask="url(#icon_border24)">
        <path
          fill="#001729"
          d="m7.389 5.985 1.732 1-3.162 5.477-1.732-1 3.162-5.477Zm3.452.022 1.732 1L6.527 17.48l-1.732-1 6.046-10.473Zm3.474-.017 1.732 1-6.38 11.05-1.732-1 6.38-11.05Zm3.211.438 1.732 1L13.12 18.06l-1.732-1 6.138-10.632Zm.535 5.072 1.733 1-3.165 5.482-1.732-1L18.06 11.5Z"
        />
      </g>
    </svg>
  );
};

export default IconBorder24;
