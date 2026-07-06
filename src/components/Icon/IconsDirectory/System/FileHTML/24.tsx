import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileHTML24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.365 8.974a.6.6 0 0 1 .36.297.65.65 0 0 1 .052.476l-2.4 8.75a.62.62 0 0 1-.285.374c-.14.08-.304.1-.457.055a.6.6 0 0 1-.36-.298.65.65 0 0 1-.052-.475l2.4-8.75a.62.62 0 0 1 .285-.375c.14-.08.304-.1.457-.054M8.998 10.833a.59.59 0 0 1 .419.183.64.64 0 0 1 .007.876L7.448 13.95l1.976 2.058a.64.64 0 0 1-.007.876.6.6 0 0 1-.419.183.6.6 0 0 1-.422-.175l-2.4-2.5A.63.63 0 0 1 6 13.95a.65.65 0 0 1 .176-.442l2.4-2.5a.6.6 0 0 1 .422-.175M15.002 10.833a.6.6 0 0 1 .422.175l2.4 2.5a.63.63 0 0 1 .176.442.65.65 0 0 1-.176.442l-2.4 2.5a.6.6 0 0 1-.422.175.6.6 0 0 1-.419-.183.64.64 0 0 1-.007-.876l1.976-2.058-1.976-2.058a.64.64 0 0 1 .007-.876.59.59 0 0 1 .419-.183"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12zM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileHTML24;
