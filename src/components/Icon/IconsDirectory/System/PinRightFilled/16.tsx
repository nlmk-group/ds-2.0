import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPinRightFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 4.429v7.142a.71.71 0 0 0 .7.715.71.71 0 0 0 .7-.715v-.714h3.5c1.162 0 2.1.957 2.1 2.143h1.4V8.736h4.9l.7-.715-.7-.714H9.4V3H8c0 1.186-.938 2.143-2.1 2.143H2.4v-.714a.71.71 0 0 0-.7-.715.71.71 0 0 0-.7.715Z"
      />
    </svg>
  );
};

export default IconPinRightFilled16;
