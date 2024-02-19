import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGaugeIzmerenieFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.75 3.964V2.5h-1.5v1.464a7.85 7.85 0 0 0 0 15.629V22.5h1.5v-2.907a7.85 7.85 0 0 0 4.925-13.238l.763-.763-1.061-1.06-.84.84a7.807 7.807 0 0 0-3.787-1.408ZM12 13.53c.206 0 .404-.036.588-.101l.632.631L14.28 13l-.631-.632a1.75 1.75 0 0 0-2.237-2.237l-2.38-2.38L7.97 8.81l2.38 2.38A1.75 1.75 0 0 0 12 13.53Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconGaugeIzmerenieFilled24;
