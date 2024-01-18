import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWhatShotFireOutline32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0625 1C18.0625 1 19.08 4.72715 19.08 7.75106C19.08 10.6484 17.2238 12.9972 14.3912 12.9972C11.545 12.9972 9.4 10.6484 9.4 7.75106L9.44125 7.24473C6.66375 10.6203 5 14.9944 5 19.7482C5 25.9648 9.9225 31 16 31C22.0775 31 27 25.9648 27 19.7482C27 12.1674 23.4387 5.40225 18.0625 1ZM15.4087 18.5667C13.5387 18.9605 12.4249 20.1982 12.4249 21.9563C12.4249 23.841 13.9512 25.36 15.8487 25.36C18.6674 25.36 20.9499 23.0252 20.9499 20.142C20.9499 18.637 20.7437 17.1603 20.3174 15.7538C19.2312 17.2587 17.2924 18.1729 15.4087 18.5667ZM7.75005 19.7481C7.75005 24.4035 11.4488 28.1869 16 28.1869C20.5513 28.1869 24.25 24.4035 24.25 19.7481C24.25 16.1476 23.3425 12.6736 21.6513 9.57935C20.9225 13.2362 18.0488 15.81 14.3913 15.81C12.2463 15.81 10.3213 14.938 8.93255 13.5175C8.16255 15.4725 7.75005 17.5962 7.75005 19.7481Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWhatShotFireOutline32;
