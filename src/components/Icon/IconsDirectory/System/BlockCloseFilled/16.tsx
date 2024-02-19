import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBlockCloseFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 .5C3.874.5.5 3.874.5 8c0 4.126 3.374 7.5 7.5 7.5 4.126 0 7.5-3.374 7.5-7.5C15.5 3.874 12.126.5 8 .5ZM2.9 8c0-2.804 2.296-5.1 5.1-5.1.954 0 1.863.264 2.656.757l-6.999 6.999A5.003 5.003 0 0 1 2.9 8ZM8 13.1a5.003 5.003 0 0 1-2.656-.757l6.999-6.999c.493.793.757 1.702.757 2.656 0 2.804-2.296 5.1-5.1 5.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBlockCloseFilled16;
