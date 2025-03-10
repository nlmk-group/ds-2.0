import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarClock16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)">
        <path
          fill={htmlColor || 'currentColor'}
          d="M.5 15.125v-13.5h2.25v-1.5h1.5v1.5h6v-1.5h1.5v1.5H14v5.756a5.19 5.19 0 0 0-1.5-.45v-.806H2v7.5h4.725c.088.275.19.538.31.788.119.25.26.487.421.712H.5Zm11.25.75c-1.037 0-1.922-.366-2.653-1.097A3.618 3.618 0 0 1 8 12.125a3.61 3.61 0 0 1 1.097-2.653 3.616 3.616 0 0 1 2.653-1.097c1.037 0 1.921.366 2.653 1.097a3.604 3.604 0 0 1 1.097 2.653 3.628 3.628 0 0 1-1.097 2.654c-.73.732-1.614 1.097-2.653 1.096Zm1.256-1.969.525-.525-1.406-1.406v-2.1h-.75v2.4l1.631 1.631Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCalendarClock16;
