import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddPlusFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.857.5a1.5 1.5 0 0 0-1.5 1.5v10.857a.5.5 0 0 1-.5.5H2a1.5 1.5 0 0 0-1.5 1.5v2.286a1.5 1.5 0 0 0 1.5 1.5h10.857a.5.5 0 0 1 .5.5V30a1.5 1.5 0 0 0 1.5 1.5h2.286a1.5 1.5 0 0 0 1.5-1.5V19.143a.5.5 0 0 1 .5-.5H30a1.5 1.5 0 0 0 1.5-1.5v-2.286a1.5 1.5 0 0 0-1.5-1.5H19.143a.5.5 0 0 1-.5-.5V2a1.5 1.5 0 0 0-1.5-1.5h-2.286Z"
      />
    </svg>
  );
};

export default IconAddPlusFilled32;
