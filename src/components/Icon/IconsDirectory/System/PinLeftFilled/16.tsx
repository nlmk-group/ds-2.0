import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPinLeftFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15 11.571V4.43a.71.71 0 0 0-.7-.715.71.71 0 0 0-.7.715v.714h-3.5C8.938 5.143 8 4.186 8 3H6.6v4.264H1.7L1 7.98l.7.714h4.9V13H8c0-1.186.938-2.143 2.1-2.143h3.5v.714a.71.71 0 0 0 .7.715.71.71 0 0 0 .7-.715Z"
      />
    </svg>
  );
};

export default IconPinLeftFilled16;
