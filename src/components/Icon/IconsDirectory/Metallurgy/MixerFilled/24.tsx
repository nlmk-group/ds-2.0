import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMixerFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.25 8.349v2.581a1.75 1.75 0 1 0 1.5-.023V2.383h-1.5v.028a10.115 10.115 0 0 0-8.172 14.857 10.12 10.12 0 0 0 11.86 4.914 10.113 10.113 0 0 0 7.13-10.672 10.12 10.12 0 0 0-2.915-6.163l-1.06 1.06a8.62 8.62 0 0 1 .001 12.187l-2.05-2.05a5.717 5.717 0 0 0 0-8.087l-1.062 1.06a4.22 4.22 0 0 1-1.757 7.02 4.218 4.218 0 1 1-1.975-8.188Z"
      />
    </svg>
  );
};

export default IconMixerFilled24;
