import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEdinayaBazaZnanij24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M11 19.613V18h2v1.613l6.316-2.106a1 1 0 0 0 .684-.949V4.962l-3.27 1.272a9.103 9.103 0 0 0-2.814-1.052l6.04-2.35A1.5 1.5 0 0 1 22 4.232v12.327a3 3 0 0 1-2.051 2.846l-7.475 2.492a1.5 1.5 0 0 1-.948 0L4.05 19.404A3 3 0 0 1 2 16.558V4.23a1.5 1.5 0 0 1 2.044-1.397l6.035 2.347a9.11 9.11 0 0 0-2.824 1.048L4 4.962v11.596a1 1 0 0 0 .684.95L11 19.612Zm-2.166-6.224c.9.621 1.933.944 3.166.944 1.209 0 2.233-.32 3.137-.944a5.498 5.498 0 0 0 1.632-1.716 5.669 5.669 0 0 0-1.64-1.72C14.225 9.323 13.204 9 12 9c-1.229 0-2.258.325-3.158.953-.7.489-1.234 1.06-1.624 1.72.39.67.922 1.237 1.616 1.716ZM5 11.667c.544-1.361 1.444-2.48 2.698-3.354C8.952 7.436 10.386 7 12 7c1.594 0 3.019.438 4.273 1.313 1.254.874 2.163 1.993 2.727 3.354-.564 1.38-1.473 2.503-2.727 3.368-1.254.866-2.679 1.298-4.273 1.298-1.614 0-3.048-.432-4.302-1.298C6.444 14.17 5.544 13.047 5 11.667Zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEdinayaBazaZnanij24;
