import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRCMSequentialOperation32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m23.778 3.004 6.222 6-6.222 6v-4.5H2v-3h21.778v-4.5ZM13.769 17.001l6.222 6-6.222 6v-4.5H2v-3h11.769v-4.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRCMSequentialOperation32;
