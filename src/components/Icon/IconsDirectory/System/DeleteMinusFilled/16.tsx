import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDeleteMinusFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      data-testid="IconDeleteMinusFilled16"
    >
      <path d="M14.5 6.5h-13v3h13v-3Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconDeleteMinusFilled16;
