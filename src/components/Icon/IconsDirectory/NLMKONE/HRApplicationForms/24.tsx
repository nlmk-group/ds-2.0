import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHRApplicationForms24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6 1h11.99c1.66 0 3 1.34 3 3v12.38L14.4 23H6c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3Zm8.99 16.97v1.61l2.6-2.61h-1.6c-.55 0-1 .45-1 1Zm1-3H19V4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h6.99v-3.03c0-1.66 1.34-3 3-3Zm-.74-6.72c0 .82-.32 1.57-.82 2.14 1.18.49 2.13 1.44 2.64 2.61h-2.35c-.55-.61-1.33-1-2.22-1h-1c-1.66 0-3 1.34-3 3H11v2H7.5c-.55 0-1-.45-1-1v-1c0-2.07 1.27-3.85 3.07-4.61a3.25 3.25 0 0 1-.82-2.14C8.75 6.46 10.21 5 12 5s3.25 1.46 3.25 3.25Zm-4.5 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHRApplicationForms24;
