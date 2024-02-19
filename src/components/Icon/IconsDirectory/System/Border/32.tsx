import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBorder32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 9h28v2.8H2V9Zm28 14H2v-2.8h28V23Z"
        clipRule="evenodd"
      />
      <mask
        id="icon_border32"
        width="16"
        height="14"
        x="8"
        y="9"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <path fill={htmlColor || 'currentColor'} d="M8 9h16v14H8V9Z" />
      </mask>
      <g mask="url(#icon_border32)">
        <path
          fill="#001729"
          d="m9.852 7.58 2.309 1.4-4.216 7.667-2.31-1.4L9.852 7.58Zm4.603.03 2.31 1.4-8.062 14.662-2.31-1.4L14.455 7.61Zm4.632-.025 2.31 1.4-8.507 15.47-2.31-1.4 8.507-15.47Zm4.282.614 2.309 1.4-8.185 14.884-2.309-1.4L23.369 8.2Zm.713 7.101 2.31 1.4-4.22 7.675-2.31-1.4 4.22-7.675Z"
        />
      </g>
    </svg>
  );
};

export default IconBorder32;
