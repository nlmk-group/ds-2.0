import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddPlusFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.571 1.5a1.5 1.5 0 0 0-1.5 1.5v6.571a.5.5 0 0 1-.5.5H3a1.5 1.5 0 0 0-1.5 1.5v.858a1.5 1.5 0 0 0 1.5 1.5h6.571a.5.5 0 0 1 .5.5V21a1.5 1.5 0 0 0 1.5 1.5h.858a1.5 1.5 0 0 0 1.5-1.5v-6.571a.5.5 0 0 1 .5-.5H21a1.5 1.5 0 0 0 1.5-1.5v-.858a1.5 1.5 0 0 0-1.5-1.5h-6.571a.5.5 0 0 1-.5-.5V3a1.5 1.5 0 0 0-1.5-1.5h-.858Z"
      />
    </svg>
  );
};

export default IconAddPlusFilled24;
