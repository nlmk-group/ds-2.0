import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAntiCorruptionActivities24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-.9-.146-1.767-.438-2.6A7.94 7.94 0 0 0 18.3 7.1L7.1 18.3c.7.55 1.467.97 2.3 1.262.833.292 1.7.438 2.6.438Zm-6.3-3.1L16.9 5.7a7.96 7.96 0 0 0-2.3-1.262A7.805 7.805 0 0 0 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 .9.146 1.767.438 2.6.291.833.712 1.6 1.262 2.3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAntiCorruptionActivities24;
