import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInputFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.182 4H3.818C2.818 4 2 4.851 2 5.891v5.664h9.09V8.718l3.637 3.782-3.636 3.782v-2.837H2v5.683C2 20.168 2.818 21 3.818 21h16.364c1 0 1.818-.832 1.818-1.872V5.89C22 4.841 21.182 4 20.182 4Z"
      />
    </svg>
  );
};

export default IconInputFilled24;
