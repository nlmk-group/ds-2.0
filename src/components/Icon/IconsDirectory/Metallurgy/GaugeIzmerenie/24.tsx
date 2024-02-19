import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGaugeIzmerenie24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 13.03c.206 0 .404-.036.588-.101l.632.631 1.06-1.06-.631-.632a1.75 1.75 0 0 0-2.237-2.237l-2.38-2.38L7.97 8.31l2.38 2.381A1.75 1.75 0 0 0 12 13.03Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.75 1.5v1.964a7.807 7.807 0 0 1 3.787 1.408l1.146-1.147 1.061 1.061-1.069 1.069a7.85 7.85 0 0 1-4.925 13.238V22h-1.5v-2.907a7.85 7.85 0 0 1 0-15.63V1.5h1.5Zm5.6 9.778a6.35 6.35 0 1 1-12.7 0 6.35 6.35 0 0 1 12.7 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconGaugeIzmerenie24;
