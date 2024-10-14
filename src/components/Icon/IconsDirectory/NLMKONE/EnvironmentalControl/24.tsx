import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnvironmentalControl24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5 22v-2h6v-4H9c-1.383 0-2.562-.488-3.537-1.463C4.488 13.562 4 12.383 4 11c0-1 .275-1.921.825-2.763A4.758 4.758 0 0 1 7.05 6.4a4.855 4.855 0 0 1 1.638-3.138A4.811 4.811 0 0 1 12 2c1.267 0 2.37.42 3.312 1.262A4.855 4.855 0 0 1 16.95 6.4a4.759 4.759 0 0 1 2.225 1.837A4.95 4.95 0 0 1 20 11c0 1.383-.487 2.562-1.462 3.537C17.563 15.512 16.383 16 15 16h-2v4h6v2H5Zm4-8h6c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 18 11c0-.6-.17-1.15-.512-1.65a3.021 3.021 0 0 0-1.338-1.1L15.1 7.8l-.15-1.15a3.02 3.02 0 0 0-.987-1.888A2.825 2.825 0 0 0 12 4c-.75 0-1.404.254-1.962.762A3.018 3.018 0 0 0 9.05 6.65L8.9 7.8l-1.05.45c-.55.233-.996.6-1.337 1.1A2.86 2.86 0 0 0 6 11c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 9 14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEnvironmentalControl24;
