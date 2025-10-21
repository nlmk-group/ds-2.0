import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPinRightFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1.5 8.5v15c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5V22H12c2.49 0 4.5 2.01 4.5 4.5h3v-8.955H30l1.5-1.5-1.5-1.5H19.5V5.5h-3c0 2.49-2.01 4.5-4.5 4.5H4.5V8.5C4.5 7.675 3.825 7 3 7s-1.5.675-1.5 1.5Z"
      />
    </svg>
  );
};

export default IconPinRightFilled32;
