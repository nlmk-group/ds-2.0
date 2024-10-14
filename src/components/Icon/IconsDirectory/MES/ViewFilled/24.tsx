import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconViewFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M22.7 22.7a1 1 0 0 1-1.414 0l-2.192-2.192a5 5 0 1 1 1.414-1.414l2.192 2.191a1 1 0 0 1 0 1.415Zm-4.243-8.485a3 3 0 1 0-4.242 4.243 3 3 0 0 0 4.242-4.243ZM13.387 10H6v2h4.848a6.859 6.859 0 0 0-1.094 2H6v2h3.381a6.84 6.84 0 0 0 1.108 4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.489A6.87 6.87 0 0 0 13.386 10ZM16 6H6v2h10V6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconViewFilled24;
