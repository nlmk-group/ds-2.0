import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTimetable24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5.2 23.196h13.596l.006.006c1.218 0 2.202-.99 2.202-2.202V8.232l-.294-.708-6.012-6.03-.708-.294H5.2a2.2 2.2 0 0 0-2.202 2.202v17.592c0 1.218.99 2.202 2.202 2.202Zm-.198-19.8a.2.2 0 0 1 .198-.198h7.782v3.828c0 1.218.99 2.202 2.202 2.202h3.81v11.766a.2.2 0 0 1-.198.198H5.2a.2.2 0 0 1-.198-.198V3.396Zm9.984 3.63V4.614l2.604 2.61h-2.406a.2.2 0 0 1-.198-.198Zm-4.093.703.006-.001h-.006ZM6.4 13.302a5.702 5.702 0 0 1 4.494-5.573v1.967a3.806 3.806 0 0 0-2.598 3.606 3.803 3.803 0 0 0 3.798 3.798 3.799 3.799 0 0 0 3.798-3.798c0-.774-.228-1.5-.63-2.1h2.136a5.697 5.697 0 0 1-5.298 7.8c-3.15 0-5.7-2.55-5.7-5.7Zm6.642-2.37h.006l-.006-.006v.006Zm-1.896 0h1.896v1.89h1.404v1.902h-2.352a.95.95 0 0 1-.948-.948v-2.844Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTimetable24;
