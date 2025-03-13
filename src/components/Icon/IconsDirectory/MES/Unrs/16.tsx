import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnrs16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M1.5 1C1.22386 1 1 1.22386 1 1.5V3.26409C1 3.44809 1.05077 3.62853 1.14672 3.78554L2.35378 5.76073C2.4446 5.90935 2.60623 6 2.78042 6H5.21958C5.39377 6 5.5554 5.90935 5.64622 5.76073L6.85328 3.78554C6.94923 3.62853 7 3.44809 7 3.26409V1.5C7 1.22386 6.77614 1 6.5 1H1.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M7.81818 9.5H15V12.5H7.81818C4.88103 12.5 2.5 10.119 2.5 7.18182V7H3.5V7.18182C3.5 9.56669 5.43332 11.5 7.81818 11.5H9V10.5H7.81818C5.9856 10.5 4.5 9.0144 4.5 7.18182V7H5.5V7.18182C5.5 8.46212 6.53788 9.5 7.81818 9.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M11.5 9C12.0523 9 12.5 8.55228 12.5 8C12.5 7.44772 12.0523 7 11.5 7C10.9477 7 10.5 7.44772 10.5 8C10.5 8.55228 10.9477 9 11.5 9Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M10 14C10 14.5523 9.55228 15 9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M12.5 14C12.5 14.5523 12.0523 15 11.5 15C10.9477 15 10.5 14.5523 10.5 14C10.5 13.4477 10.9477 13 11.5 13C12.0523 13 12.5 13.4477 12.5 14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnrs16;
